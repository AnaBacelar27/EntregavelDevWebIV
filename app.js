
const meuNome = "Seu Nome";


console.log("========== BLOCO 1 – Arrays e Métodos ==========");


console.log("\n--- 1.1 nomes (forEach e map) ---");
const nomes = ["Ana", "Bruno", "Carla"];


nomes.forEach((nome) => {
  console.log(`Olá, ${nome}!`);
});


const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log("Original:  ", nomes);
console.log("Maiúsculas:", nomesMaiusculos);


console.log("\n--- 1.2 precos (filter e reduce) ---");
const precos = [10, 25, 40, 5, 60];


const precosAcimaDe20 = precos.filter((preco) => preco > 20);
console.log("Preços acima de 20:", precosAcimaDe20); 


const somaPrecos = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log("Soma dos preços:", somaPrecos); 


console.log("\n--- 1.3 produtos (array de objetos) ---");
const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caneta", preco: 3 },
  { nome: "Estojo", preco: 25 },
  { nome: "Calculadora", preco: 80 },
];

const nomesProdutos = produtos.map((produto) => produto.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter((produto) => produto.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos);

const totalProdutos = produtos.reduce((total, produto) => total + produto.preco, 0);
console.log(`Soma de todos os preços: R$ ${totalProdutos}`); // R$ 243

produtos.forEach((produto) => {
  console.log(`${produto.nome}: R$ ${produto.preco}`);
});

console.log("\n========== BLOCO 2 – Manipulação do DOM ==========");


console.log("\n--- 2.1 Título ---");
const titulo = document.querySelector("#titulo");
titulo.textContent = `Blog do ${meuNome}`;
console.log("Novo título:", titulo.textContent);


console.log("\n--- 2.2 Parágrafos .texto ---");
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach((paragrafo, indice) => {
  console.log(`Parágrafo ${indice + 1}: ${paragrafo.textContent}`);
});


console.log("\n--- 2.3 innerHTML na #lista ---");
const lista = document.querySelector("#lista");

lista.innerHTML += "<li>Item via innerHTML 1</li><li>Item via innerHTML 2</li>";
console.log("Itens após innerHTML:", lista.querySelectorAll("li").length);


console.log("\n--- 2.4 createElement + append ---");
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);


console.log("\n--- 2.5 classList ---");
terceiroItem.classList.add("destaque");
console.log('Tem a classe "destaque"?', terceiroItem.classList.contains("destaque")); // true


console.log("\n--- 2.6 tarefas (forEach + createElement) ---");
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
const itensTarefas = [];

tarefas.forEach((tarefa) => {
  const li = document.createElement("li");
  li.textContent = tarefa;
  lista.append(li);
  itensTarefas.push(li);
});

itensTarefas[0].classList.add("feito"); 
console.log("Total de itens na lista:", lista.querySelectorAll("li").length);


console.log("\n========== BLOCO 3 – Eventos ==========");
console.log("Interaja com a página para ver os eventos no console.");


const botao = document.querySelector("#botao");
botao.addEventListener("click", () => {
  console.log("Clicou!");
});


botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});


const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", () => {
  console.log("Valor do campo:", campoNome.value);
});


lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log("Item clicado:", e.target.textContent);
  }
});


const itemDinamico = document.createElement("li");
itemDinamico.textContent = "Item criado via JavaScript (clique em mim!)";
lista.append(itemDinamico);


const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const texto = campoTarefa.value.trim();
  if (texto === "") {
    console.log("Campo vazio: nada foi adicionado.");
    return;
  }

  const novoItem = document.createElement("li");
  novoItem.textContent = texto;
  lista.append(novoItem);
  console.log("Tarefa adicionada:", texto);

  campoTarefa.value = "";
  campoTarefa.focus();
});
