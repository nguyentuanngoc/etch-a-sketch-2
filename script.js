let container = document.createElement("div");
let reset = document.createElement("button");
reset.innerText = "Reset";
document.body.appendChild(reset);
document.body.appendChild(container);
container.classList.add("container");
reset.classList.add("reset");


createSquares(20);

reset.addEventListener("click", ()=>{
    let number = 0;
    let squares = document.getElementsByClassName("square");
    for(let i=0; i<squares.length; i++){
        squares[i].classList.remove("blackbg");
    }

    while(number == 0){
        let promptNumber = prompt("How many squares per row/column do you want?", 20);
        if (!isNumeric(promptNumber)) continue; 
        number = parseInt(promptNumber, 10);
        if (number < 0 | number > 100) number = 0;
    }
    createSquares(number);
    
});

function createSquares(number){
    if (typeof(number) == "number"){
        for(i=0; i<number*number; i++){
            let square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
            square.addEventListener("mouseover", ()=>{
                square.classList.add("blackbg");
            });
        }
        let grid = `repeat(${number}, 1fr) / repeat(${number}, 1fr)`;
        container.style.grid = grid;
    }
}

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

