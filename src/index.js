import { submitButton, searchBar } from "./dom.js";
import { weather } from "./weather.js";

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  weather.getWeather(searchBar.value);
});
