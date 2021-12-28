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
            precoAtul = formatarPreco(precoAtul)
            $('.preco_pesquisa').html('R$' + precoAtul);
        }
    })

    function formatarPreco(precoAtul){
        precoAtul = precoAtul.toFixed(2);
        precoArr = precoAtul.split('.');

        var novoPreco = formatarTotal(precoArr);
        return novoPreco;
    }

    function formatarTotal(precoArr) {
        if(precoArr[0] < 1000){
            return precoArr[0] + ',' + precoArr[1]
        }else if(precoArr[0] < 10000){
            return precoArr[0][0] + '.' + precoArr[0].substr(1, precoArr[0].length) + ',' + precoArr[1];
        }else{
            return precoArr[0][0] + precoArr[0][1] + '.' + precoArr[0].substr(2, precoArr[0].length) + ',' + precoArr[1]
        }
    }

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