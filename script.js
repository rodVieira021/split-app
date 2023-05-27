const participant = document.querySelector(".participant");
const split = document.querySelector(".total");
const list = document.querySelector(".sec-1-ul");
const listPay = document.querySelector(".sec-2-ul");
const addBtn = document.querySelector(".btn-add");
const splitBtn = document.querySelector(".btn-split");
const drawBtn = document.querySelector(".btn-draw");
const tipPercent = document.querySelector(".tip-percent");
const payTheTip = document.querySelector(".pay-the-tip");

const participantArray = [];

//Add participant
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  participantArray.push({
    name: participant.value,
  });

  participant.value = "";

  const participantList = participantArray.map((participant) => {
    return `<li>${participant.name}</li>`;
  });

  list.innerHTML = participantList.join("");
});

//share the amount by the lenght of the array
splitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  listPay.innerHTML = `<li>Each person should pay: <span class="each-pay">${
    split.value / participantArray.length
  } eu</span></li>`;
});

//draw the person that pays the tip and add to the individual shared amount
drawBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const getRandom = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
  const ramdonObject = getRandom(participantArray);

  let totalValue = (split.value * tipPercent.value) / 100;

  payTheTip.innerHTML = `<p><span class="person-name">${ramdonObject.name.toUpperCase()}</span> You pay the tip today!!!</p><br>
    <p>You should pay: <span class="to-pay">${
      totalValue + split.value / participantArray.length
    } eu</span></p>`;
  tipPercent.value = "";
});
