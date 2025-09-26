var num = 10;
let nome = "Guilherme";
const lotacao = "Petropolis";
idade = 30;

if (num == 10){
    var teste = "Oi";
}
//console.log(teste);

const a = {
    nome: "Guilherme",
    sobrenome: "Silva",
    idade: 30,
    cidade: "Petropolis"
};
//console.log(a);

// comparação fraca ou abstrata
console.log(10==10);

// comparação forte ou estrita
console.log('10'===10);

let medio = 9.5;

//media < 7 reprovado - maior que 7 aprovado - maior que 9 - aprovado com excelencia 
console.log(medio < 9 ? "Aprovado com excelencia" : medio > 7 ? "Aprovado" : "Reprovado");

let statusPedido = "Aguardando Envio";
let statusPagamento = "Pago";

//se statusPedido == Aguardando Envio e statusPagamento == Pago - Entrega liberada senão entrega não liberada.

console.log(statusPedido == "Entregue" && statusPagamento == "Pago" ? "Pedido entregue com sucesso" : "Entrega não liberada");

//Vetor

let times = new Array("Flamengo", "Vasco", "Botafogo", "Fluminense");
let cores = [];
let cursos = ["JavaScript", "PHP", "Java", "Python"];

cores.push("Vermelho", "preto");
cores.unshift("Azul");
cores.sort();
cores.reverse();
console.log(cores);

// for (let i = 0; i < cores.length; i++){
//     console.log(cores[i]);
// }

 cores.forEach((f) => console.log(f));
    console.log(cores[0]);

const livros = [
    {titulo: "JavaScript", 
    autor: "Guilherme", 
    ano: 2020,
    lingua: "PT-BR",
    disponivel: true
},
{
    titulo: "Java",
    autor: "Guilherme",
    ano: 2016,
    lingua: "PT-BR",
    disponivel: true
},
{
    titulo: "Python",
    autor: "Guilherme",
    ano: 2015,
    lingua: "PT-BR",
    disponivel: true
}];
console.log(livros[0].titulo);