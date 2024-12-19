const insertIfNotPresent = function (init, char) {
  if (!init.includes(char)) {
    init.push(char);
  }

  return init;
};

const countOccurances = function ([target, count], element) {
  return (target === element) ? [target, count + 1] : [target, count];
};

const removeDuplicates = function (array) {
  return array.reduce(insertIfNotPresent, []);
};

const getFrequencyOfChar = function (array) {
  return function (target) {
    return array.reduce(countOccurances, [target, 0]);
  };
};

const frequency = function (string) {
  const array = [...string];
  const uniqueElement = removeDuplicates(array);

  return uniqueElement.map(getFrequencyOfChar(array));
};

console.table(frequency('asma'));
console.table(frequency('anagh'));
console.table(frequency('suman garimiddi'));