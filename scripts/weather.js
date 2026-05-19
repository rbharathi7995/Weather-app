 
 document.querySelector('.js-search-button').addEventListener('click',()=>{
    const area=document.querySelector('.js-area-search').value;
   
    document.querySelector('.js-city-name').innerHTML=area;

  async function renderAreaInfo() {
    
  
 
   
    async function weatherInfo(){
       
        const response= await fetch('https://api.open-meteo.com/v1/forecast?latitude=17.08&longitude=77.09&current=temperature_2m,wind_speed_10m,relative_humidity_2m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto')
        const info=await response.json();
        
        document.querySelector('.js-time').innerHTML=info.current.time;
        document.querySelector('.js-temperature').innerHTML=info.current.temperature_2m+"&deg;C";
        document.querySelector('.js-wind-speed').innerHTML=info.current.wind_speed_10m+" km/h";
        document.querySelector('.js-humidity').innerHTML=info.current.relative_humidity_2m+"%" 

        }
    
    weatherInfo();
 }
 renderAreaInfo();

});