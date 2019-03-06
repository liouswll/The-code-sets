<?php
$num=array(10,20,30,40,50);
$result=0;
for($i=0,$n=count($num); $i<$n; $i++) {
	$result+=$num[$i];
}
echo '数组元素的和是：'.$result;
?>