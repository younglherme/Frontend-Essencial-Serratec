const pessoas = [
  { nome: "João", idade: 25, cidade: "Rio de Janeiro" },
  { nome: "Ana", idade: 15, cidade: "Juiz de Fora" },
  { nome: "Paulo", idade: 56, cidade: "Juiz de Fora" },
  { nome: "Igor", idade: 23, cidade: "Petropolis" },
];

// Filtrar quais pessoas moram em Juiz de Fora
// const moradoresJuizFora = pessoas.filter(
//   (pessoa) => pessoa.cidade === "Juiz de Fora" && pessoa.idade >= 18
// );
// console.log(moradoresJuizFora);

// const buscarPessoa = (pessoas.find((p) => p.idade >= 18));
// console.log(buscarPessoa);

// const filtroNome = pessoas.filter((pessoa) =>
//   pessoa.nome.toUpperCase().toLowerCase().startsWith("p")
// );
// console.log(filtroNome);

const a = 1000;
const b = "teste";
// console.log("Resultado: " + a + " - " + b);
console.log(`Resultado: ${a} - ${b}`);