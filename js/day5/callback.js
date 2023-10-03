
// callback
console.log("Callback:")

function myFunction(param){
    param(123)
}
function myCallback(value) {
    console.log('Value:', value)
}
myFunction(myCallback)