$(document).ready(function(){

    $(window).scroll(function(){
        var windowOffY = $(window).scrollTop();
        var windowHeight = $(window).height();
        $('.section').each(function(){
            var elOffY = $(this).offset().top;
            console.log('windowOffY:' + windowOffY + ' windowHeight:' + windowHeight + '/ elOffY:' + (elOffY+30) + '/ windowOffY + windowHeight:' + (windowOffY + windowHeight) + ' /Ultima formula: ' + (elOffY + 30 + $(this).height()))
            if(elOffY + 30 < (windowOffY + windowHeight) && elOffY + 30 + $(this).height() > windowOffY){
                //console.log('Estamos na sessão' + $(this).attr('target'));
                $('a').css('border-bottom', '0');
                var target = $(this).attr('target');
                $('.'+target).css('border-bottom', '1px solid black');
            }
        })
    })

})