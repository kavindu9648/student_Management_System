<?php
$Studentid=$_GET['id'];
//get data From search .php page form  
//$Studentid=$_POST['Studentid'];
/*
$Studentfname=$_POST['Studentfname'];
$Studentlname=$_POST['Studentlname'];
$StudentGender=$_POST['StudentGender'];
*/

include_once('db.php');

$res=mysqli_query($connection,"delete from lamaya where stuId='$Studentid' ");
if($res){
     header("location:viewAll.php");
    /*
  echo "Successfulle Delete";
 
  */
    
}else{
 echo "Delete Fail";
}

?>


<!----
<a href="viewAll.php">View All Student</a> ---->