<?php

require_once '../app/bootstrap.php';

use App\Controllers\HomeController;

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
