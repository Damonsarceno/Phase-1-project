
fetch("http://localhost:3000/City's")
  .then(res => res.json())
  .then(citys => {
    citys.forEach((city => renderCitys(city)));
  })







  citys.forEach((city) => {

    const li = document.createElement('li');
    //li.className = 'city-list';
    
   
    const h3 = document.createElement('h3');
    h3.textContent = city.location;
    li.append(h3);

   
    const temp = document.createElement('p');
    p.textContent = city.Temperature-F
    li.append(temp);

    const temp2 = document.createElement('p');
    p.textContent = city.Temperature-C
    li.append(temp2);




  document.getElementById('city-list').append(li);
})
//renderCitys();
