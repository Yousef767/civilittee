let notAa = document.getElementById("notAa");
notAa.addEventListener("click", () => {
  let random = Math.random();
  document.body.innerHTML += `<div class="infoMgs" id="${random}">
  <div class="msCont">هذا الخيار غير متاح حاليا</div>
</div>`;
  let ele = document.getElementById(random);
  setTimeout(() => {
    ele.remove();
  }, 2500);
});
