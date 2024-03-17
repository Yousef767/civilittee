let inputs = document.querySelectorAll(".inp input");

inputs.forEach((e) => {
  e.addEventListener("focus", () => {
    e.parentElement.classList.add("active");
  });
});

inputs.forEach((e) => {
  e.addEventListener("blur", () => {
    if(e.value === ''){
      e.parentElement.classList.remove("active");
    }
  });
});


let select = document.querySelector(".select");
let option = document.querySelector("#option");
let selectInput = document.querySelector("#selectInput");
let selectOptions = document.querySelectorAll(".op");
let nameInner = document.getElementById("name");
let img = document.getElementById("src");

selectOptions.forEach((e) => {
  e.addEventListener("click", () => {
    if(nameInner.innerHTML === "اسم اللجنة"){
      img.style.transform='rotate(0)'
    }
    select.classList.add("activeSelect");
    select.classList.add("bActive");
    let text = e.firstElementChild.innerHTML;
    let imgSrc = e.lastElementChild.src;
    nameInner.innerHTML = text;
    img.src = imgSrc;
    selectInput.value = text;
  });
});

select.addEventListener("click", () => {
  select.classList.toggle("showList");
  select.classList.toggle("bActive");
  if(nameInner.innerHTML === "اسم اللجنة"){
    img.style.transform='rotate(-90deg)'
  }
  
});
select.addEventListener("mouseleave", () => {
  select.classList.remove("showList");
  select.classList.remove("bActive");
  if(nameInner.innerHTML === "اسم اللجنة"){
    img.style.transform='rotate(0)'
  }
});
