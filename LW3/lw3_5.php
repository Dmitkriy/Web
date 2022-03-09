<?php
header("Content-Type: text/plain");
$fileName = $_GET["email"];
if (file_exists($fileName . ".txt"))
{
  readfile($fileName . ".txt");
}
else
{
  echo "Файл не найден";
}