
export async function fetchCityData(area){
   const response=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${area}&count=1`);
    const areaInfo=await response.json();

      if(!areaInfo.results){
        return false;
     }  
      else{
        const city=areaInfo.results[0];
        return {
            name:city.name,
            latitude:city.latitude,
            longitude:city.longitude
        }  
    }

}