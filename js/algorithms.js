"use strict";
// fichier contennant les 10 algo
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
//Fonction utilitaire pour mettre en pause l'exécution de la fonction pendant un certain nombre de milliseconde
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
//------------------le bubble sort----------------------------------------------
async function bubbleSort(arr, speed, sortType) {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      drawBars(arr, i, sortType);
      await sleep(speed);

      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  }

  drawBars(arr, -1, sortType);
}
//--------------------Insertion sort----------------------------------------------
async function insertionSort(arr, speed, sortType) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;

      drawBars(arr, j, sortType);
      await sleep(speed);
    }

    arr[j + 1] = key;
  }

  drawBars(arr, -1, sortType);
}

//--------------------selection sort----------------------------------------------

async function selectionSort(arr, speed, sortType) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }

      drawBars(arr, j, sortType);
      await sleep(speed);
    }

    if (minIndex !== i) {
      // Échange les positions
      swap(arr, i, minIndex);
      //afficher l'état actuel du tableau
      drawBars(arr, i, sortType);
      await sleep(100);
    }
  }

  drawBars(arr, -1, sortType);
}

//--------------------Heap sort----------------------------------------------

async function heapSort(arr, speed, sortType) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    await heapify(arr, arr.length, i, speed, sortType);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, 0, i);
    await heapify(arr, i, 0, speed, sortType);
    drawBars(arr, i, sortType);
    await sleep(speed);
  }

  drawBars(arr, -1, sortType);
}

async function heapify(arr, n, i, speed, sortType) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    await heapify(arr, n, largest, speed, sortType);
    drawBars(arr, i, sortType);
    await sleep(speed);
  }
}
//--------------------Merge sort----------------------------------------------

async function mergeSort(
  arr,
  start = 0,
  end = arr.length - 1,
  speed,
  sortType
) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    await mergeSort(arr, start, mid, speed, sortType);
    await mergeSort(arr, mid + 1, end, speed, sortType);
    await merge(arr, start, mid, end, speed, sortType);
  }
}

async function merge(arr, start, mid, end, speed, sortType) {
  const temp = new Array(end - start + 1);
  let i = start,
    j = mid + 1,
    k = 0;

  while (i <= mid && j <= end) {
    drawBars(arr, [i, j], sortType);
    await sleep(speed);

    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  while (i <= mid) {
    drawBars(arr, [i], sortType);
    await sleep(speed);
    temp[k++] = arr[i++];
  }

  while (j <= end) {
    drawBars(arr, [j], sortType);
    await sleep(speed);
    temp[k++] = arr[j++];
  }

  for (let i = start, k = 0; i <= end; i++, k++) {
    arr[i] = temp[k];
    drawBars(arr, [i], sortType);
    await sleep(speed);
  }
}

//--------------------quick sort----------------------------------------------
async function quickSort(arr, low, high, speed, sortType) {
  if (low < high) {
    const partitionIndex = await partition(arr, low, high, speed, sortType);

    await Promise.all([
      quickSort(arr, low, partitionIndex - 1, speed, sortType),
      quickSort(arr, partitionIndex + 1, high, speed, sortType),
    ]);
  }
}

async function partition(arr, low, high, speed, sortType) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    drawBars(arr, j, sortType);

    await sleep(speed);

    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  drawBars(arr, i + 1, sortType);

  return i + 1;
}
//--------------------Shell sort----------------------------------------------
async function shellSort(arr, speed, sortType) {
  let gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i];
      let j;

      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      arr[j] = temp;
      drawBars(arr, [i - gap, i], sortType);
      await sleep(speed);
    }

    gap = Math.floor(gap / 2);
  }

  drawBars(arr, [-1, -1], sortType);
}

//--------------------Cocktail-sort----------------------------------------------
async function cocktailShakerSort(arr, speed, sortType) {
  let start = 0;
  let end = arr.length - 1;
  let swapped;

  do {
    swapped = false;
    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
      drawBars(arr, [i, i + 1], sortType);
      await sleep(speed);
    }
    end--;

    if (!swapped) break;

    swapped = false;
    for (let i = end - 1; i >= start; i--) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
      drawBars(arr, [i, i + 1], sortType);
      await sleep(speed);
    }
    start++;
  } while (swapped);

  drawBars(arr, [-1, -1], sortType);
}

//--------------------Gnom-sort----------------------------------------------
async function gnomeSort(arr, speed, sortType) {
  let i = 1;

  while (i < arr.length) {
    if (i === 0) {
      i = 1;
    }

    if (arr[i] >= arr[i - 1]) {
      i++;
    } else {
      swap(arr, i, i - 1);
      drawBars(arr, [i - 1, i], sortType);
      await sleep(speed);
      i--;
    }
  }

  drawBars(arr, [-1, -1], sortType);
}

//--------------------Oddeven-sort----------------------------------------------
async function oddEvenSort(arr, speed, sortType) {
  const n = arr.length;
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    // trier les index non pair
    for (let i = 1; i < n - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        drawBars(arr, [i, i + 1], sortType);
        await sleep(speed);
        isSorted = false;
      }
    }

    // trier les elemens pair
    for (let i = 0; i < n - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        drawBars(arr, [i, i + 1], sortType);
        await sleep(speed);
        isSorted = false;
      }
    }
  }

  drawBars(arr, [-1, -1], sortType); // fini
}
