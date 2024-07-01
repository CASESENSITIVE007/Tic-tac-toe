console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;
let turn = "X";


let count=0;

// Function to change the turn
const changeturn = () => {
    return turn === "X" ? "0" : "X"; 
}

// Function to check for a win
const checkwin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && 
            (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
        }
    });
}

// Game logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isgameover) { 
            boxtext.innerText = turn;
            turn = changeturn();
            audioturn.play();
            checkwin();
            if (!isgameover) {
                if(count==9){
                    document.getElementsByClassName("info").innerText = "DRAW"; 
                }  
                else document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

                count+=1;
                
                console.log(count)
           
            }
           
        }
    });
});

// Add reset button functionality
document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
        count=0;
    });
    turn = 'X';
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;  
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";
    music.pause();
    music.currentTime = 0;
});
