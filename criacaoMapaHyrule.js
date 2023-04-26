import { mapaHyrule } from "./mapaHyrule.js";

let container = document.getElementById("mapa");
for (let i = 0; i < mapaHyrule.length; i++) {
    
    let newLine = document.createElement("div");
    newLine.setAttribute("id", "linha "+i);
    container.appendChild(newLine);

    for (let j = 0; j < mapaHyrule.length; j++) {
        let output = document.createElement("div");

        output.classList.add("circulo");

        if(i == 32 && j == 5){

            output.classList.add("tooltip");
            let tooltiptext = document.createElement("span");
            tooltiptext.innerHTML = "Entrada do Dungeon 1"
            tooltiptext.classList.add("tooltiptext");
            output.appendChild(tooltiptext);
        }
        if(i == 17 && j == 39){

            output.classList.add("tooltip");
            let tooltiptext = document.createElement("span");
            tooltiptext.innerHTML = "Entrada do Dungeon 2"
            tooltiptext.classList.add("tooltiptext");
            output.appendChild(tooltiptext);
        }
        if(i == 1 && j == 24){

            output.classList.add("tooltip");
            let tooltiptext = document.createElement("span");
            tooltiptext.innerHTML = "Entrada do Dungeon 3"
            tooltiptext.classList.add("tooltiptext");
            output.appendChild(tooltiptext);
        }
        if(i == 5 && j == 6){

            output.classList.add("tooltip");
            let tooltiptext = document.createElement("span");
            tooltiptext.innerHTML = "Entrada de Lost Woods"
            tooltiptext.classList.add("tooltiptext");
            output.appendChild(tooltiptext);
        }
        if(i == 27 && j == 24){

            output.classList.add("tooltip");
            let tooltiptext = document.createElement("span");
            tooltiptext.innerHTML = "Link"
            tooltiptext.classList.add("tooltiptext");
            output.appendChild(tooltiptext);
        }


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