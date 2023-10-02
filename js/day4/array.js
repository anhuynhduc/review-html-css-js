console.log("Array:")

const myArray = ['html','css','js','php']
const myArray2 = ['C#','C++']

// Array length -> do dai cau mang
console.log(myArray.length)

// Array toString() -> chuyen mang snag string
console.log(myArray.toString())

// Array pop() -> xoa element cuoi mang va tra ve phan tu da xoa
console.log(myArray.pop())

// Array push() -> them phan tu vao cuoi mang va tra ve do dai cua mang
console.log(myArray.push("Laravel"))

// Array shift() -> xoa phan tu dau va tra ve gia tri no
console.log(myArray.shift())

// Array unshift() -> them phan tu vao dau mang va tra ve do dai moi cua mang
console.log(myArray.unshift("Ruby"))

// Array join()
console.log(myArray.join())

// Array concat() -> noi 2 mang lai
console.log(myArray.concat(myArray2))

// Array flat()
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)

// Array splice() -> Xoa hoac thay the phan tu , tra ve phan tu da xoa hoac thay the
console.log(myArray.splice(1,1,"Python"))

// Array slice() -> cat mang theo dk
console.log(myArray.slice(0,3))



