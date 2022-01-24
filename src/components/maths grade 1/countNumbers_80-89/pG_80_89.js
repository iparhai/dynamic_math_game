import getURLParams from '../../../utils/getURLParams'
const getRandomNumber = range => {
    let eq;
    let min = 80
    eq = ((Math.random() * (range - min)) + min).toFixed()
    return eq
}

const getQuestion = (dif) => {
    const number = getRandomNumber(89)
    var question = ""
    if (dif == 'b') {
        question = "Put " + number + " items in the box"
    }
    else if (dif == 'i') {
        question = "How many items are in the picture"
    }
    else {
        
    }
    return { question, number }
}
const generateCountingProblem = () => {
    const dif = getURLParams.dif
    const { question, number } = getQuestion(dif)
    return { question, number }
}

export default {
    generateCountingProblem
}