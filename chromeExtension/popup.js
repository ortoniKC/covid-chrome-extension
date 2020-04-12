fetch('https://corona.lmao.ninja/countries/India')
.then(response=>{
   return response.json()
})
.then(data =>{
    console.log(data);
    document.getElementById('todayDeaths').textContent += data.deaths
    document.getElementById('totalcases').textContent += data.cases
})