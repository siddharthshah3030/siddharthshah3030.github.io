function validateForm() {
    var x = document.forms["form"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

console.log("sid here");
