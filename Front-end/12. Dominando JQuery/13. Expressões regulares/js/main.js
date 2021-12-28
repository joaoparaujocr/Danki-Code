$(window).ready(function(){
    /*
    var frase = 'joaoaraujo@hotmail.com';
    //var verifica = frase.match(/[A-Za-z0-9]/);
    var verifica = frase.match(/^(.*?)@(.*?)$/);
    if(verifica != null){
        console.log('encontramos algo');
        console.log(verifica[1]);
        console.log(verifica[2]);
        console.log(verifica[3]);
    }else{
        console.log('não encontramos nada');
    }*/
    abrirJanela();
    fecharJanela();

    function abrirJanela(){
        $('.btn').click(function(e){
            $('.bg').fadeIn();
            e.stopPropagation();
        });
    };

    function fecharJanela(){
        $('body, .btn-close').click(function(e){
            $('.bg').fadeOut();
            e.stopPropagation();
        });
        $('.form').click(function(e){
            e.stopPropagation();
        });
    };

    $('form#form1').submit(function(e){
        e.preventDefault();
        var nome = $('input[name=nome]').val().toUpperCase();
        var telefone = $('input[name=telefone').val();
        var email = $('input[name=email]').val();

        var amountNome = nome.split(' ').length;
        var splitStr = nome.split(' ');
        console.log(splitStr);
        if(amountNome >= 2){
            for(var i = 0; i < amountNome; i++){
                if(splitStr[i].match(/^[A-Z]{1,}$/)){
                    console.log('condição bateu');
                    return false
                } else {
                    campoInvalido($('input[name=nome]'));
                    return false;
                }
            }
        }else{
            campoInvalido($('input[name=nome]'));
            return false;
        }

        return false;
        //Se chegou até o final esta tudo okay!
    });

    function campoInvalido(el){
        el.css('border', 'solid red 3px');
        el.val('Campo Invalido');
        el.data('invalido', 'true');
    }
})