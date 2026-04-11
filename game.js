let score = 0;
let gameRunning = false;

let gameInterval = null;
let adTimer = null;

const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
const adPopup = document.getElementById("ad-popup");
const adVideo = document.getElementById("ad-video");

const images = ["watch1.jpg", "watch2.jpg", "watch3.jpg"];

// START GAME
window.startGame = function () {
  if (gameRunning) return;

  gameRunning = true;

  document.getElementById("start-screen").classList.add("hidden");
  gameArea.classList.remove("hidden");

  score = 0;
  updateScore();

  startGameLoop();
  scheduleAd();
};

// GAME LOOP
function startGameLoop() {
  clearInterval(gameInterval);
  gameInterval = setInterval(createWatch, 1200);
}

// CREATE WATCH
function createWatch() {
  if (!gameRunning) return;

  const watch = document.createElement("img");
  watch.src = images[Math.floor(Math.random() * images.length)];
  watch.classList.add("watch");

  watch.style.left = Math.random() * 90 + "%";
  watch.style.top = "0px";

  gameArea.appendChild(watch);

  let fall = setInterval(() => {
    let top = parseInt(watch.style.top);
    watch.style.top = top + 6 + "px";

    if (top > 350) {
      watch.remove();
      clearInterval(fall);
    }
  }, 40);

  watch.onclick = () => {
    score++;
    updateScore();
    watch.remove();
    showClickEffect(watch);
  };
}

// UPDATE SCORE
function updateScore() {
  scoreDisplay.innerText = "Score: " + score;
}

// ====================
// 🎯 AD SYSTEM
// ====================

//Schedule ad after 10 sec
function scheduleAd() {
  clearTimeout(adTimer);

  adTimer = setTimeout(() => {
    showAd();
  }, 10000);
}

// // SHOW AD
 function showAd() {
   gameRunning = false;
   clearInterval(gameInterval);

   adPopup.classList.remove("hidden");

   adVideo.currentTime = 0;
   adVideo.play();

   startSkipCountdown();

//   // AUTO CLOSE WHEN VIDEO ENDS
   adVideo.onended = () => {
     closeAd();
   };
 }

// // SKIP SYSTEM
 function startSkipCountdown() {
   const skipBtn = document.getElementById("skip-btn");

   let timeLeft = 5;
   skipBtn.disabled = true;
   skipBtn.innerText = "Skip in 5";

   let countdown = setInterval(() => {
     timeLeft--;

     skipBtn.innerText = "Skip in " + timeLeft;

     if (timeLeft <= 0) {
       clearInterval(countdown);
       skipBtn.disabled = false;
       skipBtn.innerText = "Skip Ad";
     }
   }, 1000);
 }

// // CLOSE AD
 window.closeAd = function () {
   adPopup.classList.add("hidden");

   adVideo.pause();

   gameRunning = true;
   startGameLoop();

//  Schedule next ad again
   scheduleAd();
 };

 function showClickEffect(element) {
   const effect = document.createElement("div");
   effect.classList.add("click-effect");

   effect.style.left = element.style.left;
   effect.style.top = element.style.top;

   gameArea.appendChild(effect);

   setTimeout(() => {
     effect.remove();
   }, 500);
 }