<?php
   function getParameter(string $text)
   {
      return (isset($_POST[$text]) && ($_POST[$text] !== '')) ? $_POST[$text] : null;
   }

   header('Content-Type: text/plain');

   $email = getParameter('email');
   if (!$email)
   {
      echo 'Введите email';
      return;
   }
   $filename = "./data/$email.txt";
   if (file_exists($filename))
   {
      readfile($filename);
      return;
   }
   else 
   {
      echo 'Данного файла не существует';
   }
