let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
  passwordVerify(password,2,"Password does not match the required format ");
  
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";


    
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
let passwordVerify=(id,serial,message)=>{
  var lowerCaseLetters = /[a-z]/g;
  if (password.value.match(lowerCaseLetters)) {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

     failureIcon[serial].style.opacity="0";
     successIcon[serial].style.opacity="1";

  } else {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
    failureIcon[serial].style.opacity="1";
    successIcon[serial].style.opacity="0";

  }
  var upperCaseLetters = /[A-Z]/g;
  if (password.value.match(upperCaseLetters)) {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

     failureIcon[serial].style.opacity="0";
     successIcon[serial].style.opacity="1";
  } else {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
    failureIcon[serial].style.opacity="1";
    successIcon[serial].style.opacity="0";
  }
  var numbers = /[0-9]/g;
  if (password.value.match(numbers)) {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

     failureIcon[serial].style.opacity="0";
     successIcon[serial].style.opacity="1";
  } else {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
    failureIcon[serial].style.opacity="1";
    successIcon[serial].style.opacity="0";
  }
};
