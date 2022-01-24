import sessionData from "../../utils/sessionData";
const getRandomNumber = range => {
    let eq ;
    let min = 1
    if(sessionData.dif == null || sessionData.dif == "b"){
        range = 5
        min = 1
        eq = ((Math.random() * (range - min)) + 1 ).toFixed()
    }
    else if( sessionData.dif == "i"){
        range = 20
        min = 10
        eq = ((Math.random() * (range - min)) + min ).toFixed()
    }
    else if (sessionData.dif == "m"){
        range = 30
        min = 15
        eq = ((Math.random() * (range - min)) + min ).toFixed()
    }
    return eq
}

const generateAdditionProblem = (problem, level) => {
    let number = getRandomNumber()
    let symbol = "+";
    problem += `${number}`
    if(level < 1){
        return problem
    }
    problem += `${symbol}`
    return generateAdditionProblem(problem, level - 1)


    // return { problem, firstNumber, secondNumber, symbol }
}

export default {
    generateAdditionProblem
}