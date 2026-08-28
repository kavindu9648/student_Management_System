<?php
//get Data From Html Page
$sid=$_POST['sid'];

//Create Connection With Database
include_once("db.php" );

//get data from related colomn
$res=mysqli_query($connection,"select * from lamaya where stuId='$sid' ");

/*me vidiyata danne serch karanakota nathi data ekak search karoth erro enne nathi wenna

meka wenuwata advanced Vidiyata pahala Form eke "if(isset($stuId)){echo $stuId;} vidiyata Hama Ekatama Add Karanawa"
      isset($stuId)= Kiyanne $stuId ekata Value Ekak Set Wela num

        $stuId= "";
        $stufn="";
        $stuln="";
        $stuGen="";

        */


while($row=mysqli_fetch_array($res)){

/*Me vidiyata Karanawa Delete eka Hadanna Kalin Search Karahama Search Wela output denawada Balann
    //column names
    echo $row['stuId'];
    echo $row['stufn'];
    echo $row['stuln'];
    echo $row['stuGen'];
    */

    //Delete eka hadanna Uda echo karapuwa variable walata dagannawa

        $stuId= $row['stuId'];
        $stufn=$row['stufn'];
        $stuln=$row['stuln'];
        $stuGen= $row['stuGen'];
}


?>

<!--Search Karala Delete Karanna Ona Data ME vidiyata Form Ekakata gannawa-->
 <form action="delete.php" method="post">
        <p>Student Id :<input type="text" value="<?php if(isset($stuId)){echo $stuId;} ?>" name="Studentid"></p>
        <p>First Name :<input type="text" value="<?php if(isset( $stufn)){echo  $stufn;} ?>" name="Studentfname"></p>
        <p>Last Name :<input type="text" value="<?php if(isset($stuln)){echo $stuln;} ?>" name="Studentlname"></p>
        <p>Gender :<input type="text" value="<?php if(isset($stuGen)){echo $stuGen;} ?>" name="StudentGender"></p>
        <p><input type="submit" value="Delete">
          
        </p>
    </form>

    <a href="viewAll.php">View All Student</a>