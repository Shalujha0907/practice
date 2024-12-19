// [1, 2, 3, 4]  ====> [[2, 3], [3, 4], [4, 5], [5, 6]]
const addByNumber = function (number) {
  return function (element) {
    return element + number;
  };
};

const addWithTwoNum = function (collection) {
  const array = [addByNumber(1), addByNumber(2)];
  return collection.map(function (element) {
    return [array[0](element), array[1](element)];
  });
};
