const nums = [88, 117, 1138, 19, 42, 13];

const runLoop = (delays) => {
  for (const delay of delays) {
    setTimeout(() => {
      console.log(delay);
    }, delay);
  }
};

runLoop(nums);
