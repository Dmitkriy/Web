<?php
header('Content-Type: text/plain');

function getParameter(string $text)
{
   return (isset($_POST[$text]) && ($_POST[$text] !== '')) ? $_POST[$text] : null;
}
$name = getParameter("name");
$email = getParameter("email");
$profession = getParameter("profession");
$agree = getParameter("agree");
if (!filter_var($email, FILTER_VALIDATE_EMAIL))
{
   echo 'Проверьте правильность введённого email';
   return;
}

if (!$email) 
{
   echo 'Нет параметра email', PHP_EOL;
   return;
}

if (!$name)
{
   echo 'Введите имя';
   return;
}

if (!$profession)
{
   echo 'Деятельность не выбранна', PHP_EOL;
   return;
}

if (!$agree)
{
   echo 'Вы не нажали кнопку согласия', PHP_EOL;
   return;
}

$fp = fopen("./data/$email.txt", 'w+');
fwrite($fp, 'Email: ');
fwrite($fp, $email);
fwrite($fp, PHP_EOL);

fwrite($fp, 'Имя: ');
fwrite($fp, $name);
fwrite($fp, PHP_EOL);

fwrite($fp, 'Деятельность: ');
fwrite($fp, $profession);
fwrite($fp, PHP_EOL);

fclose($fp);

