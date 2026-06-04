
<?php

include "db_connect.php";

if(isset($_POST['submit'])){

    $username = $_POST['user_name'];
    $email = $_POST['user_email'];
    $password = $_POST['user_password'];

    $sql = "INSERT INTO users(username,email,password)
            VALUES('$username','$email','$password')";

    mysqli_query($conn,$sql);

    header("Location: login.php");
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
                <form method="post">
                    <h3>Sign Up</h3>

                    <div class="card">
                        <label for="name">Name</label>
                        <input type="text" name="user_name" placeholder="Enter Your Username..." required>
                    </div>

                    <div class="card">
                        <label for="email">Email</label>
                        <input type="email" name="user_email" placeholder="Enter Your Email..." required>
                    </div>

                    <div class="card">
                        <label for="password">Password</label>
                        <input type="password" name="user_password" placeholder="Enter Your Password..." required>
                    </div>

                    <div class="card">
                        <label for="re-password">Re-Password</label>
                        <input type="password" name="user_re_password" placeholder="Enter Your Re_Password..." required>
                    </div>

                    <input type="submit" value="Sign Up" name="submit" class="submit">
                    <div class="check">
                        <input type="checkbox" name="" id=""><span>Remember Me.</span>
                    </div>
                    <p>Already have an account? <a href="login.php">Login</a></p>
                </form>
            </div>
        </div>
        <div class="right_bx1">
            <img src="./login.jpg" alt="">
            <!-- <h3>Incorect Password</h3> -->
        </div>
    </header>
</body>
</html>