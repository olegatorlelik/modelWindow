const name = document.querySelector("#nameForm");
const age = document.querySelector("#ageForm");
const aducation = document.querySelector("#choiseAdukation");
const sendBtn = document.querySelector("#sendBtn");
const closeBtn = document.querySelector("#btnClose");
const windowModel = document.querySelector("#model");
const windowContent = document.querySelector(".model__content");
const formGender = document.querySelectorAll(".radio input");
const radioGenderMen = document.querySelector("#genderMen");
const radioGenderWomen = document.querySelector("#genderWomen");
const errorText = document.querySelector("#erorClass");

console.log(formGender);
sendBtn.addEventListener("click", openModel);
closeBtn.addEventListener("click", closeModel);
name.addEventListener("input", validName);
age.addEventListener("input", validAge);

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
  let saveValueGender;
  [...formGender].forEach(function (elem) {
    if (elem.checked) {
      saveValueGender = elem.value;
    }
  });
  return saveValueGender;
}

function validName() {
  name.classList.remove("error-text");
  name.classList.remove("no-error-text");
  if (Number(name.value)) {
    name.classList.add("error-text");
  } else if (!Number(mame.value)) {
    name.classList.add("no-error-text");
  }
}
function validAge() {
  age.classList.remove("error-text");
  age.classList.remove("no-error-text");
  if (Number(age.value)) {
    age.classList.add("no-error-text");
  } else if (!Number(age.value)) {
    age.classList.add("error-text");
  }
}
