const doSomething1 = () => {
  console.log('called doSomething1')
};

const doSomething2 = () => {
  console.log('called doSomething2')
};

console.log('firing up timer/s')
// NOTE: setInterval appliesa delay first before executing the function
// setInterval(doSomething1, 3000);
setTimeout(doSomething2, 5000);