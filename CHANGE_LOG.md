# CHANGE LOG

- v1: 位于 ./src/v1 目录下，ES5、Callback Hell。
- v2: 位于 ./src/v2 目录下，使用 ES6、Promise 重写（但实际上并没有用到 resolve，只是函数调用自身，避免了回调地狱）。
- v3: 位于 ./src/v3 目录下，根据 Airbnb Code Style 对代码风格进行了整理，使用 Promise 进行异步流程控制。
- v4: 位于 ./src/v4 目录下，Promise 链式调用，当前一个 promise 请求 resolve 后再进行下一个 promise。
- v5: 位于 ./src/v5 目录下，使用 Promise.all，最终会将若干个 promise 返回值按照数组顺序组成一个数组返回。（不会出现乱序的情况，且并发请求更节省时间）
