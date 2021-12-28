$(window).on('load', function() {
    $('.mosaico .container .slider').slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    centerMode: true,
                    slidesToShow: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    centerMode: true
                }
            },
            {
                breakpoint: 380,
                settings:
                {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    })

    $('.tratamento .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    })

    $('.depoimentos .container').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        infinite: false,
        dots: true
    })
});