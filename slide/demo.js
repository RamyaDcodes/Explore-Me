var sliderposition=0
var sliders=document.querySelectorAll('.slider-item')
var totalslider=sliders.length
var btnprev=document.getElementById('btn-prev')
var btnforward=document.getElementById('btn-forward')

btnprev.addEventListener('click',function(){
    prevslide()
})
btnforward.addEventListener('click',function(){
    forwardslide()
})
function updateposition(){
  sliders.forEach(slide=>{
    slide.classList.remove('active')
    slide.classList.add('hidden')
  })
  sliders[sliderposition].classList.add('active')
}
function prevslide(){
    if(sliderposition==0){
        sliderposition=totalslider-1
    }
    else{
        sliderposition--
    }
    updateposition()
}
function forwardslide(){
    if(sliderposition==totalslider-1){
        sliderposition=0
    }
    else{
        sliderposition++
    }
    updateposition()
}