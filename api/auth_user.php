<?php 	
	header("Access-Control-Allow-Origin: *");
	$authData = [
		'errors' => [],
		'jwt' => md5($_GET['username'] . microtime()),
		'user' => [
			'id' => 1,
			'name' => 'Bruno Silva Lima',
			'email' => 'brunothelima@gmail.com',
			'thumb' => 'http://picsum.photos/50/50',
		]
	];
	echo json_encode($authData, true);
?>