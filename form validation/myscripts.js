function name() {
  // var x = document.forms["form"]["name"].value;
  // console.log(x);
  //   if (x == "") {
  //       alert("Name must be filled out");
  //       return false;
  //   }
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

  //  var a = document.forms["form"]["age"].value;
    console.log(a);
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

function v(){
let t =  age();
   t = name();
}
