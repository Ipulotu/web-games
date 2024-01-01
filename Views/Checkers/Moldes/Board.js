import {Token} from "../Moldes/Token.js";


export class Board {
    constructor(){
        this.board = []
        this.redStartArray = [42, 44, 46, 48, 49, 51, 53, 55, 58, 60, 62, 64]
        this.whietStartArray = [1, 3, 5, 7, 10, 12, 14, 16, 17, 19, 21, 23]
        this.redImage = "./assets/redToken.svg";
        this.whiteImage = "./assets/whiteToken.svg";
    }
    
    









    // 1. each board square is droppabel
    // 2. When a token is drawen it is dragabel if it can move 
    // 3. wehn token is droped check if move is legle 
    //


    
   buildBoard(){
    
    let x = 1;
    let y = 8;
    let isBlack = true
    let boardBloackCounter = 0


    for (let i = 1; i < 65; i++) {

        let boardElm = document.getElementById("boardElm");
        //seting X & Y
        // let elm = document.getElementById(`cell${i}`);
        let elm = document.createElement("div");
        elm.classList.add("cell");
        elm.setAttribute("id",`cell${i}`);
        elm.setAttribute('data-x', x);
        elm.setAttribute('data-y', y);



        elm.addEventListener("dragover", function(event) {
            event.preventDefault();
          });


        elm.addEventListener("drop", (event) => {
            event.preventDefault();
            var data = event.dataTransfer.getData("text/plain");
            console.log(data)
            let imgElm = document.getElementById(data);
            event.target.appendChild(imgElm);


        });


        if(isBlack){
            elm.classList.add("black");
        }
        boardBloackCounter += 1;


        if(boardBloackCounter != 8){
           if(isBlack){
                isBlack = false;
           } else if(!isBlack){
            isBlack = true;
           }
        }

        if(boardBloackCounter == 8){
            boardBloackCounter = 0;
        }

        boardElm.appendChild(elm);



        // Add a token if present
        if(this.redStartArray.includes(i)){
            let token = new Token("red", x, y, (`cell${i}`));
            token.image = this.redImage;
            // this.drawToken(token, (`cell${i}`));
            this.board.push(token);
        }

        // Add a token if present
        if(this.whietStartArray.includes(i)){
            let token = new Token("white", x, y, (`cell${i}`));
            token.image = this.whiteImage;
            // this.drawToken(token, (`cell${i}`));
            this.board.push(token);
        }



        //reseting X & Y
        x += 1;
        if(x == 9 ){
            x = 1;
            y -=1
        }
      }


    this.board.forEach((token) => {
        this.drawToken(token);

    })







    }


    drawToken(token){
        let elm = document.getElementById(token.id);
        let imgElm = document.createElement("img");
        imgElm.setAttribute("src", token.image);
        imgElm.setAttribute("id", token.id);
        imgElm.setAttribute("height", "50px");
        imgElm.setAttribute("width", "50px");


        //add dragging event lisner
        // if(token.checkHasMove(this.board)){
        //     console.log(token.id + " has move");
        //     elm.setAttribute("draggable", true);
        // }else{
        //     elm.setAttribute("draggable", false);
        // }
        imgElm.addEventListener("drag", (event) => {
            event
            .dataTransfer
            .setData("text/plain", event.target.id);

        });

    


        elm.appendChild(imgElm);


    }



    eraseToken(token, id){
        let elm = document.getElementById(id);
        let imgElm =  elm.children[0];
        imgElm.remove();

    }
}




  