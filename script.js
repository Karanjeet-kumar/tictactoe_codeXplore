console.log("Welcome to Tic Tac Toe")
let turn = "X"
let isgameover = false;

const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

const checkWin= ()=>{

}


