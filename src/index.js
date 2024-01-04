


fetch("http://localhost:3000/Cities")
.then(res => res.json())
.then(citys => {
  citys.forEach((city => renderCitys(city)));

})

function deleteCity(button) {
    button.addEventListener('click' , () => {
      const li = button.parentElement;
      li.remove();
    });
}

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
  
    deleteCity(button);

  function handleTempMouseOver(e)  {
    pTemp.style.display = 'none';
    pTempC.style.display = 'block';
  };
  function handleTempMouseOut(e)  {
    pTemp.style.display = 'block';
    pTempC.style.display = 'none';
  };

  function handleWindMouseOver(e)  {
    pWindMph.style.display = 'none';
    pWindKmh.style.display = 'block';
  };
  function handleWindMouseOut(e)  {
    pWindMph.style.display = 'block';
    pWindKmh.style.display = 'none';
  };

  li.addEventListener('mouseover', handleTempMouseOver);
  li.addEventListener('mouseout', handleTempMouseOut);
  li.addEventListener('mouseover', handleWindMouseOver);
  li.addEventListener('mouseout', handleWindMouseOut); 

 
};
  function createImage(url, className) {
    let image = document.createElement('img');
    image.src = url;
    image.addEventListener('load', () => {
      document.body.appendChild(image);
    });
  }
createImage('https://www.2ec.com.au/wp-content/uploads/sites/4/2022/08/MicrosoftTeams-image-21.jpg', 'loading' );
     
   



