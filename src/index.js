


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
    

    const pWind = document.createElement('p');
    pWind.textContent = city.WindSpeedMph

    
    const pCondition = document.createElement('p');
    pCondition.textContent = city.Condition
    
    const button = document.createElement('button');
    button.textContent = "Delete City"

  li.append(h3, pTemp, pWind, pCondition, button);
  document.getElementById('city-list').append(li);
  
  button.addEventListener('click' , (e) => {
    li.remove();
  })
}
  
 let image = document.createElement('img');
    image.src = 'https://www.2ec.com.au/wp-content/uploads/sites/4/2022/08/MicrosoftTeams-image-21.jpg';
    image.addEventListener('load', (e) => {
      document.body.append(image);
    });

    
   
  
  //li.addEventListener('mouseover', () => {
     //console.log('mouseover');
//      if (pTemp === TemperatureF) {
//        pTemp
//    }
//  });


