// import sessionData from "../../../utils/sessionData";

import getURLParams from "../../../utils/getURLParams";

let numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1]
let index = 0
let randomNumber = 0
const generateProblem = () => {
    var number;
    var question;
    if (getURLParams.dif == 'b') {
        number = numbers[index]
    }
    else if (getURLParams.dif == 'i') {
        randomNumber = parseInt(Math.random() * (numbers.length - 1))
        number = numbers[randomNumber]
    }
    else {

    }
    question = "What comes before " + number


    return { question, number }
}
const getAnswer = () => {
    if (getURLParams.dif == 'b') {
        index = index + 1
        if (index == numbers.length) {
            return null
        }
        else {
            return numbers[index]
        }
    }
    else if (getURLParams.dif == 'i') {
        return numbers[randomNumber + 1]
    }
    else {

    }

}
const getOption = (ans) => {
    var options = []
    if (Math.random() > 0.5) {
        options.push(ans + parseInt((Math.random() * (4 - 1)) + 1))
        options.push(ans)
    }
    else {
        options.push(ans)
        options.push(ans + parseInt((Math.random() * (4 - 1)) + 1))
    }
    return options
}

export default {
    generateProblem,
    getAnswer,
    getOption
}