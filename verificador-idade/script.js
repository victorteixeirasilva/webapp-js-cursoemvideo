function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = window.document.getElementById('txtano');
    let res = window.document.getElementById('res');
    if (fano.value.length == 0 || Number(fano.value > ano)){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let fsex = window.document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = window.document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bb-m.png');
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-m.png');
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-m.png');
            } else {
                //Idosos
                img.setAttribute('src', 'idoso-m.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bb-f.png');
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-f.png');
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-f.png');
            } else {
                //Idosos
                img.setAttribute('src', 'idoso-f.png');
            }
        }
        res.innerHTML = ` Detectamos ${genero} de ${idade} anos.`;
        res.appendChild(img);
    }
}