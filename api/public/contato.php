<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$dotenv = \Dotenv\Dotenv::createImmutable('../');
$dotenv->load();

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    exit(0);
}

// Certificar de que é o método post
if ($_SERVER['REQUEST_METHOD'] != "POST") {
    header('Content-Type: application/json; chatset=UTF-8');
    http_response_code(404);
    echo json_encode([
        'Método incorreto'
    ]);
}

// Resgatar inputs
$inputs = json_decode(file_get_contents('php://input', true));

// Enviar Email
$from = getenv('MAIL_FROM_ADDRESS');
$fromName = getenv('MAIL_FROM_NAME');
$to = getenv('MAIL_FROM_ADDRESS');

$message = '<h1>Olá Diego,</h1><p>Me chamo <strong>'. $inputs->contactName . '</strong> e desejo conversar com você sobre:</p><p>.' . $inputs->messageBody . '</p>';

$headers = array(
    'From' => $fromName . ' <' . $from . '>',
    'Reply-To' => $inputs->contactEmail,
    'Content-type' => 'text/html; charset=iso-8859-1'
);

mail($to, $inputs->subject, $inputs->message, $headers);

header('Access-Control-Allow-Origin', '*');
header('Content-Type: application/json; chatset=UTF-8');
http_response_code(200);
echo json_encode($result);