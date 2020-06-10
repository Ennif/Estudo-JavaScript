

/*var pais = 'Brasil'
console.log(`Seu Pais de origem é ${pais}`)

if (pais == 'Brasil'){
    console.log('Brasileiro')
} else{
    console.log('Estrangeiro.')
}*/


/*var vel = 6.5
console.log(`a velocidade é ${vel}km/h`)

if ( vel > 60){
    console.log(`Atingiu limite de velocidade.`)
}*/

/*
var idade = 81

if (idade < 16){
    console.log('Não Vota')
}   else {
        if( idade < 18 || idade>80){       //Aninhadas
                console.log ('opcional')
            }else {
                console.log ('Obrigatório')
            }
}
*/

/*
var agora = new Date()
var hora = agora.getHours()
console.log(`Hora atual ${hora}.`)

    if (hora < 12){
        console.log( 'bom dia')

    }else{
        console.log('boa tarde')
    }
    */


var agora = new Date()
var diasem = agora.getDay()
console.log(diasem)

switch(diasem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('DIA INVALIDO ERRO')
        break

}