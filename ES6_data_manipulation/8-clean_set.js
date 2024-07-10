// This script creates a function named cleanSet that returns a string of all the set values
// that start with a specific string (startString).
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  const filterVal = Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.substring(startString.length));
  return (filterVal.join('-'));
}
