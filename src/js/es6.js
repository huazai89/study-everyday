let [foo, [[bar], baz]] = [1, [[2], 3]]
console.log(foo, bar, baz)

let isTrue = false;
function f() {
	console.info(34)
}
isTrue && f()

function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
	console.log(method);
}

fetch('http://example.com')

let foo = 'test is foo';
let obj = { foo }
console.info(obj);

let obj = new Proxy({}, {
	get: function (target, key, receiver) {
		console.info(`getting ${key}`)
		return Reflect.get(target, key, receiver)
	},
	set: function (target, key, value, receiver) {
		console.info(`setting ${key}`)
		return Reflect.set(target, key, value, receiver)
	}
})
obj.count = 1;
obj.count++;

let myObj = {
	name: 'zhang',
	age: 1,
	dept: 'XM'
}

// console.info('name' in myObj)
// delete myObj['name']
// console.info(myObj)
// console.info('name' in myObj)

console.info(Reflect.has(myObj, 'name'))
Reflect.deleteProperty(myObj, 'name')
console.info(myObj)
console.info('name' in myObj)