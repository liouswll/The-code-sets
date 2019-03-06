<?php
	$array=array('李白','杜浦','白居易');
	$new_array=array_map(function($name){
		return "你好:{$name}";
	},$array);
	print_r($new_array);
	echo "<br>";



	function fun($name){
		return '你好:'.$name;
	}
	$new_array=array_map('fun',$array);
	print_r($new_array);
?>