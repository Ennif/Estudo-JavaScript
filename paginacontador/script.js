




function contador(){
var ini = window.document.getElementById('txtini')
var fim = window.document.getElementById('txtfim')
var pas = window.document.getElementById('txtpass')

var i = Number(ini.value)
var f = Number(fim.value)
var p = Number(pas.value)
var cont = i


    if (pas == 0 || fim ==0 || ini==0){
        res.innerHTML(`Valores Nulos.`)
    }else {
       res.innerHTML = 'Contando : ' 
        if (i < f){
        for (var c= i;c <= f ; c += p ){
            res.innerHTML += `${c} \u{1F449}`
    }

    
        } else{
            for (var c = i; c >= f; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
