import { mapaDungeon2 } from "../mapaDungeon2.js";

let container = document.getElementById("mapa");
for (let i = 0; i < mapaDungeon2.length; i++) {
    
    let newLine = document.createElement("div");
    newLine.setAttribute("id", "linha "+i);
    container.appendChild(newLine);

    for (let j = 0; j < mapaDungeon2.length; j++) {

        let output = document.createElement("div");

        output.classList.add("circulo");
        if(i == 2 && j == 13){
            output.classList.add("tooltip");
            let tooltiptext = document.createElement("span");
            tooltiptext.innerHTML = "Pingente do Poder";
            tooltiptext.classList.add("tooltiptext");
            output.appendChild(tooltiptext);
        }
        if(i == 25 && j == 13){

            output.classList.add("tooltip");
            let tooltiptext = document.createElement("span");
            tooltiptext.innerHTML = "Entrada do Dungeon 2";
            tooltiptext.classList.add("tooltiptext");
            output.appendChild(tooltiptext);
        }
        if(mapaDungeon2[i][j].name == 'possible'){
            output.classList.add("possible");
        }
        if(mapaDungeon2[i][j].name == 'impossible'){
            
            output.classList.add("impossible");
        }
        newLine.appendChild(output);
    }
}