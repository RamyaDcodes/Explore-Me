var display=document.getElementById('display')
var timer=null
var startTime=0
var elapsedTime=0
var isRunning=false

function start(){
    if(!isRunning){
        startTime=Date.now()-elapsedTime
        timer=setInterval(update,10)
        isRunning=true
    }
}
function stop(){
    clearInterval(timer)
    elapsedTime=Date.now()-startTime
    isRunning=false

}
function reset(){
    clearInterval(timer)
    startTime=0
    elapsedTime=0
    isRunning=false
    display.textContent='00:00:00:00'

}
function update(){
    var currentTime=Date.now()
    elapsedTime=currentTime-startTime

    var hours=Math.floor(elapsedTime/(1000*60*60))
    var minutes=Math.floor(elapsedTime/(1000*60)%60)
    var seconds=Math.floor(elapsedTime/1000%60)
    var milliseconds=Math.floor(elapsedTime%1000/10)

    hours=String(hours).padStart(2,'0')
    minutes=String(minutes).padStart(2,'0')
    seconds=String(seconds).padStart(2,'0')
    milliseconds=String(milliseconds).padStart(2,'0')

    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`
}