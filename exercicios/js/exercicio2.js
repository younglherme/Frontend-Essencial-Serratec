let num = [1, 2, 2, 4, 7, 6, 7, 8, 9, 10];

num.slice(2, 7);

console.log(num);

num.filter((value, index, array) => {
  return array.indexOf(value) === index;
});