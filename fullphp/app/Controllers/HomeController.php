<?php

namespace App\Controllers;

use PHPMailer\PHPMailer\PHPMailer;

class HomeController
{
    static protected int $CONTACT_NAME_MAX_LENGTH = 60;
    static protected int $SUBJECT_MAX_LENGTH = 60;
    static protected int $MESSAGE_BODY_MAX_LENGTH = 255;
    protected \Twig\Environment $twig;

    public function __construct() {
        $loader = new \Twig\Loader\FilesystemLoader('../resources/views');
        $this->twig = new \Twig\Environment($loader, [
            'debug' => $_ENV['APP_DEBUG'],
            'cache' => '../resources/views_cached',
        ]);
        $this->twig->addGlobal('env', $_ENV);
        $this->twig->addGlobal('session', $_SESSION);
    }

    public function index(): string {
        return $this->twig->render('index.html.twig');
    }

    public function post(): void {
        $inputs = (object) $_POST;
        [$validated, $errors] = $this->ValidateInputs($inputs);

        if ($validated === false) {
            //http_response_code(404);
            //return $this->twig->render('index.html.twig', $errors);
            $_SESSION['flash']['oldInputs'] = $_POST;
            $_SESSION['flash']['errors'] = $errors;

            header('Location: ' . $_ENV['APP_URL'] . '#contato');
            exit();
        }

        try {
            $mail = $this->SetUpPHPMailer();

            $mail->Subject = $inputs->assunto;
            $mail->setFrom($_ENV['MAIL_ADDRESS'], $_ENV['MAIL_NAME']);
            $mail->addAddress($_ENV['MAIL_ADDRESS'], $_ENV['MAIL_NAME']);     //Add a recipient
            $mail->addReplyTo($inputs->email, $inputs->nome);

            $mailBody = $this->twig->render('mails/contato-message.html.twig', [
                'nome' => $inputs->nome,
                'message' => $inputs->mensagem
            ]);
            $mail->msgHTML($mailBody);

            $result = $mail->send();

            if ($result === false) {
                // Retornar com mensagem de erro

                $_SESSION['flash']['errors']['geral'] = 'Ocorreu um erro ao enviar o email, por favor tente mais tarde ou envie diretamente a partir do seu cliente de email favorito: ' . $_ENV['MAIL_ADDRESS'];
                header('Location: ' . $_ENV['APP_URL'] . '#contato');
                exit();
            }

            // Retornar com mensagem de sucesso

            $_SESSION['flash']['success'] = 'Obrigado pela mensagem! Irei responder em breve.';
            header('Location: ' . $_ENV['APP_URL']);
        } catch (\Throwable $th) {
            // Retornar com mensagem de erro

            if ($_ENV['APP_DEBUG'] === true) {
                $_SESSION['flash']['errors']['geral'] = 'Ocorreu um erro ao enviar o email, por favor tente mais tarde ou envie diretamente a partir do seu cliente de email favorito: ' . $_ENV['MAIL_ADDRESS'];
            } else {
                $_SESSION['flash']['errors']['geral'] = $th->getMessage();
            }

            header('Location: ' . $_ENV['APP_URL']);
            exit();
        }
    }

    protected function ValidateInputs(\stdClass $inputs): array {
        $errors = [];

        if (property_exists($inputs, 'email') === false || empty($inputs->email)) {
            $errors['email'] = 'O campo Email para Contato é obrigatório.';
        } else if (is_string($inputs->email) === false) {
            $errors['email'] = 'O campo Email para Contato precisa ser uma string.';
        } else if (filter_var($inputs->email, FILTER_VALIDATE_EMAIL) === false) {
            $errors['email'] = 'O campo Email para Contato não está num formato válido.';
        }

        if (property_exists($inputs, 'nome') === false || empty($inputs->nome)) {
            $errors['nome'] = 'O campo Nome é obrigatório.';
        } else if (is_string($inputs->nome) === false) {
            $errors['nome'] = 'O campo Nome deve ser uma string.';
        } else if (strlen($inputs->email) > static::$CONTACT_NAME_MAX_LENGTH) {
            $errors['nome'] = 'O campo nome precisa ter no máximo ' . static::$CONTACT_NAME_MAX_LENGTH . ' caracteres.';
        }

        if (property_exists($inputs, 'assunto') === false || empty($inputs->assunto)) {
            $errors['assunto'] = 'O campo Assunto é obrigatório.';
        } else if (is_string($inputs->assunto) == false) {
            $errors['assunto'] = 'O campo Assunto deve ser uma string.';
        } else if (strlen($inputs->assunto) > static::$SUBJECT_MAX_LENGTH) {
            $errors['assunto'] = 'O campo Assunto precisa ter no máximo '. static::$SUBJECT_MAX_LENGTH . ' caracteres';
        }

        if (property_exists($inputs, 'mensagem') === false || empty($inputs->mensagem)) {
            $errors['mensagem'] = 'O campo Mensagem é obrigatório.';
        } else if (is_string($inputs->mensagem) === false) {
            $errors['mensagem'] = 'O campo Mensagem deve ser uma string.';
        } else if (strlen($inputs->mensagem) > static::$MESSAGE_BODY_MAX_LENGTH) {
            $errors['mensagem'] = 'O campo Mensagem precisa ter no máximo '. static::$MESSAGE_BODY_MAX_LENGTH . ' caracteres';
        }

        return [
            empty($errors),
            $errors
        ];
    }

    protected function SetUpPHPMailer(): PHPMailer {
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
}