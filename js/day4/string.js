console.log("String:")

// WORK WITH STRING

const myString = "learn JS to programmer JS"
const myString2 = "  learn JS to programmer JS  "

//1. Length -> do dai cua chuoi
console.log(myString.length)

// 2. Search -> tim kiem chuoi
// console.log(myString.indexOf("r", 6))
console.log(myString.search("r"))

// 3. Cut string -> cat chuoi
console.log(myString.slice(6,8))

// 4. Replace -> thay the chuoi
console.log(myString.replace("js", "javascript"))

// 5. Convert to upper case -> chuyen sang chu hoa
console.log(myString.toUpperCase())

// 6. Convert to lower case -> chuyen sang chu thuong
console.log(myString.toLowerCase())

// 7. Trim ( loai bo nhung khoang trong )
console.log(myString2.trim().length)

// 8. Split ( cat chuoi theo dk )
console.log(myString.split(''))
