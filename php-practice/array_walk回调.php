<?php
	$stu=array('name'=>'李白','sex'=>'男','add'=>'北京');
	array_walk($stu,function($v){
		echo $v,'<br>';
	});
	echo '<hr>';
	array_walk($stu,function($v,$k){
		echo $k ,'-',$v,'<br>';	 
	});
?>