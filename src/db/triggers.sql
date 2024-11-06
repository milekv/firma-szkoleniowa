DELIMITER //
CREATE TRIGGER AktualizujStatusPlatnosci
AFTER UPDATE ON Rejestracje
FOR EACH ROW
BEGIN
    IF NEW.Status_Płatności = 'Opłacone' THEN
        -- logika wysłanie emaila potwierdzającego płatnosc WSTAWIC
    END IF;
END//
DELIMITER ;
