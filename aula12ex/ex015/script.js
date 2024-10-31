function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res') // Outra alternativa igual o de cima.
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            sexo = 'masculino'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png')
                res.innerHTML = `Detectamos uma criança do sexo ${sexo} com ${idade} anos.`
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
                res.innerHTML = `Detectamos um jovem do sexo ${sexo} com ${idade} anos.`
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
                res.innerHTML = `Detectamos um adulto do sexo ${sexo} com ${idade} anos.`
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
                res.innerHTML = `Detectamos um idoso do sexo ${sexo} com ${idade} anos.`
            }
        } else if (fsex[1].checked) {
            sexo = 'feminino'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png')
                res.innerHTML = `Detectamos uma criança do sexo ${sexo} com ${idade} anos.`
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
                res.innerHTML = `Detectamos uma jovem do sexo ${sexo} com ${idade} anos.`
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
                res.innerHTML = `Detectamos uma adulta do sexo ${sexo} com ${idade} anos.`
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
                res.innerHTML = `Detectamos uma idosa do sexo ${sexo} com ${idade} anos.`
            }
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}
