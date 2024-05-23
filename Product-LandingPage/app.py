from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def login():
   return render_template('login.html')


@app.route('/register')
def home():
   return render_template('registration.html')



@app.route('/about')
def about():
   return render_template('about.html')


@app.route('/gallery')
def gallery():
   return render_template('gallery.html')


@app.route('/contact')
def contact():
   return render_template('contact.html')



@app.route('/order')
def order():
   return render_template('order.html')


   app.run()