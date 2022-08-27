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
    echo JsonResponse([
        'Erro, página não encontrada'
    ], 404);
    exit(0);
}

// Resgatar inputs
$rawInputs = json_decode(file_get_contents('php://input', true));

const CONTACT_NAME_MAX_LENGTH = 60;
const SUBJECT_MAX_LENGTH = 60;
const MESSAGE_BODY_MAX_LENGTH = 255;

try {
    [$validated, $errors] = ValidateInputs($inputs);

    if ($validated == false) {
        echo JsonResponse($errors, 404);
        exit(0);
    }

    $inputs = EscapeInputs($rawInputs);
        
    if ($_ENV['APP_ENV'] == 'local') {
        echo JsonResponse([
            'Ambiente de desenvolvimento',
            'Email enviado com sucesso!'
        ], 200);
        exit(0);
    }

    $mail = SetUpPHPMailer();

    $mail->Subject = $inputs->subject;
    $mail->setFrom($_ENV['MAIL_ADDRESS'], $_ENV['MAIL_NAME']);
    $mail->addAddress($_ENV['MAIL_ADDRESS'], $_ENV['MAIL_NAME']);     //Add a recipient
    $mail->addReplyTo($inputs->contactEmail, $inputs->contactName);

    $emailBody = GetEmailBody(array(
        'contactName' => $inputs->contactName,
        'messageBody' => $inputs->messageBody
    ));
    $mail->msgHTML($emailBody);

    $result = $mail->send();

    if ($result == false) {
        echo JsonResponse([
            'Tivemos um problema ao enviar o email:',
            $mail->ErrorInfo,
            'Por favor, tente novamente mais tarde ou entre em contato diretamente com ' . $_ENV['MAIL_ADDRESS']
        ], 500);
        exit(0);
    }
    
    echo JsonResponse([
        'Email enviado com sucesso!'
    ], 200);
    exit(0);
} catch (\Throwable $th) {
    echo JsonResponse([
        'Ocorreu um Erro',
        $th->getMessage()
    ], $th->getCode());
    exit(0);
}

function JsonResponse(array $message, int $status): string {
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; chatset=UTF-8');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    http_response_code($status);
    return json_encode($message);
}

function GetEmailBody(array $inputs): string {
    extract($inputs);

    ob_start();
    include 'message.php';
    return ob_get_clean();
}

function ValidateInputs(stdClass $inputs): array {
    $errors = [];

    if (property_exists($inputs, 'contactEmail') == false || empty($inputs->contactEmail)) {
        $errors[] = 'O campo Email para Contato é obrigatório.';
    } else if (is_string($inputs->contactEmail) == false) {
        $errors[] = 'O campo Email para Contato precisa ser uma string.';
    } else if (filter_var($inputs->contactEmail, FILTER_VALIDATE_EMAIL) == false) {
        $errors[] = 'O campo Email para Contato não está num formato válido.';
    }

    if (property_exists($inputs, 'contactName') == false || empty($inputs->contactName)) {
        $errors[] = 'O campo Nome é obrigatório';
    } else if (is_string($inputs->contactName) == false) {
        $errors[] = 'O campo Nome deve ser uma string.';
    }

    if (property_exists($inputs, 'subject') == false || empty($inputs->subject)) {
        $errors[] = 'O campo assunto é obrigatório.';
    } else if (is_string($inputs->subject) == false) {
        $errors[] = 'O campo Nome deve ser uma string.';
    }

    if (property_exists($inputs, 'messageBody') == false || empty($inputs->messageBody)) {
        $errors[] = 'O campo assunto é obrigatório.';
    } else if (is_string($inputs->messageBody) == false) {
        $errors[] = 'O campo Nome deve ser uma string.';
    }

    return [
        empty($errors),
        $errors
    ];
}

function SetUpPHPMailer(): PHPMailer {
    $mail = new PHPMailer(true);
    $mail->setLanguage('pt_br');

    //Server settings
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = $_ENV['MAIL_HOST'];                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = $_ENV['MAIL_USERNAME'];                     //SMTP username
    $mail->Password   = $_ENV['MAIL_PASSWORD'];                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = $_ENV['MAIL_PORT'];                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->isHTML(true);                                  //Set email format to HTML

    return $mail;
}

function EscapeInputs(stdClass $rawInputs): stdClass {
    $result = new stdClass();

    $result->subject = substr(strip_tags($rawInputs->subject), 0, SUBJECT_MAX_LENGTH);
    $result->contactName = substr(strip_tags($rawInputs->contactName), 0, CONTACT_NAME_MAX_LENGTH);
    $result->messageBody = substr(strip_tags($rawInputs->messageBody), 0, MESSAGE_BODY_MAX_LENGTH);

    return $result;
}