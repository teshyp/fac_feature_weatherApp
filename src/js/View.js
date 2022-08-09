// UI

export default class View {
  _data;

  // Render landing page
  updateUI(data) {
    // load spinner here
    this._data = data;
    const markup = this.currWeatherMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  // clear parent el
  _clear() {
    this._parentElement.innerHTML = "";
  }
}
// Render spinner

// Render Error

// Render new location data
