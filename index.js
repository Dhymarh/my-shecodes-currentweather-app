
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

  getForecast(response.data.city);
  changeBackground(response.data.condition.description);
}


function changeBackground(weatherCondition) {
  let currentHour = new Date().getHours();
  let background = document.querySelector(".weather-app");

  if (currentHour >= 0 && currentHour < 12 ) {
    //12am to 12pm
    if (weatherCondition === "broken clouds") {
    background.style.backgroundImage = "url('images/broken-clouds/broken-clouds-day.jpg')";
  }
   else if (weatherCondition === "few clouds") {
     background.style.backgroundImage = "url('images/few-clouds/few-clouds-day.jpg')";
  }
   else if (weatherCondition === "scattered clouds") {
     background.style.backgroundImage = "url('images/scattered-clouds/scattered-clouds-day.jpg')";
  }
   else if (weatherCondition === "clear sky") {
     background.style.backgroundImage = "url('images/clear-sky/clear-sky-day.jpg')";
  }
  else if (weatherCondition === "rain") {
     background.style.backgroundImage = "url('images/rain/rain-day.jpg')";
  }
  else if (weatherCondition === "shower-rain") {
     background.style.backgroundImage = "url('images/shower-rain/shower-rain-day.jpg')";
  }
  else if (weatherCondition === "mist") {
     background.style.backgroundImage = "url('images/mist/mist-day-1.jpg')";
  }
  else if (weatherCondition === "snow") {
     background.style.backgroundImage = "url('images/snow/snow-day.jpg')";
  }
  else if (weatherCondition === "thunderstorm") {
     background.style.backgroundImage = "url('images/thunderstorm/thunderstorm-day.jpg')";
  }
}
   else if (currentHour >= 12 && currentHour < 18 ) {
    //12pm to 6pm 
    if (weatherCondition === "broken clouds") {
    background.style.backgroundImage = "url('images/broken-clouds/broken-clouds-night.jpg')";
  }
   else if (weatherCondition === "few clouds") {
     background.style.backgroundImage = "url('images/few-clouds/few-clouds-evening-1.jpg')";
  }
   else if (weatherCondition === "scattered clouds") {
     background.style.backgroundImage = "url('images/scattered-clouds/scattered-clouds-evening.jpg')";
  }
   else if (weatherCondition === "clear sky") {
     background.style.backgroundImage = "url('images/clear-sky/clear-sky-evening.jpg')";
  }
  else if (weatherCondition === "rain") {
     background.style.backgroundImage = "url('images/rain/rain-evening.jpg')";
  }
  else if (weatherCondition === "shower-rain") {
     background.style.backgroundImage = "url('images/shower-rain/shower-rain-evening.jpg')";
  }
  else if (weatherCondition === "mist") {
     background.style.backgroundImage = "url('images/mist/mist-evening.jpg')";
  }
  else if (weatherCondition === "snow") {
     background.style.backgroundImage = "url('images/snow/snow-evening.jpg')";
  }
  else if (weatherCondition === "thunderstorm") {
     background.style.backgroundImage = "url('images/thunderstorm/thunderstorm-evening.jpg')";
  }
  }
  else {
    //6pm to 12am
    if (weatherCondition === "broken clouds") {
    background.style.backgroundImage = "url('images/broken-clouds/broken-clouds-night.jpg')";
  }
   else if (weatherCondition === "few clouds") {
     background.style.backgroundImage = "url('images/few-clouds/few-clouds-night.jpg')";
  }
   else if (weatherCondition === "scattered clouds") {
     background.style.backgroundImage = "url('images/scattered-clouds/scattered-clouds-night.jpg')";
  }
   else if (weatherCondition === "clear sky") {
     background.style.backgroundImage = "url('images/clear-sky/clear-sky-night.jpg')";
  }
  else if (weatherCondition === "rain") {
     background.style.backgroundImage = "url('images/rain/rain-night.jpg')";
  }
  else if (weatherCondition === "shower-rain") {
     background.style.backgroundImage = "url('images/shower-rain/shower-rain-night.jpg')";
  }
  else if (weatherCondition === "mist") {
     background.style.backgroundImage = "url('images/mist/mist-night.jpg')";
  }
  else if (weatherCondition === "snow") {
     background.style.backgroundImage = "url('images/snow/snow-night.jpg')";
  }
  else if (weatherCondition === "thunderstorm") {
     background.style.backgroundImage = "url('images/thunderstorm/thunderstorm-night.jpg')";
  }
  }
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
    minutes = `0${minutes}`;
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

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days =  [
    "Sun",
    "Mon", 
    "Tue", 
    "Wed", 
    "Thur", 
    "Fri",
    "Sat"
  ];

  return days[date.getDay()];
}

function getForecast(city) {
  let apiKey = "da44c510d29bcd1d39ft328ob6fc208a";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}


function displayForecast(response) {
  console.log(response.data);
  let forecastHtml = "";
  response.data.daily.forEach(function (day, index) {
    if (index < 5 ) {
      forecastHtml = 
      forecastHtml +
      `
      <div class="weather-forecast-day">
      <div class="weather-forecast-date">${formatDay(day.time)} </div>
      
      <img src="${day.condition.icon_url}"       class="weather-forecast-icon"/>
      
      <div class="weather-forecast-temperatures">
      <div class="weather-forecast-temperature"> <strong>${Math.round(day.temperature.maximum)}º</strong> </div>
      <div class="weather-forecast-temperature">${Math.round(day.temperature.minimum)}º</div>
      </div>
      </div>
      `;
    }
  });
  
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);


searchCity("Nigeria");