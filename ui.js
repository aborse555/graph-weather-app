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

    let text = "Your Current Weather";
    let result = text.link("https://api.openweathermap.org/data/2.5/weather?&appid=47ddd980562ebce5a65128586fa3a841&units=imperial&q="+city.city+"");
    document.getElementById("weather").innerHTML = result;
    
    var btnShowWeather = document.getElementById('btnShowWeather');
    btnShowWeather.style = "display: none";
}

