<?php

session_start();

include "db_connect.php";

if(isset($_POST['login'])){

    $username = $_POST['user_name'];
    $password = $_POST['user_password'];

    $sql = "SELECT * FROM users 
            WHERE username='$username'
            AND password='$password'";

    $result = mysqli_query($conn,$sql);

    if(mysqli_num_rows($result) > 0){

        $_SESSION['user'] = $username;

        header("Location: index.php");

    }else{

        echo "Invalid Username or Password";

    }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width= , initial-scale=1.0">
    <!-- link icon library and css -->
    <link rel="stylesheet" href="./style.css">
    <title>Orbit</title>
    <link rel="icon"  type="image/png" href="logo3.jpg">
    
</head>
<body>
    <header>
        <div class="left_bx1">
            <div class="content">
                <form method="post" action="login.php"  autocomplete="off">
                    <h3>Login</h3>
                    <div class="card">
                        <label for="name">Name</label>
                        <input type="text" 
                            name="user_name" 
                            placeholder="Enter Your Username..." 
                            autocomplete="off"
                            required>
                    </div>
                    <div class="card">
                        <label for="password">Password</label>
                        <input type="password" 
                            name="user_password" 
                            placeholder="Enter Your Password" 
                            autocomplete="new-password"
                            required>
                    </div>
                    <input type="submit" value="Login" name="login" class="submit">


                    <div class="check">
                        <input type="checkbox" name="" id=""><span>Remember Me.</span>
                    </div>
                    <p>Don't have an account yet? <a href="signup.php">Sign Up</a></p>
                </form>
            </div>
        </div>
        <div class="right_bx1">
            <img src="./WhatsApp Image 2025-12-18 at 17.47.39.jpeg" alt="">
            <!-- <h3>Incorect Password</h3> -->
        </div>
    </header>
</body>
</html>