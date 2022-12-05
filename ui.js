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
    
    function getWeather( w ) {        
        document.getElementById('description').innerHTML = w.weather[0].description;
        document.getElementById('temp').innerHTML = w.main.temp + '&deg;' + 'F';
        const icon = w.weather[0].icon;
        let img = document.createElement("img");
        img.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/"+icon+".svg";
        img.style.height = "200px"
        img.style.width = "200px"
        document.body.appendChild(img);
    }
    
    fetch('https://api.openweathermap.org/data/2.5/weather?&appid=47ddd980562ebce5a65128586fa3a841&units=imperial&q='+city.city+'')  
        .then(function(resp) { return resp.json() }) 
        .then(function(data) { getWeather(data)})
    
    var btnShowWeather = document.getElementById('btnShowWeather');
    btnShowWeather.style = "display: none";
}
