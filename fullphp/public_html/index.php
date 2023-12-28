<?php

require_once '../vendor/autoload.php';

use App\Controllers\HomeController;

$dotenv = Dotenv\Dotenv::createImmutable('../');
$dotenv->load();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $controller = new HomeController();
    $response = $controller->index();
    echo $response;
} else if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $controller = new HomeController();
    $response = $controller->post();

    if (empty($response) === false)
        echo $response;
}