
function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#icon");
  
  
  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  icon.innerHTML = ` <img src= ${response.data.condition.icon_url} class="temperature-icon"/>`;
  temperatureElement.innerHTML = Math.round(temperature);
}



function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  
  let days =  [
    "Sunday",
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday",
    "Saturday"
  ];
  
  let day = days[date.getDay()];
  
  if (hours < 10 ) {
    hours = `0${hours}`;
  }
  
  if (minutes < 10 ) {
    hours = `0${minutes}`;
  }
  
  let months =  [
    "January",
    "February", 
    "March", 
    "April", 
    "May", 
    "June",
    "July",
    "August",
    "September", 
    "October", 
    "November", 
    "December", 
  ];
  
  
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let today = date.getDate();

  let todayElement = document.querySelector("#today-time");
  todayElement.innerHTML = `${hours}:${minutes}`;
  
  return ` ${day}, ${today}  ${month} ${year}`;
  


}



function searchCity(city) {
  let apiKey = "da44c510d29bcd1d39ft328ob6fc208a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
 axios.get(apiUrl).then(updateWeather);
}



function searchSubmit(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  
  searchCity(searchInputElement.value);
}

function displayForecast() {
  
  let forecastHtml = "";
  
  let days = [
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat"
  ];
  
  days.forEach(function(day) {
    forecastHtml = 
    forecastHtml +
    `
    <div class="weather-forecast-day">
    <div class="weather-forecast-date">${day}</div>
    <div class="weather-forecast-icon">🌤️</div>
    <div class="weather-forecast-temperatures">
    <div class="weather-forecast-temperature"> <strong>15º</strong> </div>
    <div class="weather-forecast-temperature">9º</div>
    </div>
    </div>
    `;
  });
  
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);


searchCity("Nigeria");
displayForecast();
