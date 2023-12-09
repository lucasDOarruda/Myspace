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
    "company_information": ["what do you do", "about company", "company info"]
}

# Define responses for each intent
responses = {
    "contact_information": "You can contact us at contact@example.com.",
    "company_information": "We are a tech company specializing in AI solutions."
}

# Route to process incoming chat messages
@app.route('/process_message', methods=['POST'])
def process_message():
    user_message = request.json.get('input')
    doc = nlp(user_message.lower())

    # Initialize intent variable
    detected_intent = None

    # Intent detection logic
    for intent, keywords in intents.items():
        if any(keyword in user_message.lower() for keyword in keywords):
            detected_intent = intent
            break

    # Generate a response based on the detected intent
    bot_response = responses.get(detected_intent, "I'm not sure how to respond to that.")

    # Return the response to the client
    return jsonify({'botResponse': bot_response})

# Run the Flask app
if __name__ == '__main__':
    app.run(port=6000)
