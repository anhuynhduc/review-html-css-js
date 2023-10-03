
// De qui

function countDown(num) {
    if (num > 0){
        console.log(num)
        return countDown(num - 1)
    }
    return num
}
countDown(5)


function loop(start, end, cb) {
    if (start < end){
        cb(start)
        return loop(start + 1, end, cb)
    }
}

let array = ['javascript', 'php', 'ruby']

loop(0, array.length, (index)=>{
    console.log('index: ', index)
})

