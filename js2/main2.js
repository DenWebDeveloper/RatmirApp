import dataSongs from "./Myobject.js";

// Подтягиваем нужные элементы со страницы HTML

let songItems = document.querySelectorAll(".songItem");

const popSongLeft = document.getElementById("pop_song_left");

const popSongRight = document.getElementById("pop_song_right");

const popSong = document.getElementsByClassName("pop_song")[0];

const popArtLeft = document.getElementById("pop_art_left");

const popArtRight = document.getElementById("pop_art_right");

const popArt = document.getElementsByClassName("pop_art")[0];

const wave = document.getElementById("wave");

const posterMasterPlay = document.getElementById("poster_master_play");

const title = document.getElementById("title");

const subTitle = document.getElementById("subtitle");

const masterPlay = document.querySelector("#masterPlay");

const seek = document.getElementById("seek");

const bar2 = document.getElementById("bar2");

const dot = document.getElementsByClassName("dot")[0];

const volIcon = document.getElementById("vol_icon");

const vol = document.getElementById("vol");

const volBar = document.getElementsByClassName("vol_bar")[0];

const volDot = document.getElementById("vol_dot");

const backBtn = document.getElementById("back");

const nextBtn = document.getElementById("next");

const songSide = document.querySelector(".song_side");

const songSideTitle = document.querySelector(".song_side .content__title");

const btnMMenuMobile = document.querySelector(".btn__menu__mobile");

const menuSide = document.querySelector(".menu_side");

const btnMenuClose = document.querySelector(".bi-arrow-left-short");

// console.log(btnMenuClose);

btnMMenuMobile.addEventListener("click", () => {
  menuSide.classList.add("active");
});

btnMenuClose.addEventListener("click", () => {
  menuSide.classList.remove("active");
});

const songSideContentDescription = document.querySelector(
  ".song_side .content__description"
);

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");

const menuSong = document.querySelector(".menu_song");

let i = 0;

for (let i = 0; i < dataSongs.length; i++) {
  let li = document.createElement("li");

  li.classList.add("songItem");

  li.innerHTML = `  <span>${dataSongs[i].id}</span>
                        <img src="${dataSongs[i].poster}" alt="">
                        <h5>${dataSongs[i].nameArtist}
                        <br> <div class="subtitle">${dataSongs[i].songName}</div></h5>

                        <i class="bi playListPlay bi-play-circle-fill" id="${dataSongs[i].id}"></i>`;

  menuSong.append(li);
}

let arrayMenuSongs = document.querySelectorAll(".songItem");

const arr = document.querySelectorAll(".playListPlay");

let music = new Audio(`${dataSongs[i].song}`);

let index = 1;

// //////////////////////////////////////////////////////////////////////////////
// music.play();

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    wave.classList.add("active1");

    masterPlay.classList.remove("bi-play-fill");

    masterPlay.classList.add("bi-pause-fill");

    makeAllPlays();

    arr[index - 1].classList.remove("bi-play-circle-fill");

    arr[index - 1].classList.add("bi-pause-fill");

    music.play();
  } else {
    music.pause();
    wave.classList.remove("active1");

    masterPlay.classList.remove("bi-pause-fill");

    masterPlay.classList.add("bi-play-fill");

    makeAllPlays();
  }
});

const makeAllPlays = () => {
  Array.from(document.querySelectorAll(".playListPlay")).forEach((el) => {
    el.classList.remove("bi-pause-fill");

    el.classList.add("bi-play-circle-fill");

    menuSide.classList.remove("active");
  });
};

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = `rgb( 105, 105, 105, .0)`;
  });
};

Array.from(document.getElementsByClassName("songItem"))[
  index - 1
].style.background = `rgb( 105, 105, 105, .1)`;

Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    if (
      music.paused ||
      music.currentTime <= 0 ||
      el.target.classList.contains("bi-play-circle-fill")
    ) {
      el.target.classList.remove("bi-play-circle-fill");

      wave.classList.add("active1");

      el.target.classList.add("bi-pause-fill");

      index = el.target.id;

      music.src = `./songs/Ratmir/${index - 1}.mp3`;

      posterMasterPlay.src = `"./images/Ratmir/Обработанные/${index - 1}.jpg`;

      songSideTitle.textContent = `${dataSongs[index - 1].nameArtist}`;

      songSideContentDescription.textContent = `${
        dataSongs[index - 1].songName
      }`;

      masterPlay.classList.remove("bi-play-fill");

      masterPlay.classList.add("bi-pause-fill");

      let songTitles = dataSongs.filter((els) => {
        return els.id == index;
      });

      songTitles.forEach((elss) => {
        let { songName, poster } = elss;

        title.innerHTML = songName;

        posterMasterPlay.src = poster;
      });

      makeAllBackground();

      Array.from(document.getElementsByClassName("songItem"))[
        index - 1
      ].style.background = `rgb( 105, 105, 105, .1)`;

      makeAllPlays();

      songSide.style.background = `${dataSongs[index - 1].bgPoster}`;
      songSide.style.backgroundSize = "cover";
      songSide.style.backgroundPosition = "center";
      songSide.style.backgroundRepeat = "no-repeat";

      el.target.classList.remove("bi-play-circle-fill");

      el.target.classList.add("bi-pause-fill");

      wave.classList.add("active1");

      music.play();
    } else {
      music.pause();

      makeAllPlays();

      wave.classList.remove("active1");

      masterPlay.classList.remove("bi-pause-fill");

      masterPlay.classList.add("bi-play-fill");
    }
  });
});

music.addEventListener("timeupdate", () => {
  let musicCurr = music.currentTime;
  let musicDur = music.duration;

  console.log(musicDur);

  let min1 = Math.floor(musicCurr / 60);
  let sec1 = Math.floor(musicCurr % 60);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }

  let min2 = Math.floor(musicDur / 60);
  let sec2 = Math.floor(musicDur % 60);

  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }

  currentStart.textContent = `${min1}:${sec1}`;

  currentEnd.textContent = `${min2}:${sec2}`;

  let progressBar = parseInt((musicCurr / musicDur) * 100);

  seek.value = progressBar;

  let seekBar = seek.value;

  bar2.style.width = `${seekBar}%`;

  dot.style.left = `${seekBar}%`;

  if (musicCurr === musicDur) {
    nextTrack();

    music.src = `${dataSongs[index - 1].song}`;

    music.play();
  }
});

seek.addEventListener("input", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

vol.addEventListener("input", () => {
  if (vol.value == 0) {
    volIcon.classList.remove("bi-volume-up-fill");
    volIcon.classList.remove("bi-volume-down-fill");
    volIcon.classList.add("bi-volume-off-fill");
  }

  if (vol.value > 0) {
    volIcon.classList.remove("bi-volume-off-fill");
    volIcon.classList.remove("bi-volume-up-fill");
    volIcon.classList.add("bi-volume-down-fill");
  }

  if (vol.value > 50) {
    volIcon.classList.remove("bi-volume-off-fill");
    volIcon.classList.remove("bi-volume-down-fill");
    volIcon.classList.add("bi-volume-up-fill");
  }

  let volValue = vol.value;

  volBar.style.width = `${volValue}%`;

  volDot.style.left = `${volValue}%`;

  music.volume = volValue / 100;
});

backBtn.addEventListener("click", () => {
  index--;

  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }

  music.src = `./songs/Ratmir/${index - 1}.mp3`;

  posterMasterPlay.src = `./images/Ratmir/Обработанные/${index - 1}.jpg`;

  music.play();

  masterPlay.classList.remove("bi-play-fill");

  masterPlay.classList.add("bi-pause-fill");

  let songTitles = dataSongs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName, nameArtist, poster } = elss;

    title.innerHTML = songName;

    subTitle.textContent = nameArtist;

    posterMasterPlay.src = poster;
  });

  songSideContentDescription.textContent = `${dataSongs[index - 1].songName}`;

  makeAllBackground();

  makeAllPlays();

  let arrayMenuSongs = document.querySelectorAll(".songItem");

  arrayMenuSongs[index - 1].style.background = `rgb( 105, 105, 105, .1)`;
  arrayMenuSongs[index - 1]
    .querySelector("i")
    .classList.remove("bi-play-circle-fill");
  arrayMenuSongs[index - 1].querySelector("i").classList.add("bi-pause-fill");

  songSide.style.background = `${dataSongs[index - 1].bgPoster}`;
  songSide.style.backgroundSize = "cover";
  songSide.style.backgroundPosition = "center";
  songSide.style.backgroundRepeat = "no-repeat";

  wave.classList.add("active1");
});

function nextTrack() {
  index++;

  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }

  music.src = `./songs/Ratmir/${index - 1}.mp3`;

  posterMasterPlay.src = `./images/Ratmir/Обработанные/${index - 1}.jpg`;

  masterPlay.classList.remove("bi-play-fill");

  masterPlay.classList.add("bi-pause-fill");

  let songTitles = dataSongs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName, nameArtist, poster } = elss;

    title.innerText = songName;

    subTitle.innerText = nameArtist;

    posterMasterPlay.src = poster;
  });

  songSideTitle.textContent = `${dataSongs[index - 1].nameArtist}`;

  songSideContentDescription.textContent = `${dataSongs[index - 1].songName}`;

  makeAllBackground();

  makeAllPlays();

  arrayMenuSongs[index - 1].style.background = `rgb( 105, 105, 105, .1)`;

  arrayMenuSongs[index - 1]
    .querySelector("i")
    .classList.remove("bi-play-circle-fill");
  arrayMenuSongs[index - 1].querySelector("i").classList.add("bi-pause-fill");

  songSide.style.background = `${dataSongs[index - 1].bgPoster}`;
  songSide.style.backgroundSize = "cover";
  songSide.style.backgroundPosition = "center";
  songSide.style.backgroundRepeat = "no-repeat";

  wave.classList.add("active1");

  currentStart.textContent = `${dataSongs[index].start}`;
  currentEnd.textContent = `${dataSongs[index].end}`;

  music.play();
}

nextBtn.addEventListener("click", nextTrack);
