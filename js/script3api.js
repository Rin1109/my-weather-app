let currentDate = new Date();

function formatDate(currentDate) {
   let hours = currentDate.getHours();
   let minutes = currentDate.getMinutes();
   let newTime = (hours + ":" + minutes);


   let dayIndex = currentDate.getDay();
   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   let day = days[dayIndex];

   let date = currentDate.getDate();
   let newDay = document.querySelector("#day");
   newDay.innerHTML = day;

   let currentTime = document.querySelector("#time");
   currentTime.innerHTML = newTime;

   return newDay + date + newTime;
}

formatDate(currentDate);


function displayWeatherCondition(response) {
   document.querySelector("#city").innerHTML = response.data.name;
   document.querySelector("#temp-main").innerHTML = Math.round(response.data.main.temp);
   document.querySelector("#temp-feels-like").innerHTML = Math.round(response.data.main.feels_like);
   document.querySelector("#temp-max").innerHTML = Math.round(response.data.main.temp_max);
   document.querySelector("#temp-min").innerHTML = Math.round(response.data.main.temp_min);
   document.querySelector("#humidity").innerHTML = response.data.main.humidity;
   document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
   document.querySelector(".describe-weather").innerHTML = response.data.weather[0].description;

   }

function handleSubmit(event) {
   event.preventDefault();
   let city = document.querySelector("#search-text-input").value;
   searchCity(city);
   }

function searchCity(city) {
   let apiKey = "2ef93a39c16392eacc33b8d28a8db82d";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(displayWeatherCondition);
      }

      
function searchLocation(position) {
   let apiKey = "2ef93a39c16392eacc33b8d28a8db82d";
   let lat = position.coords.latitude;
   let lon = position.coords.longitude;
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
   axios.get(apiUrl).then(displayWeatherCondition);
}
   
function getCurrentLocation(event) {
   event.preventDefault();
   navigator.geolocation.getCurrentPosition(searchLocation);
}
   
   
let apiKey = "2ef93a39c16392eacc33b8d28a8db82d";
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
let currentLocationButton = document.querySelector("#current-button");
currentLocationButton.addEventListener("click", getCurrentLocation);






