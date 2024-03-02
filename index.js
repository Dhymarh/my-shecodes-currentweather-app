
function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  
  cityElement.innerHTML = response.data.city;



  temperatureElement.innerHTML = Math.round(temperature);

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



let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);


searchCity("Nigeria");