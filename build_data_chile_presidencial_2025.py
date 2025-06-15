import pandas as pd
import os
import json
from datetime import datetime

# Define file paths – adjust as needed.
NEW_STRUCTURE_FILE = r"C:\Users\josem\OneDrive\Proyectos\Votometro\Chile\Elecciones parlamentarias 2025\preguntas_chile_diputados.xlsx"
OUTPUT_DIR = "public/"  # output directory

def clean_value(val):
    # Return None if the value is NaN
    if pd.isna(val):
        return None
    return val

# Helper to count candidates based on attendance records.
def party_rows_count(attendance_list):
    return len(attendance_list) if attendance_list else 0

# Adapted combined votes generator for Chile – excluding age and sentencia penal.
def generate_from_new_structure():
    # Read the entire sheet
    raw = pd.read_excel(NEW_STRUCTURE_FILE, sheet_name="presidencial", dtype=str, header=None)
    raw.columns = raw.iloc[0]                  # set column names from the first (raw) row
    df = raw.drop(index=0).reset_index(drop=True)

    # The header row: first column is "Nombre", rest are candidate names
    header = list(df.columns)
    raw_candidate_names = [c for c in header if c != "Nombre"]
    candidate_names = [
        c.strip()
        for c in raw_candidate_names
        # check rows 1..end (not counting the “Partido” row) for any non‐null
        if df[c].iloc[1:].notna().any()
    ]


    # Row 1 (index 1) contains parties, with first cell "Partido"
    party_row = df.iloc[0]
    # Build a dict: { candidate_name: party_name }
    candidate_parties = {
        cand: party_row[cand].strip() if not pd.isna(party_row[cand]) else None
        for cand in candidate_names
    }

    # Initialize a structure to hold everything
    combined = {"candidates": {}}
    for cand in candidate_names:
        combined["candidates"][cand] = {
            "party": candidate_parties[cand],
            "votes": {}  # will fill per question
        }

    # Starting from row index 2, process rows in groups of 3
    # We assume total rows = 2 + 3 * (number of questions).
    n_rows = df.shape[0]
    row_idx = 1
    while row_idx + 2 < n_rows:
        # Row 2k: vote row, Row 2k+1: comment row, Row 2k+2: source row
        vote_row = df.iloc[row_idx]
        comment_row = df.iloc[row_idx + 1]
        source_row = df.iloc[row_idx + 2]

        # Extract question ID and question text from the first column of vote_row
        full_label = str(vote_row["Nombre"]).strip()
        if ":" in full_label:
            qid, qtext = full_label.split(":", 1)
            qid = qid.strip()
            qtext = qtext.strip()
        else:
            # if there is no colon, use the entire label as ID, with text = label
            qid = full_label
            qtext = full_label

        # For each candidate, pick the vote, comment, and source
        for cand in candidate_names:
            raw_vote = vote_row[cand]
            # Try to convert to float if possible, else fallback to None
            try:
                vote_value = str(raw_vote)
            except Exception:
                vote_value = None

            comment_value = comment_row[cand].strip() if not pd.isna(comment_row[cand]) else None
            source_value = source_row[cand].strip() if not pd.isna(source_row[cand]) else None

            combined["candidates"][cand]["votes"][qid] = {
                "question": qtext,
                "vote": vote_value,
                "comment": comment_value,
                "source": source_value
            }

        row_idx += 3

    # Write out JSON
    out_path = os.path.join(OUTPUT_DIR, "combined_votes_chile_pres_2025.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(combined, f, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    generate_from_new_structure()
