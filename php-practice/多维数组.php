<?php
	$stu=array(
		'name'=>'李白',
		'sex'=>'男',
		'age'=>'20',
		array('爬山','下河','喝酒','读书')
	);
	print_r($stu[0]);
	echo '<br>',$stu[0][0],'<br>';




	$emp=array(
		array('李白','杜浦','白居易'),
		array('tom','ben','ketty')
	);
	echo $emp[1][0],'<br>';
	echo $emp[0][2],'<br>';
?>
  
