// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.

class MusicScreen {
  constructor(containerElement) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.containerElement = containerElement;
    this.audioPlayer = new AudioPlayer();
    this._onSubmit = this._onSubmit.bind(this);
    this._onKick = this._onKick.bind(this);
    const formElement = document.querySelector('form');
    formElement.addEventListener('submit', this._onSubmit);

    this.gif = new GifDisplay();
    this.button = new PlayButton();
  }
  show() {
    this.containerElement.classList.remove('inactive');
  }
  hide() {
    this.containerElement.classList.add('inactive');
  }
  loadDone(){

  }
  _onSubmit(event) {
    //this.menu.hide();
    //this.music.show();
    event.preventDefault();
    const selectElem = document.querySelector('select');
    const index = selectElem.selectedIndex;
    const text = songURL[index];
    console.log(text);
    const formElement = document.querySelector('fieldset');
    formElement.disabled = true;

    this.audioPlayer.setSong(text);
    this.audioPlayer.setKickCallback(this._onKick);
    //this.audioPlayer.play();
    const inputElement = document.querySelector("#query-input");
    app.music.gif.value = inputElement.value;
    app.music.gif._getFetch();
    app.menu.hide();
    //app.music.load.show();
    app.music.show();
  }
  _onKick() {
    console.log('kick!');
    app.music.gif._changeGif();
  }
  // TODO(you): Add methods as necessary.
}
