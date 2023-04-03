// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry"); 
const btnReset = document.querySelector("#btnReset"); 
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

console.log(randomNumber)

// Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", resetClickEnter)

function handleTryClick(event) {
    event.preventDefault(); // Não recarregar a pagina ao ser clicado

    const inputNumber = document.querySelector("#inputNumber");

    if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
        alert("DIGITE ENTRE 0 E 10 CARAI")
    }

    if(Number(inputNumber.value) === randomNumber) {
        toggleScreen()

        let tentativa = "tentativas"
        if(xAttempts == 1) {
            tentativa = "tentativa"
        }

        screen2.querySelector("h2").innerText = `
            Parabéns, você acertou em ${xAttempts} ${tentativa}
        `
    }

    inputNumber.value = "";
    xAttempts++;
}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1;
    randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function resetClickEnter(e){
    if(e.key == "Enter" && screen1.classList.contains("hide")) {
        handleResetClick()
    }
}