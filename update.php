<?php
// get data from search.php
$stuid=$_POST['Studentid'];
$stufn=$_POST['Studentfname'];
$stuln=$_POST['Studentlname'];
$stuGen=$_POST['StudentGender'];



//Create Connection With Database
include_once("db.php" );

$res=mysqli_query($connection,"update lamaya set stufn='$stufn',stuln= '$stuln' , stuGen='$stuGen' where stuId='$stuid'");

if($res){
    header("location:viewAll.php");
}else{
 echo "Fail";
}


?>