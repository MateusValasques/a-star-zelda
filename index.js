import { mapaHyrule, matrix } from "./mapaHyrule.js";
import { mapaDungeon1 } from "./mapaDungeon1.js";
import { mapaDungeon2 } from "./mapaDungeon2.js";
import { mapaDungeon3 } from "./mapaDungeon3.js";

//Objetivos

let entradaDungeon1 = mapaHyrule[32][5];
let pingente1 = mapaDungeon1[3][13];

let entradaDungeon2 = mapaHyrule[17][39];
let pingente2 = mapaDungeon2[3][14];

let entradaDungeon3 = mapaHyrule[1][24];
let pingente3 = mapaDungeon3[20][16];

let lostWoods = mapaHyrule[5][6];

let atual = matrix[27][24];
let custoG = 0;

let abertos = [atual];
let fechados = [];
let parentes = [];
while (abertos.length > 0) {

    //Peguei o menor da lista aberta
    let smallest = getLowestValue();
    let current = abertos[smallest];
    //removi da lista aberta
    delete abertos[smallest];
    
    //Colocar na lista fechada
    fechados.push(current);

    


}

function getLowestValue(){
    let smallest = abertos[0].value;
    let index = 0;
    for (let i = 0; i < abertos.length; i++) {
        if (abertos[i].value < smallest) {
            smallest = abertos[i];
            index = i;
        }
    }
    return index;
}
function getParentesNode(i, j) {
    //acima
    abertos.push(mapaHyrule[i - 1][j])
    //abaixo
    abertos.push(mapaHyrule[i + 1][j])
    //esquerda
    abertos.push(mapaHyrule[i][j - 1])
    //direita
    abertos.push(mapaHyrule[i][j + 1])

    let parents = [];
    //acima
    parentes.push(mapaHyrule[i - 1][j])
    //abaixo
    parentes.push(mapaHyrule[i + 1][j])
    //esquerda
    parentes.push(mapaHyrule[i][j - 1])
    //direita
    parentes.push(mapaHyrule[i][j + 1])


}
function heuristic(i, j, goal_i, goal_j) {
    return Math.sqrt(Math.pow(i - goal_i, 2) + Math.pow(j - goal_j, 2));
}