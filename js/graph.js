"use strict";
const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function drawBars(arr, activeIndex, sortType) {
  ctx.clearRect(0, 0, width, height);

  const barWidth = width / arr.length;
  const gap = barWidth / 4;

  for (let i = 0; i < arr.length; i++) {
    const x = i * barWidth + gap;
    const y = height - arr[i];
    const barHeight = arr[i];

    switch (sortType) {
      case "bubble":
      case "insertion":
      case "selection":
      case "quick":
      case "heap":
        ctx.fillStyle = i === activeIndex ? "red" : "#0d8bf5";
        break;
      case "merge":
      case "shell":
        ctx.fillStyle =
          i >= activeIndex[0] && i <= activeIndex[1] ? "red" : "#0d8bf5";
        break;
      case "cocktail":
      case "oddeven":
      case "gnome":
        ctx.fillStyle =
          i === activeIndex[0] || i === activeIndex[1] ? "red" : "#0d8bf5";
        break;
    }

    ctx.fillRect(x, y, barWidth - gap, barHeight);
  }
}
