$(window).on('load', function(){

    $('.box1').addClass('minhaclasse');
    //$('.box1').removeClass('minhaclasse');
    $('.box1').removeClass('minhaclasse');

    $('.box1 > .child1 > .child2').css('color', 'purple');

    $('.box1').find('.child1').find('.child2').css('color', 'green');

    
});