<?php
<<<<<<< HEAD

$conn = mysqli_connect("localhost","root","","orbit");

if(!$conn){
    die("Connection Failed");
}

=======
$server_name = "localhost";
$user_name= 'root';
$user_pass = '';
$database_name = "music_user";


$con = mysqli_connect($server_name, $user_name, $user_pass, $database_name);

if (!$con) {
    die ('Connection Failed' . mysql_error());
}else{
    echo ('Database Succesfully Connected');
    
}
>>>>>>> 97bdbf31ecefc883049c1e4fb8698061c110a570
?>