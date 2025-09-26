function msg(){
    console.log('Teste de função')
}

console.log(msg())

function soma(n1, n2){
    return n1 + n2
}
console.log("Soma: ", soma(11, 11))

const numeros = [10,20,30,40,50];

function mediaVetorial(nums){
    let soma = 0;

    for(let i = 0; i < nums.length; i++){
        soma += nums[i];
    }
    return soma / nums.length;
}
console.log("Média: ", mediaVetorial(numeros));