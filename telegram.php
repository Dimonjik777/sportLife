<?php
// https://api.telegram.org/botXXXXXXXXXXXXXXXXX/getUpdates
// Where  XXXXXX this token
$name = $_POST['name'];
$phone = $_POST['phone'];

$token = '1859196297:AAEtbb9CLTi9T9OMAEba4apwASnkdxxAsHY';
$chat_id = '-565865132';

$arr = array(
	'Имя клиента' => $name, 
	'Номер клиента' => $phone
);

foreach ($arr as $key => $value) {
	// code...
	$txt .= '<b>'.$key.'</b>'.$value.'%0A';
};

$sendTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");