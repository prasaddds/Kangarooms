
function a() {
    var mail =
            document.forms["RegForm"]["Email"];
  var password=document.RegForm.Password.value;  
            var sd =
            document.forms["RegForm"]["StartingDate"];
            var ed =
            document.forms["RegForm"]["EndingDate"];


        if (mail.value == "") {
            alert("Please enter your mail");
            return false;
        }
if(password.length<6)
{
  alert("Your password should have minimum 6 characters");
  return false;
}
if (sd.value == "")
{
            alert("Enter starting date");
            return false;
        }
if (ed.value == "")
{
            alert("Enter last date");
            return false;
        }
let str1 = sd.value;
let str2 = ed.value;
str1.localeCompare(str2);
if(str1>str2)
{
    alert("Ending Date should be x days after starting date");
    return false;
}
        alert("Thankyou")
        return true;
    }