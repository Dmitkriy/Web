<?php
header('Content-Type: text/plain');
$identifier = $_GET['identifier'];
$check = true;
if ($identifier == ''){
  echo 'Идентификатор не может содержать пустую строку';
  $check = false;
}
if(!ctype_alpha($identifier[0]) && $check !== false){
  echo 'No, идентификатор не может начинаться с ', $identifier[0];
  $check = false;
}
for($i = 0; $i < strlen($identifier) && $check !== false; $i++){
  if(!ctype_alpha($identifier[$i]) && !is_numeric($identifier[$i])){
    echo 'No, символ ', $identifier[$i], ' является недопустимым символом в идентификаторе';
    $check = false;
  }
}
if($check == true){
  echo 'Yes';
}