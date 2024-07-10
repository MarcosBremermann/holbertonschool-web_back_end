// A function named divideFunction that will accept two arguments: numerator (Number)
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  } else {
    return (numerator / denominator);
  }
}
