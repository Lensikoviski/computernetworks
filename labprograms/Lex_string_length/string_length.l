%{
    #include<stdio.h>
    int length;
%}

%%
[a-z A-Z 0-9]+ {
    length=yyleng;
}
%%

int main(){
    yylex();
    printf("length of the string is %d\n",length);
    return 0;
}

int yywrap(){
    return(1);
}