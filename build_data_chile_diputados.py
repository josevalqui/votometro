import pandas as pd
import os
import json
from datetime import datetime

# Define file paths – adjust as needed.
EXCEL_FILE = r"C:\Users\josem\OneDrive\Proyectos\Wahl O Mat Peru\Chile\Elecciones parlamentarias 2025\preguntas_chile_diputados.xlsx"  # Excel with preguntas
COMPARISON_CSV = r"C:\Users\josem\OneDrive\Proyectos\Wahl O Mat Peru\Chile\Elecciones parlamentarias 2025\Candidatos_20250326.csv"  # CSV with votes
OUTPUT_DIR = "public/"  # output directory

def clean_value(val):
    # Return None if the value is NaN
    if pd.isna(val):
        return None
    return val

# For Chile, the preguntas file already provides a date in dd.mm.yyyy format.
# This function optionally reformats it.
def format_date(date_str):
    try:
        dt = datetime.strptime(date_str, "%d.%m.%Y")
        months = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
                  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        return f"{dt.day}. de {months[dt.month - 1]} de {dt.year}"
    except Exception:
        return date_str  # fallback if parsing fails

def map_csv_answer_numeric(vote):
    # Map vote strings to numeric values.
    if isinstance(vote, str):
        vote = vote.strip().lower()
        if vote == "a favor":
            return 1
        elif vote == "en contra":
            return 0
        elif vote in ["abstención","pareo"]:
            return 0.5
    return None

# Adapted combined questions generator for Chile.
def generate_combined_questions_json():
    if not os.path.exists(EXCEL_FILE):
        return
    df = pd.read_excel(EXCEL_FILE).head(6)
    combined_questions = []
    for _, row in df.iterrows():
        pdf_name = str(row["Filename"]).strip()
        combined_questions.append({
            "id": pdf_name,
            "question": row["Question"],
            "polarity": clean_value(row.get("Polarity")),
            "options": ["Estoy de acuerdo", "Neutral", "No estoy de acuerdo"],
            "source": clean_value(row.get("Source", "N/A")),
            "law": clean_value(row.get("Law", "N/A")),
            "pdf_link": f"src/assets/sesiones_chile_pdfs/{pdf_name}.pdf",
            "date": clean_value(row.get("Date", "N/A"))
        })
    with open(os.path.join(OUTPUT_DIR, "combined_questions_chile_2025.json"), "w", encoding="utf-8") as f:
        json.dump(combined_questions, f, ensure_ascii=False, indent=2)

# Helper to count candidates based on attendance records.
def party_rows_count(attendance_list):
    return len(attendance_list) if attendance_list else 0

# Adapted combined votes generator for Chile – excluding age and sentencia penal.
def generate_combined_votes_json():
    if not os.path.exists(EXCEL_FILE) or not os.path.exists(COMPARISON_CSV):
        return
    # Process CSV votes
    df_votes = pd.read_csv(COMPARISON_CSV)
    processed_candidates = {}
    parties_processed = {}
    # Exclude columns not related to votes.
    exclude_cols = {"Nombre en votaciones",	"Nombre completo",	"Partido",	"Periodos",	"First in office",	"Last in office"}
    for _, row in df_votes.iterrows():
        candidate_name = str(row["Nombre completo"]).strip()
        # Compute attendance from vote columns (excluding "No activo")
        active_votes = 0
        present_votes = 0
        candidate_votes = {}
        for col in df_votes.columns:
            if col in exclude_cols:
                continue
            vote_val = row[col]
            if pd.isna(vote_val):
                continue
            if vote_val == "No activo":
                # Skip votes where the candidate was not active.
                continue
            active_votes += 1
            # Count as present if the vote is anything except "Ausente"
            if vote_val != "Ausente":
                present_votes += 1
            candidate_votes[col] = map_csv_answer_numeric(vote_val)
        attendance_str = f"{present_votes}/{active_votes}" if active_votes > 0 else "N/A"
        
        candidate_info = {
            "name": candidate_name,
            "party": str(row["Partido"]).strip(),
            "attendance": attendance_str,
            "votes": candidate_votes
        }
        processed_candidates[candidate_name] = candidate_info

        party = candidate_info["party"]
        if party not in parties_processed:
            parties_processed[party] = {"attendance": []}
        if attendance_str != "N/A":
            try:
                present, total = map(int, attendance_str.split("/"))
                parties_processed[party]["attendance"].append((present, total))
            except Exception:
                pass

    aggregated_parties = {}
    for party, data in parties_processed.items():
        total_present, total_sessions = 0, 0
        for present, total in data["attendance"]:
            total_present += present
            total_sessions += total
        avg_attendance = round((total_present / total_sessions) * 100, 0) if total_sessions > 0 else None
        aggregated_parties[party] = {
            "average_attendance_percentage": avg_attendance,
            "total_congresistas": party_rows_count(data["attendance"])
        }

    # Process vote details from Excel.
    df_excel = pd.read_excel(EXCEL_FILE).head(6)
    candidate_details = {}
    for _, row in df_votes.iterrows():
        candidate_name = str(row["Nombre completo"]).strip()
        attendance_val = processed_candidates.get(candidate_name, {}).get("attendance", "N/A")
        details = []
        for _, q_row in df_excel.iterrows():
            pdf_name = str(q_row["Filename"]).strip()
            vote_value = "N/A"
            date_value = "N/A"
            for col in row.index:
                if col in exclude_cols:
                    continue
                if col == pdf_name:
                    vote_value = row[col] if not pd.isna(row[col]) else "N/A"
                    date_value = format_date(str(q_row["Date"]))  # read directly from Excel "Date" column
                    break
            details.append({
                "id": pdf_name,
                "question": q_row["Question"],
                "date": date_value,
                "vote": vote_value,
                "source": clean_value(q_row.get("Source", "N/A")),
                "law": clean_value(q_row.get("Law", "N/A")),
                "pdf_link": f"src/assets/sesiones_chile_pdfs/{pdf_name}.pdf"
            })
        candidate_details[candidate_name] = {
            "candidate_meta": {
                "party": clean_value(row.get("Partido")),
                "attendance": attendance_val
            },
            "details": details
        }
    
    party_vote_details = {}
    party_meta = {}
    for party in df_votes["Partido"].dropna().unique():
        party_str = str(party).strip()
        party_rows = df_votes[df_votes["Partido"].str.strip() == party_str]
        details = []
        for _, q_row in df_excel.iterrows():
            pdf_name = str(q_row["Filename"]).strip()
            vote_value = "N/A"
            date_value = "N/A"
            for col in party_rows.columns:
                if col in exclude_cols:
                    continue
                csv_pdf_id = col
                csv_date = format_date(str(q_row["Date"]))
                if csv_pdf_id == pdf_name:
                    votes = party_rows[col].dropna().tolist()
                    vote_counts = {
                        "A favor": 0,
                        "En contra": 0,
                        "Abstención/Sin respuesta": 0,
                        "No presente": 0
                    }
                    for vote in votes:
                        if vote in vote_counts:
                            vote_counts[vote] += 1
                    vote_value = max(vote_counts.items(), key=lambda x: x[1])[0] if any(vote_counts.values()) else "N/A"
                    date_value = format_date(csv_date)
                    break
            details.append({
                "id": pdf_name,
                "question": q_row["Question"],
                "date": date_value,
                "vote": vote_value,
                "source": clean_value(q_row.get("Source", "N/A")),
                "law": clean_value(q_row.get("Law", "N/A")),
                "pdf_link": f"src/assets/sesiones_chile_pdfs/{pdf_name}.pdf"
            })
        party_vote_details[party_str] = details

        if not party_rows.empty:
            total_present = 0
            total_sessions = 0
            for _, r in party_rows.iterrows():
                att = r.get("Attendance")
                if pd.isna(att):
                    continue
                att_str = str(att).replace("X", "/")
                try:
                    present, sessions = map(int, att_str.split("/"))
                except:
                    present = sessions = 0
                total_present += present
                total_sessions += sessions
            avg_attendance = round((total_present / total_sessions) * 100, 0) if total_sessions > 0 else None
            party_meta[party_str] = {
                "average_attendance_percentage": avg_attendance,
                "total_congresistas": party_rows.shape[0]
            }
        else:
            party_meta[party_str] = {}

    combined_output = {
        "candidates": {
            "processed": processed_candidates,
            "details": candidate_details
        },
        "parties": {
            "processed": aggregated_parties,
            "details": party_vote_details,
            "meta": party_meta
        }
    }
    with open(os.path.join(OUTPUT_DIR, "combined_votes_chile_2025.json"), "w", encoding="utf-8") as f:
        json.dump(combined_output, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    generate_combined_questions_json()
    generate_combined_votes_json()
