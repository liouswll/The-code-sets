<?php
	if(!empty($_POST)){
		$year=trim($_POST['year']);
		if($year=="")
				echo '你没有输入年份';
		else {
			if(is_numeric($year)){
				$year+=0;//将字符串转化为数字型

				if(is_int($year)){
					if($year>=0){
						if($year%4==0 && $year%100!=0 ||$year%400==0)
							echo "{$year}是闰年";
						else
							echo"{$year}是平年";
					}else {
						echo '年份必须是正整数';
					}
				}else {
					echo '你输入的是小数';
				}
			}else {
				echo '你的输入的不是数字';
			}
		}
			echo '<hr>';
	}
?>
<form method="post" action="">
	请输入年份： <input type="text" name="year"> <br />
	<input type="submit" name="button" value="判断闰年">
</form>