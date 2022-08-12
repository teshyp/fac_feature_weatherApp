import { getLatLon } from "./model.js";
import weatherView from "./weatherView.js";

const controllerWeatherData = async function (data) {
  try {
    const data = await getLatLon();
    const markup = await weatherView.currWeatherMarkup(data);
    weatherView.updateUI(markup);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const init = async function () {
  await controllerWeatherData();
  // await weatherView.currWeatherMarkup(weatherData());
};

init();
