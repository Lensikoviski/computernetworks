#include <stdio.h>
#include <string.h>
#include <ctype.h>
char expr[10];
int c, flag;
void Ed();
void Td();
void E();
void T();
void F();

int main()
{
    c = 0;
    flag = 0;
    printf("Enter an algebraic expression : ");
    scanf("%s", expr);
    E();
    if ((strlen(expr) == c) && (flag == 0))
 printf("\nThe expression %s is valid\n", expr);
 else printf("\nThe expression %s is invalid\n", expr);
}

void E()
{
    T();
    Ed();
}

void Ed()
{
    if (expr[c] == '+')

    {
        c++;
        T();
        Ed();
    }
}

void T()
{
    F();
    Td();
}

void Td()
{
    if (expr[c] == '*')

    {
        c++;
        F();
        Td();
    }
}

void F()
{
    if (islower(expr[c]))
        c++;
    else if (expr[c] == '(')

    {
        c++;
        E();
        if (expr[c] == ')')
            c++;
        else
            flag = 1;
    }
    else
        flag = 1;
}
