const startTime = new Date().getTime();

for (let i = 0; i < 10000; i++) {
  const date = new Date();
  console.log(date);
}

const endTime = new Date().getTime();
const elapsedTime = endTime - startTime;

console.log(`that took ${elapsedTime}ms`);
