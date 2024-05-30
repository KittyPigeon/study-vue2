// eventloop
// console.log('1')
// setTimeout(()=>{
//     console.log(2)
// },0)
// new Promise((resolve,reject)=>{
//     console.log('Promise')
// }).then(res=>{
//     console.log('then')
// })
// console.log('3');

// 1 Promise 3 then 2

// 宏任务 微任务

// async await 
// await 会阻塞后面的代码(即加入微任务队列)先执行await
// async function fn1(){
//     console.log('1');
//     await fn2();
//     console.log('2')
// }

// function fn2(){
//     console.log('fn2');
// }
// fn1();
// console.log('3')

// 一道async await 面试题
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
    console.log('hello word')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('settimeout')
})
async1()
new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
})
console.log('script end')

// 输出结果：'script start' async1 start，async2，,promise1，script end,async1 end ,promise2,settimeout