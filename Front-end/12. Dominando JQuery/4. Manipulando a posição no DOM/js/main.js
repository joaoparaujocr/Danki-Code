$(window).on('load', function(){
    //$('.box').eq(0).append('<h3>Meu elemento adicionado</h3>');

    //var el = $('<h3>Meu conteúdo</h3>').appendTo($('.box'));
    //el.css('color', 'orange');

    // $('.box').prepend('<h3>Olá Mundo</h3>');
    // $('.box').after('<p>Após</p>');
    // $('.box').before('Antes');

    // var t = '<p>Meu conteúdo após</p>';
    // $(t).insertAfter($('.box'));
    // $(t).insertBefore($('.box'));
    
    setTimeout(function(){
        $('.box').eq(1).remove();
    }, 3000)
})