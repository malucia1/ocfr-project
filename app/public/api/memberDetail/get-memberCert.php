<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();


$getId = file_get_contents("mid.json");

// Step 2: Create & run the query
$sql = 'SELECT ct.certification_name, ct.certifying_agency, ct.expiration_period, c.issued_date, c.certified_id FROM Certification ct, Certified c WHERE ct.certification_id = c.certification_id and c.member_id = ?';

$stmt = $db->prepare($sql);
$stmt->execute([$getId]);

$members = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($members, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;