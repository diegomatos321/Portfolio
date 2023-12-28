<?php

namespace App\Controllers;

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
    }

    public function index(): string {
        return $this->twig->render('index.html.twig');
    }

    public function post(): string | null {
        $inputs = (object) $_POST;
        [$validated, $errors] = $this->ValidateInputs($inputs);

        if ($validated === false) {
            // Retornar com erros

            http_response_code(404);
            return $this->twig->render('404.html.twig');
        }

        $inputs->assunto = substr(strip_tags($inputs->assunto), 0, static::$SUBJECT_MAX_LENGTH);
        $inputs->nome = substr(strip_tags($inputs->nome), 0, static::$CONTACT_NAME_MAX_LENGTH);
        $inputs->mensagem = substr(strip_tags($inputs->mensagem), 0, static::$MESSAGE_BODY_MAX_LENGTH);

        try {
            $mail = $this->SetUpPHPMailer();

            $mail->Subject = $inputs->assunto;
            $mail->setFrom($_ENV['MAIL_ADDRESS'], $_ENV['MAIL_NAME']);
            $mail->addAddress($_ENV['MAIL_ADDRESS'], $_ENV['MAIL_NAME']);     //Add a recipient
            $mail->addReplyTo($inputs->email, $inputs->nome);

            /*$emailBody = GetEmailBody(array(
                'contactName' => $inputs->nome,
                'messageBody' => $inputs->mensagem
            ));*/
            $emailBody = $this->twig->render('mails/contato-message.html.twig', [
                'nome' => $inputs->nome,
                'message' => $inputs->mensagem
            ]);
            $mail->msgHTML($emailBody);

            $result = $mail->send();

            if ($result === false) {
                // Retornar com mensagem de erro
                exit(0);
            }

            // Retornar com mensagem de sucesso

            /*echo JsonResponse([
                'Email enviado com sucesso!'
            ], 200);*/
            exit(0);
        } catch (\Throwable $th) {
            // Retornar com mensagem de erro

            /*echo JsonResponse([
                'Ocorreu um Erro',
                $th->getMessage()
            ], $th->getCode());*/
            exit(0);
        }

        /*function JsonResponse(array $message, int $status): string {
            header('Access-Control-Allow-Origin: *');
            header('Content-Type: application/json; chatset=UTF-8');
            header('Access-Control-Allow-Methods: POST, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type');
            http_response_code($status);
            return json_encode($message);
        }*/
    }

    protected function GetEmailBody(array $inputs): string {
        extract($inputs);

        ob_start();
        include 'contato-message.html.twig';
        return ob_get_clean();
    }

    protected function ValidateInputs(\stdClass $inputs): array {
        $errors = [];

        if (property_exists($inputs, 'email') === false || empty($inputs->email)) {
            $errors[] = 'O campo Email para Contato é obrigatório.';
        } else if (is_string($inputs->email) === false) {
            $errors[] = 'O campo Email para Contato precisa ser uma string.';
        } else if (filter_var($inputs->email, FILTER_VALIDATE_EMAIL) === false) {
            $errors[] = 'O campo Email para Contato não está num formato válido.';
        }

        if (property_exists($inputs, 'nome') === false || empty($inputs->nome)) {
            $errors[] = 'O campo Nome é obrigatório';
        } else if (is_string($inputs->nome) === false) {
            $errors[] = 'O campo Nome deve ser uma string.';
        }

        if (property_exists($inputs, 'assunto') == false || empty($inputs->assunto)) {
            $errors[] = 'O campo Assunto é obrigatório.';
        } else if (is_string($inputs->assunto) == false) {
            $errors[] = 'O campo Assunto deve ser uma string.';
        }

        if (property_exists($inputs, 'mensagem') === false || empty($inputs->mensagem)) {
            $errors[] = 'O campo Mensagem é obrigatório.';
        } else if (is_string($inputs->mensagem) == false) {
            $errors[] = 'O campo Mensagem deve ser uma string.';
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