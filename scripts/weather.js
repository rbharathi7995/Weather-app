 let latitude='';
 let longitude='';
 let name='';

  const area=localStorage.getItem('city');
    document.querySelector('.js-city-name').innerHTML=area;
 async function renderAreaInfo() {
    
  
    async function areaName(){
        
        const reaction= await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${area}&count=1`);
        const areaInfo=await reaction.json();
        
        name=areaInfo.results[0].name;
        latitude=areaInfo.results[0].latitude
        longitude=areaInfo.results[0].longitude;
        
        
      
    }
   
    async function weatherInfo(){
         await areaName();
        const response= await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`)
        const info=await response.json();
        const weatherCode=info.current.weather_code
        
        if(weatherCode === 0){
            document.querySelector('.js-weather-condition').innerHTML='☀️Sunny'
        }
        else if(weatherCode >=1 && weatherCode <=3 ){
            document.querySelector('.js-weather-condition').innerHTML='☁️Cloudy'
        }
        else if(weatherCode >=51 && weatherCode <=65 ){
            document.querySelector('.js-weather-condition').innerHTML='🌧️Rainy'
        }
        else if(weatherCode >=95 ){
            document.querySelector('.js-weather-condition').innerHTML='⛈️Thunderstorm'
        }




        document.querySelector('.js-time').innerHTML=info.current.time;
        document.querySelector('.js-temperature').innerHTML=info.current.temperature_2m+"&deg;C";
        document.querySelector('.js-wind-speed').innerHTML=info.current.wind_speed_10m+" km/h";
        document.querySelector('.js-humidity').innerHTML=info.current.relative_humidity_2m+"%" 

        }
    
    weatherInfo();
 }
 renderAreaInfo();

