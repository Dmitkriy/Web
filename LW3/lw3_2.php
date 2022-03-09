<?php
header('Content-Type: text/plain');
function CheckIdent($text){
   if (($text === null) or ($text == ''))
   {
      echo 'Введите данные';
      return;
   }
   if(!ctype_alpha($text[0])){
      echo 'No, идендификатор не может начинаться с ', $text[0];
      return;
   }
   for($i = 0; $i < strlen($text); $i++)
      {
      if(!ctype_alpha($text[$i]) && !is_numeric($text[$i])){
         echo 'No, символ ', $text[$i], ' является недопустимым символом в индендефикаторе';
         return;
      }
   }
   echo 'Yes';
}
echo CheckIdent($_GET["identifier"]);