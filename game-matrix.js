
let myMatrix = [ 
    [{x:0,y:0},{x:0,y:1},{x:0,y:2}],  
    [{x:1,y:0},{x:1,y:1},{x:1,y:2}], 
    [{x:2,y:0},{x:2,y:1},{x:2,y:2}]
];

let up = document.getElementById('to-up');
let left = document.getElementById('to-left');
let right = document.getElementById('to-right');
let down = document.getElementById('to-down');

let myPosition = {x:1,y:1};



//----------------------------------------------------------------------------

/*function getElementForPosition(position) {
    return document.getElementById(`x${position.x}y${position.y}`);
}

console.log(getElementForPosition(myPosition));*/

//-----------------------------------------------------------------------------

function showImage(position){ 
    position = document.getElementById(`x${position.x}y${position.y}`);
    position.innerHTML = `<img class="piece" src="penguin-clipart-transparent-background-11.png">`
}

console.log(showImage(myPosition));

function removeImage(position){
    position = document.getElementById(`x${position.x}y${position.y}`);
    position.innerHTML = `<img class="invisible" src="penguin-clipart-transparent-background-11.png">`
}

//-------------------------------------------------------------------------------

let popUp = document.getElementById("pop-up")

function openPopUp(){
    popUp.classList.add("open-popup");
 }
function closePopUp(){
    popUp.classList.remove("open-popup")
    
} 

   
//----------------------------------------------------------------------------------

function gameMovesAlt (matrix, position) {
    
    up.onclick = function(){
        if(position.x > 0) {
            currentPosition = { x: position.x - 1, y: position.y};  
            closePopUp();
            removeImage(position);
            showImage(currentPosition);
        } 
    
        else{
            
            openPopUp();
            showImage(position)
          
        }
        gameMovesAlt(matrix,currentPosition);
    }
    left.onclick = function(){
        if(position.y > 0) {
            currentPosition = { x: position.x, y: position.y - 1 };
            closePopUp();
            removeImage(position)
            showImage(currentPosition);
        }
        else{
            
            openPopUp();
            showImage(position);
        }
        
        gameMovesAlt(matrix,currentPosition);
        }
    
    right.onclick = function(){
        if(position.y < matrix[0].length - 1) {
            currentPosition = { x: position.x, y: position.y + 1};
            closePopUp()
            removeImage(position)
            showImage(currentPosition);
        }
        else{
            
            openPopUp();
            showImage(position);
        }
        gameMovesAlt(matrix,currentPosition);
    }
    down.onclick = function(){
        if(position.x < matrix.length - 1) {
            currentPosition ={ x: position.x + 1, y: position.y };
            closePopUp();
            removeImage(position);
            showImage(currentPosition);
        }
        else{
            
            openPopUp();
            showImage(position);
        }
        gameMovesAlt(matrix,currentPosition);
    }

}    
           
 console.log(gameMovesAlt(myMatrix,myPosition));

            




//return "Move Not Allowed"; 

