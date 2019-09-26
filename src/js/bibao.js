const cache = function () {
    const store = {};
    return {
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value;
        }
    }
}

let ca = cache();
ca.set('test', 134);
console.info(ca.get('test'))

const sum = [1, 3, 5, 7].reduce((total, curr) => total + curr, 0)
console.info(sum)

function curryFn(fn) {
    let n = fn.length;
    let args = [];
    return function (arg) {
        args.push(arg)
        if (args.length < n) {
            return arguments.callee // 函数引用
        } else {
            return fn.apply(this, args)
        }
    }
}

function add(a, b, c) {
    return [a, b, c];
}

var c = curryFn(add);

var c1 = c(1);

var c2 = c1(2);

var c3 = c2(3);

console.log(c3);
//[1, 2, 3]

console.info(1 & 23)