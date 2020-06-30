const fs = require('fs');

// const file = fs.readFileSync('./index.html', { encoding: 'utf-8' });
// console.log(file);

const readFile = (path, cb) => {
  const fnToRun = function (err, asyncFile) {
    if (err) {
      cb(err);
    } else {
      cb(null, asyncFile);
    }
  };
  fs.readFile(path, { encoding: 'utf-8' }, fnToRun);
};

readFile('./index.html', (firstArg, fileData) => {
  if (firstArg) {
    console.log(firstArg);
  } else {
    console.log(fileData.length);
  }
});
