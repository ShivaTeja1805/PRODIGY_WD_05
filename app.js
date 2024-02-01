

let searchbtn = document.querySelector(".search button");
let input = document.querySelector(".search input");
let cityname = document.querySelector(".weather .city");
let temp = document.querySelector(".weather .temp");
let humidity = document.querySelector(".details .humidity");
let windspeed = document.querySelector(".details .wind");
let weatherimg = document.querySelector(".weather-img");
let weather = document.querySelector(".weather");
let details = document.querySelector(".details");
let card = document.querySelector(".card");
let text = document.querySelector(".text");

// let apikey = "b3abb7cf8c84cc1145cad8f70048c49e";
// let url = "https://api.openweathermap.org/data/2.5/weather?q=&appid="


const checkweather = ((city)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b3abb7cf8c84cc1145cad8f70048c49e&units=metric`).then(res=>res.json()).then(data=>{
        console.log(status)
        console.log(data)
        console.log(data.weather[0].main)
        cityname.innerText =  data.name;
        temp.innerText =  `${Math.round(data.main.temp)}°C`;
        humidity.innerText=`${data.main.humidity}%`;
        windspeed.innerText=`${data.wind.speed}km/h`;
        if(data.weather[0].main === "Clear"){
            weatherimg.style.backgroundImage = "url(/Images/clear.png)";
        }
        else if(data.weather[0].main === "Clouds"){
            weatherimg.style.backgroundImage = "url(/Images/clouds.png)";
        }
        else if(data.weather[0].main === "Drizzle"){
            weatherimg.style.backgroundImage = "url(/Images/drizzle.png)";
        }
        else if(data.weather[0].main === "Mist"){
            weatherimg.style.backgroundImage = "url(/Images/mist.png)";
        }
        else if(data.weather[0].main === "Rain"){
            weatherimg.style.backgroundImage = "url(/Images/rain.png)";
        }
        else if(data.weather[0].main === "Snow"){
            weatherimg.style.backgroundImage = "url(/Images/snow.png)";
        } 

    })
})

searchbtn.addEventListener('click', ()=>{
    weather.classList.remove("hide")
    details.classList.remove("hide")
    card.classList.remove("cardwrap")
    text.classList.add("hide")
    checkweather(input.value)
})