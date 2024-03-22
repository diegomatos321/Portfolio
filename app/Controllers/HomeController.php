<?php

namespace App\Controllers;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class HomeController extends BaseController
{
    static protected int $CONTACT_NAME_MAX_LENGTH = 60;
    static protected int $SUBJECT_MAX_LENGTH = 60;

    public function __construct() {
        parent::__construct();
    }

    public function index(): string {
        return $this->twig->render('index.html.twig', [
            'q' => array_key_exists('q', $_GET) ? $_GET['q'] : ''
        ]);
    }

    public function post(): void {
        $inputs = (object) $_POST;
        [$validated, $errors] = $this->ValidateInputs($inputs);

        if ($validated === false) {
            $_SESSION['flash']['oldInputs'] = $_POST;
            $_SESSION['flash']['errors'] = $errors;

            header('Location: ' . $_ENV['APP_URL'] . '#contato');
            return;
        }

        try {
            $isSpam = $this->AkismetSpamClassifier($inputs);
            $this->LogEmail($inputs, $isSpam);

            if ($isSpam === true) {
                header('Location: ' . $_ENV['APP_URL']);
                return;
            }

            if ($_ENV['APP_DEBUG'] === true) {
                $_SESSION['flash']['success'] = 'Obrigado pela mensagem! Irei responder em breve.';
                header('Location: ' . $_ENV['APP_URL'] . '#contato');
                return;
            }

            $hasSent = $this->SendEmail($inputs);

            if ($hasSent === false) {
                $_SESSION['flash']['errors']['geral'] = 'Ocorreu um erro ao enviar o email, por favor tente mais tarde ou envie diretamente a partir do seu cliente de email favorito: ' . $_ENV['MAIL_ADDRESS'];
                header('Location: ' . $_ENV['APP_URL'] . '#contato');
                exit();
            }

            $_SESSION['flash']['success'] = 'Obrigado pela mensagem! Irei responder em breve.';
            header('Location: ' . $_ENV['APP_URL'] . '#contato');
        } catch (GuzzleException | \Exception $e) {
            if ($_ENV['APP_DEBUG'] === true) {
                echo $e->getMessage();
            } else {
                $_SESSION['flash']['errors']['geral'] = 'Ocorreu um erro ao enviar o email, por favor tente mais tarde ou envie diretamente a partir do seu cliente de email favorito: ' . $_ENV['MAIL_ADDRESS'];

                header('Location: ' . $_ENV['APP_URL'] . '#contato');
                exit();
            }
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

    /**
     * @throws \Exception
     */
    protected function LogEmail(object $inputs, bool $isSpam): void {
        $csvPath = __DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'storage' . DIRECTORY_SEPARATOR . 'emails.csv';

        if (file_exists($csvPath) === false) {
            throw new \Exception('Arquivo de log dos emails não encontrado.');
        }

        $f = fopen($csvPath, 'a');
        if ($f === false) {
            throw new \Exception('Erro ao abrir arquivo de log dos emails.');
        }

        $data = [
            'user_ip' => $_SERVER['REMOTE_ADDR'],
            'user_agent' => $_SERVER['HTTP_USER_AGENT'],
            'referrer' => $_SERVER['HTTP_REFERER'],
            'permalink' => $_ENV['APP_URL'],
            'author_name' => $inputs->nome,
            'author_email' => $inputs->email,
            'content' => $inputs->mensagem,
            'isSpam' => (int) $isSpam,
            'created_at' => date(DATE_ISO8601_EXPANDED),
            'updated_at' => '',
            'deleted_at' => '',
        ];

        $result = fputcsv($f, $data); # Verificar qual exceção é lançada
        if ($result === false) {
            throw new \Exception('Erro ao salvar log de email.');
        }

        fclose($f);
    }

    /**
     * @throws GuzzleException
     */
    protected function AkismetSpamClassifier(object $inputs): bool {
        $aksimetRequestBody = [
            'api_key' => $_ENV['AKISMET_API_KEY'],
            'blog' => $_ENV['APP_URL'],
            'user_ip' => $_SERVER['REMOTE_ADDR'],
            'user_agent' => $_SERVER['HTTP_USER_AGENT'],
            'referrer' => $_SERVER['HTTP_REFERER'],
            'permalink' => $_ENV['APP_URL'],
            'comment_type' => 'contact-form',
            'comment_author' => $inputs->nome,
            'comment_author_email' => $inputs->email,
            'comment_content' => $inputs->mensagem,
            'comment_date_gmt' => date(DATE_ISO8601_EXPANDED),
            'blog_lang' => 'pt-BR',
            'blog_charset' => 'UTF-8',
            'is_test' => $_ENV['APP_DEBUG']
        ];

        $client = new Client([
            'base_uri' => 'https://rest.akismet.com/1.1/',
            'verify' => $_ENV['APP_DEBUG'] === false
        ]);

        $response = $client->post('comment-check', [
            'form_params' => $aksimetRequestBody
        ]);
        $body = (string) $response->getBody();

        return $body === 'true';
    }

    /**
     * @throws Exception
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    protected function SendEmail(object $inputs): bool {
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

        return $mail->send();
    }
}