let player="X"
let flagwon=false
const turn=()=>{
    return (player === 'X')?'O':'X';
}

const winChecker=()=>{
    boxtexts=document.getElementsByClassName('boxText')
    wins=[[0,1,2,0,-2,4],[3,4,5,0,-2,14],[6,7,8,0,-2,24],[0,3,6,90,-11,14.5],[1,4,7,90,-1,14.5],[2,5,8,90,9,14.5],[0,4,8,45,-1,14],[2,4,6,-45,-1,14]]
    wins.forEach(element=>{
        if(boxtexts[element[0]].innerText==boxtexts[element[1]].innerText && boxtexts[element[1]].innerText==boxtexts[element[2]].innerText && boxtexts[element[0]].innerText !=''){
            console.log("win")
            console.log(boxtexts[element[0]].innerText)
            flagwon=true
            document.querySelector(".winner").innerText=(`${boxtexts[element[0]].innerText} is the Winner`)
            document.querySelector(".line").style.width='32vw'
            document.querySelector(".line").style.transform= `translate(${element[4]}vw, ${element[5]}vw) rotate(${element[3]}deg)`
        }
    })
}

boxes=document.getElementsByClassName("box")
// array.from makes the boxes into array
Array.from(boxes).forEach(element=>{
    element.addEventListener("click",()=>{
        if(flagwon==false){
            boxText=element.querySelector(".boxText")
            if(boxText.innerText ==''){
                boxText.innerText=player
                player=turn()
            }
            winChecker()
        }
    })
})

document.querySelector(".reset").addEventListener("click",()=>{
    Array.from(boxes).forEach(element=>{
        boxText=element.querySelector(".boxText").innerText=""
    })
    document.querySelector(".winner").innerText=``
    document.querySelector(".line").style.width=''
    player="X"
    flagwon=false
})
