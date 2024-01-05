from dotenv import load_dotenv
load_dotenv()  # This loads the environment variables from .env.


from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Other Flask routes...

if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)

print("Starting Flask server...")
if __name__ == '__main__':
    app.run(debug=True)


try:
    if __name__ == '__main__':
        app.run(debug=True)
except Exception as e:
    print(e)
