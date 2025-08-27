
function addString(numbersString) {
  if (numbersString === '') {
    return 0;
  }
  const splittedArray = numbersString.replace(/\n/g, ',').split(',');
  var sum = splittedArray.reduce((acc, part) => acc + parseInt(part), 0);
  return sum
}
export { addString }