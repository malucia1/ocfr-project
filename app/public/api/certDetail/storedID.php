<?php

require 'common.php';

$jsondata = intval($_POST['getID']);
$writeJson = file_put_contents('data_en2.json', $jsondata);

// echo $writeJson;

// echo $strJsonFileContents; // show contents
if($jsondata == 1){
  header('Location: /aha_cpr.html');
} elseif($jsondata == 2){
  header('Location: /red_cross_cpr.html');
} elseif($jsondata == 3){
  header('Location: /athens_firefighter.html');
} elseif($jsondata == 4){
  header('Location: /athens_firefighter.html');
} elseif($jsondata == 5){
  header('Location: /post_cert.html');
}
