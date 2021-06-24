const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const content = document.querySelector(".content");

open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));
content.addEventListener("click", () => container.classList.remove("show-nav"));
//  container.addEventListener('click',() => {
//      if (container.classList.contains('show-nav')) {
//          return container.classList.remove('show-nav')
//      }
//  })
