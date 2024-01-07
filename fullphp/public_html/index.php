<?php

require_once '../vendor/autoload.php';

use App\Controllers\HomeController;

$dotenv = Dotenv\Dotenv::createImmutable('../');
$dotenv->load();

session_start([
    'save_path' => realpath($_SERVER['DOCUMENT_ROOT'] . '/../storage/sessions'),
    'cookie_lifetime' => 60 * 60 * 24 * 365,
    'cookie_httponly' => true,
    'cookie_secure' => true,
    'cookie_samesite' => 'Lax',
    'use_strict_mode' => true,
]);

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

session_write_close();
