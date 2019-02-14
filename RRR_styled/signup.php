


    <main>
        <h1>Signup</h1>
        <?php
        if (isset($_GET['error'])) {
            if ($_GET['error'] == "emptyfields") {
                echo '<p> Be sure to fill in all the fields!</p>';
            }
            else if ($_GET['error'] == "invaliduidmail") {
                echo '<p> Invalid username and e-mail!</p>';
            }
            else if ($_GET['error'] == "invaliduiduid") {
                echo '<p> Invalid username!</p>';
            }
            else if ($_GET['error'] == "invalidmail") {
                echo '<p> Incalid e-mail!</p>';
            }
            else if ($_GET['error'] == "passwordcheck") {
                echo '<p> Your passwords do not match!</p>';
            }
            else if ($_GET['error'] == "usertaken") {
                echo '<p> Username is already taken!</p>';
            }
        }
        else if ($_GET['signup'] == "success") {
            echo '<p> Signup Success!</p>';

        }
        ?>
        <form action="includes/signup.inc.php" method="post">
            <input type="text" name="uid" placeholder="Username">
            <input type="text" name="mail" placeholder="E-mail">
            <input type="password" name="pwd" placeholder="Password">
            <input type="password" name="pwd-repeat" placeholder="Repeat password">
            <button type = "submit" name="signup-submit">Signup</button>
        </form>
    </main>


<?php
    require "footer.php";
    ?>