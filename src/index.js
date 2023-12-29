


fetch("http://localhost:3000/Cities")
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
    pTemp.id = 'temp-f';
    pTemp.textContent = city.TemperatureF
    

    const pTempC = document.createElement('p');
    pTempC.id = 'temp-c';
    pTempC.textContent = city.TemperatureC
    

    const pWindMph = document.createElement('p');
    pWindMph.id = 'windSpeed-Mph';
    pWindMph.textContent = city.WindSpeedMph

    const pWindKmh = document.createElement('p');
    pWindKmh.id = 'windSpeed-Kmh';
    pWindKmh.textContent = city.WindSpeedKmh

    
    const pCondition = document.createElement('p');
    pCondition.textContent = city.Condition
    
    const button = document.createElement('button');
    button.textContent = "Delete City"

  li.append(h3, pTemp, pTempC, pWindMph, pWindKmh, pCondition, button);
  document.getElementById('city-list').append(li);
  
  button.addEventListener('click' , (e) => {
    li.remove();
  });
  
  li.addEventListener('mouseover', (e) => {
    pTemp.style.display = 'none';
    pTempC.style.display = 'block';
  });
  li.addEventListener('mouseout', (e) => {
    pTemp.style.display = 'block';
    pTempC.style.display = 'none';
  });
}
  
 let image = document.createElement('img');
    image.src = 'https://www.2ec.com.au/wp-content/uploads/sites/4/2022/08/MicrosoftTeams-image-21.jpg';
    image.classList.add('loading');
    image.addEventListener('load', (e) => {
      image.classList.remove('loading');
    });
      document.body.append(image);
   

    
   
  
 


