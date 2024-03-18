<?php

namespace App\Controllers;

class BaseController
{
    protected \Twig\Environment $twig;

    public function __construct() {
        $loader = new \Twig\Loader\FilesystemLoader('../resources/views');
        $this->twig = new \Twig\Environment($loader, [
            'debug' => $_ENV['APP_DEBUG'],
            'cache' => '../resources/views_cached',
        ]);
        $this->twig->addGlobal('env', $_ENV);
        $this->twig->addGlobal('session', $_SESSION);
        $this->twig->addGlobal('currentURL', $_SERVER['REQUEST_URI']);
    }
}