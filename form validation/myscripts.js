function validateForm() {
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

 
