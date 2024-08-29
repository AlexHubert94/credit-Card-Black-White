const button = document.getElementsByClassName("button")[0];
const container = document.getElementsByClassName("container")[0];
const body = document.querySelector('body');

button.addEventListener("click", () => {
    button.classList.toggle("button-translate");
    container.classList.toggle("container-color");
    body.classList.toggle('body-toggle')
});

