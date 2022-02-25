function fn(num) {
  console.log(num);
  return num;
}

function* gen() {
  yield fn(1);
  yield fn(2);
  return 3
}

const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.next()); // { value: 3, done: true }
