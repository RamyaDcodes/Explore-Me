var weatherform = document.querySelector('.weatherform')
var cityinput = document.querySelector('.cityinput')
var card = document.querySelector('.card')
var apikey = '6697f14364d256269b6488947504cb45'

weatherform.addEventListener('submit', async event => {
    event.preventDefault()
    console.log('Form submitted'); 
    var city = cityinput.value
    if (city) {
        try {
            var weatherdata = await getweatherdata(city)
            displayweatherinfo(weatherdata)
        }
        catch (error) {
            console.error(error)
            displayerror(error)
        }
    }
    else {
        displayerror('Please enter a city')
    }

})
async function getweatherdata(city) {
    var apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    var response = await fetch(apiurl)
    if (!response.ok) {
        throw new Error("could not fetch weather data")
    }
    return await response.json()
}
function displayweatherinfo(data) {
    var {name:city,main:{temp,humidity},weather:[{description,id}]}=data

    card.textContent=''
    card.style.display='flex'

    const citydisplay=document.createElement('h1')
    const temdisplay=document.createElement('p')
    const humiditydisplay=document.createElement('p')
    const weatheremoji=document.createElement('p')

    citydisplay.textContent=city
    temdisplay.textContent=`${(temp-273.15).toFixed(1)}°C`
    humiditydisplay.textContent=`Humidity:${humidity}%`
    weatheremoji.textContent=getweatheremoji(id)
    citydisplay.classList.add('citydisplay')
    temdisplay.classList.add('temdisplay')
    humiditydisplay.classList.add('humiditydisplay')
    weatheremoji.classList.add('weatheremoji')
    card.appendChild(citydisplay)
    card.appendChild(temdisplay)
    card.appendChild(humiditydisplay)
    card.appendChild(weatheremoji)


}
function getweatheremoji(weatherid) {
    switch(true){
        case(weatherid>=200 && weatherid<300):
            return "🌧️";
        case(weatherid>=300 && weatherid<400):
        return "🌧️";
        case(weatherid>=500 && weatherid<600):
        return "🌧️";
        case(weatherid>=600 && weatherid<700):
        return "❄️";
        case(weatherid>=700 && weatherid<800):
        return "🌫️";
        case(weatherid === 800):
        return "☀️";
        case(weatherid>=801 && weatherid<810):
        return "☁️";

    }

}
function displayerror(message) {
    var errordisplay = document.createElement('p')
    errordisplay.textContent = message
    errordisplay.classList.add("errordisplay")
    card.textContent = ''
    card.style.display = 'flex'
    card.appendChild(errordisplay)

}
