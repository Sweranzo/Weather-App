class Background {
  constructor() {}

  async getBackground() {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=tokyo&client_id=YOUR_ACCESS_KEY`
    );
  }
}
