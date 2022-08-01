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

$to = $_ENV['MAIL_ADDRESS'];
$mail = new PHPMailer(true);
$mail->setLanguage('pt_br');
try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = $_ENV['MAIL_HOST'];                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = $_ENV['MAIL_USERNAME'];                     //SMTP username
    $mail->Password   = $_ENV['MAIL_PASSWORD'];                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = $_ENV['MAIL_PORT'];                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($inputs->contactEmail, $inputs->contactName);
    $mail->addAddress($to, $_ENV['MAIL_NAME']);     //Add a recipient
    $mail->addReplyTo($inputs->contactEmail, $inputs->contactName);

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $inputs->subject;
    $mail->Body    = '<h1>Olá Diego,</h1><p>Me chamo <strong>'. $inputs->contactName . '</strong> e desejo conversar com você sobre:</p><p>' . $inputs->messageBody . '</p>';
    $mail->AltBody = 'Olá Diego,\r\nMe chamo '. $inputs->contactName . ' e desejo conversar com você sobre:\r\n' . $inputs->messageBody;

    $mail->send();
    
    header('Access-Control-Allow-Origin', '*');
    header('Content-Type: application/json; chatset=UTF-8');
    http_response_code(200);
    echo json_encode([
        'Email enviado com sucesso!'
    ]);
} catch (\Throwable $th) {
    header('Access-Control-Allow-Origin', '*');
    header('Content-Type: application/json; chatset=UTF-8');
    http_response_code(500);
    echo json_encode([
        'Ocorreu um erro',
        $th->getMessage()
    ]);
}
