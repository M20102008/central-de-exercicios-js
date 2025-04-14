function exemfilter() {

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let numerosFiltrados = numeros.filter(numero => numero > 5);

    console.log(numerosFiltrados);


}

function exemfilte2() {

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 21, 22, 23, 45, 46];

    let numerosMaiorDez = numeros.filter(numero => numero > 10);

    console.log(numerosMaiorDez);


}

function exemfilteNome() {

    let nomes = ["Alberto", "Armani", "Amanda", "Carlos", "Arthur", "Bruna"]

    let nomeComA = nomes.filter(nome => nome.startsWith("A"));

    console.log(nomeComA);


}

function exemprodutos() {
    let produtos = [
        { nome: "Teclado", preco: 120 },
        { nome: "Mouse", preco: 40 },
        { nome: "Fone de ouvido", preco: 80 },
        { nome: "Caderno", preco: 30 }
    ];
    let produtosBaratos = produtos.filter(produto => produto.preco < 50);
    alert(JSON.stringify(produtosBaratos)); // Deve retornar [{ nome: "Mouse", preco: 40 }, { nome: "Caderno", preco: 30 }]
} 

function exemNomes() {
    let Nomes = [
        { nome: "Carlos", idade: 17 },
        { nome: "Mariana", idade: 22 },
        { nome: "João", idade: 15 },
        { nome: "Fernanda", idade: 30 }
    ];
    let maioresdeIdade = nomes.filter(nome => nome.idade >= 18);
    alert(JSON.stringify(maioresdeIdade));  // Deve retornar [{ nome: "Mouse", preco: 40 }, { nome: "Caderno", preco: 30 }]
}