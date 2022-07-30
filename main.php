<?php
$name = $_POST['name'];
$phone = $_POST['phone'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);

$name = urldecode($name);
$phone = urldecode($phone);

$name = trim($name);
$phone = trim($phone);

echo $name;
echo "<br>";
echo $phone;

mail("denis.malykhin.89@bk.ru", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$phone ,"From: https://denis856.github.io/lips/ \r\n");

if (mail("denis.malykhin.89@bk.ru", "Заказ с сайта", "ФИО:".$name.". E-mail: ".$phone ,"From: https://denis856.github.io/lips/ \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}

?>
