
 
 document.querySelector('.js-search-button').addEventListener('click',()=>{
    const area=document.querySelector('.js-area-search').value;
    localStorage.setItem('city',area);

    window.location.href='weather.html';
 })
 