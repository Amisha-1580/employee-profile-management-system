<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "WorkConnection@80";
$dbname = "emp_data";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Hash the password for security
$age = $_POST['age'];
$role = $_POST['role'];
$joiningdate = $_POST['joiningdate'];

// SQL query to insert data into the database
$sql = "INSERT INTO employee (name, email, password, age, role, joining_date) 
        VALUES ('$name', '$email', '$password', '$age', '$role', '$joiningdate')";

if ($conn->query($sql) === TRUE) {
    echo "New employee registered successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
