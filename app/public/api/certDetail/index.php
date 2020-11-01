<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();


$getID = file_get_contents("data_en2.json");

// Step 2: Create & run the query
$sql = 'SELECT * FROM CurrentMembers WHERE member_id = ?';

$stmt = $db->prepare($sql);

$stmt->execute([$getID]);

$members = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($members, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
