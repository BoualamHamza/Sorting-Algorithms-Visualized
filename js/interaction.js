"use strict";
// ce fichier est creér pour gérer toute interaction utilisateur
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let graphSize = document.getElementById("graph-size").value;
  let graphSpeed = document.getElementById("graph-speed").value / 100;
  console.log(graphSpeed);
  let algorithm = document.getElementById("sort-algorithm").value;
  let newArray = generateArray(graphSize);

  // creation de case switch
  switch (algorithm) {
    case "bubble":
      bubbleSort(newArray, graphSpeed, algorithm);
      break;
    case "insertion":
      insertionSort(newArray, graphSpeed, algorithm);
      break;
    case "selection":
      selectionSort(newArray, graphSpeed, algorithm);
      break;
    case "heap":
      heapSort(newArray, graphSpeed, algorithm);
      break;
    case "merge":
      mergeSort(newArray, 0, newArray.length, graphSpeed, algorithm);
      break;
    case "quick":
      quickSort(newArray, 0, newArray.length - 1, graphSpeed, algorithm);
      break;
    case "shell":
      shellSort(newArray, graphSpeed, algorithm);
      break;
    case "cocktail":
      cocktailShakerSort(newArray, graphSpeed, algorithm);
      break;
    case "gnome":
      gnomeSort(newArray, graphSpeed, algorithm);
      break;
    case "oddeven":
      oddEvenSort(newArray, graphSpeed, algorithm);
      break;

    default:
      drawBars(arr, -1);
  }
});
