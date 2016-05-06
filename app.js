var playlist = new Playlist();

var manOfSteel = new Movie ("Man of Steel",2013,"2:23:00")

var hereComesTheSun = new Song ("Here Comes the Sun","The Beatles","2:54");
var walkingOnSunshine = new Song ("Walking On Sunshine","Katrina and the Waves","3:54");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

playlist.add(manOfSteel);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function () {
  playlist.play();
  playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButton.onclick = function () {
  playlist.next();
  playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButton.onclick = function () {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}