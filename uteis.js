function exemfilter() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let numerosFiltrados = numeros.filter((numero) => numero > 5);

  console.log(numerosFiltrados);
}

function exemfilte2() {
  let numeros = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 21, 22, 23, 45, 46,
  ];

  let numerosMaiorDez = numeros.filter((numero) => numero > 10);

  console.log(numerosMaiorDez);
}

function exemfilteNome() {
  let nomes = ["Alberto", "Armani", "Amanda", "Carlos", "Arthur", "Bruna"];

  let nomeComA = nomes.filter((nome) => nome.startsWith("A"));

  console.log(nomeComA);
}

function exemprodutos() {
  let produtos = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 40 },
    { nome: "Fone de ouvido", preco: 80 },
    { nome: "Caderno", preco: 30 },
  ];
  let produtosBaratos = produtos.filter((produto) => produto.preco < 50);
  alert(JSON.stringify(produtosBaratos)); // Deve retornar [{ nome: "Mouse", preco: 40 }, { nome: "Caderno", preco: 30 }]
}

function exemplofind1() {
  let produtos = [
    { id: 1, nome: "teclado", preco: 100 },
    { id: 2, nome: "mouse", preco: 50 },
    { id: 2, nome: "monitor", preco: 700 },
  ];
  let produtosFiltrados = produtos.find((produto) => produto.preco == 700);

  console.log(produtosFiltrados);
}

function exemplomap() {
  let numeros = [1, 2, 3, 4, 5];
  let numerosDobrados = numeros.map((numero) => numero * 2);
  console.log(numerosDobrados);
}

function exerciciodemap() {
  const palavras = ["te", "jesus", "ama"];
  const enfatizadas = palavras.map((palavra) => palavra + "!!!");
  console.log(enfatizadas);
}

function exerciciodemap2() {
  const nomes = ["ana", "bruno", "carla"];
  const nomesMaiusculos = Colaborador;
  console.log(nomesMaiusculos);
}
exerciciodemap();
