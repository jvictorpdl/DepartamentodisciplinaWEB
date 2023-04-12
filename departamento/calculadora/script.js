let display = document.getElementById("result");
let expression = "";

function addValue(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = "";
  display.value = "";
}

function calculate() {
  display.value = eval(expression);
}
