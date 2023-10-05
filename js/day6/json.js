//JSON
// mã hoá / giải mã
// Encode / decode
// Stringify / Parse

// json array
const json = '["html","css"]'

// json object
// const json = '{"nam": "anhuynh","age": 21}'

//  Parse -> chuyen tu JSON sang js
const  a = '["html","css"]'

console.log(JSON.parse(a))

// Stringify -> chuyen tu js sang JSON
const  b = ["html","css"]

console.log(JSON.stringify(b))