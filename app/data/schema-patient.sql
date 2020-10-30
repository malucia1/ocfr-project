USE OCFR;

DROP TABLE IF EXISTS CurrentMembers;
CREATE TABLE CurrentMembers (
  member_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  station_number INT,
  radio_number INT,
  address_street VARCHAR(50),
  address_city VARCHAR(50),
  address_state VARCHAR(50),
  address_zip INT,
  email VARCHAR(30),
  date_of_birth VARCHAR(30),
  gender VARCHAR(1),
  mobile_phone INT,
  work_phone INT,
  position VARCHAR(30)
);

INSERT INTO CurrentMembers (member_id, firstname, lastname, station_number, radio_number, address_street, address_city, address_state, address_zip, email, date_of_birth, gender, mobile_phone, work_phone, position) VALUES
("1", "Samson", "Pollak", "1", "2", "3737 S 7th St", "Terre Haute", "IN", "47802", "spk@iu.edu", "1996-10-12", "Male", "123-234-4657", "435-654-6453", "Fireman"),
("2", "Maddie", "Lucia", "2", "3", "1010 Indiana Ave", "Bloomington", "IN", "47408", "mal@iu.edu", "1996-08-14", "Female", "321-234-4657", "999-654-6453", "Lawyer");

DROP TABLE IF EXISTS FormerMembers;
CREATE TABLE FormerMembers (
  member_id INT PRIMARY KEY,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  station_number INT,
  radio_number INT,
  address_street VARCHAR(50),
  address_city VARCHAR(50),
  address_state VARCHAR(50),
  address_zip VARCHAR(10),
  email VARCHAR(30),
  date_of_birth VARCHAR(30),
  gender VARCHAR(1),
  mobile_phone VARCHAR(10),
  work_phone VARCHAR(10),
  position VARCHAR(30),
);

INSERT INTO FormerMembers (member_id, firstname, lastname, station_number, radio_number, address_street, address_city, address_state, address_zip, email, date_of_birth, gender, mobile_phone, work_phone, position) VALUES
("SOME-REALLY-LONG-1234", "Sylvia", "Hernandez", "2012-09-01",  "F"),
("SOME-REALLY-SHORT-5678", "Vish", "Balasubramanian", "1950-12-15",  "M"),
("SOME-UNIQUE-ABCDE1", "J", "Doe", "1950-00-00",  ""),
("SOME-DUMMY-DATA", "Pepper", "Potts", "1990-01-31",  "F");

DROP TABLE IF EXISTS Certification;
CREATE TABLE Certification (
  certification_id INT PRIMARY KEY AUTO_INCREMENT,
  certifying_agency VARCHAR(50),
  certification_name VARCHAR(50),
  expiration_period VARCHAR(50)
);

INSERT INTO Certification (certifying_agency, certification_name, expiration_period) VALUES
("AHA", "CPR", "2 years"),
("Red Cross", "CPR", "2 years"),
("Athens Technical College", "Firefighter I", "3 years"),
("Ivy Technical College", "Firefighter I", "3 years"),
("Georgia POST Academy", "POST", "5 years");

DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
  email VARCHAR(30) PRIMARY KEY,
  password VARCHAR(30),
  temporary_password VARCHAR(30),
  administrative_privilege VARCHAR(30),
  FOREIGN KEY(email) REFERENCES person(email)
);

INSERT INTO Users (email, password, temporary_password, administrative_privilege) VALUES
("SOME-REALLY-LONG-1234", "Sylvia", "Hernandez", "2012-09-01",  "F"),
("SOME-REALLY-SHORT-5678", "Vish", "Balasubramanian", "1950-12-15",  "M"),
("SOME-UNIQUE-ABCDE1", "J", "Doe", "1950-00-00",  ""),
("SOME-DUMMY-DATA", "Pepper", "Potts", "1990-01-31",  "F");
