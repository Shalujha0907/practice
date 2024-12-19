const counter = function (numberUpto) {
  let number = -1;
  return function () {
    number++;
    if (number > numberUpto) {
      number = 0;
    }

    return number;
  };
};

const numberCount = counter(5);
numberCount();

const cycle = function () {
  const collection = [];
  let number = 0;
  return function () {
    collection.push(number);
    number += 1;

    if (number >= 10) {
      number = 0;
    }
    return collection;
  };
};