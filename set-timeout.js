console.log('before the timeout');

const second = () => {
  console.log('catchy catchphrase');
};

setTimeout(second, 1);

console.log('after the timeout');
