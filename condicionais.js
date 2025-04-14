function exerc01() {


    let numero = prompt("Digite um número");

    if (numero > 0) {
        alert("Positivo");

    }
    else {
        if (numero < 0) {
            alert("Negativo");
        }
        else {
            alert("É zero")
        }
    }
    gerarLog("Exercicios 2 execultado: " + new Date().toLocaleString() );
}

function exerc02() {
    let numero = prompt("Digite sua idade");

    if (numero > 18) {
        alert("Voce é de maior");
    }
    else {
        if (numero < 18) {
            alert("Voce e de menor");
        }
        else {
            alert("É de maior")
        }
    }
gerarLog("Exercicios 1 execultado: " + new Date().toLocaleString() );
}

function exerc03() {

    let numero = prompt("Digite um número");

    if (numero % 2 === 0) {
        alert("O número " + numero + " é par.");
    } else {
        alert("O número " + numero + " é ímpar.");
    }
    gerarLog("Exercicios 3 execultado: " + new Date().toLocaleString() );
}

function exerc04() {

    let numero = prompt("Insira a nota");

    if (numero >= 60) {
        alert("Aprovado");
    } else {
        if (numero <= 60) {
            alert("Reprovado")
        }
    }
    gerarLog("Exercicios 4 execultado: " + new Date().toLocaleString() );
}

function exerc05() {
    let numero = prompt("Digite um número");

    if (numero > 0) {
        alert("Positivo");

    }
    else {
        if (numero < 0) {
            alert("Negativo");
        }

    }
    gerarLog("Exercicios 5 execultado: " + new Date().toLocaleString() );
}

function exerc06() {
    let numero = prompt("Digite sua idade");

    if (numero >= 18) {
        alert ("adulto");

    } else {
        if (numero >= 13) {
            alert ("adolecente");
        } else {
                alert ("criança");
            
        }

    }
    gerarLog("Exercicios 6 execultado: " + new Date().toLocaleString() );
} 

function exerc07 (){
    debugger
let numero1 =Number (prompt ("Digite o primeiro número:"));

let operacao = prompt("Digite a operação (+, -, *, /):");

let numero2 = Number(prompt("Digite o segundo número:"));


if (operacao === "+") {
    resultado = numero1 + numero2;
} else if (operacao === "-") {
    resultado = numero1 - numero2;
} else if (operacao === "*") {
    resultado = numero1 * numero2;
} else if (operacao === "/") {
    resultado = numero1 / numero2;
}
alert("O resultado é: " + resultado);

gerarLog("Exercicios 7 execultado: " + new Date().toLocaleString() ); 
}

function exerc08 (){
    let valor = prompt("Digite o valor de sua compra");
   
    if (valor >=100 ) {
        valor = valor * 0,10;
        alert("Desconto aplicado!")
    } else {
        alert("desconto não aplicado")
    }
    gerarLog("Exercicios 8 execultado: " + new Date().toLocaleString() );      
}

function gerarLog(textodoLog) {

    let Container = document.querySelector(".logs-container");

    let paragraph = document.createElement("p");

    paragraph.innerHTML = textodoLog;

    Container.appendChild(paragraph);
}
gerarLog("Exercicios execultado: " + new Date().toLocaleString() );





















