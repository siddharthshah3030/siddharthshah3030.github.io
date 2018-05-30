
console.log("sid here");

var myInput = document.forms["form"]["password"];
var low = document.getElementById("low");
var cap = document.getElementById("cap");
var num = document.getElementById("num");
var len = document.getElementById("len");

myInput.onkeyup = function() {

  //valiadte lowwer case letters
  var lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)) {
  low.classList.remove("no");
  low.classList.add("yes");
} else {
  low.classList.remove("yes");
  low.classList.add("no");
}

// Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {
  cap.classList.remove("no");

  cap.classList.add("yes");

} else {
  console.log("invalid");
  cap.classList.remove("yes");

  cap.classList.add("no");

}

// Validate numbers
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {
  num.classList.remove("no");

  num.classList.add("yes");

} else {
  num.classList.remove("yes");

  num.classList.add("no");


}

// Validate length
if(myInput.value.length >= 8) {
  len.classList.remove("no");

  len.classList.add("yes");

} else {
  len.classList.remove("yes");

  len.classList.add("no");


}
}

var pass = document.forms["form"]["pass"];
pass.onkeyup = function() {
  a = document.getElementById("pass1").value;
  b = document.getElementById("pass2").value
  if( a===b )
      {    match.classList.remove("no");
          match.classList.add("yes");
      }
      else
      {      match.classList.remove("yes");
            match.classList.add("no");
      }
}
// function hide() {
//     var element = document.getElementById("age");
//     element.classList.add("vis");
// }

// name

var namec = document.getElementById("name");
var names = document.getElementById("names");

namec.onkeyup = function() {
  var x = document.forms["form"]["name"].value;
  var hasNumber = /\d/;
if(  hasNumber.test(x) )
    {
      names.classList.remove("yes");
      names.classList.add("no");
    }
    else
    {
      names.classList.remove("no");
      names.classList.add("yes");
    }

}

var age = document.getElementById("age");
var ages = document.getElementById("ages");

age.onkeyup = function() {
  var a = document.forms["form"]["age"].value;
  var age = parseInt(a, 10);
if(  age<21 )    {
      ages.classList.remove("yes");
      ages.classList.add("no");
    return true;
    }
    else
    {
      ages.classList.remove("no");
      ages.classList.add("yes");
    return false;
    }

}
