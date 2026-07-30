
class Background {

  constructor(){
    this.backgroundSrc = '';
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
    throw new Error('Something went wrong fetching city image!');
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
}

export const background = new Background();

