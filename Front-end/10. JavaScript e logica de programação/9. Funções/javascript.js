window.onload = function(){
    /*DECLARAR UM FUNÇÃO
    function realizarConta(num1, num2){
        return num1 + num2;
    }
    var resultado = realizarConta(10 ,10)
    */

    /*DECLARAR UM FUNÇÃO PELA VARIÁVEL
    var variavel = function(){
        console.log('Função pela variável')
    }
    variavel()
    */

    /*DECLARANDO A FUNÇÃO PELO OBJETO
    var obj = {nome:'Guilherme', idade:"23"}
    obj.func = function(){
        console.log("JoÃo")
    }
    obj.func();
    */

    /*Array dentro de array
    var variavel = [];
    variavel[0] = [];
    variavel[0][2] = "Guilherme";
    console.log(variavel[0][2]);
    */

    //Objeto dentro de objeto
    var variavel = [];
    variavel.obj = {};
    variavel.obj.nome = "Guilherme";
    console.log(variavel.obj.nome);
}