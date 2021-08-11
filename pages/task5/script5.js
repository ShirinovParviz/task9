//Возврат текста в строку
let textElement;
let input = document.getElementById("inputtxt");
let newtext = document.getElementById("duplicateField");
input.onkeyup = function() {
  textElement = input.value;
  newtext.textContent = textElement;
};
input.onkeyup();

//Возврат текста в консоль
document.querySelector('.btn').addEventListener('click', function() {
  let btn = textElement;
  console.log(btn);
});

//Удаление текста из формы
document.querySelector('.btn').addEventListener('click', function(event) {
  newtext.textContent = event.preventDefault();
});

document.querySelector(".clearBtn").addEventListener('click', function() {
  input.value = "";
});




