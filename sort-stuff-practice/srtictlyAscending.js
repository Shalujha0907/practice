const numbers = [5, 67, 89, 23, 9, 2004];

// numbers sorting
numbers.sort(function (a, b) {
  if (a < b) {
    return -4;
  }

  if (a === b) {
    return 0;
  }

  return 3;
});

scores.sort(function (a, b) {
  return a - b;
});

// sort even number at left in ascending and odd number at right in ascending
const strictlyAscending = numbers.sort(function (a, b) {
  return b - a;
});

strictlyAscending.sort(function (a, b) {
  if ((a % 2) < (b % 2)) {
    return 1;
  }

  return -1;
});


