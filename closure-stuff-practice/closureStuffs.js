// ['shalu', 'abc', 'jha']     ====> [5, 3, 3];
const length = function (word) {
  return word.length;
};

const areSame = function (value1) {
  return function (value2) {
    return value1 === value2;
  };
};

const areAllSameLength = function (strings) {
  const comparator = areSame(strings[0].length);

  return strings.map(function (element) { return element.length; })
    .every(comparator);
};

const decrementbyNum = function (num) {
  return function (y) {
    num = y + num;
    return y - num;
  };
};

// 'nandini' ====> [['n', 3], ['a', 1], ['d', 1], ['i', 2]];
const frequency = function (string) {
  const array = [];

  for (let i = 0; i < string.length; i++) {
    let counter = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[i] === string[j]) {
        counter += 1;
      }
    }
    if (!array.includes(string[i])) {
      array.push(string[i], counter);
    }
  }

  return array;
};

const findElement = function (listOfList, searchEle) {
  return listOfList.some(function (array) {
    return array.some(function (element) {
       return element === searchEle;
    });
  });
}
