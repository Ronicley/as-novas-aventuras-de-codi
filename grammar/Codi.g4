grammar Codi;

programa: (linha NEWLINE?)+ EOF;
linha: comando (' ' parametro)*;
comando: MOVE_DIREITA | MOVE_ESQUERDA | PULA;
parametro: INT;

NEWLINE: [\r\n]+;
MOVE_DIREITA: 'direita';
MOVE_ESQUERDA: 'esquerda';
PULA: 'pula';
INT: [0-9]+;