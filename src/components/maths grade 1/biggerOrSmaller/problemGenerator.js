// import sessionData from "../../../utils/sessionData";

import { min } from "moment";
import getURLParams from "../../../utils/getURLParams";

const getRandomNumber = (min, max) => {
    let eq;
    eq = ((Math.random() * (max - min)) + min).toFixed()
    return parseInt(eq)
}


const generateProblem = (range) => {
    const types = ["b", "s", "l", "m"]
    var number;
    if (getURLParams.dif == 'b') {
        range = 20
        number = getRandomNumber(10, range - 10)
    }
    else if (getURLParams.dif == 'i') {
        range = 50
        number = getRandomNumber(10, range - 10)
    }
    else {
        range = 99
        number = getRandomNumber(10, range - 10)
    }

    const type = types[parseInt(Math.random() * types.length)]
    const question = "Click on the Number " + (type == 'b' ? "bigger " : type == 'l' ? "less" : type == 'm' ? "more " : "smaller") + " than " + number + "."
    return { question, type, number }
}


const getAnswer = (type, number) => {
    if (type == 'b')
        return number + 1
    else
        return number - 1
}

const generateAroundAnswer = (min, max) => {
    return parseInt(((Math.random() * (max - min)) + min).toFixed())
}
const getOption = (type, ans) => {
    var options = []
    for (var i = 0; i < 4; i++) {
        var option;
        if (type == 'b') {
            option = generateAroundAnswer(1, ans - 1)
        }
        else {
            option = generateAroundAnswer(ans + 1, 50)
        }
        if (!options.includes(option) && option != ans) {
            options.push(option)
        }
        else {
            i--;
        }

    }
    console.log(options)
    var randomIndex = parseInt(Math.random() * options.length)

    options[randomIndex] = ans

    return options
}

export default {
    generateProblem,
    getAnswer,
    getOption
}