import colors from "colors";
import {isPrime} from "prime-lib";
const [startNumber, endNumber] = process.argv.splice(2)
let currentColor = 'green';

const setColor = () => {
    const colorsArray = ['green', 'yellow', 'red'];
    let colorIdx = colorsArray.findIndex(el => el === currentColor)
    if (colorIdx === -1) {
        colorIdx = 0
    }
    currentColor = colorsArray[colorIdx + 1]
    return colorsArray[colorIdx]
}

const findPrimeNumber = (start, end) => {
    start = Number(start)
    end = Number(end)
    if (!Number.isInteger(start) || !Number.isInteger(end)){
        console.error("Введенные значения должны быть целыми числами")
    }else {
        for (let i = start; i<=end; i++){
            if (isPrime(i)){
                console.log(colors[setColor()](i))
            }
        }
    }
}

findPrimeNumber(startNumber, endNumber)
