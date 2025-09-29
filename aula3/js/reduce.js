const listaPedidos = [
  { num: 123, status: "Entregue", total: 1000 },
  { num: 124, status: "Entregue", total: 3000 },
  { num: 126, status: "Enviado", total: 4000 },
];

// const totalGeral = listaPedidos.reduce((acumulador, pedido) => {
//   return acumulador + pedido.total;
// }, 0);

// console.log(totalGeral);

console.log(listaPedidos.reduce((acc, pedido) => acc + pedido.total, 0));