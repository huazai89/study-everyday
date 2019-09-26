var myObject = {
    foo: 4,
    set bar(value) {
        return this.foo = value;
    },
};

var myReceiverObject = {
    foo: 0,
};

Reflect.set(myObject, 'bar', 1, myReceiverObject);
myObject.foo // 4
myReceiverObject.foo // 1
console.info(myReceiverObject.foo, myObject.foo)

var Reflect = require('harmony-reflect');

var obj = {
    "foo": 1,
    get bar() {
        return this.foo;
    }
};
var foo = {};
foo.foo = "heheda";
console.log(Reflect.get(obj, "bar", foo));


const path = require('path');
console.info(path.resolve(__dirname, '../src/platforms/web'))

let moneyArr = [358.25, -128.5, -128.5, -1, -1, 269.4, 70, 8.5, 184, 49, 12, 6.5, 487, 1.44,
    6, 6, 30.8, 99, 123, -95, 124, 143.59, 99.78, 22.6, 153.5, 23.7, 198, 7, 8, 263, 99, -217.5, 22,
    39.99, 128.5, 14.7, 125.82, 47.99, -9, 236.74, 18.5, 95.62, 22.6, 48.4, 8.7, 21.6, 99.6,
    69.9, 6, 137.9, 12.38, 33.4, 78.5, 1.49, 19, 28.98, 168, 165, 34.9, 259, 8.3, 81, 26, 1, 22, 8.58,
    11427, 152, 538, 199, 206.7, 50, 347, 24, 224.2, 21
]

let m = moneyArr.reduce((total, item) => {
    total += item;
    return total;
}, 0)

console.info(m)