const participant = document.querySelector(".participant");
const split = document.querySelector(".total");
const list = document.querySelector(".sec-1-ul");
const addBtn = document.querySelector(".btn-add");
const splitBtn = document.querySelector(".btn-split");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = participant.value;
  list.insertBefore(li, list.children[0]);
  participant.value = "";
});

splitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
