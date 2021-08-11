let anyText = document.querySelector(".anyText");

function text() {
    let textInfo = prompt("Введите текст");
    anyText.textContent = textInfo;
}
anyText.addEventListener('click', text);

