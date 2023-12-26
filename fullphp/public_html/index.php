<?php

require_once '../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . DIRECTORY_SEPARATOR . '..');
$dotenv->load();

$loader = new \Twig\Loader\FilesystemLoader('../resources/views');
$twig = new \Twig\Environment($loader, [
    'debug' => $_ENV['APP_DEBUG'],
    'cache' => '../resources/views_cached',
]);
$twig->addGlobal('env', $_ENV);

echo $twig->render('index.twig');
