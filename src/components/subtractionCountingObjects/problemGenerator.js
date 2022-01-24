import sessionData from "../../utils/sessionData";
const getRandomNumber = range => {
    let eq;
    let min = 1
    if (sessionData.dif == null || sessionData.dif == "b") {
        range = 5
        min = 1
        eq = ((Math.random() * (range - min)) + 1).toFixed()
    }
    else if (sessionData.dif == "i") {
        range = 20
        min = 10
        eq = ((Math.random() * (range - min)) + min).toFixed()
    }
    else if (sessionData.dif == "m") {
        range = 30
        min = 15
        eq = ((Math.random() * (range - min)) + min).toFixed()
    }
    return eq
}

const generateSubtractionProblem = (problem, level) => {
    // const lv = 1;
    // let firstNumber = getRandomNumber();
    // let secondNumber = getRandomNumber();
    // let problem = firstNumber
    // problem += ` ${symbol} ${secondNumber}`

    let number = getRandomNumber()
    let symbol = "-";
    if (problem.length > 1) {
        let numbersList = problem.split("-")
        console.log(numbersList)
        if (numbersList[numbersList.length - 2] < number) {
            return generateSubtractionProblem(problem, level)
        }
    }
    problem += `${number}`
    if (level < 1) {
        return problem
    }
    problem += `${symbol}`
    return generateSubtractionProblem(problem, level - 1)


    // return { problem, firstNumber, secondNumber, symbol }
}

export default {
    generateSubtractionProblem
}