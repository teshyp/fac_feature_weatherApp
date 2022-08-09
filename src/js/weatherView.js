// import { View } from "./View";
import View from "./View.js";

class WeatherView extends View {
  _parentElement = document.querySelector(".weather-card");
  _errMessage = `Location not found - please try again`;

  addHandlerUpdateWeather(handler) {
    //if this condition is true - run handler
    handler();
  }

  // Render current location data
  currWeatherMarkup = async function (data) {
    const weatherData = data;
    const markup = `
      <div class="weatherCard">
      <h1>WEATHER IN [LOCATION NAME]</h1>
      <ul>
        <li>Sunrise: ${weatherData.sunrise} </li>
        <li>Sunset: ${weatherData.sunset} </li>
        <li>Current temp: ${weatherData.tempActual}</li>
        <li>Temp feels like: ${weatherData.tempFeels}</li>
        <li>Min temp: ${weatherData.tempMin} </li>
        <li>Max temp: ${weatherData.tempMax} </li>
        <li>Weather Description: ${weatherData.weatherDesc}</li>
        <li>More description: ${weatherData.weatherDesc2}</li>
        <li>Windspeed mph: ${weatherData.windSpeed}</li>
      </ul>
    </div>
      `;
    console.log(markup);
  };
}

export default new WeatherView();
