// import sessionData from "../../../utils/sessionData";

import getURLParams from "../../../utils/getURLParams";

const getRandomNumber = (min, range) => {
    let eq;
    eq = ((Math.random() * (range - min)) + 1).toFixed()
    return parseInt(eq)
}
const generateSequence = (length) => {
    let i = 0;
    let sequence = []
    let numbers = [false, false, false, false, false, false, false, false, false, false]
    var range = 0
    var min = 0
    if (getURLParams.dif == 'b') {
        min = 1; range = 4
        length = 3
    }
    else if (getURLParams.dif == 'i') {
        min = 1; range = 7
        length = 5
    }
    else {
        min = 1; range = 10
        length = 8
    }
    for (; i < length; i++) {
        let number = getRandomNumber(min, range)
        if (numbers[number] == true) {
            i--;
        }
        else {
            numbers[number] = true
            sequence.push({ id: i + 1, text: number })
        }
    }
    return sequence
}
export default {
    generateSequence
}