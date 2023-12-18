%{
   #include<stdio.h>
   int chars=0;
   int words=0;
   int lines=0;
%}

%%
[a-zA-Z]* { words++;chars+=yyleng; }
\n         { lines++;chars++;}
.          { chars++;}
%%

int main(){
    printf("Enter the string:");
    yylex();
    printf("\nNo of words is: %d",words);
    printf("\nNo of lines is: %d",lines);
    printf("\nNo of chars is: %d",chars);
    return 0;
}

int yywrap(){
    return 1;
}