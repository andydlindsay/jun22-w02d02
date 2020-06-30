let iterations = 0;

const interval = setInterval(() => {
  iterations++;
  console.log('inside the interval', iterations);

  if (iterations >= 10) {
    clearInterval(interval);
  }
}, 500);
