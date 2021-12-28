$(document).ready(function(){

    var currentIndex = 0;
    var numberOfImages = $('.slider img').length;

    insertImg();
    selectSlider();

    function insertImg(){
        for(var i = 0; i < numberOfImages; i++){
            if(i == 0){
                $('.bullets-nav').append('<span style="background-color: black;"></span>')
            }else{
                $('.bullets-nav').append('<span></span>')
            }
        }

        $('.slider img').eq(0).fadeIn();
        setInterval(function(){
            switchImage();
        },3000)
    }

    function switchImage(){
        $('.slider img').eq(currentIndex).stop().fadeOut();
        $('.bullets-nav span').eq(currentIndex).css('background-color', '');
        currentIndex += 1
        if(currentIndex == numberOfImages)
            currentIndex = 0;
        $('.slider img').eq(currentIndex).stop().fadeIn();
        $('.bullets-nav span').eq(currentIndex).css('background-color', 'black');
    }

    function selectSlider(){
        $('.bullets-nav span').click(function(){
            $('.slider img').eq(currentIndex).stop().fadeOut();
            $('.bullets-nav span').eq(currentIndex).css('background-color', '');
            currentIndex = $(this).index();
            $('.bullets-nav span').eq(currentIndex).css('background-color', 'black');
            $('.slider img').eq(currentIndex).stop().fadeIn();

        })
    }

})