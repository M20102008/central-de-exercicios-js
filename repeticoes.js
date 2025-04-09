function exemplofor() {
    //FOR
    //1o = declarar contador.
    //2o = Condição (enquanto).
    //3o = Incremento.

    for (let contador = 1; contador <= 5; contador++) {

        alert(contador);
    }

}

function exemplowhile() {

    let contador = 1;

    while (contador <= 5) {

        console.log(contador);
        contador++
    }

}

function exenploDowhile() {

    let(contador = 1);

    do {

        alert(contador);
        contador++

    } while (contador <= 5);


}


























function exerciciorp01() {


    let contador = 1;

    while (contador <= 10) {

        alert(contador);
        contador++
    }

}

function exerciciorp02() {


    let numero = Number(prompt("Digite um número para ver a tabuada:"));


    for (let i = 1; i <= 10; i++) {
        alert(`${numero} x ${i} = ${numero * i}`);

    }
}

function exerciciorp03() {

    let N = prompt("digite o numero N")
    let soma = 0;
    let i = 1;

    while (i <= N) {

        soma += i;
        i++
    }
    console.log("A soma dos primeiros " + N + " números naturais é: " + soma);

}

function exerciciorp04() {

    let i = 1;

    while (i <= 50) {

        if (i % 2 === 0) {

            console.log(i);
        }

        i++;
    }
}

function exerciciorp05() {

    let numero = Number(prompt("Digite um número para iniciar a contagem regressiva:"));

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
    console.log("Contagem regressiva concluída!");

}
