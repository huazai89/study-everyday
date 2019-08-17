let a = 2;
const obj = {
	a: 4,
	fn: function () {
		console.info(this.a)
	}
}

// obj.fn()

// obj = Object.freeze(obj)
obj['name'] = 'zhangsan'
console.info(obj)