<?php
	$array=array(10,29,30,-29,-10);
	$new_array=array_map('abs',$array);
	print_r($new_array);
?>