import { submitButton, searchBar } from "./dom.js";
import { weather } from "./weather.js";
import { display } from "./display.js";
import { weatherContainer } from "./dom.js";

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  await weather.getWeather(searchBar.value);
  display.showWeather();
});
