function exerc01() {


    let numero = prompt("Digite um número");

    if (numero > 0) {
        console.log("Positivo");

    }
    else {
        if (numero < 0) {
            console.log("Negativo");
        }
        else {
            console.log("É zero")
        }
    }

}

function exerc02() {
    let numero = prompt("Digite sua idade");

    if (numero > 18) {
        console.log("Voce é de maior");
    }
    else {
        if (numero < 18) {
            console.log("Voce e de menor");
        }
        else {
            console.log("É de maior")
        }
    }

}

function exerc03() {

    let numero = prompt("Digite um número");

    if (numero % 2 === 0) {
        console.log("O número " + numero + " é par.");
    } else {
        console.log("O número " + numero + " é ímpar.");
    }

}

function exerc04() {

    let numero = prompt("Insira a nota");

    if (numero >= 60) {
        console.log("Aprovado");
    } else {
        if (numero <= 60) {
            console.log("Reprovado")
        }
    }

}

function exerc05() {

    let numero = prompt("Digite um número");

    if (numero > 0) {
        console.log("Positivo");

    }
    else {
        if (numero < 0) {
            console.log("Negativo");
        }

    }
}

function exerc06() {

    let numero = prompt("Digite sua idade");

    if (numero >= 18) {
        alert("adulto");

    } else {
        if (numero >= 13) {
            alert("adolecente");
        } else {
            alert("criança");

        }

    }

}

function exerc07() {

    let numero1 = Number(prompt("Digite o primeiro número:"));

    let operacao = prompt("Digite a operação (+, -, *, /):");

    let numero2 = Number(prompt("Digite o segundo número:"));


    if (operacao === "+") {
        resultado = numero1 + numero2;
    } else if (operacao === "-") {
        resultado = numero1 - numero2;
    } else if (operacao === "*") {
        resultado = numero1 * numero2;
    } else if (operacao === "/") {
        resultado = numero1 / numero2
    }
    alert("O resultado é: " + resultado);

}

function exerc08() {

    let valor = prompt("Digite o valor de sua compra");

    if (valor >= 100) {
        valor = valor * 0, 10;
        alert("Desconto aplicado")
    } else {
        alert("desconto não aplicado")
    }

}

exerc08()





















