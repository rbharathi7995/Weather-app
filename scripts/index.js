let latitude='';
let longitude='';
let name='';
 

 document.body.style.backgroundColor='Aliceblue'

     async function renderAreaInfo(area) {
       async function areaName(){
        
        const reaction= await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${area}&count=1`);
        const areaInfo=await reaction.json();
       
        if(!areaInfo.results || areaInfo.results.length === 0){
         return false;
        }
        else{
        name=areaInfo.results[0].name;
        latitude=areaInfo.results[0].latitude
        longitude=areaInfo.results[0].longitude;

        return true;
        }
        
    }
    const validCity=await areaName();
  
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

 document.querySelector('.js-search-button').addEventListener('click',()=>{
    const area=document.querySelector('.js-area-search').value;
    renderAreaInfo(area);

 })

 document.querySelector('.js-area-search').addEventListener('keydown',(event)=>{
  if(event.key === 'Enter'){
    const area=document.querySelector('.js-area-search').value;
    renderAreaInfo(area);
 
  }
 })
 
 