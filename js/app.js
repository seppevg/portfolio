let home = document.getElementById("home");
let about = document.getElementById("about");
let projecten = document.getElementById("projecten");
let contact = document.getElementById("contact");

let homeNav = document.querySelector(".circle__indicator__home");
let aboutNav = document.querySelector(".circle__indicator__about");
let projectenNav = document.querySelector(".circle__indicator__projecten");
let contactNav = document.querySelector(".circle__indicator__contact");

var isInViewport = function (element) {
  var bounding = element.getBoundingClientRect();
  return bounding.top >= -1000 && bounding.left >= -1000;
};

window.addEventListener("hashchange", function () {
  if (window.location.hash == "#home") {
    homeNav.classList.add("active");
    aboutNav.classList.remove("active");
    projectenNav.classList.remove("active");
    contactNav.classList.remove("active");
  } else if (window.location.hash == "#about") {
    homeNav.classList.remove("active");
    aboutNav.classList.add("active");
    projectenNav.classList.remove("active");
    contactNav.classList.remove("active");
  } else if (window.location.hash == "#projecten") {
    homeNav.classList.remove("active");
    aboutNav.classList.remove("active");
    projectenNav.classList.add("active");
    contactNav.classList.remove("active");
  } else if (window.location.hash == "#contact") {
    homeNav.classList.remove("active");
    aboutNav.classList.remove("active");
    projectenNav.classList.remove("active");
    contactNav.classList.add("active");
  }
});

window.addEventListener(
  "mousewheel",
  function (event) {
    if (isInViewport(home)) {
      homeNav.classList.add("active");
      aboutNav.classList.remove("active");
      projectenNav.classList.remove("active");
      contactNav.classList.remove("active");
    } else if (isInViewport(about)) {
      homeNav.classList.remove("active");
      aboutNav.classList.add("active");
      projectenNav.classList.remove("active");
      contactNav.classList.remove("active");
    } else if (isInViewport(projecten)) {
      homeNav.classList.remove("active");
      aboutNav.classList.remove("active");
      projectenNav.classList.add("active");
      contactNav.classList.remove("active");
    } else if (isInViewport(contact)) {
      homeNav.classList.remove("active");
      aboutNav.classList.remove("active");
      projectenNav.classList.remove("active");
      contactNav.classList.add("active");
    }
  },
  false
);
