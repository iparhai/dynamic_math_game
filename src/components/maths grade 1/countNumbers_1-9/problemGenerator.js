import getURLParams from '../../../utils/getURLParams'
const getRandomNumber = range => {
    let eq;
    let min = 1
    eq = ((Math.random() * (range - min)) + min).toFixed()
    return eq
}

const getQuestion = (dif) => {
    const number = getRandomNumber(9)
    var question = ""
    if (dif == 'b') {
        question = "Put " + number + " items in the box"
    }
    else if (dif == 'i') {
        question = "How many items are in the picture"
    }
    else {
        question = "Ali went to grocery shopping and bought some items. The cashier told Ali to pay for " + number + " items. How many items does Ali have"
    }
    return { question, number }
}
const generateCountingProblem = () => {
    const dif = getURLParams.dif
    const { question, number } = getQuestion(dif)
    console.log(question, number)
    return { question, number }
}

export default {
    generateCountingProblem
}