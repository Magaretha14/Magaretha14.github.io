
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

let section1 = document.querySelectorAll("section");
let navLinks1 = document.querySelectorAll("header .navbar a");

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header .navbar a[href*=" + id + "]").classList.add("active");
      });
    }
  });
};



function TampilAlert(){
  var nama = document.getElementById("nama").value;
  var number = document.getElementById("number").value;
  var stuff = document.getElementById("stuff").value;
  var size = document.getElementById("size").value;
  var order = document.getElementById("order").value;
  var time = document.getElementById("time").value;
  var address = document.getElementById("address").value;
  var message = document.getElementById("message").value;

  alert(
    "Your Name : " + nama +
    "\nYour Order : " + stuff +
    "\nHow Much : " + order +
    "\nYour Number : " + number +
    "\nYour Size : " + size +
    "\nDate and Time : " + time +
    "\nYour Address : " + address +
    "\nYour Message : " + message
  );
}
