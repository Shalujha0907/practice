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
