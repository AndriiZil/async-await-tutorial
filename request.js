module.exports = function request(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
}
