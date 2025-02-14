from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('frontend.html')

@app.route('/about')
def about():
    return "About page"

@app.route('/services')
def services():
    return "Services page"

@app.route('/contact')
def contact():
    return "Contact page"
@app.route('/login')
def login():
    return "Login page"

@app.route('/signup')
def signup():
    return "Sign up page"


if __name__ == '__main__':
    app.run(debug=True)
