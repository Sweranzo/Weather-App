import { weatherContainer, heroBackground, intro } from "./dom.js";
import { weather } from "./weather.js";
import { background } from "./background.js";

class Display {
  constructor() {
    this.detailsSection = null;
    this.detailsBackground = null;
    this.clockInterval = null;
  }

  async displayBackground() {
    heroBackground.textContent = "";

    const video = document.createElement("video");
    video.src = background.backgroundSrc;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;

    await new Promise((resolve) => {
      video.onloadeddata = resolve;
    });

    heroBackground.append(video);
  }

  async showDetailsBackground() {
    if (!this.detailsBackground) return;

    this.detailsBackground.textContent = "";

    const video = document.createElement("video");
    video.src = background.divBackground;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;

    await new Promise((resolve) => {
      video.onloadeddata = resolve;
    });

    this.detailsBackground.append(video);
  }

  showWeather() {
    weatherContainer.textContent = "";
    intro.style.display = "none";

    const cityNameElement = document.createElement("p");
    const countryElement = document.createElement("p");
    const latitudeElement = document.createElement("p");
    const longitudeElement = document.createElement("p");
    const temperatureElement = document.createElement("p");
    const feelsLikeElement = document.createElement("p");
    const tempMinElement = document.createElement("p");
    const tempMaxElement = document.createElement("p");
    const humidityElement = document.createElement("p");
    const pressureElement = document.createElement("p");
    const weatherElement = document.createElement("p");
    const descriptionElement = document.createElement("p");
    const iconElement = document.createElement("img");
    const windSpeedElement = document.createElement("p");
    const windDegreeElement = document.createElement("p");
    const windGustElement = document.createElement("p");
    const cloudinessElement = document.createElement("p");
    const visibilityElement = document.createElement("p");
    const sunriseElement = document.createElement("p");
    const sunsetElement = document.createElement("p");
    const timezoneElement = document.createElement("p");

    cityNameElement.textContent = weather.cityName;
    countryElement.textContent = `Country: ${weather.country}`;

    latitudeElement.textContent = `Latitude: ${weather.latitude}`;
    longitudeElement.textContent = `Longitude: ${weather.longitude}`;

    temperatureElement.textContent = `Temperature: ${weather.temperature} °C`;
    feelsLikeElement.textContent = `Feels Like: ${weather.feelsLike} °C`;
    tempMinElement.textContent = `Min Temperature: ${weather.tempMin} °C`;
    tempMaxElement.textContent = `Max Temperature: ${weather.tempMax} °C`;

    humidityElement.textContent = `Humidity: ${weather.humidity}%`;
    pressureElement.textContent = `Pressure: ${weather.pressure} hPa`;

    weatherElement.textContent = `Weather: ${weather.weather}`;
    descriptionElement.textContent = `Description: ${weather.description}`;

    iconElement.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    iconElement.alt = weather.description;

    windSpeedElement.textContent = `Wind Speed: ${weather.windSpeed} m/s`;
    windDegreeElement.textContent = `Wind Direction: ${weather.windDegree}°`;
    windGustElement.textContent = `Wind Gust: ${weather.windGust} m/s`;

    cloudinessElement.textContent = `Cloudiness: ${weather.cloudiness}%`;

    visibilityElement.textContent = `Visibility: ${weather.visibility} m`;

    sunriseElement.textContent = `Sunrise (Unix): ${weather.sunrise}`;
    sunsetElement.textContent = `Sunset (Unix): ${weather.sunset}`;

    timezoneElement.textContent = weather.timezone;

    // Live Clock
    clearInterval(this.clockInterval);

    this.clockInterval = setInterval(() => {
      timezoneElement.textContent = weather.timezone;
    }, 1000);

    const locationSection = document.createElement("div");
    locationSection.classList.add("location-section");

    locationSection.append(
      cityNameElement,
      countryElement,
      weatherElement,
      iconElement,
      temperatureElement,
      feelsLikeElement,
      tempMinElement,
      tempMaxElement
    );

    this.detailsSection = document.createElement("div");
    this.detailsSection.classList.add("details-section");

    this.detailsBackground = document.createElement("div");
    this.detailsBackground.classList.add("details-background");

    const detailsContent = document.createElement("div");
    detailsContent.classList.add("details-content");

    detailsContent.append(
      timezoneElement,
      latitudeElement,
      longitudeElement,
      humidityElement,
      pressureElement,
      descriptionElement,
      windSpeedElement,
      windDegreeElement,
      windGustElement,
      cloudinessElement,
      visibilityElement,
      sunriseElement,
      sunsetElement
    );

    this.detailsSection.append(
      this.detailsBackground,
      detailsContent
    );

    weatherContainer.append(
      locationSection,
      this.detailsSection
    );

    // Load the details background video
    this.showDetailsBackground();
  }
}

export const display = new Display();