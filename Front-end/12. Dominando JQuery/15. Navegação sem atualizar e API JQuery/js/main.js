$(document).ready(function(){

    verificarCliqueMenu();

    function verificarCliqueMenu(){
        $('a').click(function(e){
            e.preventDefault();
            var href = $(this).attr('href');
            $.ajax({
                beforeSend: function(){
                    console.log('Estamos chamando o beforesend')
                },
                timeout: 10000,
                url: href,
                error: function(jqXHR, textStatus, errorThrown){
                    if(jqXHR.statusText == "Not found"){
                        console.log('Página não encontrada');
                    }
                },
                success: function(data){
                    //$('#container').html(data)
                    $('#container div').remove();
                    $(data).appendTo('#container').fadeIn();
                }
            })
        })
    }

})