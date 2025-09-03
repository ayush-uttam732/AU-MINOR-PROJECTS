const apiKey = "4d01aec8c62c6c35fd9b2ad537b72b6c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input=document.querySelector(".search-bar input")
const btn=document.querySelector(".search-bar button");
const weatherImg=document.querySelector(".weather img")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    console.log("hello");

    document.querySelector(".city").innerHTML=city;
    document.querySelector(".temp").innerHTML=data.main.temp + "°C" ;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h" ;

    if(data.weather[0].main=="Clouds"){
       weatherImg.src="image/clouds.png"
    }
    if(data.weather[0].main=="Clear"){
       weatherImg.src="image/clear.png"
    }
    if(data.weather[0].main=="Drizzle"){
       weatherImg.src="image/drizzle.png"
    }
    if(data.weather[0].main=="Mist"){
       weatherImg.src="image/mist.png"
    }
    
}

btn.addEventListener("click",()=>{
    checkWeather(input.value);
})

