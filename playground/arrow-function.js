// var square = (x) => {
//   var result = x * x;
//   return result;
// }; // arrow function

var square = (x) => x * x; // inline es6

console.log(square(9));

var user = {
  name: 'Ben',
  sayHi: () => {
    console.log(`Hi. I'm ${this.name}`);
  }, // undefined
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  } // works
};

// user.sayHi();
user.sayHiAlt(1, 2, 3);
