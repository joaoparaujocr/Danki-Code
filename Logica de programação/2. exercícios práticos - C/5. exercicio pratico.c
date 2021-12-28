#include <stdio.h>
#include <stdlib.h>

int main ()
{
    char nome[256];
    char sobrenome[256];
    int ano_nascimento;
    int idade;

    printf("Qual o seu nome ?\n");
    scanf("%s", nome);

    printf("Qual o seu sobrenome?\n");
    scanf("%s", sobrenome);

    printf("Em que ano vc nasceu?\n");
    scanf("%d", &ano_nascimento);

    printf("Qual a sua idade?\n");
    scanf("%d", &idade);

    printf("Voce e o %s %s nasceu no ano de %d e sua idade e %d", nome, sobrenome, ano_nascimento, idade);

    return 0;
}