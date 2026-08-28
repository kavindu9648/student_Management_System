<?php

$stuId=$_POST['sid'];
$stufn=$_POST['fn'];
$stuln=$_POST['ln'];
$stuGen=$_POST['gender'];

//db Connection
include_once('db.php');

//inser values to the database
$sql="insert into lamaya values('$stuId','$stufn','$stuln','$stuGen')";
$res=mysqli_query($connection,$sql);

if($res){
   header("location:viewAll.php");
}else{
     echo"UnSuccessfull";
}



?>