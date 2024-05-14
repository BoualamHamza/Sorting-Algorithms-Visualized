"use strict";

function generateArray(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * height));
}
