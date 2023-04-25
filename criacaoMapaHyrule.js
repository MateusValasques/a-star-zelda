import { mapaHyrule } from "./mapaHyrule.js";

let container = document.getElementById("mapa");
for (let i = 0; i < mapaHyrule.length; i++) {
    
    let newLine = document.createElement("div");
    newLine.setAttribute("id", "linha "+i);
    container.appendChild(newLine);

    for (let j = 0; j < mapaHyrule.length; j++) {

        let output = document.createElement("div");

        output.classList.add("circulo");

        if(mapaHyrule[i][j].name == 'grass'){

            output.classList.add("grass");
        }
        if(mapaHyrule[i][j].name == 'florest'){
            
            output.classList.add("florest");
        }
        if(mapaHyrule[i][j].name == 'sand'){
            
            output.classList.add("sand");
        }
        if(mapaHyrule[i][j].name == 'mountain'){
            
            output.classList.add("mountain");
        }
        if(mapaHyrule[i][j].name == 'water'){
            
            output.classList.add("water");
        }
        newLine.appendChild(output);
    }
}