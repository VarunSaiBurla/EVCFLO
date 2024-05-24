import os
from time import sleep
from packaging import version
from flask import Flask, request, jsonify
import openai
from openai import OpenAI
import functions

# Check OpenAI version is correct
required_version = version.parse("1.1.1")
current_version = version.parse(openai.__version__)
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
if not OPENAI_API_KEY:
    raise ValueError("Error: The OpenAI API key is not set in the environment variables.")
if current_version < required_version:
    raise ValueError(f"Error: OpenAI version {openai.__version__} is less than the required version 1.1.1")
else:
    print("OpenAI version is compatible.")

# Start Flask app
app = Flask(__name__)

# Init client
client = OpenAI(api_key=OPENAI_API_KEY)

# Create new assistant or load existing
assistant_id = functions.create_assistant(client)

# Define a root endpoint
@app.route('/', methods=['GET'])
def home():
    return "Welcome to the OpenAI Chat API", 200

# Start conversation thread
@app.route('/start', methods=['GET'])
def start_conversation():
    try:
        print("Starting a new conversation...")  # Debugging line
        thread = client.beta.threads.create()
        print(f"New thread created with ID: {thread.id}")  # Debugging line
        return jsonify({"thread_id": thread.id})
    except Exception as e:
        print(f"Error starting conversation: {e}")
        return jsonify({"error": str(e)}), 500

# Generate response
@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    thread_id = data.get('thread_id')
    user_input = data.get('message', '')

    if not thread_id:
        print("Error: Missing thread_id")  # Debugging line
        return jsonify({"error": "Missing thread_id"}), 400

    print(f"Received message: {user_input} for thread ID: {thread_id}")  # Debugging line

    try:
        # Add the user's message to the thread
        message_response = client.beta.threads.messages.create(thread_id=thread_id, role="user", content=user_input)
        print(f"Message response: {message_response}")  # Debugging line

        # Run the Assistant
        run_response = client.beta.threads.runs.create(thread_id=thread_id, assistant_id=assistant_id)
        print(f"Run response: {run_response}")  # Debugging line

        while True:
            run_status = client.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run_response.id)
            print(f"Run status: {run_status.status}, {run_status}")  # Debugging line
            if run_status.status == 'completed':
                break
            elif run_status.status == 'failed':
                print("Run failed, stopping.")
                if run_status.last_error and run_status.last_error.code == 'rate_limit_exceeded':
                    return jsonify({"error": "Rate limit exceeded. Please check your OpenAI plan and billing details."}), 429
                return jsonify({"error": "Run failed"}), 500
            sleep(1)

        # Retrieve and return the latest message from the assistant
        messages = client.beta.threads.messages.list(thread_id=thread_id)
        response_message = None
        for message in reversed(messages.data):
            if message.role == "assistant":
                response_message = message.content[0].text.value
                break

        if response_message is None:
            response_message = "I'm not sure how to respond to that."

        print(f"Assistant response: {response_message}")
        return jsonify({"response": response_message})

    except Exception as e:
        print(f"Error during chat: {e}")
        return jsonify({"error": str(e)}), 500

# Run server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
