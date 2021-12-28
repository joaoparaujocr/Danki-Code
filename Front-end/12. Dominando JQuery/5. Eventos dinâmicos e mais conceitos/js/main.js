$(document).ready(function () {
    /*
    $('a').click(function() {
        $('div.teste').css('display', 'block')
        return false;
    });
    $('a').click(function(){
        alert('Olá Mundo!');
    });

    $('body').on('click', 'a', function(){
        alert('Olá Mundo!');
        return false;
    })
    $('body').html('<a href="">Meu link!</a>');
    */

    var func = function(){
        $(this).css('background', 'green');
    }

    
    $('input[name=nome_pessoa]').keyup(func).blur(function(){
        $('input[name=nome_pessoa]').css('background', 'white');
    });

});