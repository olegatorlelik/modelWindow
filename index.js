const name = document.querySelector("#nameForm");
const age = document.querySelector("#ageForm");
const aducation = document.querySelector("#choiseAdukation");
const sendBtn = document.querySelector("#sendBtn");
const closeBtn = document.querySelector("#btnClose");
const windowModel = document.querySelector("#model");
const windowContent = document.querySelector(".model__content");
const formGender = document.querySelector(".radio");
const radioGenderMen = document.querySelector("#genderMen");
const radioGenderWomen = document.querySelector("#genderWomen");
const errorText = document.querySelector("#erorClass");
let genderValue = "";

sendBtn.addEventListener("click", openModel);
closeBtn.addEventListener("click", closeModel);

function openModel() {
  if (name.value === "") {
    errorText.style.display = "block";
  } else {
    windowContent.innerHTML = `Ваше имя: ${name.value}
  Ваш возраст ${age.value}
  Ваше образование: ${aducation.value}
  Ваш возраст ${getValueRadio()}`;
    windowModel.classList.add("open");
    errorText.style.display = "none";
  }
}
function closeModel() {
  windowModel.classList.remove("open");
}

function getValueRadio() {
  for (let elem of formGender) {
    if (elem.checked) {
      genderValue = elem.value;
      break;
    }
  }
  return genderValue;
}
