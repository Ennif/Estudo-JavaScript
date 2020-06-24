let num = [5,8,2,9,3]

num [5] = 2 // num.push(2)

//console.log(`Dados do vetor -> ${num.length}`)
//console.log(`Dados do vetor -> ${num[1]}`)



//num.length <-- informa qtdades de valores
//num.sort()  <-- organiza crescente

/*for(var c = 0; c <= num.length ;c++){
    console.log(num[c])
}*/


/*
for ( let pos in num ){  // < -- ultilizado para objetos
    console.log(num[pos])
}
*/

let pos = num.indexOf(9)  // <-- indica posicao do valor,caso nao encontrado = -1
console.log(pos)