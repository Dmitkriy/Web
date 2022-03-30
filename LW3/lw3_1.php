<?php
    header("Content-Type: text/plain");
    function getParameter(string $text): ?string
    {
        return isset($_GET[$text]) ? $_GET['$text'] : null;
    }
    $text = $_GET['text'];
    if ($_GET['text'] !== null)
    {
        getParameter($_GET["text"]);
    }
    $text = trim($text, ' ');
    while (strpos($text, '  '))
    {
        $text = str_replace('  ', ' ', $text);
    } 
    $length = strlen($text);
    if ($length === 0)
    {
        echo 'Введите данные';
    } 
    else
    {
        echo $text;
    }
