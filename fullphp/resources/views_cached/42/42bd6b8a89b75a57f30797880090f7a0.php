<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* index.twig */
class __TwigTemplate_09bfe4920da143ec21461396587ee616 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'description' => [$this, 'block_description'],
            'content' => [$this, 'block_content'],
            'footer' => [$this, 'block_footer'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "templates/base.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $this->parent = $this->loadTemplate("templates/base.twig", "index.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        echo "Desenvolvedor de Software Diego Matos";
    }

    // line 4
    public function block_description($context, array $blocks = [])
    {
        $macros = $this->macros;
        echo "Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub.";
    }

    // line 6
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 7
        echo "    <h1>Teste 1</h1>
";
    }

    // line 10
    public function block_footer($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 11
        echo "
";
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "index.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  76 => 11,  72 => 10,  67 => 7,  63 => 6,  56 => 4,  49 => 3,  38 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'templates/base.twig' %}

{% block title %}Desenvolvedor de Software Diego Matos{% endblock %}
{% block description %}Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub.{% endblock %}

{% block content %}
    <h1>Teste 1</h1>
{% endblock %}

{% block footer %}

{% endblock %}
", "index.twig", "D:\\Repositorios\\Portfolio\\fullphp\\resources\\views\\index.twig");
    }
}
