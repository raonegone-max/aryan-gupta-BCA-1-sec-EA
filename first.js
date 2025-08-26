let apikey="20fb6ea3492eaa180affc80a99cd695e";
let apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchbox=document.querySelector(".search input");
let searchbtn=document.querySelector(".search button");
let weathericon=document.querySelector(".weather-icon");
async function checkweather(city){
    const response= await fetch(apiurl+city+`&appid=${apikey}`);
    let data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    if(data.weather[0].main=="Clouds"){
        weathericon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="images/mist.png";  
    }
    document.querySelector(".weather").style.display="block";
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
});
//aryan gupta BCA-1 section EA