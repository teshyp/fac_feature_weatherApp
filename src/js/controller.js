// import * as model from model;
import {
  API_URL_CURR_LOC,
  API_URL_NEW_LOC,
  TIMEOUT_SEC,
  KEY,
} from "./config.js";
import { timeout } from "./helpers.js";
import { getJSON, getLatLon, newUserLocation } from "./model.js";
import weatherView from "./weatherView.js";

var searchedLocation = document.querySelector("#searchedLocation");
var submitButton = document.getElementById("submitButton");

// TO DO NEXT: IF NO DATA IS PASSED IN, THEN GET LATLON, OTHERWISE USE DATA
const weatherData = async function (data) {
  try {
    const data = await getLatLon();
    const markup = await weatherView.currWeatherMarkup(data);
    weatherView.updateUI(markup);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// 1.. retrieve current Location Weather Data (import data from model)
// 2.. generate new html markup (in view)
// 3.. render markup to page (in controller) .. need to readd form
// 4.. user searches new location ...
// 5.. retrieve new locatin weather data (import data from model)
// 6.. render new location weather data to page

// add handlers

const init = async function () {
  await weatherView.currWeatherMarkup(weatherData());
};

init();
