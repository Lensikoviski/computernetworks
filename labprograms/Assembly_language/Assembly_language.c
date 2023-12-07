#include <stdio.h>
#include <string.h>
#include <stdlib.h>
void main()
{
    char a[10], ch;
    printf("Enter the three address code: \n");//eg:s=a+b
    gets(a);
    ch = a[3];
    switch (ch)
    {
    case '+':
        printf("\n MOV R0, %c", a[2]);
        printf("\n ADD R0, %c", a[4]);
        printf("\n MOV %c, R0\n", a[0]);
        break;
    case '-':
        printf("\n MOV R0, %c", a[2]);
        printf("\n SUB R0, %c", a[4]);
        printf("\n MOV %c, R0\n", a[0]);
        break;
    case '*':
        printf("\n MOV R0, %c", a[2]);
        printf("\n MUL R0, %c", a[4]);
        printf("\n MOV %c, R0\n", a[0]);
        break;
    case '/':
        printf("\n MOV R0, %c", a[2]);
        printf("\n DIV R0, %c", a[4]);
        printf("\n MOV %c, R0\n", a[0]);
        break;
    default:
        printf("INVALID\n");
    }
}