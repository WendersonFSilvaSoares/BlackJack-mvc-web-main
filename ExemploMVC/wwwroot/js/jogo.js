let vitoria1 = document.getElementById("vitorias1");
let cartas1 = document.getElementById("cartas1");
let pontos1 = document.getElementById("jogador1");
let btn_jogador1 = document.getElementById("btn_jogador_1");
let btn_parar1 = document.getElementById("btn_parar_1");

let vitoria2 = document.getElementById("vitorias2");
let cartas2 = document.getElementById("cartas2");
let pontos2 = document.getElementById("jogador2");
let btn_jogador2 = document.getElementById("btn_jogador_2");
let btn_parar2 = document.getElementById("btn_parar_2");

let aTie = document.getElementById("aTie")

let total1 = 0
let total2 = 0

let vitoriaTotal1 = 0
let vitoriaTotal2 = 0

let totalATie = 0

$(btn_jogador1).attr('disabled', 'disabled');
$(btn_jogador2).attr('disabled', 'disabled');

$(btn_parar1).attr('disabled', 'disabled');
$(btn_parar2).attr('disabled', 'disabled');

function iniciar() {
    $(cartas1).attr("src", '/images/0.png');
    $(cartas2).attr("src", '/images/0.png');

    $(btn_jogador1).removeAttr('disabled');
    $(btn_parar1).removeAttr('disabled');

    $(pontos1).text(0);
    $(pontos2).text(0);

    total1 = 0;
    total2 = 0;
}

function reiniciar() {
    iniciar()
    $(vitoria1).text(0)
    $(vitoria2).text(0)
    $(aTie).text(0)
}

function vitoriaJogador1() {
    alert("JOGADOR 1 GANHOU!")
    vitoriaTotal1 = vitoriaTotal1 + 1
    $(vitoria1).text(vitoriaTotal1)
}

function vitoriaJogador2() {
    alert("JOGADOR 2 GANHOU!")
    vitoriaTotal2 = vitoriaTotal2 + 1
    $(vitoria2).text(vitoriaTotal2)
}

function vitoria() {
    if (total1 === 19 && total2 === 20) {
        vitoriaJogador2()
    } else if (total1 === 19 && total2 === 21) {
        vitoriaJogador2()
    } else if (total1 === 20 && total2 === 21) {
        vitoriaJogador2()
    } else if (total1 < 19 && total2 === 19) {
        vitoriaJogador2()
    } else if (total1 < 19 && total2 === 20) {
        vitoriaJogador2()
    } else if (total1 < 19 && total2 === 21) {
        vitoriaJogador2()
    } else if (total2 === 19 && total1 === 20) {
        vitoriaJogador1()
    } else if (total2 === 19 && total1 === 21) {
        vitoriaJogador1()
    } else if (total2 === 20 && total1 === 21) {
        vitoriaJogador1()
    } else if (total2 < 19 && total1 === 19) {
        vitoriaJogador1()
    } else if (total2 < 19 && total1 === 20) {
        vitoriaJogador1()
    } else if (total2 < 19 && total1 === 21) {
        vitoriaJogador1()
    } else {
        alert("EMPATE!!!")
        totalATie = totalATie + 1
        $(aTie).text(totalATie)
    }
}

function valorAleatorio() {
    let random = Math.random() * (13 - 1) + 1

    return Math.floor(random)
}

function jogador1() {
    let random = valorAleatorio();
    total1 = total1 + random

    $(cartas1).attr("src", '/images/' + random + '.png');
    $(pontos1).text(total1);

    if (total1 >= 21) parar1()
}

function parar1() {
    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');
}

function jogador2() {
    let random = valorAleatorio();
    total2 = total2 + random

    $(cartas2).attr("src", '/images/' + random + '.png');
    $(pontos2).text(total2);

    if (total2 >= 21) parar2()
}

function parar2() {
    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');

    vitoria()
}