$(document).ready(function(){

    //Plugin JS Socials
    $("#social-share").jsSocials({
        shares: ["twitter", "facebook"]
    });

    //Plugin Mask
    $('input[name=telefone]').mask('(99)99999-9999')
    $('input[name=data]').mask('99/99/9999')

    //Plugin FancyBox
    const fancybox = new Fancybox();

    fancybox.bind("[data-fancybox]", {
        Toolbar: false,
        animated: false,
        dragToClose: false,

        showClass: false,
        hideClass: false,

        closeButton: "top",

        Image: {
            click: "close",
            wheel: "slide",
            zoom: false,
            fit: "cover",
          },
    });
});