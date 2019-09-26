function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function () {
        console.info(this.name)
    }
    this.setName = function (name) {
        console.info(this.name)
    }
}

Person.prototype.getAge = function () {
    console.info(this.age)
}
// const p = new Person('tom', 34)
// p.getName()

function Tom(name, age) {
    // this.name = name;
    // this.age = age;
    Person.call(this, name, age)
}

// Tom.prototype = new Person('test', 56)
const tom = new Tom('abc45', 13)
tom.getName()