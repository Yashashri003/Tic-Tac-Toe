let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn"); // Use querySelector for single button
let par = document.querySelector("#para");
let newGame = document.querySelector("#newBtn");
let win = document.querySelector(".win");
let player1 = true;
let arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let b=0;
let winnerFound=false;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if(box.innerText=== ""){
            if (player1) {
                box.innerText = "X";
                player1 = false;
            } else {
                box.innerText = "O";
                player1 = true;
            }
            b++;
            checkWinner();
            
      }
    });
});
 function draw(){
   
     
    win.classList.remove("hide");
     par.innerText= " It's a draw! Start a new game.";

 }
showWinner=(winner) => {

    par.innerText=`Congratulations! The winner is ${winner}`;
    win.classList.remove("hide");

};
const checkWinner=()=>{
    winnerFound = false;
    for(let ele of arr){
    let pos1 = boxes[ele[0]].innerText;
    let pos2 = boxes[ele[1]].innerText;
    let pos3 = boxes[ele[2]].innerText;
   
    if(pos1!="" && pos2!=""&&pos3!=""){
        if(pos1==pos2&&pos2==pos3){
            winnerFound=true;
         showWinner(pos1);
         return;
        }
          }
    } 
        if(!winnerFound && b===9)
        
            {
            
            draw();
     
}
};
resetBtn.addEventListener("click",()=>{
    boxes.forEach((box) => {
        box.innerText="";
       
    });
    
        player1= true;
         b = 0;
         winnerFound = false;

 });
  newGame.addEventListener("click",()=>{
    boxes.forEach((box) => {
        box.innerText="";
       
    });
 win.classList.add("hide");
        player1= true;
        winnerFound = false;
         b = 0;
 });


