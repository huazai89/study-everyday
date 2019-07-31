console.info('my name is test')
console.info('add')

let userInfo = {
	name: 'zhangsan',
	age: 25,
	dept: 'XM'
}
console.info(Object.keys(userInfo))
Object.keys(userInfo).map((item, index) => {
	console.info(item, index)
})