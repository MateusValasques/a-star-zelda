import { mapaDungeon3 } from "../mapaDungeon3.js";

let container = document.getElementById("mapa");
for (let i = 0; i < mapaDungeon3.length; i++) {
    
    let newLine = document.createElement("div");
    newLine.setAttribute("id", "linha "+i);
    container.appendChild(newLine);

    for (let j = 0; j < mapaDungeon3.length; j++) {

        let output = document.createElement("div");

        output.classList.add("circulo");

        if(mapaDungeon3[i][j].name == 'possible'){

            output.classList.add("possible");
        }
        if(mapaDungeon3[i][j].name == 'impossible'){
            
            output.classList.add("impossible");
        }
        newLine.appendChild(output);
    }
}