<?php

require 'common.php';

// Step 0: Validate the incoming data
// This code doesn't do that, but should ...
// For example, if the date is empty or bad, this insert fails.

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt = $db->prepare(
  'INSERT INTO CurrentMembers (firstname,lastname,station_number,radio_number,address_street,address_city,address_state,address_zip,email,date_of_birth,gender,mobile_phone,work_phone,position)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);

$stmt->execute([
  $_POST['firstname'],
  $_POST['lastname'],
  $_POST['station_number'],
  $_POST['radio_number'],
  $_POST['address_street'],
  $_POST['address_city'],
  $_POST['address_state'],
  $_POST['address_zip'],
  $_POST['email'],
  $_POST['date_of_birth'],
  $_POST['gender'],
  $_POST['mobile_phone'],
  $_POST['work_phone'],
  $_POST['position']
]);

// If needed, get auto-generated PK from DB
// $pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Location: ../ocfr/');
