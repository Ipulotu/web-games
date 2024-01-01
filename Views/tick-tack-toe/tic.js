let playerTurn = "X";
const cel1 = document.getElementById("cell1");
const cel2 = document.getElementById("cell2");
const cel3 = document.getElementById("cell3");
const cel4 = document.getElementById("cell4");
const cel5 = document.getElementById("cell5");
const cel6 = document.getElementById("cell6");
const cel7 = document.getElementById("cell7");
const cel8 = document.getElementById("cell8");
const cel9 = document.getElementById("cell9");

let elmArray = [ cel1, cel2, cel3, cel4, cel5, cel6, cel7, cel8, cel9
]

elmArray.forEach((elm) =>{
    elm.addEventListener("click", () =>{ 
        if(elm.innerHTML !=""){
            return;
        }
        if(playerTurn == "X"){
            elm.innerHTML = playerTurn;
            playerTurn = "O";
            checkWin("X");
        }else if(playerTurn == "O"){
            elm.innerHTML = playerTurn;
            playerTurn = "X";
            checkWin("O");
        }

    })
});

function checkWin(turn){
    //123
    if(turn == cell1.innerHTML && turn == cell2.innerHTML && turn == cell3.innerHTML ){
        alert(turn + " Wins");
        blockCel()
    }
    //456
    else if(turn == cell4.innerHTML && turn == cell5.innerHTML && turn == cell6.innerHTML ){
        alert(turn + " Wins");
        blockCel()
    }
    //789
    else if(turn == cell7.innerHTML && turn == cell8.innerHTML && turn == cell9.innerHTML ){
        alert(turn + " Wins");
        blockCel()
    }
    //147
    else if(turn == cell1.innerHTML && turn == cell4.innerHTML && turn == cell7.innerHTML ){
        alert(turn + " Wins");
        blockCel()
    }
    //258
    else if(turn == cell2.innerHTML && turn == cell5.innerHTML && turn == cell8.innerHTML ){
        alert(turn + " Wins");
        blockCel()
    }
    //369
    else if(turn == cell3.innerHTML && turn == cell6.innerHTML && turn == cell9.innerHTML ){
        alert(turn + " Wins");
        blockCel()
    }
    //159
    else if (turn == cell1.innerHTML && turn == cell5.innerHTML && turn == cell9.innerHTML ){
        alert(turn + " Wins");
        blockCel()
    }
    //357
     else if (turn == cell3.innerHTML && turn == cell5.innerHTML && turn == cell7.innerHTML ){
        alert(turn + " Wins");
        blockCel()
    }

};

function blockCel(){
    elmArray.forEach((cel) =>{
        if(cel.innerHTML ==""){
            cel.innerHTML ="Done" 
        }
    })
}

let resetBnt = document.getElementById("resetBnt");

    resetBnt.addEventListener("click", () =>{
        elmArray.forEach((cel) =>{
            cel.innerHTML ="";
        })
    });


