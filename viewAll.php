<?php
//Connection of database

include("db.php");



//get data from database table
$lam="select * from lamaya";

$res=mysqli_query($connection,$lam);

//While ekata eliyen Table headers hadala Iwara karanna ona Nathnam Table Hedders Hama Row Ekaka Danema Data Add weddi Repeat wenawa
 echo "<table border='1'>";
    echo  "<tr>
        <th>Student Id</th>
        <th>Student First Name</th>
        <th>Student Last Name</th>
        <th>Student Gender</th>
        <th>Options</th>
    </tr>" ;

while($row=mysqli_fetch_array($res)){
    //we can print row by using print_r($row);-row eka print karanna epa, array ekak vidiyata enne
    /* Me Vidiyata echo karala file name eka check karala balanna puluwan Data View Wenawada kiyala
    echo $row['stuId'];
    echo $row['stufn'];
    echo $row['stuln'];
    echo $row['stuGen'];*/

   
    echo "<tr>
      
        <td>".$row['stuId']."</td> 
        <td>".$row['stufn']."</td>
        <td>".$row['stuln']."</td>
        <td>".$row['stuGen']."</td>
        <td><a href='search.php?sid=".$row['stuId']."'>View</a> |<a href='delete.php?id=".$row['stuId']."'>Delete</a></td>
    </tr>";
   
}

 echo "</table>";


?>

<a href="search.html">Find A Student</a>
