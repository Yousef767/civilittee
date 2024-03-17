let share = document.getElementById('share');
share.addEventListener('click',()=>{
  let inner = document.createElement('div');
  inner.className ='messageInner';
  let span = document.createElement('span');
  span.innerText='تم نسخ الرابط';
  document.body.appendChild(inner)
  inner.appendChild(span)
  navigator.clipboard.writeText("www.TurboIEG.com");
  setTimeout(()=>{inner.remove()},2000)
})