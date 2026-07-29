class Weather {
  constructor() {
    this.cityName = "";
    this.country = "";

    this.latitude = 0;
    this.longitude = 0;

    this.temperature = 0;
    this.feelsLike = 0;
    this.tempMin = 0;
    this.tempMax = 0;

    this.humidity = 0;
    this.pressure = 0;

    this.weather = "";
    this.description = "";
    this.icon = "";

    this.windSpeed = 0;
    this.windDegree = 0;
    this.windGust = 0;

    this.cloudiness = 0;

    this.visibility = 0;

    this.sunrise = 0;
    this.sunset = 0;

    this.timezone = 0;
  }

  async getWeather(city) {
    try {
      if (!city) {
        console.log("Please type a valid city");
        return;
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ebb1f3b9cbe7ea42181dab5d1d3b6e1c&units=metric`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const location = await response.json();

      this.cityName = location.name;
      this.country = location.sys.country;

      this.latitude = location.coord.lat;
      this.longitude = location.coord.lon;

      this.temperature = location.main.temp;
      this.feelsLike = location.main.feels_like;
      this.tempMin = location.main.temp_min;
      this.tempMax = location.main.temp_max;

      this.humidity = location.main.humidity;
      this.pressure = location.main.pressure;

      this.weather = location.weather[0].main;
      this.description = location.weather[0].description;
      this.icon = location.weather[0].icon;

      this.windSpeed = location.wind.speed;
      this.windDegree = location.wind.deg;
      this.windGust = location.wind.gust ?? 0;

      this.cloudiness = location.clouds.all;

      this.visibility = location.visibility;

      this.sunrise = location.sys.sunrise;
      this.sunset = location.sys.sunset;

      this.timezone = location.timezone;

      console.log(this);
    } catch (error) {
      console.log(error);
    }
  }
}

export const weather = new Weather();
