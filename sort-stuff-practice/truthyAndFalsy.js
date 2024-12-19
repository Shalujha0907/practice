const truthsAndFalse = [true, false, false, true, true, false, true, false];

truthsAndFalse.sort(function (a, b) {
  if (a === false) {
    return -5;
  }

  if (a === b) {
    return 0;
  }

  return 3;
});
