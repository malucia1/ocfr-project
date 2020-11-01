USE OCFR;

<<<<<<< Updated upstream
DROP TABLE IF EXISTS Certified;
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  date_of_birth date,
  gender VARCHAR(1) CHECK (gender in ('M','F')),
=======
  date_of_birth VARCHAR(30),
  gender VARCHAR(1),
>>>>>>> Stashed changes
  mobile_phone INT,
  work_phone INT,
  position VARCHAR(30)
);

<<<<<<< Updated upstream
INSERT INTO CurrentMembers (firstname, lastname, station_number, radio_number, address_street, address_city, address_state, address_zip, email, date_of_birth, gender, mobile_phone, work_phone, position, isActive) VALUES
( "Samson", "Pollak", "1", "2", "3737 S 7th St", "Terre Haute", "IN", "47802", "spk@iu.edu", "1996-10-12", "Male", "123-234-4657", "435-654-6453", "Fireman", True),
( "Maddie", "Lucia", "2", "3", "1010 Indiana Ave", "Bloomington", "IN", "47408", "mal@iu.edu", "1996-08-14", "Female", "321-234-4657", "999-654-6453", "Lawyer", TRUE);

-- DROP TABLE IF EXISTS FormerMembers;
-- CREATE TABLE FormerMembers (
--   member_id INT PRIMARY KEY,
--   firstname VARCHAR(30) NOT NULL,
--   lastname VARCHAR(30) NOT NULL,
--   station_number INT,
--   radio_number INT,
--   address_street VARCHAR(50),
--   address_city VARCHAR(50),
--   address_state VARCHAR(50),
--   address_zip VARCHAR(10),
--   email VARCHAR(30),
--   date_of_birth date),
--   gender VARCHAR(1),
--   mobile_phone VARCHAR(10),
--   work_phone VARCHAR(10),
--   position VARCHAR(30),
--   isActive boolean
-- );

INSERT INTO CurrentMembers (firstname, lastname, date_of_birth, gender, isActive) VALUES
("Sylvia", "Hernandez", "2012-09-01",  "F",False),
( "Vish", "Balasubramanian", "1950-12-15",  "M",False),
( "J", "Doe", "1950-00-00",  "M",False),
( "Pepper", "Potts", "1990-01-31",  "F",False);
=======
INSERT INTO CurrentMembers (member_id, firstname, lastname, station_number, radio_number, address_street, address_city, address_state, address_zip, email, date_of_birth, gender, mobile_phone, work_phone, position, isActive, certification_name,cert_expired_date,certifying_agency) VALUES
("1", "Samson", "Pollak", "1", "2", "3737 S 7th St", "Terre Haute", "IN", "47802", "spk@iu.edu", "1996-10-12", "Male", "123-234-4657", "435-654-6453", "Fireman"),
("2", "Maddie", "Lucia", "2", "3", "1010 Indiana Ave", "Bloomington", "IN", "47408", "mal@iu.edu", "1996-08-14", "Female", "321-234-4657", "999-654-6453", "Lawyer"),
("3", "Jon", "Ji","3","4", "4 Ridge Farm Rd"," Burr Ridge", "IL", "60521", "jj@iu.edu", "1996-07-12", "Male", "345-739-4555", "873-563-1212", "Police Officer" )
("4", "Nick", "Cun","4","5", "92 West Elm"," Pentwater", "MI", "47402", "nc@iu.edu", "1980-03-137", "Male", "435-749-6564", "843-543-1254", "First Responder" )
("5", "Tom", "Greggory","5","6", "887 Oak ln"," Dimsdale ", "ID", "87354", "tg@iu.edu", "1987-07-12", "Male", "382-439-4925", "833-562-1513", "Personal Trainer" )
("6", "Peter", "Parker","6","7", "682 New York Ave"," New York", "NY", "73948", "pp@iu.edu", "1993-08-3", "Male", "923-453-9565", "473-553-1012", "Super-hero" )
("7", "Natasha", "Romanov","7","8", "9342 Park Place"," Atlanta", "GA", "83464", "nr@iu.edu", "1989-08-3", "Female", "908-384-1245", "873-854-1512", "Teacher" );

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
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
-- DROP TABLE IF EXISTS Users;
-- CREATE TABLE Users (
--   email VARCHAR(30) PRIMARY KEY,
--   password VARCHAR(30),
--   temporary_password VARCHAR(30),
--   administrative_privilege VARCHAR(30),
--   FOREIGN KEY(email) REFERENCES person(email)
-- );

-- INSERT INTO Users (email, password, temporary_password, administrative_privilege) VALUES
-- ("SOME-REALLY-LONG-1234", "Sylvia", "Hernandez", "2012-09-01",  "F"),
-- ("SOME-REALLY-SHORT-5678", "Vish", "Balasubramanian", "1950-12-15",  "M"),
-- ("SOME-UNIQUE-ABCDE1", "J", "Doe", "1950-00-00",  ""),
-- ("SOME-DUMMY-DATA", "Pepper", "Potts", "1990-01-31",  "F");

CREATE TABLE Certified (
  certified_id INT PRIMARY KEY AUTO_INCREMENT,
  certification_id INT,
  member_id int,
  issued_date date not null,
  FOREIGN KEY(member_id) REFERENCES CurrentMembers(member_id),
  FOREIGN KEY(certification_id) REFERENCES Certification(certification_id)
=======
DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
  email VARCHAR(30) PRIMARY KEY,
  password VARCHAR(30),
  temporary_password VARCHAR(30),
  administrative_privilege VARCHAR(30),
  FOREIGN KEY(email) REFERENCES person(email)
>>>>>>> Stashed changes
);

INSERT INTO Users (email, password, temporary_password, administrative_privilege) VALUES
("SOME-REALLY-LONG-1234", "Sylvia", "Hernandez", "2012-09-01",  "F"),
("SOME-REALLY-SHORT-5678", "Vish", "Balasubramanian", "1950-12-15",  "M"),
("SOME-UNIQUE-ABCDE1", "J", "Doe", "1950-00-00",  ""),
("SOME-DUMMY-DATA", "Pepper", "Potts", "1990-01-31",  "F");
