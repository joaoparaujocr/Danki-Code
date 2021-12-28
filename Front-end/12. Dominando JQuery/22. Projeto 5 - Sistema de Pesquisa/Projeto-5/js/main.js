$(document).ready(function(){
    var currentValue = 0;
    var isDrag = false;
    var precoMax = 70000;
    var precoAtul = 0;

    $('.pointer-barra').mousedown(function(){
        isDrag = true;
    })

    $(document).mouseup(function(){
        isDrag = false;
        enableTextSelection();
    })

    $('.barra-preco').mousemove(function(e){
        if(isDrag){
            disableTextSelection();
            var elementoBase = $(this)
            var mouseX = e.pageX - elementoBase.offset().left;

            if(mouseX < 0)
                mouseX = 0;
            if(mouseX > elementoBase.width())
                mouseX = elementoBase.width();

            $('.pointer-barra').css('left', mouseX + 'px')
            currentValue = (mouseX / elementoBase.width()) * 100;
            $('.barra-preco-fill').css('width', currentValue+'%')

            precoAtul = (currentValue / 100) * precoMax
            $('.preco_pesquisa').html('R$' + precoAtul);
        }
    })

    function disableTextSelection(){
        $('body').css('user-select', 'none');
        $('body').css('-o-user-select', 'none')
        $('body').css('-webkit-user-select', 'none');
        $('body').css('-ms-user-select', 'none');
        $('body').css('-moz-user-select', 'none');
    }

    function enableTextSelection(){
        $('body').css('user-select', 'auto');
        $('body').css('-o-user-select', 'auto')
        $('body').css('-webkit-user-select', 'auto');
        $('body').css('-ms-user-select', 'auto');
        $('body').css('-moz-user-select', 'auto');
    }
})