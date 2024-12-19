const numbers = [5, 67, 89, 23, 9, 2004];

// sort numbers in descending
numbers.sort(function (a, b) {
  if (a < b) {
    return 4;
  }

  if (a === b) {
    return 0;
  }

  return -3;
});

scores.sort(function (a, b) {
  return b - a;
});

// sort even number at left in descending and odd number at right in descending
const strictlyDescending = numbers.sort(function (a, b) {
  return a - b;
});

strictlyDescending.sort(function (a, b) {
  if ((a % 2) < (b % 2)) {
    return -1;
  }
  
  return 1;
});