const higherOrderFn = (cb) => {
  const data = {
    username: 'Alice'
  };

  console.log('before the timeout');

  setTimeout(() => {
    data.username = 'Bob';
    cb(data);
  }, 1000);

  console.log('after the timeout');
};

console.log('before the main call');
higherOrderFn((user) => {
  console.log('inside the callback', user);
});
console.log('after the main call');
// console.log('the result is', result);
