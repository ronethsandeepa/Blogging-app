<?php

$host = "localhost";
$dbname = "syntaxtree";
$dbuser = "root";
$dbpass = "1234";

$conn = new mysqli($host, $dbuser, $dbpass);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed."]));
}

$data = json_decode(file_get_contents("php://input"), false);

$username = trim($data->username ?? "");
$email = trim($data->email ?? "");
$password = trim($data->password ?? "");

if (empty($username) || empty($email) || empty($password)) {
    die(json_encode(["status" => "error", "message" => "All fields are required"]));
}

$checkQuery = $conn->prepare("SELECT id FROM users WHERE email = ? OR username = ?");
$checkQuery->bind_param("ss", $username, $email);
$checkQuery->execute();
$checkQuery->store_result();

if ($checkQuery->num_rows() > 0) {
    die(json_encode(["status" => "error", "message" => "username or email already exist"]));
}

$hashedpassword = password_hash(trim($password), PASSWORD_BCRYPT);

$insertQuery = $conn->prepare("INSERT INTO users(username, email, password_hash) VALUES (?, ?, ?)");
$insertQuery->bind_param("sss", $username, $email, $hashedpassword);

if ($insertQuery->execute()) {
    echo json_encode(["status"=> "success","message"=> "Account created successfully. Please Login"]);
}else{
    echo json_encode(["status"=> "error", "message"=> "Faild to create account. Please try again."]);
}

$conn->close();


?>