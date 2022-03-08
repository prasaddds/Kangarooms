
<?php
    $db_hostname = "127.0.0.1";
    $db_username = "root";
    $db_password = "";
    $db_name = "room_database";
    
    $conn = mysqli_connect($db_hostname, $db_username, $db_password, $db_name);
    if (!$conn) {
        echo "<h1>Connection failed:</h1> " . mysqli_connect_error();
        exit;
    }


    $name=$_POST['Name'];
    $email=$_POST['Email'];
    $password=$_POST['Create_Password'];

    $sql = "INSERT INTO customers (name, email, password) VALUES ('$name', '$email', '$password')";


    $result = mysqli_query($conn, $sql);
    if (!$result) {
        echo "Error: " . mysqli_error($conn);
        exit;
    }

    echo "Registration successful";
    mysqli_close($conn);
    //form->Database
?>