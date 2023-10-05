
// Promise

// Sync / Async
// -> SetTimeout, setInterval, fetch
// -> XMLHttpRequest, file reading
// -> request animation frame

//sleep
// setTimeout(()=>{
//     console.log(1)
// }, 1000)
//
// console.log(2)


// callback hell
// setTimeout(()=>{
//     console.log(1)
//     setTimeout(()=>{
//         console.log(1)
//     },2000)
//
// },1000)

// Promise

// let promise1 = new Promise(
//     // Executor
//     (resolve, reject) => {
//         // resolve([{
//         //     id: 1,
//         //     name: 'An'
//         // }])
//         reject('co loi')
//     }
// )
//
// promise1
//     .then((profile) =>{
//         console.log(profile)
//     })
//     .catch((error) =>{
//         console.log(error)
//     })
//     .finally(() =>{
//         console.log('Done!')
//     })

// promise chain

// let promise2 = new Promise(
//     // Executor
//     (resolve, reject) => {
//         resolve()
//         // reject()
//     }
// )
//
// promise2
//     .then(() =>{
//         return 1
//     })
//     .then((data) =>{
//         console.log(data)
//         return 2
//     })
//     .then((data) =>{
//         console.log(data)
//         return 3
//     })
//     .then((data) =>{
//         console.log(data)
//     })
//     .catch((error) =>{
//         console.log(error)
//     })
//     .finally(() =>{
//         console.log('Done!')
//     })


// let promise3 = new Promise(
//     // Executor
//     (resolve, reject) => {
//         resolve()
//         // reject()
//     }
// )
//
// promise3
//     .then(()=>{
//         return new Promise(( resolve, reject)=>{
//             setTimeout(resolve, 3000)
//         })
//     })
//     .then((data) =>{
//         console.log(data)
//     })
//     .catch((error) =>{
//         console.log(error)
//     })
//     .finally(() =>{
//         console.log('Done!')
//     })

// Performance

//
// function sleep1(ms) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(resolve, ms)
//     })
// }
//
// sleep1(1000)
//     .then(()=>{
//         console.log(1)
//         return sleep1(1000)
//     })
//     .then(()=>{
//         console.log(2)
//         return sleep1(1000)
//     })
//     .then(()=>{
//         console.log(3)
//         return sleep1(1000)
//     })
//     .then(()=>{
//         console.log(4)
//         return sleep1(1000)
//     })
//     .catch((error) =>{
//         console.log(error)
//     })
//     .finally(() =>{
//         console.log('Done!')
//     })

//
// function sleep2(ms) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(resolve, ms)
//     })
// }
//
// sleep2(1000)
//     .then(()=>{
//         console.log(1)
//         return sleep2(1000)
//     })
//     .then(()=>{
//         console.log(2)
//         return new Promise((resolve, reject) => {
//             reject("co loi")
//         })
//     })
//     .then(()=>{
//         console.log(3)
//         return sleep2(1000)
//     })
//     .then(()=>{
//         console.log(4)
//         return sleep2(1000)
//     })
//     .catch((error) =>{
//         console.log(error)
//     })
//     .finally(() =>{
//         console.log('Done!')
//     })

// Promise.resolve
// let promise5 = Promise.resolve()
//
// promise5
//     .then(()=>{
//         console.log("success")
//     })
//     .catch(()=>{
//         console.log("error")
//     })


// Promise.reject -> tuong duong resolve
// Promise.all

let promise6 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve([1])
    },1000)
})

let promise7 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve([2,3])
    },2000)
})

Promise.all([promise6, promise7])
    .then(([result1, result2])=>{
        console.log(result1.concat(result2))
    })

// nếu 1 trong số các promise reject thì promise all sẽ
// hiển thị reject ko hiển thị resolve


