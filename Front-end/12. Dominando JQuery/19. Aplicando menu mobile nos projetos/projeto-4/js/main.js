$(document).ready(function(){
    $('#btn-mobile').click(function(e){
        e.stopPropagation()
        $('#menu').toggleClass('active')
        $('#hamburguer').toggleClass('active')
    })
})