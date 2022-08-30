// myExcercises
const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  return { name, age, sayHello };
};

const sam = personFactory('Sam', 13);

console.log(sam.sayHello);
