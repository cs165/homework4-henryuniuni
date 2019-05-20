// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
const JSON_PATH = 'https://fullstackccu.github.io/homeworks/hw4/songs.json';
var songURL=[];
class MenuScreen {
  constructor(containerElement) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.containerElement = containerElement;
  }
  // TODO(you): Add methods as necessary.
  loadUrl(){
    fetch(JSON_PATH)
    .then(this._onResponse)
    .then(this._onJsonReady)
  }
  _onJsonReady(json) {
    const selection = document.querySelector('select');
    let a = document.createElement('option');
    a.textContent = json.鹹豆漿.title;
    songURL.push(json.鹹豆漿.songUrl);
    selection.appendChild(a);
    a = document.createElement('option');
    a.textContent = json.測速器.title;
    songURL.push(json.測速器.songUrl);
    selection.appendChild(a);
    a = document.createElement('option');
    a.textContent = json.檳榔.title;
    songURL.push(json.檳榔.songUrl);
    selection.appendChild(a);
    a = document.createElement('option');
    a.textContent = json.點仔膠.title;
    songURL.push(json.點仔膠.songUrl);
    selection.appendChild(a);
    a = document.createElement('option');
    a.textContent = json.夫妻.title;
    songURL.push(json.夫妻.songUrl);
    selection.appendChild(a);
    a = document.createElement('option');
    a.textContent = json.減肥刀.title;
    songURL.push(json.減肥刀.songUrl);
    selection.appendChild(a);
    //console.log(songURL);
  }
  _onResponse(response) {
    return response.json();
  }
  show() {
    this.containerElement.classList.remove('inactive');
  }
  hide() {
    this.containerElement.classList.add('inactive');
  }
}
