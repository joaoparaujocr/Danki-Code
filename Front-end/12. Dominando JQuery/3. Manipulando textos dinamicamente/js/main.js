$(document).ready(function(){
    /*
    var el = $('.box');
    el.html('<div class=\"teste\">Meu elemento</div>');
    var meuTexto = 'Olá Mundo!';
    el.html('<div class=\"teste\">' + meuTexto + '</div>');
    el.html(el.html() + '<h1 class="texto">Meu texto JavaScript</h1>');

    $('.box2').text("<>");
    $('.box2').text($(".box2").text() + "Olá mundo!");

    $('input[type=text]').val("Olá mundo!");
    $('textarea').text('area de texto');
    */

    $('input[type=button]').click(function(){
        var v = $('input[type=text').val();
        //var v2 = v.split('@');
        //console.log((v2))
        //console.log(v.substr(1, 4))

        var splitstr = v.split("@");
        if(splitstr[1] == "hotmail.com"){
            $('input[type=text]').css('opacity', '0');
        }else{
            console.log("A condição não foi satisfeita")
        }
    })
});