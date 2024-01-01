
export class Token{
    pribe


    constructor(color, x, y, id){
        this.id = id;
        this.color = color
        this.x = x;
        this.y = y;
        this.isKing = false;
        this.image;
    }


    setLocation(x,y){
        this.x = x;
        this.y = y;
    }


    checkMoveToken(x,y, board){
        let checkMove = checkMove(x,y);
        if(checkMove == true){
            let checkCollision = checkCollision(x,y, board);
            if(checkCollision == true){
                return true
            } else {
                return false
            }
        }else {
            return false
        }
    }


    checkMove(x,y){
        // This function check is a given move is ligle for a toke:
        // 1. Is dianagale 
        // 2. Is up for red & down for white when not a king
        // 3. Is ok any difrecetn when a king 
        // 4. dose not hit another token 
        // 5. 

        let xChnage = Math.abs(this.x-x);
        let yChnage = Math.abs(this.y-y);

       // Check if dianagale 
       if(this.isKing == true) {
            if(xChnage == yChnage) {
                return true;
            } else {
                return false
            }
        }


        // Check if dianagale 
        if(xChnage == 1 && yChnage == 1 && this.isKing != true) {
            // Is ok any difrecetn when a king 
            if(this.isKing == true){
                return true
            }

            // Is up for red & down for white
            if(this.color == "red" && this.y < y){
                return true
            }else if(this.color == "white" && this.y > y){
                return true
            } else {
                return false
            }
        }


    }

    checkCollision(x,y, board){
        board.array.forEach(token => {
            if(token.x == x && token.y == y){
                return false;
            } else {
                return;
            }
            
        });

    }


    // checkHasMove(board){
    //     let x1 = this.x+1;
    //     let x2 = this.x-1;
    //     let y1 = this.y+1;
    //     let y2 = this.y-1;

       


    //     board.forEach(token => {
         
    //         if(x1 == token.x && y1 == token.y){
    //             console.log(" in one")
    //             if(x1 == token.x && y2 == token.y){
    //                 if(x2 == token.x && y1 == token.y){
    //                     if(x2 == token.x && y2 == token.y){
    //                         return false;
    //                     } else{
    //                         return true
    //                     }
    //                 }else{
    //                     return true
    //                 }
    //             } else{
    //                 return true
    //         }
    //         } else {
    //             return true;
    //         }
    //     });

    // }

}