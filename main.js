//Selecciona pantalla de la calculadora
let display = document.getElementById("display");

//Agrega el carácter al final del display
function appendCharacter(character) {
  display.value += character;
}
//Borra el contenido del display
function clearDisplay() {
  display.value = "";
}
//Borra el último carácter
function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

//Calcula el resultado
function calculateResult() {
  let result;
  try {
    result = eval(display.value);
  } catch (error) {
    result = "Error";
  }
  display.value = result;
}
