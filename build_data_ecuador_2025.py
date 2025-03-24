import pandas as pd
import os
import json
import math
from datetime import datetime

# Define file paths – adjust as needed.
EXCEL_FILE = r"C:\Users\josem\OneDrive\Proyectos\Wahl O Mat Peru\Ecuador\preguntas__ecuador_20250319.xlsx"
COMPARISON_CSV = r"C:\Users\josem\OneDrive\Proyectos\Wahl O Mat Peru\Ecuador\votos_20250320.csv"
# Output files (placed into the frontend public folder)
OUTPUT_DIR = r"C:\Users\josem\OneDrive\Proyectos\Wahl O Mat Peru\App client side_20250307\votometro\frontend\public\\"
OUTPUT_QUESTIONS = OUTPUT_DIR + "questions_ecuador_2025.json"
OUTPUT_PROCESSED_VOTES = OUTPUT_DIR + "processed_votes_ecuador_2025.json"
OUTPUT_VOTE_DETAILS = OUTPUT_DIR + "vote_details_ecuador_2025.json"
OUTPUT_QUESTION_DETAILS = OUTPUT_DIR + "question_details_ecuador_2025.json"

def clean_value(val):
    if pd.isna(val):
        return None
    return val

def map_csv_answer_numeric(vote):
    if isinstance(vote, str):
        vote = vote.strip().lower()
        if vote == "yes":
            return 1
        elif vote == "no":
            return 0
        elif vote == "neutral":
            return 0.5
    return None

def map_vote_value(vote):
    if isinstance(vote, str):
        vote = vote.strip().lower()
        if vote == "yes":
            return "A favor"
        elif vote == "no":
            return "En contra"
        elif vote == "neutral":
            return "Sin opinión"
    return "-"

# New combined questions generator – replace generate_questions_json and generate_question_details_json
def generate_combined_questions_json():
    if not os.path.exists(EXCEL_FILE):
        return
    df = pd.read_excel(EXCEL_FILE).head(9)
    combined_questions = []
    for _, row in df.iterrows():
        combined_questions.append({
            "id": row["Topic"],
            "question": row["Question"],
            "polarity": clean_value(row.get("Polarity")),
            "options": ["Estoy de acuerdo", "Neutral", "No estoy de acuerdo"],
        })
    with open(OUTPUT_DIR + "combined_questions_ecuador_2025.json", "w", encoding="utf-8") as f:
        json.dump(combined_questions, f, ensure_ascii=False, indent=2)

# 2. Generate processed_votes.json (for computing similarity)
def generate_processed_votes_json():
    if not os.path.exists(COMPARISON_CSV):
        return
    df = pd.read_csv(COMPARISON_CSV)
    candidates = []
    exclude_cols = {"Name","Party","Age"}
    
    for _, row in df.iterrows():
        candidate = {}
        candidate["name"] = str(row["Name"]).strip()
        candidate["party"] = str(row["Party"]).strip()
        candidate["age"] = None if pd.isna(row.get("Age")) else int(row["Age"])
        
        votes = {}
        for col in df.columns:
            if col not in exclude_cols:
                votes[col] = map_csv_answer_numeric(row[col])
        candidate["votes"] = votes
        candidates.append(candidate)

# 3. Generate vote_details.json (candidate-specific vote details and aggregated party vote details)
def generate_vote_details_json():
    if not os.path.exists(EXCEL_FILE) or not os.path.exists(COMPARISON_CSV):
        return
    df_excel = pd.read_excel(EXCEL_FILE).head(9)
    df_votes = pd.read_csv(COMPARISON_CSV)
    candidate_details = {}
    for _, row in df_votes.iterrows():
        candidate_name = str(row["Name"])
        candidate_meta = {
            "age": int(row["Age"]),
            "party": clean_value(row.get("Party")),
        }
        details = []
        for _, q_row in df_excel.iterrows():
            topic = str(q_row["Topic"]).strip()
            question_text = q_row["Question"]
            vote_value = "N/B"
            for col in row.index:
                if col in ["Name", "Party", "Age"]:
                    continue
                vote_value = map_vote_value(row[col])
                break

            source_key = f"Source [{candidate_name}]"
            details.append({
                "id": id,
                "question": q_row["Question"],
                "vote": vote_value,
                "source": clean_value(q_row.get(source_key, "N/A")),
            })
        candidate_details[candidate_name] = {"candidate_meta": candidate_meta, "details": details}
    
    output = {
        "candidates": candidate_details,
    }
    with open(OUTPUT_VOTE_DETAILS, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

# New combined votes generator – merges processed votes and vote details
def generate_combined_votes_json():
    if not os.path.exists(EXCEL_FILE) or not os.path.exists(COMPARISON_CSV):
        return
    # Process CSV votes (similar to your generate_processed_votes_json)
    df_votes = pd.read_csv(COMPARISON_CSV)
    processed_candidates = {}
    parties_processed = {}
    exclude_cols = {"Name", "Party", "Age"}
    for _, row in df_votes.iterrows():
        candidate_name = str(row["Name"])
        candidate_info = {
            "name": candidate_name,
            "party": str(row["Party"]),
            "age": str(row["Age"]),
            "votes": {}
        }
        for col in df_votes.columns:
            if col not in exclude_cols:
                candidate_info["votes"][col] = map_csv_answer_numeric(row[col])
        processed_candidates[candidate_name] = candidate_info

    # Process vote details from Excel
    df_excel = pd.read_excel(EXCEL_FILE).head(9)
    candidate_details = {}

    for _, vote_row in df_votes.iterrows():
        candidate_name = str(vote_row["Name"])
        details = []

        for _, q_row in df_excel.iterrows():
            topic_id = str(q_row["Topic"]).strip()
            
            # 1) Map the vote from CSV row using the topic_id
            #    If topic_id doesn't exist in vote_row, fallback to "N/A"
            if topic_id in vote_row:
                vote_value = map_vote_value(vote_row[topic_id])
            else:
                vote_value = "N/A"

            # 2) Map the source from a column named "Source [CandidateName]"
            #    If it doesn't exist, fallback to "N/A"
            source_key = f"Source {candidate_name}"
            source_val = clean_value(q_row.get(source_key, "N/A"))

            # 3) Append one detail entry per question
            details.append({
                "id": topic_id,
                "question": q_row["Question"],
                "vote": vote_value,
                "source": source_val
            })

        candidate_details[candidate_name] = {
            "candidate_meta": {
                "age": int(vote_row["Age"]),
                "party": clean_value(vote_row.get("Party"))
            },
            "details": details
        }

    combined_output = {
        "candidates": {
            "processed": processed_candidates,  # for similarity calculations
            "details": candidate_details        # for detailed view
        },
    }

    with open(OUTPUT_DIR + "combined_votes_ecuador_2025.json", "w", encoding="utf-8") as f:
        json.dump(combined_output, f, ensure_ascii=False, indent=2)

# add this snippet to remove the original files if they exist:
if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)  # Ensure the output directory exists
    generate_combined_questions_json()
    generate_combined_votes_json()

    # List the original files you no longer need
    original_files = [
        OUTPUT_QUESTIONS,
        OUTPUT_PROCESSED_VOTES,
        OUTPUT_VOTE_DETAILS,
        OUTPUT_QUESTION_DETAILS
    ]
    # Delete each file if it exists
    for file_path in original_files:
        if os.path.exists(file_path):
            os.remove(file_path)
            print(f"Deleted {file_path}")