  export function cityValidation(validCity,area){

   if(validCity === false){
    document.querySelector('.js-search-valid-msg').innerHTML="Invalid city name"

   setTimeout(()=>{
    document.querySelector('.js-search-valid-msg').innerHTML=""

    },3000);
   
   }

   else{
  localStorage.setItem('city',area);
  window.location.href='weather.html';
   }

  }

  export function weatherCondition(weatherCode){
     if(weatherCode === 0){
            document.querySelector('.js-weather-condition').innerHTML='☀️Sunny';

        }
        else if(weatherCode >=1 && weatherCode <=3 ){
            document.querySelector('.js-weather-condition').innerHTML='☁️Cloudy';

        }
        else if(weatherCode >=51 && weatherCode <=65 ){
            document.querySelector('.js-weather-condition').innerHTML='🌧️Rainy'
        }
        else if(weatherCode >=95 ){
            document.querySelector('.js-weather-condition').innerHTML='⛈️Thunderstorm'
        }
  }