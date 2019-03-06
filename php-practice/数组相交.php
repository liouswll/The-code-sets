<?php
	$array1=array('a','b','c','d');
	$array2=array(10=>'a','c','e');
	$array=array_intersect($array2,$array1);
	print_r($array);
?>