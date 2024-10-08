//amount,year,rate,total
var finalamount = document.getElementById('amount')
var finalyear = document.getElementById('year')
var finalrate = document.getElementById('rate')
var finaltotal=document.getElementById('total')
function change(event){
    event.preventDefault()
    var famount=finalamount.value
    var fyear=finalyear.value
    var frate=(finalrate.value)/100
    var result=famount*Math.pow((1+frate/1), 1 * fyear)
    finaltotal.textContent=result.toLocaleString(undefined,{style:'currency',currency:'INR'})
    
}
