// add numbers in an array
const sum = (arr) => {
  let total = 0;  // changed the const to let
  arr.forEach((x) => {
    total += x;
  })
  return total
}

// concatenate two arrays
const concat = (arr1, arr2) => {
  return [...arr1, ...arr2]
}

// Exporting functions
export { sum, concat }

