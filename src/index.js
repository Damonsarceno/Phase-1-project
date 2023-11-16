
  

fetch("http://localhost:3000/City's")
.then(res => res.json())
.then(citys => {
  citys.forEach((city => renderCitys(city)));

})





function renderCitys (city) {

    const li = document.createElement('li');
    li.className = 'list-li';
    
   
    const h3 = document.createElement('h3');
    h3.textContent = city.location;
   

   
    const pTemp = document.createElement('p');
    pTemp.textContent = city.TemperatureF
   

    const pTempC = document.createElement('p');
    pTempC.textContent = city.TemperatureC
    

    const pWind = document.createElement('p');
    pWind.textContent = city.WindSpeedMph


    const pWindK = document.createElement('p');
    pWindK.textContent = city.WindSpeedKmh



  li.append(h3, pTemp, pTempC, pWind, pWindK);
  document.getElementById('city-list').append(li);
}
