<?php
//get Data From Html Page
$sid=$_POST['sid'];

//Create Connection With Database
include_once("db.php" );

//get data from related colomn
$res=mysqli_query($connection,"select * from lamaya where stuId='$sid' ");

while($row=mysqli_fetch_array($res)){
    //column names
    echo $row['stuId'];
    echo $row['stufn'];
    echo $row['stuln'];
    echo $row['stuGen'];
}



?>