-- lista szkolen 
SELECT S.Tytuł_Szkolenia, I.Imię, I.Nazwisko 
FROM Szkolenia S 
JOIN Instruktorzy I ON S.ID_Instruktor = I.ID_Instruktor;

-- uczestnicy szkolenia
SELECT U.Imię, U.Nazwisko 
FROM Uczestnicy U 
JOIN Rejestracje R ON U.ID_Uczestnika = R.ID_Uczestnika 
WHERE R.ID_Szkolenia = [ID_Szkolenia];

-- szkolenia z wolnymi miejscami
SELECT S.Tytuł_Szkolenia, S.Data_Rozpoczęcia, S.Data_Zakończenia 
FROM Szkolenia S 
WHERE (SELECT COUNT(*) FROM Rejestracje R WHERE R.ID_Szkolenia = S.ID_Szkolenia) < 20;
