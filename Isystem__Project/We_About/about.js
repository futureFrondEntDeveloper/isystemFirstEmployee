"use strict";
const videoContent = document.getElementById("video");
const playBtn = document.querySelector(".video_rounder");
playBtn.style.opacity = 1;
videoContent.addEventListener("click", function () {
  if (playBtn.style.opacity == 1) {
    playBtn.style.opacity = 0;
  } else {
    playBtn.style.opacity = 1;
  }
});
