var btnchange=document.getElementById('change')
var home=document.getElementById("houseimg")

btnchange.addEventListener('click',function(){
    if(home.style.visibility==="hidden"){
        home.style.visibility="visible" 
        btnchange.textContent="Hide"
    }
    else
    {
        home.style.visibility="hidden"
        btnchange.textContent="Show"
    }

    
})