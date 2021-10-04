let lowerCaseWords = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'string') {
            arr[i] = arr[i].toLowerCase()
        }
    }
    return arr
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

console.log(lowerCaseWords(mixedArray))