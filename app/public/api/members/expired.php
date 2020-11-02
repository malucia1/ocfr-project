<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT m.member_id, m.firstname, m.lastname, ct.certifying_agency, ct.certification_name, c.issued_date, ct.expiration_period FROM CurrentMembers m, Certification ct, Certified c WHERE m.member_id = c.member_id and c.certification_id = ct.certification_id and (c.issued_date + ct.expiration_period * 365) < curdate()';
$vars = [];

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$members = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($members, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;