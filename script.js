let show = document.getElementById("show")
let result = document.getElementById("result")


const numbers = [6, 4, 10, 2, 8 ,12,25,45,56,3,13];
show.innerHTML = numbers
result.innerHTML += `<br>`
result.innerHTML += `Sorting Algorithms:`
result.innerHTML += `<br>`
result.innerHTML += `sort(): `
result.innerHTML += numbers.sort()
result.innerHTML += `<br>`
result.innerHTML += `sort(b-a): `
result.innerHTML += numbers.sort((a,b)=>b-a)


const bubbleSort = (arr) => {
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap elements directly in the array
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  };
  
  // Assuming you have an array named 'numbers' with your data

  result.innerHTML += `<br>`
  result.innerHTML += `bubbleSort: `
result.innerHTML += bubbleSort(numbers)
console.log(bubbleSort(numbers))


const selectionSort = (array) => {

    for (let i = 0; i < array.length; i++) {
      let lowestValue = array[i];
      let indexOfLowestValue = i;
      for (let j = i; j < array.length; j++) {
        if (array[j] < lowestValue) {
          lowestValue = array[j];
          indexOfLowestValue = j;
        }
      }
      let temp = array[i];
      array[i] = array[indexOfLowestValue];
      array[indexOfLowestValue] = temp;
    }
    return array;
  }

  result.innerHTML += `<br>`
  result.innerHTML += `selectionSort: `
  result.innerHTML += selectionSort(numbers)


  result.innerHTML += `<br>`
  result.innerHTML += `Searching Algorithms: `
  result.innerHTML += `<br>`
 

  function getRandomInt(min, max) {
    min = Math.ceil(min); // Make sure min is an integer
    max = Math.floor(max); // Make sure max is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



  const randomNumber = getRandomInt(1, 80);

console.log(randomNumber)
 result.innerHTML += `linear Search ${randomNumber}: `
  function linearSearch(array, num) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === num) {
        return "found it ";
      }
    }
    return "not found";
  }
  result.innerHTML += linearSearch(numbers ,randomNumber)
  result.innerHTML += `<br>`
  result.innerHTML += `binary Search ${randomNumber}: `

  function Binarysearch(arr, k){
    let left = 0;
    let right = arr.length - 1;
   
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === k) {
        return "found it";
      } else if(arr[mid] < k) { // Change 'target' to 'k'
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
   
   return "not found";
}
   result.innerHTML += Binarysearch(numbers ,randomNumber)


   function ternarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      // Calculate first and second middle points
      const mid1 = Math.floor(left + (right - left) / 3);
      const mid2 = Math.floor(right - (right - left) / 3);
  
      // Check if target is found at any middle point
      if (arr[mid1] === target) {
        return mid1;
      } else if (arr[mid2] === target) {
        return mid2;
      }
  
      // Eliminate the irrelevant half based on target comparison
      if (target < arr[mid1]) {
        // Target is in the left third
        right = mid1 - 1;
      } else if (target > arr[mid2]) {
        // Target is in the right third
        left = mid2 + 1;
      } else {
        // Target is in the middle third
        left = mid1 + 1;
        right = mid2 - 1;
      }
    }
  
    // Target not found in the array
    return "not found ";
  }
  

  result.innerHTML += `<br>`
  result.innerHTML += `ternarySearch  ${randomNumber}: `
  result.innerHTML += ternarySearch(numbers ,randomNumber)






  function jumpSearch(arr, target) {
    const jumpStep = Math.floor(Math.sqrt(arr.length)); // Calculate the jump step size
    let current = 0;
  
    // Find the block where the target element might exist
    while (current < arr.length && arr[current] < target) {
      current += jumpStep;
    }
  
    // If target is found at the current index
    if (arr[current] === target) {
      return  "found it";
    }
  
    // Search within the current block or the previous block (if target might be there)
    const right = Math.min(current, arr.length - 1); // Avoid going out of bounds
    for (let i = current - jumpStep; i <= right; i++) {
      if (arr[i] === target) {
        return "found it";
      }
    }
  
    // Target not found
    return "not found ";
  }


  result.innerHTML += `<br>`
  result.innerHTML += `jumpSearch  ${randomNumber}: `
  result.innerHTML += jumpSearch(numbers ,randomNumber)


  function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high && target >= arr[low] && target <= arr[high]) {
      // Calculate the interpolation position
      const pos = low + Math.floor((target - arr[low]) * (high - low) / (arr[high] - arr[low]));
  
      // Check if target is found at the interpolated position
      if (arr[pos] === target) {
        return "found it";
      }
  
      // If target is less, search in the left sub-array
      if (target < arr[pos]) {
        high = pos - 1;
      } else {
        // If target is greater, search in the right sub-array
        low = pos + 1;
      }
    }
  
    // Target not found
    return "not found";
  }


  result.innerHTML += `<br>`
  result.innerHTML += `interpolationSearch  ${randomNumber}: `
  result.innerHTML += interpolationSearch(numbers ,randomNumber)


  function exponentialSearch(arr, target) {
    // Handle invalid input (empty array or target not present)
    if (arr.length === 0) {
      return -1;
    }
  
    // Find the first power of 2 that is greater than or equal to the array length
    let i = 1;
    while (i < arr.length) {
      i *= 2;
    }
  
    // Start searching from the beginning or the found power of 2
    let right = Math.min(i, arr.length - 1); // Avoid going out of bounds
  
    // Linear search within the identified range
    while (right >= 0) {
      if (arr[right] === target) {
        return right;
      }
  
      if (arr[right] > target) {
        right = right / 2 - 1; // Move to the left half (avoid integer division)
      } else {
        break; // Target might be in the right half, no need to move further left
      }
    }
  
    // Target not found
    return -1;
  }


  result.innerHTML += `<br>`
  result.innerHTML += `exponentialSearch  ${randomNumber}: `
  result.innerHTML += exponentialSearch(numbers ,randomNumber)