function Localizar(){
    result = document.getElementById("cidade").value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${result}&appid=64ed82577ced7f69cb1687f0ce536131`).then(response => {
            return response.json()
        }).then(corpo => {
            console.log(corpo)
            grau = parseInt(corpo.main.temp) - 273,15

            document.getElementById("nome").innerHTML = "<h2>" + corpo.name + "</h2>";
            document.getElementById("temp").innerHTML = "<p>" + grau + "°</p>";

            document.getElementById("vento").innerHTML = corpo.wind.speed + 'km/h';

            document.getElementById("umidade").innerHTML = corpo.main.humidity + ' %';

            document.getElementById("nuvem").innerHTML = corpo.clouds.all;


            if(corpo.cod == 404){
                document.getElementById("nome").innerHTML = "<h3>Cidade não encontrada!</h3>";
            }

            document.getElementById("atributos").style.display = "block";
        })
}
function Mapa(){
    cidade = document.getElementById("cidade").value
    var minusculo = cidade.toLowerCase()
    window.open(`https://earth.google.com/web/search/${minusculo}.com`, "_blank");
}

function datahora(){
    const agora = new Date();

    const dia = agora.getDate();
    const mes = agora.getMonth() + 1;
    const ano = agora.getFullYear();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();
    const segundo = agora.getSeconds();
    var minutoS = "";
    var segundoS = "";

    if (minuto < 10){
        minutoS = "0"+minuto
    }else{
        minutoS = minuto
    }

    if (segundo < 10){
        segundoS = "0"+segundo
    }else{
        segundoS = segundo
    }

    document.getElementById('datahora').innerHTML = `Bem vindo ao consultor de clima. Pesquise por uma cidade e acesse informações sobre o local. Clique no botão de mapa para abrir-lo no Google Earth. Hoje é dia ${dia}/${mes}/${ano} ${hora}:${minutoS}:${segundoS}`
}

function agora(){
    datahora()
    atualizarFundo()
    setInterval(datahora, 1000);
    setInterval(atualizarFundo, 60000);
}

const htmlTag = document.documentElement;
const enviar = document.getElementById('enviar');
const mapa = document.getElementById('mapa');

function atualizarFundo() {
    for(i = 1; i < 25; i++){}
    const hora = new Date().getHours();
    htmlTag.className = ""; 

    if (hora >= 5 && hora < 8) {
        htmlTag.classList.add("cedo");
        enviar.classList.add("cor_cedo");
        mapa.classList.add("cor_cedo");

    } else if (hora >= 9 && hora < 11) {
        htmlTag.classList.add("manha");
        enviar.classList.add("cor_manha");
        mapa.classList.add("cor_manha");

    } else if (hora >= 12 && hora < 15) {
        htmlTag.classList.add("tarde");
        enviar.classList.add("cor_tarde");
        mapa.classList.add("cor_tarde");

    } else if (hora >= 16 && hora < 18) {
        htmlTag.classList.add("entardecer");
        enviar.classList.add("cor_entardecer");
        mapa.classList.add("cor_entardecer");

    } else if (hora >= 18 && hora < 22) {
        htmlTag.classList.add("noite");
        enviar.classList.add("cor_noite");
        mapa.classList.add("cor_noite");

    } else {
        htmlTag.classList.add("madrugada");
        enviar.classList.add("cor_madrugada");
        mapa.classList.add("cor_madrugada");
    }
}