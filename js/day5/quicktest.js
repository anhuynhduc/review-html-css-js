


function Sort2(sortArray) {
    let check;
    do {
        check = false;
        if (Array.isArray(sortArray) === true){
            for (let i = 0; i < sortArray.length - 1; i++) {
                if (sortArray[i] > sortArray[i + 1]) {
                    let temp = sortArray[i];
                    sortArray[i] = sortArray[i + 1];
                    sortArray[i + 1] = temp;
                    check = true;
                }
            }
        }

    } while (check);
    return sortArray
}
console.log(Sort2([9, 6, 1, 2, 3, 0, 8]));

// tim max
function findMax(sortArray) {
    let select = sortArray[0];
    for (let i = 0; i <= sortArray.length ; i++ ){
        if (select < sortArray[i]){
            select = sortArray[i]
        }
    }
    return select
}
console.log(findMax([9, 6, 1, 2, 3, 0, 8]));
