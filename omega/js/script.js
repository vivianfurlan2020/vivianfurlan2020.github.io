'use strict'

        //Função inicializadora não é obrigatória no final
        //$(document).ready(function(){

        //ativar o slick
        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
            dots: true
    });

//});

//Ativação do jQuery Mask

    $("#telefone").mask("(00) 0000-0000");
    $("#celular").mask("(00) 00000-0000");

/* Script para o contador de caracteres */
var spanMaximo = $("#maximo");
var bCaracteres = $("#caracteres");
var textMensagem = $("#mensagem");

//Determinando a qtd de caracteres
var quantidade = 300;

//Evento para detectar entrada (digitação) no campo
textMensagem.on("input", function(){
    //Captura em tempo real
    //console.log(textMensagem.val());
    var conteudo =textMensagem.val();

    //Criando uma contagem regressiva
    var contagem =quantidade - conteudo.length;
    console.log(contagem);
    
        // Exibindo a contagem no HTML
        bCaracteres.text(contagem);

        /* Se a contagem chegar no zero,
        exibir o span em vermelho. Caso contrário,
        exibir em preto. */
        if(contagem == 0){
            spanMaximo.css("color", "red");
        } else {
            spanMaximo.css("color", "black");
        }
});

