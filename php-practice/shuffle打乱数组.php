<?php
	$array=range('a','z');
	$index=array_rand($array,1);
	print_r($index); echo'<br>';
	$index=array_rand($array,2);
	print_r($index); echo'<br>';
	shuffle($index);
	print_r($index);
?>