USE OCFR;

DROP TABLE IF EXISTS CurrentMembers;
CREATE TABLE CurrentMembers (
  member_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  station_number INT,
  radio_number INT,
);

INSERT INTO CurrentMembers (member_id, station_number, radio_number) VALUES
("SOME-REALLY-LONG-1234", "Sylvia", "Hernandez", "2012-09-01",  "F"),
("SOME-REALLY-SHORT-5678", "Vish", "Balasubramanian", "1950-12-15",  "M");
