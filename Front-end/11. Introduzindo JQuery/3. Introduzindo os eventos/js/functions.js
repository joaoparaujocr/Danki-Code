$(window).on('load', function(){

    function cliqueEHover (){
        
        $('.artigo1').click(function () { 
            $('.artigo2').css('background-color', 'green ');
            }
        );

        $('.artigo1').hover(function () {
            $('.artigo2').css('background-color', 'red');
            },function () {
                $('.artigo2').css('background-color', 'rgb(100, 100, 100)');
            }
        );

        $('textarea').focus(function(){
            console.log('Estou dentro do textarea');
        })

        $('textarea').blur(function(){
            console.log('estou fora do textarea');
        })
    }

    function validarFormulario(){
        $('select').change(function () {
            console.log('Select alterado')
        })
    }

    cliqueEHover();
    validarFormulario();
})