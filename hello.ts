console.log('hello world!');

function hello<T>(arg: T): T {
  return arg;
}

let output = hello<number>(11);