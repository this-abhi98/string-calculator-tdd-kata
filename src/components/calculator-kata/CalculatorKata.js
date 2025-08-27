function addString(numbersString) {
  if (numbersString === "") {
    return 0;
  }

  //default delimiter is comma and newline
  let delimiter = /,|\n/;

  // Check for custom delimiter
  if (numbersString.startsWith("//")) {
    const delimiterEndIndex = numbersString.indexOf("\n");
    delimiter = numbersString.substring(2, delimiterEndIndex);
    numbersString = numbersString.substring(delimiterEndIndex + 1);
  }

  // Replace custom delimiter inplace of comma and split the string
  const splittedArray = numbersString
    .replace(new RegExp(delimiter, "g"), ",")
    .split(",")
    .map(Number);

  // Check for negative numbers and throw error if any
  const negatives = splittedArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }

  // Ignore numbers greater than 1000
  const filteredNumbers = splittedArray.filter((n) => n <= 1000);

  return filteredNumbers.reduce((acc, number) => acc + parseInt(number), 0);
}
export { addString };
