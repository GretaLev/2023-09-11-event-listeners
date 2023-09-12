let numbersWrapper = document.querySelector("#numbers");

let numberDisplay = document.createElement("h3");
let minusButton = document.createElement("button");
let plusButton = document.createElement("button");
let resetButton = document.createElement("button");
let plus2Button = document.createElement("button");
let minus2Button = document.createElement("button");
let gradeButton = document.createElement("button");
let insertGrade = document.createElement("button");
let input = document.createElement("input");
let gradeValue = document.createElement("ul");

numberDisplay.textContent = 5;

minusButton.textContent = "-";
plusButton.textContent = "+";
minus2Button.textContent = "-2";
plus2Button.textContent = "+2";
numberDisplay.style.color = "green";
resetButton.textContent = "Reset";
gradeButton.textContent = "Grades";
insertGrade.textContent = "Insert grade";
input.value = 5;
input.type = "number";
input.min = 1;
input.max = 10;

numbersWrapper.append(
  numberDisplay,
  minus2Button,
  minusButton,
  resetButton,
  plusButton,
  plus2Button,
  input,
  gradeButton,
  insertGrade,
  gradeValue
);

// gradeValue.prepend(grade);

minusButton.addEventListener("click", function () {
  numberDisplay.textContent = numberDisplay.textContent - 1;
  input.value = numberDisplay.textContent;

  if (numberDisplay.textContent <= 1) {
    minusButton.setAttribute("disabled", true);
  }
  if (numberDisplay.textContent <= 2) {
    minus2Button.setAttribute("disabled", true);
  }
  if (numberDisplay.textContent < 10) {
    plusButton.removeAttribute("disabled");
  }
  if (numberDisplay.textContent < 9) {
    plus2Button.removeAttribute("disabled");
  }
  if (numberDisplay.textContent >= 5) {
    numberDisplay.style.color = "green";
  } else {
    numberDisplay.style.color = "red";
  }
});

minus2Button.addEventListener("click", function () {
  numberDisplay.textContent = Number(numberDisplay.textContent) - 2;
  input.value = numberDisplay.textContent;

  if (numberDisplay.textContent <= 1) {
    minus2Button.setAttribute("disabled", true);
  }

  if (numberDisplay.textContent < 10) {
    plus2Button.removeAttribute("disabled");
  }
  if (numberDisplay.textContent >= 5) {
    numberDisplay.style.color = "green";
  } else {
    numberDisplay.style.color = "red";
  }
});

plusButton.addEventListener("click", function () {
  numberDisplay.textContent = Number(numberDisplay.textContent) + 1;
  input.value = numberDisplay.textContent;

  if (numberDisplay.textContent >= 10) {
    plusButton.setAttribute("disabled", true);
  }
  if (numberDisplay.textContent >= 9) {
    plus2Button.setAttribute("disabled", true);
  }

  if (numberDisplay.textContent > 1) {
    minusButton.removeAttribute("disabled");
  }
  if (numberDisplay.textContent > 3) {
    minus2Button.removeAttribute("disabled");
  }
  if (numberDisplay.textContent >= 5) {
    numberDisplay.style.color = "green";
  } else {
    numberDisplay.style.color = "red";
  }
});

plus2Button.addEventListener("click", function () {
  numberDisplay.textContent = Number(numberDisplay.textContent) + 2;
  input.value = numberDisplay.textContent;

  if (numberDisplay.textContent >= 10) {
    plusButton.setAttribute("disabled", true);
  }

  if (numberDisplay.textContent > 1) {
    minusButton.removeAttribute("disabled");
  }
  if (numberDisplay.textContent >= 5) {
    numberDisplay.style.color = "green";
  } else {
    numberDisplay.style.color = "red";
  }
});
resetButton.addEventListener("click", function () {
  numberDisplay.textContent = 5;
  input.value = numberDisplay.textContent;

  if (numberDisplay.textContent >= 5) {
    numberDisplay.style.color = "green";
  } else {
    numberDisplay.style.color = "red";
  }

  plusButton.removeAttribute("disabled");
  plus2Button.removeAttribute("disabled");
  minusButton.removeAttribute("disabled");
  minus2Button.removeAttribute("disabled");
});

insertGrade.addEventListener("click", function () {
  let grade = document.createElement("li");
  grade.textContent = numberDisplay.textContent;
  gradeValue.prepend(grade);
  grade.style.color = numberDisplay.style.color;
  console.log(numberDisplay.textContent);
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  grade.append(deleteButton);

  deleteButton.addEventListener("click", function () {
    grade.remove();
  });
});
