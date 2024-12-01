
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0; 

const winp = [
    [0, 1 ,2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const resetbutton = () => {
    turnO = true;
    count = 0;
    enablebox();
    msgcontainer.classList.add("hide");
};



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") { 
            console.log("clicked");
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled= true; 
            count++;
            let isWinner = checkWinner();

            if (count === 9 && !isWinner) {
            gameDraw();
            }
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disablebox();
  };

const disablebox = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enablebox = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations The Winner Is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};

const checkWinner = () => {
    for(let patterns of winp) {
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 == pos3) {
                showwinner(pos1);
            } 
        } 
    }
};

newgame.addEventListener("click", resetbutton);
reset.addEventListener("click", resetbutton);