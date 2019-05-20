// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this._onPlay = this._onPlay.bind(this);
    this._onPause = this._onPause.bind(this);
    const footerElement = document.querySelector("footer");
    const buttonElement = document.createElement("img");
    buttonElement.src = 'images/pause.png';//"images/play.png" ;
    buttonElement.classList.add("but");
    buttonElement.addEventListener('click',this._onPause);
    footerElement.appendChild(buttonElement);
  }
  // TODO(you): Add methods as necessary.
  _onPlay(event){
    const buttonElement = event.currentTarget;
    buttonElement.src = 'images/pause.png' ;
    buttonElement.addEventListener('click',this._onPause);
    buttonElement.removeEventListener('click',this._onPlay);
    //app.music.gif._changeGif();
    app.music.audioPlayer.play();
  }

  _onPause(event){
    const buttonElement = event.currentTarget;
    buttonElement.src = 'images/play.png' ;
    buttonElement.addEventListener('click',this._onPlay);
    buttonElement.removeEventListener('click',this._onPause);
    //app.music.gif._changeGif();
    app.music.audioPlayer.pause();
  }
}
