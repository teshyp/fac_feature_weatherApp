// UI

import { getJSON, getLatLon, newUserLocation } from "./model.js";
import weatherView from "./weatherView.js";

export default class View {
  // Render landing page
  updateUI = async function (markup) {
    // load spinner here
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  };
  // clear parent el
  _clear() {
    this._parentElement.innerHTML = "";
  }
}

// Render spinner

// Render Error

// Render new location data
