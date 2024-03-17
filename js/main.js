let nav = document.querySelector("nav");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("activeMenu");
});

let drop = document.querySelectorAll(".drop");

drop.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    drop.forEach((e) => {
      e.classList.remove("showDrop");
    });
    e.classList.toggle("showDrop");
  });

  e.addEventListener("mouseleave", () => {
    e.classList.remove("showDrop");
  });
});



let pagSpans = document.querySelectorAll(".page-link");
pagSpans.forEach((e) => {
  e.addEventListener("click", () => {
    pagSpans.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});

