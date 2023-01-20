console.log(this.document === document); // Output  true

// ------------

console.log(this === window); //Output true

// ------------

var myFunction = function () {
  console.log(this);
};
myFunction(); // Output undefined

// ------------

function f1() {
  'use strict';
  return this;
}
console.log(f1() === window); //Output false

// ------------

function foo() {
  console.log('Simple function call');
  console.log(this === window);
}

foo(); //Output Simple function call

// ------------

// This for IIFE
(function () {
  console.log('Anonymous function invocation');
  console.log(this === window);
})(); //Output Anonymous function invocation
// true

// ------------

var myObject = {};
myObject.someMethod = function () {
  console.log(this);
};
myObject.someMethod(); //Value Of This: object

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); // Output Name: John Reed
let person2 = new Person('Paul', 'Adams');
person2.displayName(); // Output Name: Paul Adams

// ------------

function foo() {
  'use strict';
  console.log('Simple function call');
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
};

user.foo(); // Output Simple function call
// false
let fun1 = user.foo1;
fun1(); // Output true
user.foo1(); // Output false

// ------------

this.x = 9;
var obj = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

obj.getX(); // Output 81

var retrieveX = obj.getX;
retrieveX(); //Output 9

var boundGetX = retrieveX.bind(obj);
boundGetX(); // Output 81

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); // Output Name: John Reed
let person2 = new Person('Paul', 'Adams');
person2.displayName(); // Output Name: Paul Adams

person.displayName.call(person2); // Output Name: Paul Adams


// ------------

const a = {
  a: 'a',
};
const obj = {
  getThis: () => this,
  getThis2() {
    return this;
  },
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

// Output  getThis2() {
  // return this;
  //}
obj.getThis();

// Output window
obj.getThis.call(a);

// Output window
obj.getThis2();

// Output {getThis: ƒ, getThis2: ƒ, getThis3: ƒ, getThis4: ƒ}

obj.getThis2.call(a);

// Output {a: 'a'}

obj.getThis3();

// Output window

obj.getThis4();//{x: 81, getX: ƒ}

// -------------

let personXYZ = {
  name: 'Jay',
  greet: function () {
    console.log('hello, ' + this.name);
  },
};

personXYZ.greet(); // output hello, Jay

let greet = personXYZ.greet;
greet(); // output hello,

// -------------

let name = 'Jay Global';
let personA = {
  name: 'Jay Person',
  details: {
    name: 'Jay Details',
    print: function () {
      return this.name;
    },
  },
  print: function () {
    return this.name;
  },
};
console.log(personA.details.print()); // output Jay Details
console.log(personA.print()); // output Jay Person

let name1 = personA.print;
let name2 = personA.details;

console.log(name1()); // output? undefined
console.log(name2.print()); // output Jay Details

// --------

let outerFn = function () {
  let n = 5;
  console.log(innerItem);
  let innerFn = function () {
    let innerItem = 'inner';
    console.log(n);
  };
  return innerFn;
};

outerFn()();// Uncaught ReferenceError: innerItem is not defined

// -----------

let object = {
  data: [1, 2, 3],
  dataDouble: [1, 2, 3],
  double: function () {
    console.log('this inside of outerFn double()');
    console.log(this);
    return this.data.map(function (item) {
      console.log(this); // Output this inside of outerFn double()

      return item * 2;
    });
  },
  doubleArrow: function () {
    console.log('this inside of outerFn doubleArrow()');
    console.log(this);
    return this.dataDouble.map((item) => {
      console.log(this); // Output (3) [2, 4, 6]
      return item * 2;
    });
  },
};

object.double();
object.doubleArrow();
/*
{data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}
data
: 
(3) [1, 2, 3]
dataDouble
: 
(3) [1, 2, 3]
double
: 
ƒ ()
doubleArrow
: 
ƒ ()
[[Prototype]]
: 
Object
*/

// --------------

let bobObj = {
  name: 'Bob',
};

function print() {
  return this.name;
}

let printNameBob = print.bind(bobObj);
console.log(printNameBob()); // output??

// -------------------

let obj11 = {
  data: [1, 2, 3],
  printFirstData: function () {
    if (this.data.length) return this.data[0];
  },
};

let obj12 = {
  data: [4, 5, 6],
  printSecondData: function () {
    if (this.data.length > 1) return this.data[1];
  },
};

let getSecondData = obj12.printSecondData.bind(obj11);
console.log(getSecondData()); // Output 2

// --------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

call.says(); // output Hey, mom just called.

// -----------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.says;

newCall(); // output Hey, undefined just called.

//  -----------------

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: 'mom',
  anotherCaller: anotherCaller,
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.anotherCaller;

newCall(); // output undefined called, too!