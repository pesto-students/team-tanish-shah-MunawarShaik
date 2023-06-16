function calcWordFrequencies() {
  let words = prompt();
  let arr = words.split(" ");
  // console.log(arr);
  let count = {};
  arr.map((word) => {
    if (count[word]) {
      count[word]++;
    } else {
      count[word] = 1;
    }
  });
  return count;
}
