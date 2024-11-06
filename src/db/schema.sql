CREATE TABLE Uczestnicy (
    ID_Uczestnika INT AUTO_INCREMENT,
    Imię VARCHAR(255),
    Nazwisko VARCHAR(255),
    Email VARCHAR(255),
    Numer_Telefonu VARCHAR(20),
    PRIMARY KEY (ID_Uczestnika)
);

CREATE TABLE Instruktorzy (
    ID_Instruktor INT AUTO_INCREMENT,
    Imię VARCHAR(255),
    Nazwisko VARCHAR(255),
    Specjalizacja VARCHAR(255),
    PRIMARY KEY (ID_Instruktor)
);

CREATE TABLE Szkolenia (
    ID_Szkolenia INT AUTO_INCREMENT,
    Tytuł_Szkolenia VARCHAR(255),
    Opis_Szkolenia TEXT,
    Data_Rozpoczęcia DATE,
    Data_Zakończenia DATE,
    ID_Instruktor INT,
    PRIMARY KEY (ID_Szkolenia),
    FOREIGN KEY (ID_Instruktor) REFERENCES Instruktorzy(ID_Instruktor)
);

CREATE TABLE Rejestracje (
    ID_Rejestracji INT AUTO_INCREMENT,
    ID_Uczestnika INT,
    ID_Szkolenia INT,
    Status_Płatności VARCHAR(100),
    PRIMARY KEY (ID_Rejestracji),
    FOREIGN KEY (ID_Uczestnika) REFERENCES Uczestnicy(ID_Uczestnika),
    FOREIGN KEY (ID_Szkolenia) REFERENCES Szkolenia(ID_Szkolenia)
);
