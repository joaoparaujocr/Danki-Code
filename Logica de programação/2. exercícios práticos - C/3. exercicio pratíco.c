#include <stdio.h>
#include <stdlib.h>

int main ()
{
    int hora_atual = 19;
    int hora_cinema = 20;

    //Posso entrar no cinema?
    if (hora_atual > hora_cinema + 30){
        printf("Não vai entrar");
    } else if (hora_atual < hora_cinema + 30)
    {
        printf("A sessão ainda não começou");
    }else
    {
        printf("Pode entrar");
    }
    

    return 0;
}