<?php

require 'common.php';

$jsondata = intval($_POST['getId']);
$writeJson = file_put_contents('mid.json', $jsondata);

// echo $writeJson;

// echo $strJsonFileContents; // show contents
header('Location: /profile.html');