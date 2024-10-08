var choices=['rock','paper','scissors']
var playerdisplay=document.getElementById('playerdisplay')
var computerdisplay=document.getElementById('computerdisplay')
var  resultdisplay=document.getElementById('resultdisplay')

function playgame(playerchoice){
    var computerchoice=choices[Math.floor(Math.random()*3)]
    var result=''
    if(playerchoice===computerchoice){
        result="IT'S A TIE!"
    }
    else{
        switch(playerchoice){
            case 'rock':
                result=(computerchoice==='scissors')?'YOU WIN!😁':'YOU LOSE🫣'
                break;
            case 'paper':
                result=(computerchoice==='rock')?'YOU WIN!😁':'YOU LOSE🫣'
                break;
            case 'scissors':
                result=(computerchoice==='paper')?'YOU WIN!😁':'YOU LOSE🫣'
                break;
        }
    }
    playerdisplay.textContent=`Player:${playerchoice}`
    computerdisplay.textContent=`Computer:${computerchoice}`
    resultdisplay.textContent=result

    resultdisplay.classList.remove('greentext','redtext')

    switch(result){
        case 'YOU WIN!😁':
            resultdisplay.classList.add('greentext')
            break;
        case 'YOU LOSE🫣':
            resultdisplay.classList.add('redtext')
            break;
    }

}