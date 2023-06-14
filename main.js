let display = document.getElementById("display");

function appendCharacter(character) {
  display.value += character;
}

function clearDisplay() {
  display.value = "";
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

function deleteAllCharacters() {
  display.value = "";
}

function calculateResult() {
  let result;
  try {
    result = eval(display.value);
  } catch (error) {
    result = "Error";
  }
  display.value = result;
}
