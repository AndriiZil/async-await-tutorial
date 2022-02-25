const request = require('./request');

request(1).then(res1 => {
  console.log(res1); // 2

  request(2).then(res2 => {
    console.log(res2); // 4
  });
});

request(5).then(resp1 => {
  console.log(resp1); // 10

  request(resp1).then(resp2 => {
    console.log(resp2); // 20
  });
});
