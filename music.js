let song_name = document.getElementById("song_name");
let artist_name = document.getElementById("artist_name");
let song_img = document.getElementById("img");
let play_btn = document.getElementById("play-btn");
let back_btn = document.getElementById("back-btn");
let next_btn = document.getElementById("next-btn");
let audio = document.querySelector("audio");
let slide_index = 0;
let menustate = 0;

let music_item = [
  {
    songName: "Musafir",
    artistName: "Arijit Anand",
    song: "song1.mp3",
    img: "img1.jpeg",
  },
  {
    songName: "Aagaaz",
    artistName: "Dinesh Chauhan",
    song: "song2.mp3",
    img: "img2.jpeg",
  },
  {
    songName: "Bebe Bapu",
    artistName: "Harsh Likhari",
    song: "song3.mp3",
    img: "img3.jpeg",
  },
  {
    songName: "Manzar Hai Ye Naya",
    artistName: "Shashwat Sachdev",
    song: "song4.mp3",
    img: "img4.jpeg",
  },
  {
    songName: "Bandeya Rey Bandeya",
    artistName: "Arijit Singh",
    song: "song5.mp3",
    img: "img5.jpeg",
  },
  {
    songName: "Luka Chuppi",
    artistName: "A.R. Rahman",
    song: "song6.mp3",
    img: "img6.jpeg",
  },
  {
    songName: "Shikayat",
    artistName: "AUR",
    song: "song7.mp3",
    img: "img7.jpeg",
  },
  {
    songName: "Teri Marzi Aye Khuda",
    artistName: "Kailash Kher",
    song: "song8.mp3",
    img: "img8.jpeg",
  },
  {
    songName: "Faasle",
    artistName: "Kaavish",
    song: "song9.mp3",
    img: "img9.jpeg",
  },
  {
    songName: "Mera Yaar",
    artistName: "Shankar",
    song: "song10.mp3",
    img: "img10.jpeg",
  },
  {
    songName: "Maahi",
    artistName: "Madhur Sharma",
    song: "song11.mp3",
    img: "img11.jpeg",
  },
  {
    songName: "Kabira",
    artistName: "Pritam",
    song: "song12.mp3",
    img: "img12.jpeg",
  },
  {
    songName: "Forgive Me",
    artistName: "MC INSANE",
    song: "song13.mp3",
    img: "img13.jpeg",
  },
  {
    songName: "Ek Zindagi",
    artistName: "Taniskaa Sanghvi",
    song: "song14.mp3",
    img: "img14.jpeg",
  },
  {
    songName: "Phir Bhi Aas Lagi hai",
    artistName: "Ravi Raj",
    song: "song15.mp3",
    img: "img15.jpeg",
  },
  ];

play_btn.addEventListener("click", PlaySound);
function PlaySound(){
  if (menustate === 0) {
    menustate = 1;
    audio.play();
    play_btn.classList.replace("fa-play", "fa-pause");
    song_img.classList.add("anime");
  } else {
    menustate = 0;
    audio.pause();
    play_btn.classList.replace("fa-pause", "fa-play");
    song_img.classList.remove("anime");
  }
}

next_btn.addEventListener("click", NextFunc);
back_btn.addEventListener("click", BackFunc);

function SongChange() {
 song_name.innerText = music_item[slide_index].songName;
 artist_name.innerText = music_item[slide_index].artistName;
 song_img.src = music_item[slide_index].img;
 audio.src = music_item[slide_index].song;
 return;
}

function  NextFunc() {
  slide_index = (slide_index + 1) % music_item.length;
  SongChange();
  audio.play();
  menustate = 1;
  play_btn.classList.replace("fa-play", "fa-pause");
    song_img.classList.add("anime");
}
function  BackFunc() {
  slide_index = (slide_index - 1 + music_item.length) % music_item.length ;
  SongChange();
  audio.play();
  menustate = 1;
  play_btn.classList.replace("fa-play", "fa-pause");
    song_img.classList.add("anime");
}
