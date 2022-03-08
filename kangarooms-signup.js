function a() {
    var name =
        document.forms["RegForm"]["Name"];
    var what =
        document.forms["RegForm"]["Subject"];
    var password =
        document.forms["RegForm"]["Create_Password"];
        var confirmpassword =
        document.forms["RegForm"]["Confirm_Password"];
    var Email =
        document.forms["RegForm"]["Email"];

    if (name.value == "") {
        alert("Please enter your name.");
        return false;
    }

    if (Email.value == "") {
        alert("Please enter your mail");
        return false;
    }
    if (password.value == "") {
        alert("Please create your password");
        return false;
    }
    if (confirmpassword.value == "") {
        alert("Please confirm your password");
        return false;
    }
    
    var i = document.getElementById("p1").value;
    var j = document.getElementById("p2").value;
    if(i!= j)
    {
        alert("Password and Confirm Password should be same.");
        return false;
    }
    alert("Account created successfully");
    return true;
}