//textbox,first-radio,second-radion,result
var n_textbox=document.getElementById("textbox")
var firstradio=document.getElementById("first-radio")
var secondradio=document.getElementById("second-radio")
var finalresult=document.getElementById("result")
var temp

function convert(){
    if(firstradio.checked){
        temp=n_textbox.value
        temp=temp*9/5+32
        finalresult.textContent=temp.toFixed(1) +'F'
    }
    else if(secondradio.checked){
        temp=n_textbox.value
        temp=(temp-32)*(5/9)
        finalresult.textContent=temp.toFixed(1) +'C'
    }
    else{
        finalresult.textContent='Select a unit'
    }
}