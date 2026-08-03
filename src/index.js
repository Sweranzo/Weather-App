import "./style.css";
import { submitButton, searchBar } from "./dom.js";
import { weather } from "./weather.js";
import { display } from "./display.js";
import { weatherContainer } from "./dom.js";
import { background } from "./background.js";
import {
  loadingOverlay,
  loadingContent,
  spinner,
  loadingText,
} from "./dom.js";
import { loading } from "./loading.js";


submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  
loading.show(`Finding ${searchBar.value}...`);

await background.showBackground(searchBar.value);
await weather.getWeather(searchBar.value);

await display.displayBackground();

display.showWeather();
await new Promise(requestAnimationFrame);
loading.hide();
});


