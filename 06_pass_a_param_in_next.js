function* gen() {
  const num1 = yield 1;
  console.log('num1', num1);
  const num2 = yield 2;
  console.log('num2', num2);
  return 3;
}

const g = gen();
console.log(g.next()); // { value: 1, done: false }

console.log(g.next(1111)); // { value: 2, done: false }
// num1 1111
console.log(g.next(2222)); // { value: 3, done: true }
// num2 2222