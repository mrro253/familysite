from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Enable CORS for frontend communication, allow all origins

@app.route('/')
def home():
    return jsonify({"message": "Backend is running!"})

if __name__ == '__main__':
    app.run(debug=True)
