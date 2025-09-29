//Função declarativa
function calcular1(a, b) {
  return a * b;
}

//Função anônima
let calcular2 = function (a, b) {
  return a * b;
};

//Arrow function
const calcular3 = (a, b) => a * b;

const numeros = [10, 2, 5, 2, 8, 3];
const novoArray = [];

for (let i = 0; i < numeros.length; i++) {
  novoArray.push(numeros[i] * 2);
}

// Map
const novoArrayMap = numeros.map((numero) => numero * 2);
console.log(novoArrayMap);

//A primeira letra de cada nome usando a função map
const nomes = ["Aline", "Carlos", "Maria", "Jorge"];
// nomes.map(nomes => console.log(nomes[0]));
console.log(nomes.map((nome) => nome.substring(0, 1)));