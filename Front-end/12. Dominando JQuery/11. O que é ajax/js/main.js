$(window).on('load', function(){

    $.ajax({
        'url':'conteudo.html',
        //'method': 'post',
        //data{'nome':'guilherme', 'idade':'23'}
    }).done(function(data){
        $('#container').append(data);
    });

});