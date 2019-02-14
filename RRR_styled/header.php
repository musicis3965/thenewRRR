<?php
    session_start();
?>


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="This is an example of a meta description. This will often show up in search results">
        <meta name=viewport content="width=device-width, inital-scale=1">
        <title></title>

        </head>
        <body>

        <header>
            <nav>
                <a href="#">
                </a>
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div>
                <?php
                if (isset($_SESSION['userId'])) {
                    echo '<meta http-equiv="refresh" content="0;URL=loggedin.php" />';
                }
                else {
                    echo ' <form action="includes/login.inc.php" method="post">
                    <input type="text" name="mailuid" placeholder="Username/Email...">
                    <input type="password" name="pwd" placeholder="Password...">
                    <button type="submit" name="login-submit">Login</button>
                </form>
                <a href="signup.php">Signup</a>';
                }
                ?>


                </div>
            </nav>
        </header>
