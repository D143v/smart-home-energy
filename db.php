<?php
// db.php
$host = 'localhost';
$dbname = 'smart_home';
$username = 'root';  // Default for XAMPP
$password = '';      // Default for XAMPP

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Could not connect to the database $dbname: " . $e->getMessage());
}
