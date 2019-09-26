class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        console.info(this.age)
    }
    setName(name) {
        this.name = name
    }
    getName() {
        console.info(this.name)
    }
}

const p = new Person('Tom', 23)
p.getAge()
p.setName('Test')
p.getName()

// class Tom extends Person {
//     constructor(name, age) {
//         super(name, age);
//         this.name = name;
//         this.age = age;
//     }
// }


const t = new Tom('Tom test', 10)
t.getAge()