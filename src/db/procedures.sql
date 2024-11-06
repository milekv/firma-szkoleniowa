DELIMITER //
CREATE PROCEDURE DodajRejestrację(
    IN _ID_Uczestnika INT,
    IN _ID_Szkolenia INT,
    IN _Status_Płatności VARCHAR(100)
)
BEGIN
    INSERT INTO Rejestracje (ID_Uczestnika, ID_Szkolenia, Status_Płatności)
    VALUES (_ID_Uczestnika, _ID_Szkolenia, _Status_Płatności);
END//
DELIMITER ;
