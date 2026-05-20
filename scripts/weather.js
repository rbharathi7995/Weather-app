 let latitude='';
 let longitude='';
 let name='';

  const area=localStorage.getItem('city');
    document.querySelector('.js-city-name').innerHTML=area;
 async function renderAreaInfo() {
    
  
    async function areaName(){
        try{
        const reaction= await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${area}&count=1`);
        const areaInfo=await reaction.json();
        
        name=areaInfo.results[0].name;
        latitude=areaInfo.results[0].latitude
        longitude=areaInfo.results[0].longitude;
        }
        catch{
            console.log("Location not found");
        }
    }
   
    async function weatherInfo(){
         await areaName();
        const response= await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`)
        const info=await response.json();
        
        document.querySelector('.js-time').innerHTML=info.current.time;
        document.querySelector('.js-temperature').innerHTML=info.current.temperature_2m+"&deg;C";
        document.querySelector('.js-wind-speed').innerHTML=info.current.wind_speed_10m+" km/h";
        document.querySelector('.js-humidity').innerHTML=info.current.relative_humidity_2m+"%" 

        }
    
    weatherInfo();
 }
 renderAreaInfo();

