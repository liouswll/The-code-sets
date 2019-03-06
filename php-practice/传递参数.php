<?php
	function fun(){
		$n=func_num_args();
		$array=func_get_args();
		$sum=0;
		for($i=0;$i<$n;$i++){
			$sum+=$array[$i];
		}
		echo "$sum","<br>";
	}
	fun(10);
	fun(10,20,30);
?>