
console.log("sid here");

var myInput = document.forms["form"]["password"];
var low = document.getElementById("low");
var cap = document.getElementById("cap");
var num = document.getElementById("num");
var len = document.getElementById("len");

myInput.onkeyup = function() {
  var one = this;

  //valiadte lowwer case letters
  var lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)) {
low.classList.remove("no");
  low.classList.add("yes");
  submit();
} else {

  low.classList.remove("yes");
  low.classList.add("no");
  submit();
}

// Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {
  cap.classList.remove("no");

  cap.classList.add("yes");
  submit();

} else {
  cap.classList.remove("yes");

  cap.classList.add("no");
  submit();

}

// Validate numbers
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {
  num.classList.remove("no");

  num.classList.add("yes");
  submit();

} else {
  num.classList.remove("yes");

  num.classList.add("no");
  submit();


}

// Validate length
if(myInput.value.length >= 8) {
  len.classList.remove("no");

  len.classList.add("yes");
  submit();

} else {
  len.classList.remove("yes");
  submit();

  len.classList.add("no");
  submit();


}
}

var pass = document.forms["form"]["pass"];
pass.onkeyup = function() {
  var two = this;
  a = document.getElementById("pass1").value;
  b = document.getElementById("pass2").value
  if( a===b )
      {    match.classList.remove("no");
  match.classList.add("yes");
  submit();
      }
      else

      {
         match.classList.remove("yes");
            match.classList.add("no");
            submit();
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
  var three = this;
  var x = document.forms["form"]["name"].value;
  var hasNumber = /\d/;
if(  hasNumber.test(x) )

{
      names.classList.remove("yes");
      names.classList.add("no");
      document.getElementById("names").innerHTML = "numbers ain't allowed"

    submit();  }
    else

    {
      names.classList.remove("no");
      names.classList.add("yes");
      document.getElementById("names").innerHTML = "name is fine"
      submit();

    }

}

var age = document.getElementById("age");
var ages = document.getElementById("ages");

age.onkeyup = function() {
  var four = this;

  var a = document.forms["form"]["age"].value;
  var age = parseInt(a, 10);
if(  age<21 )    {
      ages.classList.remove("yes");

      ages.classList.add("no");
      submit();
      document.getElementById("ages").innerHTML = "must be above 20"

    }
    else if (  age > 99) {
      ages.classList.remove("yes");

      ages.classList.add("no");
      submit();
      document.getElementById("ages").innerHTML = "above 99, sorry but you're way more older"
    }
    else
    {

      ages.classList.remove("no");
      ages.classList.add("yes");
      document.getElementById("ages").innerHTML = "congrats you're old enough for this site"

      submit();
    }

}


email.onkeyup = function() {
  var five = this;

  var email = document.getElementById("email");
  var evalue  = document.forms["form"]["email"].value;
  var emails = document.getElementById("emails");
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(filter.test(evalue)){
  emails.classList.remove("no");
  emails.classList.add("yes");
  submit();
  document.getElementById("emails").innerHTML = "it looks fine email"


} else {
  emails.classList.remove("yes");
  emails.classList.add("no");
  submit();
  document.getElementById("emails").innerHTML = "Don't give a fake mail, please"


  submit();

}
}
var sub = document.getElementById("submitb");

 function submit() {
  var so = document.getElementsByClassName('no');
if (so.length > 0) {
  document.getElementById("h4").innerHTML = "form not filled properly"

  sub.classList.remove("hi")
  sub.classList.add("disable")

  console.log("disable")
}
  else if( myInput.value && pass.value && namec.value && age.value  ) {
    console.log("hi")
    document.getElementById("h4").innerHTML = "form filled correctly and congrats"

    sub.classList.remove("disable")
    sub.classList.add("hi")
  }
  else {
    document.getElementById("h4").innerHTML = "kindly fill all the fields"

    sub.classList.remove("hi")
    sub.classList.add("disable")
    console.log("disable")
  }
}
