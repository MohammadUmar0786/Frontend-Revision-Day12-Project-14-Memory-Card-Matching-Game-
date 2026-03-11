// Elements arr
const arr = ["A","B","C","D","A","B","C","D"];

// Random & shuffle once
arr.sort(()=> Math.random()-0.5);

let firstElement = null;
let secondElement = null;
let lockedBoard = false;
let totalTurn = 0;

const result = document.querySelector('p');
const board = document.querySelector('.board');

// GameHandler fn

const gameHandler = (e)=>{

    if(!e.target.classList.contains("cell")) return; // Prevent clicking outside cells

    const element = e.target;

    if(lockedBoard) return; // if board locked h toh return yhi se mtlb game already finished

    if(element.innerHTML !== "") return;

    element.innerHTML = arr[element.id];
    
    if(!firstElement) {
        firstElement = element;
        return;
    }

    if(firstElement === element) return; // Prevent double click on same cell

    secondElement = element;
    lockedBoard = true;

    if(firstElement.innerHTML === secondElement.innerHTML){
        totalTurn++; 
        console.log(totalTurn)

        if(totalTurn === 4){
        result.innerHTML = "Game finished";
        lockedBoard = true; 
        return;
    }
        firstElement = null;
        secondElement = null;
        lockedBoard = false;
    }else{
        setTimeout(()=>{
            firstElement.innerHTML = "";
            secondElement.innerHTML = "";

            firstElement = null;
            secondElement = null;
            lockedBoard = false;
        },1000)
    }
}
board.addEventListener('click', gameHandler);
// Reset 

const element = document.querySelectorAll('.cell')
//console.log(typeof(element)); 
const btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    
    element.forEach(element=>{
        element.innerHTML = ""
        result.innerHTML = ""
    })
        arr.sort(()=> Math.random()-0.5); // again new shuffle after reset game
        firstElement = null;
        secondElement = null;
        lockedBoard = false;
        totalTurn = 0;

})

