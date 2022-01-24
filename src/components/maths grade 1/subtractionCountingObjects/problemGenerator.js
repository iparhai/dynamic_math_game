import getURLParams from "../../../utils/getURLParams";
const getRandomNumber = (min, max) => {
    let eq;
    eq = ((Math.random() * (max - min)) + min).toFixed()
    return parseInt(eq)
}
const getTens = () => {
    let tens = [10, 20, 30, 40, 50, 60, 70, 80, 90]
    return tens[parseInt(Math.random() * tens.length)]
}
const ifSwap = (firstNumber, secondNumber) => {
    if (firstNumber < secondNumber) {
        return true
    }
    return false
}

const generateSubtractionProblem = (problem) => {
    const dif = getURLParams.dif
    let firstNumber;
    let secondNumber;
    let symbol = '-'
    if (dif == 'b') {
        firstNumber = getRandomNumber(1, 9)
        secondNumber = getRandomNumber(1, 9)

    }
    else if (dif == 'i') {
        if (Math.random() > 0.5) {
            firstNumber = getRandomNumber(10, 99)
            secondNumber = getRandomNumber(1, 9)
        }
        else {
            firstNumber = getRandomNumber(10, 99)
            secondNumber = getTens()
        }
    }
    else {
        firstNumber = getRandomNumber(10, 99)
        secondNumber = getRandomNumber(10, 99)
    }
    if (ifSwap(firstNumber, secondNumber)) {
        var temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp
    }

    problem += `${firstNumber} ${symbol} ${secondNumber}`
    return { problem, firstNumber, secondNumber, symbol }
}

export default {
    generateSubtractionProblem
}