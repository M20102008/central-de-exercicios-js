function exemploFor () {
    // for
    //1° Declarar contador
    //2° = Condição (enquanto)
    //3° Incremento
    for (let contador = 1; contador <= 5; contador++) {
    
        alert(contador);
    }
    
    }
    
    function exemplowhile (){
    
        debugger;
    
        let contador = 1;
    
        while(contador <= 5) {
            alert(contador);
        }
    } 
    
    function exemploDoWhile (){
        let contador =1;
    
        do {
    
            alert(contador);
            contador++;
        } while (contador <= 5);
    }
    function exemploDoWhile1 (){
        let contador =1;
    
        do {
    
            alert(contador);
            contador++;
        } while (contador <= 10);
    }
    
    function exemploDoWhile2 (){
        
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
        i++;
    }
    
    
    alert(`A soma dos primeiros ${N} números naturais é: ${soma}`);
    
    }
    
    function exe4(){
        for (let i = 2; i <= 50; i += 2) {
            alert(i);
        }
        
    }
    function exe5() {
        let numero = Number(prompt("Digite um número para iniciar a contagem regressiva:"));
    
        while (numero >= 0) {
            alert(numero);
            numero--;
        }
        alert("Contagem regressiva concluída!");
    }
    
    function intermediario (){
    
        let numeroAleatorio = Math.floor(Math.random() * (100 -1) + 1);
    
        let tentativa;
    
        while (tentativa != numeroAleatorio){
            tentativa = prompt("Insira o número : ");
    
            if (numeroAleatorio > tentativa) {
                alert ("Número aleatorio é maior.");
            } else if (numeroAleatorio < tentativa) {
                alert("Número aleátorio é menor");
            } else {
                alert("Voce acertou!")
            }
    
        }
    }