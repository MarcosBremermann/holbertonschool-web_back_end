// Create a function that checks if all elements in the array exist within the set
function hasValuesFromArray(set, arr) {
  for (const element of arr) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}

export default hasValuesFromArray;
