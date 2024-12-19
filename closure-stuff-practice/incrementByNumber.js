const increment = function (number) {
  return function incrementBynumber(byNumber) {
    let oldValue = number;
    number += byNumber;
    return oldValue;
  };
};

const incrementedNum = increment(2);
incrementedNum(2);