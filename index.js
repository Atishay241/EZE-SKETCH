let mode = 0; // 0: black , 1: eraser , 2: random , 3: darker

function classmode(a){
    mode = a;
}
const container = document.getElementById("container");
console.log(container)

function createGrid(size = 16){
    container.innerHTML = ""; 
    const squareSize = container.clientWidth / size;
    console.log(squareSize);

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-item");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseover", () => {
            if(mode==0)
                square.style.backgroundColor = "black";
            else if(mode == 1){
                square.style.cursor = 
                square.style.backgroundColor = "lightcyan"
            }
            else if(mode == 2){
                square.style.backgroundColor = getRandomColor();
            }
        });
        container.appendChild(square);
    }
}

createGrid();

function promptsize(){
    let input = prompt("Chose the size between 1 to 100: ");
    if (input === null) {
        return;
    }
    let size = parseInt(input);

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return;
    }
    createGrid(input);
}


const eraser = document.getElementsByClassName("eraser");


function cleargrid(){
    const nodes = document.getElementsByClassName("grid-item");
    console.log(nodes.length);
    Array.from(nodes).forEach(element => {
        element.style.backgroundColor = "lightcyan";
    });
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}