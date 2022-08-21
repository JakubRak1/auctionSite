export const stringCorrect = function (
  string
) {
  let newString = string.trim();
  return (newString =
    newString[0].toUpperCase() +
    newString.slice(1).toLowerCase());
};
