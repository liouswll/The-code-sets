<?php
	$num=10;
function myfun() {
	$num=20;
	$fun=function() use($num){
		echo $num;
	};
	$fun();    //20
}
myfun();
?>