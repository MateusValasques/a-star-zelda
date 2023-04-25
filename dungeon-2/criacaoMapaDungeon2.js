import { mapaDungeon2 } from "./mapaDungeon2.js";

let container = document.getElementById("mapa");
for (let i = 0; i < mapaDungeon2.length; i++) {
    
    let newLine = document.createElement("div");
    newLine.setAttribute("id", "linha "+i);
    container.appendChild(newLine);

    for (let j = 0; j < mapaDungeon2.length; j++) {

        let output = document.createElement("div");

        output.classList.add("circulo");

        if(mapaDungeon2[i][j].name == 'grass'){

            output.classList.add("grass");
        }
        if(mapaDungeon2[i][j].name == 'florest'){
            
            output.classList.add("florest");
        }
        if(mapaDungeon2[i][j].name == 'sand'){
            
            output.classList.add("sand");
        }
        if(mapaDungeon2[i][j].name == 'mountain'){
            
            output.classList.add("mountain");
        }
        if(mapaDungeon2[i][j].name == 'water'){
            
            output.classList.add("water");
        }
        newLine.appendChild(output);
    }
}