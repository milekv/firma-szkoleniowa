from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://użytkownik:hasło@host/baza_danych'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Uczestnik(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    imię = db.Column(db.String(100), nullable=False)
    nazwisko = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    numer_telefonu = db.Column(db.String(20), nullable=False)

class Instruktor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    imię = db.Column(db.String(100), nullable=False)
    nazwisko = db.Column(db.String(100), nullable=False)
    specjalizacja = db.Column(db.String(100), nullable=False)

class Szkolenie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tytuł_szkolenia = db.Column(db.String(100), nullable=False)
    opis_szkolenia = db.Column(db.Text, nullable=False)
    data_rozpoczęcia = db.Column(db.Date, nullable=False)
    data_zakończenia = db.Column(db.Date, nullable=False)
    id_instruktor = db.Column(db.Integer, db.ForeignKey('instruktor.id'), nullable=False)
    instruktor = db.relationship('Instruktor', backref=db.backref('szkolenia', lazy=True))

class Rejestracja(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_uczestnik = db.Column(db.Integer, db.ForeignKey('uczestnik.id'), nullable=False)
    id_szkolenie = db.Column(db.Integer, db.ForeignKey('szkolenie.id'), nullable=False)
    status_platności = db.Column(db.String(100), nullable=False)
    uczestnik = db.relationship('Uczestnik', backref=db.backref('rejestracje', lazy=True))
    szkolenie = db.relationship('Szkolenie', backref=db.backref('rejestracje', lazy=True))

@app.route('/')
def index():
    szkolenia = Szkolenie.query.all()
    return render_template('index.html', szkolenia=szkolenia)

@app.route('/rejestracja', methods=['GET', 'POST'])
def rejestracja():
    if request.method == 'POST':
        imię = request.form['imię']
        nazwisko = request.form['nazwisko']
        email = request.form['email']
        numer_telefonu = request.form['numer_telefonu']
        id_szkolenie = request.form['id_szkolenie']

        nowy_uczestnik = Uczestnik(imię=imię, nazwisko=nazwisko, email=email, numer_telefonu=numer_telefonu)
        db.session.add(nowy_uczestnik)
        db.session.commit()

        nowa_rejestracja = Rejestracja(id_uczestnik=nowy_uczestnik.id, id_szkolenie=id_szkolenie, status_platności='Niezapłacone')
        db.session.add(nowa_rejestracja)
        db.session.commit()

        return redirect(url_for('index'))

    szkolenia = Szkolenie.query.all()
    return render_template('rejestracja.html', szkolenia=szkolenia)

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
