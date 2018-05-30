function name() {

    var x = document.forms["form"]["name"].value;
    var hasNumber = /\d/;
  if(  hasNumber.test(x) )

      {
        alert('Please input alphabet characters only');
      return true;
      }
      else
      {
        alert('Your name have accepted : you can try another');
      return false;
      }
}

console.log("sid here");


function age() {
  a = document.getElementById("age").value;
    var age = parseInt(a, 10);
  if(  age<21 )

      {
        alert('age must be greater then 20');
      return true;
      }
      else
      {
        alert('age is fine');
      return false;
      }
}
function pa() {
  var myInput = document.forms["form"]["password"];

  //valiadte lowwer case letters
  var lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)) {
} else {
  console.log("invalid");
}

// Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {
} else {
  console.log("invalid");

}

// Validate numbers
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {
} else {
  console.log("invalid");

}

// Validate length
if(myInput.value.length >= 8) {
} else {
  console.log("invalid");

}
}

function pass() {
  a = document.getElementById("pass1").value;
  b = document.getElementById("pass2").value
  if( a===b )

      {
        alert('password');
      return true;
      }
      else
      {
        alert('not same password');
      return false;
      }
}
function hide() {
    var element = document.getElementById("age");
    element.classList.add("vis");
}


var namec = document.getElementById("name");
var names = document.getElementById("names");

namec.onkeyup = function() {
  var x = document.forms["form"]["name"].value;
  var hasNumber = /\d/;
if(  hasNumber.test(x) )
    {
      names.classList.remove("yes");
      names.classList.add("no");
    return true;
    }
    else
    {
      names.classList.remove("no");
      names.classList.add("yes");
    return false;
    }

}
hide();
function v(){
// let t =  age();
//    t = name();
   t = pass();
   t = pa();
}
