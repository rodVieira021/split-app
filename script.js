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

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  participantArray.push({
    name: participant.value,
    pays: 0,
  });

  participant.value = "";

  const participantList = participantArray.map((participant) => {
    return `<li>${participant.name}</li>`;
  });

  list.innerHTML = participantList.join("");
});

//share the amount by the lenght of the array and add to each one

splitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // split.value = "";
  listPay.innerHTML = `<li>Each person should pay: ${
    split.value / participantArray.length
  }</li>`;
});
//get the random object

drawBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const getRandom = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
  const ramdonObject = getRandom(participantArray);

  let totalValue = (split.value * tipPercent.value) / 100;

  payTheTip.innerHTML = `<p>Congratulations ${
    ramdonObject.name
  } you pay the tip today</p><br>
    <p>You should pay: ${
      totalValue + split.value / participantArray.length
    }</p>`;
});
