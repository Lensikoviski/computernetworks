%{

    #include<stdio.h>

    int valid=1;

%}

%token digit letter

%%

start : letter s

s :     letter s

      | digit s

      |

      ;

%%

int yyerror()

{

    printf("\nIts not in a variable form!\n");

    valid=0;

    return 0;

}

int main()

{

    printf("\nEnter a name to tested for variable ");

    yyparse();

    if(valid)

    {

        printf("\nIt is a variable!\n");

    }

}

