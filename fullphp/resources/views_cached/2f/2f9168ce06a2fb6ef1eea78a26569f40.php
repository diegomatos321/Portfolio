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

/* templates/base.twig */
class __TwigTemplate_db423dd22f0b9313760f7d6e2df693bc extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'head' => [$this, 'block_head'],
            'title' => [$this, 'block_title'],
            'description' => [$this, 'block_description'],
            'content' => [$this, 'block_content'],
            'footer' => [$this, 'block_footer'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"pt-BR\">
<head>
    ";
        // line 4
        $this->displayBlock('head', $context, $blocks);
        // line 59
        echo "</head>
<body>
    <main id=\"main\">";
        // line 61
        $this->displayBlock('content', $context, $blocks);
        echo "</main>
    <footer id=\"footer\">";
        // line 62
        $this->displayBlock('footer', $context, $blocks);
        echo "</footer>
</body>
</html>";
    }

    // line 4
    public function block_head($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 5
        echo "        ";
        // line 6
        echo "        <title>";
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        <meta name=\"description\" content=\"";
        // line 7
        $this->displayBlock('description', $context, $blocks);
        echo "\"/>
        <link rel=\"canonical\" href=\"";
        // line 8
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 8), "html", null, true);
        echo "\"/>
        <meta name=\"author\" content=\"Diego Matos\"/>
        <meta name=\"robots\" content=\"index,follow\"/>
        <meta name=\"rating\" content=\"General\"/>

        <link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"";
        // line 13
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 13), "html", null, true);
        echo "/favicon/apple-icon-57x57.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"";
        // line 14
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 14), "html", null, true);
        echo "/favicon/apple-icon-60x60.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"";
        // line 15
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 15), "html", null, true);
        echo "/favicon/apple-icon-72x72.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"";
        // line 16
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 16), "html", null, true);
        echo "/favicon/apple-icon-76x76.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"";
        // line 17
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 17), "html", null, true);
        echo "/favicon/apple-icon-114x114.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"";
        // line 18
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 18), "html", null, true);
        echo "/favicon/apple-icon-120x120.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"";
        // line 19
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 19), "html", null, true);
        echo "/favicon/apple-icon-144x144.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"";
        // line 20
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 20), "html", null, true);
        echo "/favicon/apple-icon-152x152.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"";
        // line 21
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 21), "html", null, true);
        echo "/favicon/apple-icon-180x180.png\"/>
        <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"";
        // line 22
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 22), "html", null, true);
        echo "/favicon/android-icon-192x192.png\"/>
        <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"";
        // line 23
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 23), "html", null, true);
        echo "/favicon/favicon-32x32.png\"/>
        <link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"";
        // line 24
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 24), "html", null, true);
        echo "/favicon/favicon-96x96.png\"/>
        <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"";
        // line 25
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 25), "html", null, true);
        echo "/favicon/favicon-16x16.png\"/>
        <link rel=\"manifest\" href=\"";
        // line 26
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 26), "html", null, true);
        echo "/favicon/manifest.json\"/>
        <meta name=\"msapplication-TileColor\" content=\"#ffffff\"/>
        <meta name=\"msapplication-TileImage\" content=\"";
        // line 28
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 28), "html", null, true);
        echo "/favicon/ms-icon-144x144.png\"/>
        <meta name=\"theme-color\" content=\"#ffffff\"/>


        ";
        // line 33
        echo "        <meta itemProp=\"name\" content=\"";
        $this->displayBlock("title", $context, $blocks);
        echo "\"/>
        <meta itemProp=\"description\" content=\"";
        // line 34
        $this->displayBlock("description", $context, $blocks);
        echo "\"/>
        <meta itemProp=\"image\" content=\"";
        // line 35
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 35), "html", null, true);
        echo "/assets/imagens/logo-vertical-fundo-preto.png\"/>
        ";
        // line 37
        echo "
        ";
        // line 39
        echo "        <meta property=\"og:title\" content=\"";
        $this->displayBlock("title", $context, $blocks);
        echo "\"/>
        <meta property=\"og:description\" content=\"";
        // line 40
        $this->displayBlock("description", $context, $blocks);
        echo "\"/>
        <meta property=\"og:url\" content=\"";
        // line 41
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 41), "html", null, true);
        echo "\"/>
        <meta property=\"og:site_name\" content=\"Portfolio do desenvolvedor Diego Matos\"/>
        <meta property=\"og:type\" content=\"website\"/>
        <meta property=\"og:image\" content=\"";
        // line 44
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 44), "html", null, true);
        echo "/assets/imagens/logo-vertical-fundo-preto.png\"/>
        <meta property=\"og:image:alt\" content=\"Logo do desenvolvedor Diego Matos\"/>
        <meta property=\"og:locale\" content=\"pt-BR\"/>

        ";
        // line 49
        echo "        <meta name=\"twitter:title\" content=\"";
        $this->displayBlock("title", $context, $blocks);
        echo "\"/>
        <meta name=\"twitter:description\" content=\"";
        // line 50
        $this->displayBlock("description", $context, $blocks);
        echo "\"/>
        <meta name=\"twitter:url\" content=\"";
        // line 51
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 51), "html", null, true);
        echo "\"/>
        <meta name=\"twitter:card\" content=\"summary\"/>
        <meta name=\"twitter:image\" content=\"";
        // line 53
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["env"] ?? null), "APP_URL", [], "any", false, false, false, 53), "html", null, true);
        echo "/assets/imagens/logo-vertical-fundo-preto.png\"/>
        ";
        // line 55
        echo "        ";
        // line 56
        echo "
        <script src=\"https://cdn.tailwindcss.com?plugins=forms\"></script>
    ";
    }

    // line 6
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
    }

    // line 7
    public function block_description($context, array $blocks = [])
    {
        $macros = $this->macros;
    }

    // line 61
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        echo " ";
    }

    // line 62
    public function block_footer($context, array $blocks = [])
    {
        $macros = $this->macros;
        echo " ";
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "templates/base.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  234 => 62,  227 => 61,  221 => 7,  215 => 6,  209 => 56,  207 => 55,  203 => 53,  198 => 51,  194 => 50,  189 => 49,  182 => 44,  176 => 41,  172 => 40,  167 => 39,  164 => 37,  160 => 35,  156 => 34,  151 => 33,  144 => 28,  139 => 26,  135 => 25,  131 => 24,  127 => 23,  123 => 22,  119 => 21,  115 => 20,  111 => 19,  107 => 18,  103 => 17,  99 => 16,  95 => 15,  91 => 14,  87 => 13,  79 => 8,  75 => 7,  70 => 6,  68 => 5,  64 => 4,  57 => 62,  53 => 61,  49 => 59,  47 => 4,  42 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html lang=\"pt-BR\">
<head>
    {% block head %}
        {# SEO Geral #}
        <title>{% block title %}{% endblock %}</title>
        <meta name=\"description\" content=\"{% block description %}{% endblock %}\"/>
        <link rel=\"canonical\" href=\"{{ env.APP_URL }}\"/>
        <meta name=\"author\" content=\"Diego Matos\"/>
        <meta name=\"robots\" content=\"index,follow\"/>
        <meta name=\"rating\" content=\"General\"/>

        <link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"{{ env.APP_URL }}/favicon/apple-icon-57x57.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"{{ env.APP_URL }}/favicon/apple-icon-60x60.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"{{ env.APP_URL }}/favicon/apple-icon-72x72.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"{{ env.APP_URL }}/favicon/apple-icon-76x76.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"{{ env.APP_URL }}/favicon/apple-icon-114x114.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"{{ env.APP_URL }}/favicon/apple-icon-120x120.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"{{ env.APP_URL }}/favicon/apple-icon-144x144.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"{{ env.APP_URL }}/favicon/apple-icon-152x152.png\"/>
        <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"{{ env.APP_URL }}/favicon/apple-icon-180x180.png\"/>
        <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"{{ env.APP_URL }}/favicon/android-icon-192x192.png\"/>
        <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"{{ env.APP_URL }}/favicon/favicon-32x32.png\"/>
        <link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"{{ env.APP_URL }}/favicon/favicon-96x96.png\"/>
        <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"{{ env.APP_URL }}/favicon/favicon-16x16.png\"/>
        <link rel=\"manifest\" href=\"{{ env.APP_URL }}/favicon/manifest.json\"/>
        <meta name=\"msapplication-TileColor\" content=\"#ffffff\"/>
        <meta name=\"msapplication-TileImage\" content=\"{{ env.APP_URL }}/favicon/ms-icon-144x144.png\"/>
        <meta name=\"theme-color\" content=\"#ffffff\"/>


        {# Google+ / Schema.org #}
        <meta itemProp=\"name\" content=\"{{ block('title') }}\"/>
        <meta itemProp=\"description\" content=\"{{ block('description') }}\"/>
        <meta itemProp=\"image\" content=\"{{ env.APP_URL }}/assets/imagens/logo-vertical-fundo-preto.png\"/>
        {# <link href=\"https://plus.google.com/+SuaPagina\" rel=\"publisher\"/> #}

        {# Open Graph Facebook #}
        <meta property=\"og:title\" content=\"{{ block('title') }}\"/>
        <meta property=\"og:description\" content=\"{{ block('description') }}\"/>
        <meta property=\"og:url\" content=\"{{ env.APP_URL }}\"/>
        <meta property=\"og:site_name\" content=\"Portfolio do desenvolvedor Diego Matos\"/>
        <meta property=\"og:type\" content=\"website\"/>
        <meta property=\"og:image\" content=\"{{ env.APP_URL }}/assets/imagens/logo-vertical-fundo-preto.png\"/>
        <meta property=\"og:image:alt\" content=\"Logo do desenvolvedor Diego Matos\"/>
        <meta property=\"og:locale\" content=\"pt-BR\"/>

        {# Twitter #}
        <meta name=\"twitter:title\" content=\"{{ block('title') }}\"/>
        <meta name=\"twitter:description\" content=\"{{ block('description') }}\"/>
        <meta name=\"twitter:url\" content=\"{{ env.APP_URL }}\"/>
        <meta name=\"twitter:card\" content=\"summary\"/>
        <meta name=\"twitter:image\" content=\"{{ env.APP_URL }}/assets/imagens/logo-vertical-fundo-preto.png\"/>
        {# <meta name=\"twitter:creator\" content=\"@estevanmaito\"/> #}
        {# <meta name=\"twitter:site\" content=\"@empresa\"/> #}

        <script src=\"https://cdn.tailwindcss.com?plugins=forms\"></script>
    {% endblock %}
</head>
<body>
    <main id=\"main\">{% block content %} {% endblock %}</main>
    <footer id=\"footer\">{% block footer %} {% endblock %}</footer>
</body>
</html>", "templates/base.twig", "D:\\Repositorios\\Portfolio\\fullphp\\resources\\views\\templates\\base.twig");
    }
}
