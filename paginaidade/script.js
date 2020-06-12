function verificar(){

    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        
        var img = document.createElement('img')  //"cria" um elemento <img> no html
        img.setAttribute('id','foto')   //atribui um ID ao elemento "criado" 
        
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade< 10){
                img.src = ('img/criancamenino.jpg')
            }else if (idade < 21){
                img.src = ('img/jovemhomem.jpeg')
            }else if (idade < 60 ){
                img.src = ('img/adultohomem.jpeg')
            }else{
                img.src = ('img/velhohomem.jpeg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
                if (idade >= 0 && idade< 10){
                    img.src = ('img/criancamenina.jpeg')
                }else if (idade < 21) {
                    img.src = ('img/jovemmulher.jgep')
                }else if (idade < 60){
                    img.src = ('img/adulomulher.jpeg')
                }else {
                    img.src = ('img/velhamulher.jpeg')
                }
        }
        

        res.style.textAlign='center'
      
        res.innerHTML = ` ${genero} com ${idade} anos</br>`
        
        res.appendChild(img)
        
    }
}