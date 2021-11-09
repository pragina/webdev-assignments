const getPrimes = () => {
  // Add your code here

  for (let i = 2; i <= 100; i += 1) {
    for (let j = 2; j <= i; j += 1) {
      if (i === j) {
        console.log(i);
      } else if (i % j === 0) break;
    }
  }
};

getPrimes();
// 2
// 3
// 5
// 7
// 11
// 13
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// ...
