import View from "./View.js";

class WeatherView extends View {
  _parentElement = document.querySelector(".weather-card");
  _errMessage = `Location not found - please try again`;

  // Render current location data
  currWeatherMarkup = async function (data) {
    let markup;
    const weatherData = await data;
    console.log(weatherData);
    return (markup = `
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

      `);
  };
}

export default new WeatherView();
