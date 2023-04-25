import { mapaHyrule } from "./mapaHyrule.js";
import { mapaDungeon1 } from "./mapaDungeon1.js";
import { mapaDungeon2 } from "./mapaDungeon2.js";
import { mapaDungeon3 } from "./mapaDungeon3.js";

//Objetivos

let entradaDungeon1 = mapaHyrule[33][6];
let pingente1 = mapaDungeon1[4][14];

let entradaDungeon2 = mapaHyrule[18][40];
let pingente2 = mapaDungeon2[3][14];

let entradaDungeon3 = mapaHyrule[2][25];
let pingente3 = mapaDungeon3[20][16];

let lostWoods = mapaHyrule[7][6];


let atual = mapaHyrule[28][25];
let custoG = 0;

let aberta = [current];
let fechada = [];

/*
Tarefas Principais

- Validar e corrigir os mapas
- Criar um sistema de exibição
- Criar o código
*/

while (visited.length > 0) {

}

function getParentesNode(i, j) {
    //acima
    aberta.push(mapaHyrule[i-1][j])
    //abaixo
    aberta.push(mapaHyrule[i+1][j])
    //esquerda
    aberta.push(mapaHyrule[i][j-1])
    //direita
    aberta.push(mapaHyrule[i][j+1])
}