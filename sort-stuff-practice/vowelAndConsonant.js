const listOfAlphabets = ['b', 'a', 'y', 'e', 'i'].sort();

something.sort(function (a, b) {
  const vowels = [...'aeiouAEIOU'];
  if (vowels.includes(a)) {
    return -1;
  }
  
  if (vowels.includes(a) && vowels.includes(b)) {
    return 0;
  }

  return 1;
});