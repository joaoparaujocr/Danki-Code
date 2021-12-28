#include <stdio.h>
#include <stdlib.h>

int main()
{
    char nome[256];
    int idade;

    printf("Olá! Qual o seu nome?\n");
    scanf("%s", nome);

    printf("Qual a sua idade?\n");
    scanf("%d", &idade);

    printf("Nome: %s\nidade: %d\n", nome, idade);

    printf("A primeira letra do seu nome e: %c", nome[0]);

    if (idade >= 18)
    {
        printf("\nVoce e adulto");

    }else if(idade >= 12)
    {
        printf_s("\nVoce e adolescente");
    }else {
        printf("\nVoce e crianca");
    }
    
    
    return 0;
}