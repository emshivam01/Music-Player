let audio = new Audio(
  "./assets/music/Bad Meets Evil - Fast Lane (Official Audio).mp3"
);

let songCollection = [
  {
    songName: "Without Me",
    artist: "Bad Meets Evil",
    filePath: "./assets/music/From The D 2 The LBC.mp3",
    coverImage: "./assets/img/coverImages/without-me.jpg",
  },
  {
    songName: "From The D 2 The LBC",
    artist: "Eminem, Snoop Dogg",
    filePath: "./assets/music/From The D 2 The LBC - Eminem, Snoop Dogg.mp3",
    coverImage: "./assets/img/coverImages/without-me.jpg",
  },
  {
    songName: "The Real Slim Shady",
    filePath: "./assets/music/The Real Slim Shady - Eminem.mp3",
    artist: "Eminem",
    coverImage: "./assets/img/coverImages/without-me.jpg",
  },
  {
    songName: "Fast Lane",
    filePath: "./assets/music/Bad Meets Evil - Fast Lane.mp3",
    artist: "Eminem",
    coverImage: "./assets/img/coverImages/without-me.jpg",
  },
];

let seekBar = document.getElementById("seekBar");
let currentTIme = document.getElementById("current-time");

let masterBtn = document.getElementById("masterBtn");
masterBtn.addEventListener("click", () => {
  if (masterBtn.classList.contains("fa-play")) {
    audio.play();
    masterBtn.classList.remove("fa-play");
    masterBtn.classList.add("fa-pause");
  } else {
    audio.pause();
    masterBtn.classList.remove("fa-pause");
    masterBtn.classList.add("fa-play");
  }
});

audio.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  let p = parseInt((audio.currentTime / audio.duration) * 100);
  seekBar.value = p;
});

document.getElementById("song-title").innerText = songCollection[0].songName;
document.getElementById("cover-image").src = songCollection[0].coverImage;
