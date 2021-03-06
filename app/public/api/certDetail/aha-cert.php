<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

$vars = [file_get_contents("data_en2.json")];
// Step 2: Create & run the query
$sql = 'SELECT distinct m.firstname, m.lastname, m.email FROM CurrentMembers as m, Certification as c, Certified as cd WHERE m.member_id = cd.member_id AND c.certification_id=cd.certification_id and c.certification_id =?';

// if (isset($_GET['member_id'])) {
//   // This is an example of a parameterized query
//   $sql = 'SELECT * FROM Comments WHERE member_id = ?';
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
