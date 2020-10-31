<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM Test';
$vars = [];

if (isset($_GET['test_id'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT * FROM Test WHERE test_id = ?';
  $vars = [ $_GET['test_id'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$test = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($test, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
