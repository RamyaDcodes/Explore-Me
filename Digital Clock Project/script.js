function updateclock(){
    var now=new Date()
    var hours=now.getHours().toString().padStart(2,0)
    var minutes=now.getMinutes().toString().padStart(2,0)
    var seconds=now.getSeconds().toString().padStart(2,0)
    var timestring=`${hours}:${minutes}:${seconds}`
    document.getElementById('clock').textContent=timestring
}
updateclock()
setInterval(updateclock, 1000)