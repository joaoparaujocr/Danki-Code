$(document).ready(function(){

    var el = $('#source > .texto').clone();

    //$('#container').html(el.html());
    $('#source .texto').appendTo('#container')
});