<?php

// Certificar de que é o método post
// Resgatar inputs
$contactName = $_POST['contactName'];
$messageBody = $_POST['messageBody'];
$contactEmail = $_POST['contactEmail'];
$subject = $_POST['subject'];

// Enviar Email
$to = getenv('MAIL_FROM_ADDRESS');

$message = '<h1>Olá Diego,</h1><p>Me chamo <strong>'. $contactName . '</strong> e desejo conversar com você sobre:</p><p>.' . $messageBody . '</p>';

$headers = 'From: ' . $contactName . ' <' . $contactEmail . '>\r\n';
$headers .= 'Reply-To: ' . $replyTo . '\r\n';
$headers .= 'Content-type: text/html\r\n';

mail($to, $subject, $message, $headers);

header('Access-Control-Allow-Origin', '*');
header('Content-Type: application/json; chatset=UTF-8');
http_response_code(200);
echo json_encode($result);