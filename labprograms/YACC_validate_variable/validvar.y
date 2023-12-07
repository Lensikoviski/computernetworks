%{
#include int valid=1; 
%} 
%token letter
%%
start : s
s : letter ; 
int yyerror() 
{ 
printf("\nIts not in a variable form!\n");
valid=0;
return 0; 
} 
int main() 
{ 
printf("\nEnter a name to tested for variable \n"); 
yyparse(); 
if(valid) 
{ 
printf("\nIt is a variable!\n");
}
}