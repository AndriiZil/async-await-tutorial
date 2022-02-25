function fn(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num);
    }, 1000);
  });
}

function* gen() {
  yield fn(1)
  yield fn(2)
  return 3
}

const g = gen();
const next1 = g.next();

next1.value.then(res1 => {
  console.log(next1); // { value: Promise { 1 }, done: false }
  console.log(res1); // 1

  const next2 = g.next();
  next2.value.then(res2 => {
    console.log(next2); // { value: Promise { 2 }, done: false }
    console.log(res2); // 2
    console.log(g.next()); // { value: 3, done: true }
  });
});
