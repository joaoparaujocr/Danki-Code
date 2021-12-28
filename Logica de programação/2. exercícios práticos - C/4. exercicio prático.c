#include <stdio.h>
#include <stdlib.h>

int main ()
{
    int contador = 0;
    int limite = 10;

    printf("Primeiro loop\n");
    while(contador <= limite) {
        printf("%d\n", contador);
        if (contador == 3)
        {   
            printf("Segundo loop\n");
            int contador_2 = 5;
            while (contador_2 > 0)
            {
                printf("%d\n", contador_2);
                contador_2--;
            }
        }
        contador++;
    }

    return 0;
}