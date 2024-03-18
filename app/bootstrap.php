<?php

require_once '../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable('../');
$dotenv->load();
$dotenv->required(['APP_URL', 'MAIL_HOST', 'MAIL_USERNAME', 'MAIL_PASSWORD', 'MAIL_PORT', 'MAIL_ADDRESS', 'MAIL_NAME', 'GA_ID', 'AKISMET_API_KEY']);
$dotenv->required(['APP_DEBUG'])->notEmpty()->isBoolean();

$_ENV['APP_DEBUG'] = $_ENV['APP_DEBUG'] === 'true';

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
