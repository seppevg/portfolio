let previousPage = document.referrer;
// console.log(previousPage);
let projectLinkBack = document.querySelector(".back__indicator");

window.addEventListener("DOMContentLoaded", () => {
  if (previousPage.includes("index")) {
    projectLinkBack.setAttribute("href", "../index.html#projecten");
    // console.log("changed href to index");
    return;
  } else {
    projectLinkBack.setAttribute("href", "../projecten.html");
    // console.log("changed href to projecten");
    return;
  }
});
