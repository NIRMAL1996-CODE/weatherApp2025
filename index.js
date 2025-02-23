const inputCity = document.querySelector('.inputCity');
const searchbutton = document.querySelector('.search-button');
const temperature =document.querySelector('.temperature');
const tempdescription =document.querySelector('.temp-decrption');
const humidityValue =document.getElementById('humidityValue');
const windSpeed =document.getElementById('windSpeed');
const weatherImage =document.getElementById('weatherImage');
const invalidLocation= document.querySelector('.invalid-Location');
const displayWeather= document.querySelector('.displayWeather');

async function checkWeather(city){
  const api_key = "6b1c700c2307823059baba0b6295dde6";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weatherData = await fetch(url).then(response=>response.json());
  
  if(weatherData.cod === `404`){
    invalidLocation.style.display = "flex";
    displayWeather.style.display = "none";
    console.log("error");
    return;
    }
    
  invalidLocation.style.display = "none";
  displayWeather.style.display = "flex";

  temperature.innerHTML =`${Math.round(weatherData.main.temp - 273.15)}°C`;
  tempdescription.innerHTML =`${weatherData.weather[0].description}`;
  humidityValue.innerHTML =`${weatherData.main.humidity}%`;
  windSpeed.innerHTML =`${weatherData.wind.speed}km/h`;

  switch(weatherData.weather[0].main){
    case 'Clear':
      weatherImage.src ="images/allClear.jpeg";
      break;
    case 'Clouds':
      weatherImage.src ="images/cloud.jpeg";
      break;
    case 'Rain':
      weatherImage.src ="images/rain.jpeg";
      break;
    case 'Mist':
      weatherImage.src ="images/mist.jpeg";
      break;
    case 'Snow':
      weatherImage.src ="images/snow.jpeg";
      break;
  }
};

searchbutton.addEventListener('click', function(){
checkWeather(inputCity.value);
});