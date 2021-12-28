#include <stdio.h>
#include <stdlib.h>

int main()
{
    //strcmp {strg1, strg2} ==0
    //Pedra, papel e tesoura
    char player_1[256];
    char player_2[256];

    printf("Player 1, sua vez: ");
    scanf("%s", player_1);

    printf("\nPlayer 2, sua vez: ");
    scanf("%s", player_2);

    printf("\nO player 1 jogou %s e o player 2 jogou %s", player_1, player_2);

    if (strcmp(player_1, "papel") == 0)
    {
        if (strcmp(player_2, "papel") == 0)
        {
            printf("\nDeu empate");
        }
        else if (strcmp(player_2, "pedra") == 0)
        {
            printf("\nPlayer 1 ganhou");
        }
        else if (strcmp(player_2, "tesoura") == 0)
        {
            printf("\nPlayer 2 ganhou");
        }
        else
        {
            printf("\nValor do player 2 invalido");
        }
    }
    else if (strcmp(player_1, "pedra") == 0)
    {
        if (strcmp(player_2, "papel") == 0)
        {
            printf("\nPlayer 2 ganhou");
        }
        else if (strcmp(player_2, "pedra") == 0)
        {
            printf("\nDeu empate");
        }
        else if (strcmp(player_2, "tesoura") == 0)
        {
            printf("\nPlayer 1 ganhou");
        }
        else
        {
            printf("\nValor do player 2 invalido");
        }
    }
    else if (strcmp(player_1, "tesoura") == 0)
    {
        if (strcmp(player_2, "papel") == 0)
        {
            printf("\nPlayer 1 ganhou");
        }
        else if (strcmp(player_2, "pedra") == 0)
        {
            printf("\nPlayer 2 ganhou");
        }
        else if (strcmp(player_2, "tesoura") == 0)
        {
            printf("\nDeu empate");
        }
        else
        {
            printf("\nValor do player 2 invalido");
        }
    }
    else
    {
        printf("\nValor invalido do player 1");
    }
    
    return 0;
}