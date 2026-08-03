import { weather } from "./weather.js";


class Background {

  constructor(){
    this.backgroundSrc = '';
    this.divBackground = '';
    
  }

async showBackground(city) {
    const apiKey = 'FS9aXMuUnQclD533tO5ZQrXsJ5BoI6dNU0av7zB8tOap9ItZOtk5el2B';
   try{
    const response = await fetch(
   `https://api.pexels.com/videos/search?query=${city} cityscape&orientation=landscape&per_page=1`,
  {
    headers: {
      Authorization: apiKey,
    },
  }
);

 if(!response.ok){
    throw new Error('Something went wrong fetching city video!');
    return;
 } 

 const data = await response.json();
 console.log(data);
 this.backgroundSrc =  data.videos[0].video_files[0].link;;
 console.log(this.backgroundSrc);

   } catch(error){
    console.log(error);
   }
}


async showDivBackground() {
  const apiKey = 'FS9aXMuUnQclD533tO5ZQrXsJ5BoI6dNU0av7zB8tOap9ItZOtk5el2B';

  try {
    let query = "";

    switch (weather.weather.toLowerCase()) {
      case "clear":
        query = "clear sunny sky";
        break;

      case "clouds":
        query = "cloudy weather";
        break;

      case "rain":
        query = "rain weather";
        break;

      case "drizzle":
        query = "light rain";
        break;

      case "thunderstorm":
        query = "thunderstorm lightning";
        break;

      case "snow":
        query = "snowfall";
        break;

      case "mist":
        query = "misty weather";
        break;

      case "fog":
        query = "foggy weather";
        break;

      case "haze":
        query = "hazy weather";
        break;

      case "smoke":
        query = "smoky sky";
        break;

      case "dust":
        query = "dust storm";
        break;

      case "sand":
        query = "sandstorm";
        break;

      case "ash":
        query = "volcanic ash";
        break;

      case "squall":
        query = "strong wind";
        break;

      case "tornado":
        query = "tornado";
        break;

      default:
        query = "nature landscape";
    }

    const response = await fetch(
      `https://api.pexels.com/videos/search?query=${encodeURIComponent(query)}&orientation=landscape&per_page=1`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong fetching weather video!");
    }

    const data = await response.json();

    console.log(data);

    this.divBackground = data.videos[0].video_files[0].link;
  } catch (error) {
    console.error(error);
  }
}
}

export const background = new Background();

