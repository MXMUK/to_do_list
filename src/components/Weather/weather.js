window.onload = function(){




    let ip = '';
    let XMLHttp = new XMLHttpRequest();
    XMLHttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            let ipwhois = JSON.parse(this.responseText);
            let final = ipwhois.city;




const weatherBblock = document.querySelector('#weather')
async function loadWeather(e){
    weatherBblock.innerHTML = `
    <div class="weather__loading">
    <img src="https://i.ibb.co/pyYSSVx/Spinner-1s-200px-1.gif" alt="Loading"/>
    </div>`;

    const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${final}&appid=8fe4b991fbea2f6cad7e87c69e4ee6bd`
    const response = await fetch(server, {
        method: 'GET'
    });
    
    const responseResult = await response.json();

    if(response.ok) {
        getWeather(responseResult);
    } else {
        weatherBblock.innerHTML = responseResult.message;
    }
}

function getWeather(data){
    console.log(data)
     const location = data.name;
     const temp = Math.round(data.main.temp)
     const feelsLike = Math.round(data.main.feels_like);
     const weatherStatus = data.weather[0].main;
     const weatherIcon = data.weather[0].icon;

     const template = `
<div class='weather__header'>
     <div class='weather__main'>
         <div class='weather__city'>${location}</div>
         <div class='weather__status'>${weatherStatus}</div>
     </div>
 <div class='weather__icon'>
     <img src='http://openweathermap.org/img/w/${weatherIcon}.png' alt='${weatherStatus}'/>
  </div>
 
 <div class='weather__temp'>${temp} °C</div>
 <div class='weather__feels-like'>Feels like: ${feelsLike}</div>
 </div>`

  weatherBblock.innerHTML = template;

}

if (weatherBblock){
    loadWeather();
}





}

};
XMLHttp.open('GET', 'https://ipwho.is/' + ip, true);
XMLHttp.send();

}
