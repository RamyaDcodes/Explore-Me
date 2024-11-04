var text_box = document.getElementById("textbox");
var CF = document.getElementById("tofahrenheit");
var FC = document.getElementById("toCelsius");
let temp
function convert() {
  if (CF.checked) {
    temp=Number(text_box.value)
    temp=temp*9/5+32
    result.textContent=temp.toFixed(1) +'°F'
  } else if (FC.checked) {
    temp=Number(text_box.value)
    temp=(temp-32)*(5/9)
    result.textContent=temp.toFixed(1)+'°C'
  } else {
    result.textContent = "Select a unit";
  }
}
