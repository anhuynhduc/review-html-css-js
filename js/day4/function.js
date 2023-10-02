console.log("Function:")

// Arguments ?

function writeLog() {
    let myString = ''
    for (let param of arguments){
        myString += `${param} -`
    }
    console.log(myString)
}

writeLog('Log 1','Log 2','Log 3','Log 4','Log 5')

// cac loai function:
// 1. Declaration function
// 2. Expression function
// 2]3. Arrow function

