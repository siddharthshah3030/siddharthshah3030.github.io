var navbar = document.getElementById("navy");
var x =  document.getElementById("croxx");
function mymenu() {
  console.log(x.className);
  console.log(navbar.style.display);
  if (x.className === "dog") {
    x.className = "change";
} else {
    x.className = "dog";
}
if(  navbar.style.display == "flex"){
  navbar.style.display = "none";

} else {
  navbar.style.display = "flex";

}



}
function menu() {
  if(  navbar.style.display == "none"){
    navbar.style.display = "flex";

  } else {
    navbar.style.display = "none";

  }
  if (x.className === "dog") {
    x.className = "change";
} else {
    x.className = "dog";
}
}
// document.getElementByClass("nav-link").addEventListener("click", menu());
