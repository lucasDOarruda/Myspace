from flask import Flask, request, jsonify
import spacy
from flask_cors import CORS

# Initialize Flask app and enable CORS
app = Flask(__name__)
CORS(app, resources={r"/process_message": {"origins": "http://localhost:3000"}})

# Load spaCy language model
nlp = spacy.load("en_core_web_sm")

# Define intents and entities (customize as needed)
intents = {
    "contact_information": ["contact", "contact info", "get in touch", "how to contact"],
}
entities = {
    "email": ["email", "e-mail", "email address"],
}

# Route to process incoming chat messages
@app.route('/process_message', methods=['POST'])
def process_message():
    user_message = request.json.get('input')
    doc = nlp(user_message.lower())

    # Initialize intent and entity variables
    detected_intent = None
    detected_entity = None

    # Intent and entity detection logic
    for token in doc:
        # Add your intent and entity detection logic here

    # Generate a response based on the detected intent and entity
    bot_response = "Your customized response based on intent and entity."

    # Return the response to the client
    return jsonify({'botResponse': bot_response})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
