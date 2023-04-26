import { mapaDungeon3 } from "../mapaDungeon3.js";

let container = document.getElementById("mapa");
for (let i = 0; i < mapaDungeon3.length; i++) {
    
    let newLine = document.createElement("div");
    newLine.setAttribute("id", "linha "+i);
    container.appendChild(newLine);

    for (let j = 0; j < mapaDungeon3.length; j++) {

        let output = document.createElement("div");

        output.classList.add("circulo");
        if(i == 19 && j == 15){
            output.classList.add("tooltip");
            let tooltiptext = document.createElement("span");
            tooltiptext.innerHTML = "Pingente da Sabedoria"
            tooltiptext.classList.add("tooltiptext");
            output.appendChild(tooltiptext);
        }
        if(i == 25 && j == 14){

            output.classList.add("tooltip");
            let tooltiptext = document.createElement("span");
            tooltiptext.innerHTML = "Entrada do Dungeon 3"
            tooltiptext.classList.add("tooltiptext");
            output.appendChild(tooltiptext);
        }
        if(mapaDungeon3[i][j].name == 'possible'){

            output.classList.add("possible");
        }
        if(mapaDungeon3[i][j].name == 'impossible'){
            
            output.classList.add("impossible");
        }
        newLine.appendChild(output);
    }
}