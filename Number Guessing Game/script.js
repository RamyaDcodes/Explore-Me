var maxnum=100
var minnum=1
var guess 
var attempt=0
var running=true
var answer=Math.floor(Math.random()*100)+1
while(running){
    guess=window.prompt(`Guess a number between ${minnum} -${maxnum}`)
    guess=Number(guess)
    if(isNaN(guess)){
        window.alert('please enter a valid number')
    }
    else if(guess<minnum || guess>maxnum){
        window.alert('please enter a valid number')
    }
    else{ 
    attempt++
    if(guess<answer){
        window.alert('Too low, try again')
    }
    else if(guess>answer){
        window.alert('Too high, try again')
    }
    else{
        window.alert(`correct the answer was ${answer} it tooks you ${attempt} attempts`)
        running=false
    } 
}   
}