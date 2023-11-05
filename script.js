var theme = document.getElementsByTagName('link')[0]; 

let turn = "X"
let num="1"
let isgameover = false;
let  moves=0

const changeTurn = ()=>{
    return turn === "X"? "O": "X"
}
const changeNum = ()=>{
    return num === "1"? "2": "1"
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            num = changeNum();
            moves+=1;
            
            checkWin();
            if(!isgameover){
                if(moves>=9)
                document.getElementsByClassName("info")[0].innerText  = "Draw";
                else
                document.getElementsByClassName("info")[0].innerText  = "Player "+num + "'s Turn (" + turn +")";

            }
               
        }
        
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    num="1"; 
    moves=0;
    isgameover = false
    document.getElementsByClassName("info")[0].innerText  = "Player "+num + "'s Turn (" + turn +")";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

