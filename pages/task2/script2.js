/* Console start */
document.querySelector('#consoleLog').addEventListener('click', function() {
    alert("Пример использования команды console.log") 
});

document.querySelector('.consolelog').addEventListener('click', function() {
    console.log("KON'NICHIWA, Сенсей!")
});
/* Console end */

/* Alert start */
document.querySelector('#alert').addEventListener('click', function() {
    alert("Пример использования команды alert") 
});

document.querySelector('.alert').addEventListener('click', function() {
    alert("Какая чудесная погода!")
});
/* Console end */

/* Prompt start */
let namePrompt;
document.querySelector('#prompt').addEventListener('click', function() {
    namePrompt = prompt("Представьтесь пожалуйста");
});

document.querySelector('.prompt').addEventListener('click', function() {
    prompt(namePrompt + ", да прибудет с вами сила!!!")
});
/* Prompt end */ 