import pandas as pd
import os
import json
import math
from datetime import datetime

# Define file paths – adjust as needed.
EXCEL_FILE = r"C:\Users\josem\OneDrive\Proyectos\Votometro\Peru\Votaciones parlamentarias 2026\preguntas_20250311.xlsx"
COMPARISON_CSV = r"C:\Users\josem\OneDrive\Proyectos\Votometro\Peru\Votaciones parlamentarias 2026\votes.csv"
# Output files (placed into the frontend public folder)
OUTPUT_DIR = "public/"

def clean_value(val):
    if pd.isna(val):
        return None
    return val

def format_date(date_str):
    try:
        # Parse the date string assuming it is in "yyyymmddhhmm" format
        dt = datetime.strptime(date_str, "%Y%m%d%H%M")
        months = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
                  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        return f"{dt.day}. de {months[dt.month - 1]} de {dt.year}"
    except Exception:
        return date_str  # fallback if parsing fails

def map_csv_answer_numeric(vote):
    if isinstance(vote, str):
        vote = vote.strip().lower()
        if vote == "si":
            return 1
        elif vote == "no":
            return 0
        elif vote == "abst" or vote == "sinres":
            return 0.5
    return None

def map_vote_value(vote):
    if isinstance(vote, str):
        vote = vote.strip().lower()
        if vote == "no":
            return "En contra"
        elif vote == "si":
            return "A favor"
        elif vote in ["abst","sinres"]:
            return "Abstención/Sin respuesta"
        elif vote in ["lo", "le", "lp", "com", "cei", "jp", "ban", "sus", "f"]:
            return "No presente"
    return "-"

def generate_combined_questions_json():
    if not os.path.exists(EXCEL_FILE):
        return

    df = pd.read_excel(EXCEL_FILE).head(11)

    # ─── INSERT THIS BLOCK ───
    # Build a mapping from each PDF filename to its date (extracted from the CSV column names)
    votes_header = pd.read_csv(COMPARISON_CSV, nrows=0).columns
    pdf_date_map = {}
    for pdf in df["Filename"].astype(str).str.strip():
        matches = [c for c in votes_header if c.startswith(f"{pdf}_")]
        if matches:
            date_raw = matches[0].split("_")[-1]
            pdf_date_map[pdf] = format_date(date_raw)  # <-- formatted date
        else:
            pdf_date_map[pdf] = "N/A"
    # ──────────────────────────

    combined_questions = []
    for _, row in df.iterrows():
        pdf_name = str(row["Filename"]).strip()
        combined_questions.append({
            "id": pdf_name,
            "question": row["Question"],
            "polarity": clean_value(row.get("Polarity")),
            "options": ["Estoy de acuerdo", "Neutral", "No estoy de acuerdo"],
            "source": clean_value(row.get("Sources", "N/A")),
            "law": clean_value(row.get("Law", "N/A")),
            "pdf_link": f"src/assets/sesiones_parlamentarias_2021-2025_pdfs/{pdf_name}.pdf",
            # ─── MODIFY THIS LINE ───
            "date": pdf_date_map.get(pdf_name, "N/A"),
            # ───────────────────────
        })
    with open(OUTPUT_DIR + "combined_questions_peru_2026.json", "w", encoding="utf-8") as f:
        json.dump(combined_questions, f, ensure_ascii=False, indent=2)

# Helper function to count candidates (rows) based on ages list.
def party_rows_count(ages):
    return len(ages) if ages else 0


# New combined votes generator – merges processed votes and vote details
def generate_combined_votes_json():
    if not os.path.exists(EXCEL_FILE) or not os.path.exists(COMPARISON_CSV):
        return
    df_excel = pd.read_excel(EXCEL_FILE).head(11)
    # Process CSV votes (similar to your generate_processed_votes_json)
    df_votes = pd.read_csv(COMPARISON_CSV)
    processed_candidates = {}
    parties_processed = {}
    exclude_cols = {"Name Comercio", "Party", "Name in pdf", "Age (2024)", "Attendance", "Sentencia penal"}
    for _, row in df_votes.iterrows():
        candidate_name = str(row["Name Comercio"]).strip()
        candidate_info = {
            "name": candidate_name,
            "party": str(row["Party"]).strip(),
            "age": None if pd.isna(row.get("Age (2024)")) else int(row["Age (2024)"]),
            "attendance": None if pd.isna(row.get("Attendance")) else str(row["Attendance"]).replace("X", "/"),
            "sentencia_penal": clean_value(row.get("Sentencia penal")),
            "votes": {}
        }
        # ─── NEW: iterate over each PDF name (q.id) rather than all CSV columns ───
        for _, q_row in df_excel.iterrows():
            pdf_name = str(q_row["Filename"]).strip()   # e.g. "S1", "S2", etc.

            # find exactly the CSV column that begins with "S1_"
            matching_cols = [c for c in df_votes.columns if isinstance(c, str) and c.startswith(f"{pdf_name}_")]
            if matching_cols:
                raw = row[matching_cols[0]]
                candidate_info["votes"][pdf_name] = map_csv_answer_numeric(raw)
            else:
                # no vote recorded → treat as None
                candidate_info["votes"][pdf_name] = None
        # ────────────────────────────────────────────────────────────────────────────

        processed_candidates[candidate_name] = candidate_info

        party = candidate_info["party"]
        if party not in parties_processed:
            parties_processed[party] = {"ages": [], "attendance": [], "sentencia_penal": {"Sí": 0, "No": 0}}
        if candidate_info["age"] is not None:
            parties_processed[party]["ages"].append(candidate_info["age"])
        if candidate_info["attendance"]:
            try:
                present, total = map(int, candidate_info["attendance"].split("/"))
                parties_processed[party]["attendance"].append((present, total))
            except Exception:
                pass
        if candidate_info["sentencia_penal"] == "Sí":
            parties_processed[party]["sentencia_penal"]["Sí"] += 1
        elif candidate_info["sentencia_penal"] == "No":
            parties_processed[party]["sentencia_penal"]["No"] += 1

    aggregated_parties = {}
    for party, data in parties_processed.items():
        avg_age = round(sum(data["ages"]) / len(data["ages"]), 0) if data["ages"] else None
        total_present, total_sessions = 0, 0
        for present, total in data["attendance"]:
            total_present += present
            total_sessions += total
        avg_attendance = round((total_present / total_sessions) * 100, 0) if total_sessions > 0 else None
        aggregated_parties[party] = {
            "average_age": avg_age,
            "average_attendance_percentage": avg_attendance,
            "sentencia_penal_counts": data["sentencia_penal"],
            "total_congresistas": len(data["ages"])
        }
    candidate_details = {}
    for _, row in df_votes.iterrows():
        candidate_name = str(row["Name Comercio"]).strip()
        attendance_val = str(row["Attendance"]).replace("X", "/") if not pd.isna(row.get("Attendance")) else "N/A"
        details = []
        for _, q_row in df_excel.iterrows():
            pdf_name = str(q_row["Filename"]).strip()
            vote_value = "N/A"
            date_value = "N/A"

            # ------------------ Updated column‐scanning logic ------------------
            for col in row.index:
                col_str = str(col).strip()
                if col_str.startswith(f"{pdf_name}_"):
                    # split on all underscores and take the last element
                    parts = col_str.split("_")
                    date_str = parts[-1]  # último elemento de la cabecera
                    date_value = format_date(date_str)
                    vote_value = map_vote_value(row[col])
                    break
            # --------------------------------------------------------------------

            details.append({
                "id": pdf_name,
                "question": q_row["Question"],
                "date": date_value,
                "vote": vote_value,
                "source": clean_value(q_row.get("Source", "N/A")),
                "law": clean_value(q_row.get("Law", "N/A")),
                "pdf_link": f"src/assets/sesiones_parlamentarias_2021-2025_pdfs/{pdf_name}.pdf"
            })

        candidate_details[candidate_name] = {
            "candidate_meta": {
                "age": int(row["Age (2024)"]) if not pd.isna(row["Age (2024)"]) else None,
                "sentencia_penal": clean_value(row.get("Sentencia penal")),
                "party": clean_value(row.get("Party")),
                "attendance": attendance_val
            },
            "details": details
        }
    
    # Process aggregated party vote details and meta (from generate_vote_details_json)
    party_vote_details = {}
    party_meta = {}
    for party in df_votes["Party"].dropna().unique():
        party_str = str(party).strip()
        party_rows = df_votes[df_votes["Party"].str.strip() == party_str]
        details = []
        for _, q_row in df_excel.iterrows():
            pdf_name = str(q_row["Filename"]).strip()
            vote_value = "N/A"
            date_value = "N/A"
            for col in party_rows.columns:
                if col in ["Name Comercio", "Party", "Name in pdf"]:
                    continue
                # match any column that begins with “pdf_name_”
                if col.startswith(f"{pdf_name}_"):
                    csv_date = col.rsplit("_", 1)[-1]
                    votes = party_rows[col].dropna().tolist()
                    vote_counts = {
                        "A favor": 0,
                        "En contra": 0,
                        "Abstención/Sin respuesta": 0,
                        "No presente": 0
                    }
                    for vote in votes:
                        mapped = map_vote_value(vote)
                        if mapped in vote_counts:
                            vote_counts[mapped] += 1
                    vote_value = max(vote_counts.items(), key=lambda x: x[1])[0] if any(vote_counts.values()) else "N/A"
                    date_value = format_date(csv_date)
                    break

            details.append({
                "id": pdf_name,
                "question": q_row["Question"],
                "date": date_value,
                "vote": vote_value,
                "vote_counts": vote_counts,          # ← add this line
                "source": clean_value(q_row.get("Sources", "N/A")),
                "law": clean_value(q_row.get("Law", "N/A")),
                "pdf_link": f"…/{pdf_name}.pdf"
            })
        party_vote_details[party_str] = details

        # Compute party meta details
        if not party_rows.empty:
            avg_age = party_rows["Age (2024)"].dropna().astype(int).mean()
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
            sentencia_counts = party_rows["Sentencia penal"].value_counts().to_dict()
            party_meta[party_str] = {
                "average_age": round(avg_age, 0) if pd.notna(avg_age) else None,
                "average_attendance_percentage": avg_attendance,
                "sentencia_penal": {
                    "yes": sentencia_counts.get("Sí", 0),
                    "no": sentencia_counts.get("No", 0),
                    "total": party_rows.shape[0]
                }
            }
        else:
            party_meta[party_str] = {}

    combined_output = {
        "candidates": {
            "processed": processed_candidates,  # for similarity calculations
            "details": candidate_details         # for detailed view
        },
        "parties": {
            "processed": aggregated_parties,
            "details": party_vote_details,
            "meta": party_meta
        }
    }
    with open(OUTPUT_DIR + "combined_votes_peru_2026.json", "w", encoding="utf-8") as f:
        json.dump(combined_output, f, ensure_ascii=False, indent=2)

# add this snippet to remove the original files if they exist:
if __name__ == "__main__":
    generate_combined_questions_json()
    generate_combined_votes_json()