import json
import os

def create_assistant(client):
    assistant_file_path = 'assistant.json'

    if os.path.exists(assistant_file_path):
        with open(assistant_file_path, 'r') as file:
            assistant_data = json.load(file)
            assistant_id = assistant_data['assistant_id']
            print("Loaded existing assistant ID.")
    else:
        try:
            file = client.files.create(file=open("knowledge.docx", "rb"), purpose='assistants')
            print(f"Uploaded file with ID: {file.id}")  # Debugging line

            assistant = client.beta.assistants.create(
                instructions="""
                    EV bot is made for the users of EVCFLO website to gather information about nearby charging stations in Victoria.
                """,
                model='gpt-3.5-turbo-16k',
                tools=[{"type": "retrieval"}],
                file_ids=[file.id]
            )

            with open(assistant_file_path, 'w') as file:
                json.dump({'assistant_id': assistant.id}, file)
                print("Created a new assistant and saved the ID.")

            assistant_id = assistant.id
        except Exception as e:
            print(f"Error creating assistant: {e}")
            raise

    return assistant_id
