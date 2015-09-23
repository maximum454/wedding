<?
$name = trim(htmlspecialchars($_POST["name"]));
$phone = trim(htmlspecialchars($_POST["phone"]));
if((!empty($name)) and (!empty($phone))){

	// формируем заголовок и тело письма
 $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
 $headers .= "From: $name <alliance-style>\r\n"; 
 $thm = "Сообщение";
 $msg= "  <h1>Позвоните мне</h1>
		  <strong>Имя:</strong> $name <br />
		  <strong>Телефон:</strong> $phone<br />
		  ";
$mail_to  = 'maximum454@gmail.com';
 // Отправляем почтовое сообщение
 if(empty($picture)) mail($mail_to, $thm, $msg, $headers);
 echo "<div class='succes'>Спасибо! Ваша заявка принята</div>";
}else{
echo "<div class='error'>Заполните все поля!</div>";
}

?>