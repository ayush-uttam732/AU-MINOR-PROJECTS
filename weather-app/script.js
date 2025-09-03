const apiKey="4d01aec8c62c6c35fd9b2ad537b72b6c";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search-bar input");
const searchBtn=document.querySelector(".search-bar button");
const weatherIcon=document.querySelector(".weather-icon")

async function checkweather(city) {
    const response=await fetch(url + city + `&appid=${apiKey}`);
    let data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;    
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";    
    document.querySelector(".temp").innerHTML=data.main.temp + "°C";    
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";    

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="image/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="image/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="image/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="image/mist.png";
    }
}

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value)
});

