import { fetchCityData } from "./api.js";
import { cityValidation } from "./utils.js";



 document.body.style.backgroundColor='Aliceblue'
  
    async function renderAreaInfo(area) {
         async function areaData(){
        
        const cityData=await fetchCityData(area);
        
      if(!cityData){
         return false;
        }
      else{
        return true;
      }
       
    }
    const validCity=await areaData();
    cityValidation(validCity,area);
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
 
 