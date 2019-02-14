<?php
$host     = "127.0.0.1";
// $host     = "localhost";
$port     = 3306;
$socket   = "";
// $user     = "id8549937_admin";
$user = "root";
// $password = "Rootroot";
$password = "root";
// $dbname   = "id8549937_users";
$dbname = "loginsystem";

// $servername = 'DB_HOST';
// $dbUsername = "DB_USERNAME";
// $dBPassword = "DB_PASSWORD";
// $dBName = "loginsystem";
// connection to our db
$conn = mysqli_connect($host, $user, $password, $dbname, $port, $socket);

// example of connection working with 000webhost
// $con = mysqli_connect(“Localhost”,“id563317_newuser”,“db@2017”,“id563317_newdb”);

if (!$conn) {
    die("Connection failed: ".mysqli_connect_error());
}
