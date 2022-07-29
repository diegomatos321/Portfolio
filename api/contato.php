<?php

header("Access-Control-Allow-Origin", "*");
header("Content-Type: application/json; chatset=UTF-8");

$result = "";

http_response_code(200);
echo json_encode($result);