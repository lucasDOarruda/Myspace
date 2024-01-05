from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route('/')
def home():
    return 'Welcome to the Flask API!'

@app.route('/api/send-message', methods=['POST'])
def send_message():
    data = request.get_json()
    email = data.get('email')
    message = data.get('message')

    # Add your logic to send the email or handle the message here

    response = jsonify({
        'status': 'success',
        'message': 'Message sent successfully!',
    })

    return response

if __name__ == '__main__':
    app.run(debug=True, port=5000)
