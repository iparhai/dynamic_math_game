// import sessionData from "../../../utils/sessionData";

import getURLParams from "../../../utils/getURLParams";

const getRandomNumber = range => {
    let eq;
    let min = 1
    range = 10
    min = 1
    eq = ((Math.random() * (range - min)) + 1).toFixed()

    return eq
}
const generateSequence = (length) => {
    let i = 0;
    let sequence = []

    let numbers = [false, false, false, false, false, false, false, false, false, false]
    if (getURLParams.dif == 'b') {
        length = 2
    }
    else if (getURLParams.dif == 'i') {
        length = 4
    }
    else {
        length = 6
    }
    for (; i < length; i++) {
        let number = getRandomNumber(10)
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