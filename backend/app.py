from flask import Flask
from routes.main import main
from routes.auth import auth

app = Flask(__name__)
app.register_blueprint(main)
app.register_blueprint(auth, url_prefix='/auth')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)