const participant = document.querySelector(".participant");
const split = document.querySelector(".total");
const list = document.querySelector(".sec-1-ul");
const listPay = document.querySelector(".sec-2-ul");
const addBtn = document.querySelector(".btn-add");
const splitBtn = document.querySelector(".btn-split");
const drawBtn = document.querySelector(".btn-draw");
let counter = 1;

const participantArray = [];

const genarateId = () => counter++;

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  participantArray.push({
    id: genarateId(),
    name: participant.value,
    pays: 0,
  });

  participant.value = "";

  const li = document.createElement("li");
  const participantList = participantArray.map((participant) => {
    return `<li>${participant.name}</li>`;
  });

  list.innerHTML = participantList.join("");

  console.log(participantArray);
});

//share the amount by the lenght of the array and add to each one

splitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const addToEach = () => {
    let total = split.value;
    let math = total / participantArray.length;
    return participantArray.map((each) => (each.pays = math));
  };
  addToEach();

  split.value = "";

  const li = document.createElement("li");
  const participantListPay = participantArray.map((participant) => {
    return `<li>${participant.name} pays: ${participant.pays}</li>`;
  });
  listPay.innerHTML = participantListPay.join("");
});

//get the random object

drawBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const getRandom = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const ramdonObject = getRandom(participantArray);

  console.log(ramdonObject);
});
