import { fetchCityData } from "./api.js";
import { cityValidation, weatherCondition } from "./utils.js";

 document.body.style.backgroundColor='Aliceblue'
  const area=localStorage.getItem('city');
    document.querySelector('.js-city-name').innerHTML=area;

 
 async function renderAreaInfo() {
    document.querySelector('.js-loading-msg').innerHTML="Loading Weather...";

    async function weatherInfo(){
         const cityData=await fetchCityData(area)
         if(!cityData){
            cityValidation(cityData,area);
            return;
         }
        
        const response= await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityData.latitude}&longitude=${cityData.longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`)
        const info=await response.json();

       document.querySelector('.js-loading-msg').innerHTML=" ";

        const weatherCode=info.current.weather_code
        
       weatherCondition(weatherCode);

        const currentTime=(info.current.time).split('T');
        document.querySelector('.js-time').innerHTML=currentTime[1];
        document.querySelector('.js-temperature').innerHTML=Math.round(info.current.temperature_2m)+"&deg;C";
        document.querySelector('.js-wind-speed').innerHTML=info.current.wind_speed_10m+" km/h";
        document.querySelector('.js-humidity').innerHTML=info.current.relative_humidity_2m+"%" 

        }
    
    weatherInfo();
 }
 renderAreaInfo();

