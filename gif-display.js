// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
const gif_themes = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
const gif_Url = [];
class GifDisplay {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    const inputElement = document.querySelector("#query-input");
    inputElement.value = gif_themes[Math.floor(Math.random() * Math.floor(10))];
    const gifArea = document.querySelector("#gif_area");
    this._getFetch = this._getFetch.bind(this);
    //gifArea.style.backgroundImage = "url('https://c.wallhere.com/photos/15/4f/women_white_hair_eyeliner_tattoo_face_portrait_depth_of_field-1445217.jpg!d')";
    this.apiPassword = '4AKgdnSHItrgNA96SiwNTSvRPOC9n0vT';
    this.front = 'https://api.giphy.com/v1/gifs/search?q=';
    this.value = '';
    this.middle = '&api_key=';
    this.back = '&limit=25&rating=g';
    //fetch()
  }
  // TODO(you): Add methods as necessary.
  _getFetch(){
    let Url = this.front + this.value + this.middle + this.apiPassword +this.back;
    console.log(Url);
    fetch(Url)
    .then(this._onResponse)
    .then(this._onJsonReady)
  }
  _onJsonReady(json) {
    //console.log(json.data);
    const gifArea = document.querySelector("#gif_area");
    gifArea.style.backgroundImage = 'url('+json.data[0].images.downsized.url+')';
    for(let i of json.data){
      //console.log(i.images.downsized.url);
      const tmp = new Image();
      tmp.src = i.images.downsized.url;
      gif_Url.push(tmp);
      console.log(tmp);
    }
    if(gif_Url.length < 3){
      const errorDiv = document.querySelector('#error');
      errorDiv.classList.remove('inactive');
    }
    else{
      app.music.audioPlayer.play();
    }
  }
  _onResponse(response) {
    return response.json();
  }

  _changeGif(){
    const gifArea = document.querySelector("#gif_area");
    const addr = 'url(' + gif_Url[Math.floor(Math.random() * Math.floor(gif_Url.length))].src + ')';
    //const addr = gif_Url[Math.floor(Math.random() * Math.floor(gif_Url.length))];
    gifArea.style.backgroundImage = addr;
  }
}
