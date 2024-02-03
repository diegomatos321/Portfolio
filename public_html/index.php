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

if (array_key_exists('flash', $_SESSION) === false) {
    $_SESSION['flash'] = [];
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $controller = new HomeController();
    $response = $controller->index();

    if (empty($_SESSION['flash']) === false) {
        unset($_SESSION['flash']);
    }

    echo $response;
} else if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $controller = new HomeController();
    $controller->post();
}

session_write_close();
