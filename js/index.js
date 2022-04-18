const text = document.querySelector("#text");
const textTwo = document.querySelector("#text_two");
const textThree = document.querySelector("#text_three");
const textFour = document.querySelector("#text_four");
const textFive = document.querySelector("#text_five");

const form = document.querySelector("#form");

const submit = (e) => {
  e.preventDefault();

  const form = {
    text: text.value,
    textTwo: textTwo.value,
    textThree: textThree.value,
    textFour: textFour.value,
    textFive: textFive.value,
  };

  console.log(form);
};

form.addEventListener("submit", submit);
