import {
  API_URL_CURR_LOC,
  API_URL_NEW_LOC,
  TIMEOUT_SEC,
  KEY,
} from "./config.js";
import { timeout } from "./helpers.js";
import weatherView from "./weatherView.js";

////////////////////////////////////////////////////////////////
//////// CURRENT LOCATION COORDS/WEATHER (ON PAGE LOAD) ///////
//////////////////////////////////////////////////////////////

export const getLatLon = async function () {
  const getCoords = async () => {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    console.log(position);

    return {
      lon: position.coords.longitude,
      lat: position.coords.latitude,
    };
  };

  const coords = await getCoords();

  return await getJSON(
    `${API_URL_CURR_LOC}${coords.lat}&lon=${coords.lon}&appid=${KEY}`
  );
};

////////////////////////////////////
/// RETURN WEATHER DATA FROM API ///
////////////////////////////////////

export const getJSON = async function (url, e) {
  try {
    const fetchData = await fetch(url);
    const res = await Promise.race([fetchData, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    console.log(data);
    const finalWeatherData = {
      name: data.name,
      country: data.sys.country,
      clouds: data.clouds.all,
      tempActual: data.main.temp,
      tempFeels: data.main.feels_like,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      visibility: data.visibility,
      weatherDesc: data.weather[0].description,
      weatherDesc2: data.weather[0].main,
      icon: data.weather[0].icon,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      windSpeed: data.wind.speed,
    };

    console.log(finalWeatherData);

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return finalWeatherData;
  } catch (err) {
    console.log(`Error from getJSON function: ${err}`);
    throw err;
  }
};

//////////////////////////////////////////////////////////
//////// NEW LOCATION COORDS/WEATHER (ON REQUEST) ///////
////////////////////////////////////////////////////////

export const newUserLocation = submitButton.addEventListener(
  "click",
  async function (e) {
    e.preventDefault();
    try {
      const newLocation = searchedLocation.value
        .replace(/\s/g, "")
        .toLowerCase();
      const fetchData = await fetch(
        `${API_URL_NEW_LOC}${newLocation}&limit=5&appid=${KEY}`
      );
      const res = await Promise.race([fetchData, timeout(TIMEOUT_SEC)]);
      const searchResults = await res.json();
      console.log(searchResults);
      const newLocationWeather = searchResults[0];
      const newLocationCoords = {
        lon: newLocationWeather.lon,
        lat: newLocationWeather.lat,
      };
      console.log(newLocationCoords);
      const newLocData = await getJSON(
        `${API_URL_CURR_LOC}${newLocationCoords.lat}&lon=${newLocationCoords.lon}&appid=${KEY}&lang=en`
      );
      const markup = await weatherView.currWeatherMarkup(newLocData);
      weatherView.updateUI(markup);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);
