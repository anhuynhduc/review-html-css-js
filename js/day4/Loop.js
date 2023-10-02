
// Vong lap - Loop
// 1. for - lap voi dieu kien dung
// 2. for/in - lap qua key cua doi tuong
// 3. for/of - lap qua value cua doi tuong
// 4. while - lap khi dieu kien dung
// 5. do/while - lap it nhat 1 lan, sau do lap khi dieu kien dung

console.log("Loop:")

// For loop

// for (let i = 1; i<= 1000; i++){
//     console.log(i)
// }

let myArray3 = [
    'javascript',
    'html/css',
    'php',
    'ruby',
    'java'
]

for (let i = 0; i <= myArray3.length; i++){
    console.log(myArray3[i])
}

// For/in loop

const myArray4 = [
    'php',
    'ruby',
    'java'
]

for (let key in myArray4){
    console.log(myArray4[key])
}

const loopObject = {
    name : " jonh",
    age: 32,
    from: "newyork"
}

for (let key in loopObject){
    console.log(key)
}

const loopString = "onePiece"

for (let key in loopString){
    console.log(loopString[key])
}

// For/of loop

for (let value of myArray4){
    console.log(value)
}

// While loop

let i = 0;
while (i < myArray4.length){
    console.log(myArray4[i])
    i++;
}

// do/while loop

let k = 0
let isSuccess = false

do{

    k++
    console.log('Nap the lan ' + k)
    // Thanh cong
    if (false){
        isSuccess = true
    }

}
while (!isSuccess && k <= 3)

// Break & Continue in loop

for (let j = 0; j < 10 ; j++){
    if (j % 2 !== 0){
        continue
    }

    console.log(j)
}

for (let j = 0; j < 10 ; j++){
    if (j === 5){
        break
    }

    console.log(j)
}

// vong lap long nhau - Nested loop

let nestedArray = [
    [1,2],
    [3,4],
    [5,6]
]

for (let i = 0; i < nestedArray.length; i++){
    for (let j  = 0; j < nestedArray[i].length; j++){
        console.log(nestedArray[i][j])
    }
}


