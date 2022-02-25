const request = require('./request');

async function fn1() {
  await request(1);
  await request(2);
}

async function fn2() {
  const response1 = await request(5);
  const response2 = await request(response1);
  console.log(response2);
}

fn1();
fn2(); // 20
