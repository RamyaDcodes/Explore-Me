//entinput,diceresult,diceimage
var result=document.getElementById("diceresult")
var image=document.getElementById("diceimage")
const values=[]
const images=[]
function rollDice(){
    var inputs=document.getElementById("entinput").value

    values.length = 0;
    images.length = 0;

    for(let i=0;i<inputs;i++){
       const rd=Math.floor(Math.random()*6)+1
       values.push(rd)
       images.push(`<img src="assets/images/${rd}.png">`)
    }
    
result.textContent=`dice:${values.join(',')}`
image.innerHTML=images.join('')
}