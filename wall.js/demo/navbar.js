var navbar = document.getElementById("navy");
var x =  document.getElementById("croxx");
// function mymenu() {
//   console.log(x.className);
//   console.log(navbar.style.display);
//   if (x.className === "dog") {
//     x.className = "change";
// } else {
//     x.className = "dog";
// }
// if(  navbar.style.display == "flex"){
//   navbar.style.display = "none";
//
// } else {
//   navbar.style.display = "flex";
//
// }

var mysize  = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

function menu() {
  if(mysize<650){
  if(  navbar.style.display == "flex"){
    navbar.style.display = "none";

  } else {
    navbar.style.display = "flex";

  }
  if (x.className === "dog") {
    x.className = "change";
} else {
    x.className = "dog";
}}
}
// document.getElementByClass("nav-link").addEventListener("click", menu());
