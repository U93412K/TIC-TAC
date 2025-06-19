let select=document.querySelectorAll(".btn");
let playero=true;
let newbtn=document.querySelector(".resetbtn")
let message=document.querySelector(".message")

select.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playero){
            box.innerHTML="0"
            playero=false
        }
        else{
            box.innerHTML="X"
            playero=true
        }
    box.disabled=true
checkwinn()

    })

});

let winarr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [1,4,7],
    [2,5,8]
    
]                                                                                                                                                                                                                                                                                        


const checkwinn=()=>{
for(let pattern of winarr){
   // console.log(pattern[0],pattern[1],pattern[2])

    let pos1=select[pattern[0]].innerHTML
    let pos2=select[pattern[1]].innerHTML
    let pos3=select[pattern[2]].innerHTML

    if(pos1!="" && pos2 !="" && pos3 !=""){
        if(pos1=== pos2 && pos2===pos3){
            console.log("winner")
            //box.disabled=true
            disablebox()     // tis function disables all button after winner is announced
        }
        if(pos1==="0" && pos2==="0" && pos3==="0"){
            console.log("player0 is winner")
             message.innerHTML="player 0 is winner"


        }
        if(pos1==="X" && pos2==="X" && pos3==="X"){
                             
            console.log("playerX is winner")
             message.innerHTML="player x is winner"


        }

    }


}}

function newgame(){
    newg()
    //alert()
}


const disablebox=()=>{
    for(let box of select){
        box.disabled=true
    }
}

const newg=()=>{
   for(let box of select){
    box.disabled=false
    box.innerHTML=""
   }
}
