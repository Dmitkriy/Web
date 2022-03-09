<?php
$email = $_GET["email"];
$firstName = $_GET["first_name"];
$lastName = $_GET["last_name"];
$age = $_GET["age"];
$fileName = $email . ".txt";
if ($email !== null)
{
  if ($email !== "")
  {
    if (file_exists($fileName))
    {
      $fileMode = fopen($fileName, "r");
      $content = file($fileName);
      if ($firstName !== null)
      {
        if ($firstName !== "")
        {
          $content[0] = "First name: " . $firstName . "\n";
        }
      }
      if ($lastName !== null)
      {
        if ($lastName !== "")
        {
          $content[1] = "Last name: " . $lastName . "\n";  
        }
      }
      if ($age !== null)
      {
        if ($age !== "")
        {
          $content[3] = "Age: " . $age;
        }
      }
      $fileMode = fopen($fileName, "w+");
      fwrite($fileMode, $content[0]);
      fwrite($fileMode, $content[1]);
      fwrite($fileMode, $content[2]);
      fwrite($fileMode, $content[3]);
      fclose($fileMode);
    }
    else
    {
      $fileMode = fopen($fileName, "w");
      if ($firstName !== "")
      {
        fwrite($fileMode, "First name: " . $firstName . "\n");
      }
      else
      {
        fwrite($fileMode, "First name:" . "\n");
      }
      if ($lastName !== "")
      {
        fwrite($fileMode, "Last name: " . $lastName . "\n");  
      }
      else
      {
        fwrite($fileMode, "Last name:" . "\n");
      }
      fwrite($fileMode, "Email: " . $email . "\n");
      if ($age !== "")
      {
        fwrite($fileMode, "Age: " . $age . "\n");
      }
      else
      {
        fwrite($fileMode, "Age:" . "\n");
      }
      fclose($fileMode);
    }
    
  }
  else
  {
    echo("No email");  
  }
}
else
{
  echo("No email");
}