import { mapaDungeon1 } from "../mapaDungeon1.js";

let container = document.getElementById("mapa");
for (let i = 0; i < mapaDungeon1.length; i++) {
    
    let newLine = document.createElement("div");
    newLine.setAttribute("id", "linha "+i);
    container.appendChild(newLine);

    for (let j = 0; j < mapaDungeon1.length; j++) {

        let output = document.createElement("div");
        output.classList.add("circulo");
        
        if(i == 3 && j == 13){
            output.classList.add("tooltip");
            let tooltiptext = document.createElement("span");
            tooltiptext.innerHTML = "Pingente da Coragem"
            tooltiptext.classList.add("tooltiptext");
            output.appendChild(tooltiptext);
        }
        if(i == 26 && j == 14){

            output.classList.add("tooltip");
            let tooltiptext = document.createElement("span");
            tooltiptext.innerHTML = "Entrada do Dungeon 1"
            tooltiptext.classList.add("tooltiptext");
            output.appendChild(tooltiptext);
        }
        if(mapaDungeon1[i][j].name == 'possible'){

            output.classList.add("possible");
        }
        if(mapaDungeon1[i][j].name == 'impossible'){
            
            output.classList.add("impossible");
        }
        newLine.appendChild(output);
    }
}