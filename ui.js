async function displayUI() {    
    await signIn();
    
    const user = await getUser();
    var userName = document.getElementById('userName');
    userName.innerText = user.displayName;  

    var signInButton = document.getElementById('signin');
    signInButton.style = "display: none";
    var content = document.getElementById('content');
    content.style = "display: block";
    var btnShowWeather = document.getElementById('btnShowWeather');
    btnShowWeather.style = "display: block";  
    console.log(user)
}

async function displayWeather() {
    const city = await getCity();
    var wrapperShowWeather = document.getElementById('eventWrapper');
    wrapperShowWeather.style = "display: block";
    var cityName = document.getElementById('cityName');
    cityName.innerText = city.city;
    
    function drawWeather( d ) {        
        document.getElementById('description').innerHTML = d.weather[0].description;
        document.getElementById('temp').innerHTML = d.main.temp+ '&deg;';
        document.getElementById('location').innerHTML = d.name;}

    fetch('https://api.openweathermap.org/data/2.5/weather?&appid=47ddd980562ebce5a65128586fa3a841&units=imperial&q='+city.city+'')  
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) { drawWeather(data)})
    
    var btnShowWeather = document.getElementById('btnShowWeather');
    btnShowWeather.style = "display: none";
}
