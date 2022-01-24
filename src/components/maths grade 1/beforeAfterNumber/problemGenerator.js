// import sessionData from "../../../utils/sessionData";

import getURLParams from "../../../utils/getURLParams";

const getRandomNumber = (min, max) => {
    let eq;
    eq = ((Math.random() * (max - min)) + min).toFixed()
    return parseInt(eq)
}


const generateProblem = () => {
    let number = []
    var range;
    const questions = ["Find the number that comes before", "Find the number that comes after", "Find the number that comes between"]
    var randomQuestion;
    if (getURLParams.dif == 'b') {
        randomQuestion = questions[0]
        range = 15
        number.push(getRandomNumber(1, range - 2))
    }
    else if (getURLParams.dif == 'i') {
        randomQuestion = questions[getRandomNumber(0, questions.length - 2)]
        range = 35
        number.push(getRandomNumber(1, range - 2))
    }
    else {
        randomQuestion = questions[getRandomNumber(0, questions.length - 1)]
        range = 50
        number.push(getRandomNumber(1, range - 2))
    }
    var problem;
    if (questions.indexOf(randomQuestion) == 2) {
        number.push((number[0] + 2))
        problem = randomQuestion + " " + number[0] + " and " + number[1]
    }
    else {
        problem = randomQuestion + " " + number[0];
    }
    return { problem, number }
}


const getAnswer = (problem, number) => {
    console.log(problem.includes("after"))
    if (problem.includes("before")) {
        return (number[0] - 1)
    }
    else if (problem.includes("after")) {
        return (number[0] + 1)
    }

    return number[0] + 1
}
const generateAroundAnswer = (ans) => {
    const max = ans + 5;
    const min = ans - 5;
    return parseInt(((Math.random() * (max - min)) + min).toFixed())
}
const getOption = (ans) => {
    var options = []
    for (var i = 0; i < 4; i++) {
        var option = generateAroundAnswer(ans)
        // console.log(option)
        if (!options.includes(option) && option != ans) {
            options.push(option)
        }
        else {
            i--;
        }
    }
    var randomIndex = parseInt(Math.random() * options.length)
    console.log(randomIndex, ans)
    options[randomIndex] = ans
    return options

}
export default {
    generateProblem,
    getAnswer,
    getOption
}