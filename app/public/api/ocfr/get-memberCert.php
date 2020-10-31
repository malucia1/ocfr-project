<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT ct.certification_name, ct.certifying_agency, ct.expiration_period, c.issued_date FROM Certification ct, Certified c WHERE ct.certification_id = c.certification_id and ct.certification_id in (select certification_id from Certified WHERE member_id = 1)';
$vars = [];

// if (isset($_GET['member_id'])) {
//   // This is an example of a parameterized query
//   $sql = 'SELECT * FROM Certificaiton WHERE member_id = ?';
//   $vars = [ $_GET['member_id'] ];
// }

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$members = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($members, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;