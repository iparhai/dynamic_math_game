import getURLParams from '../../../utils/getURLParams'
const getRandomNumber = (min, range) => {
    let eq;
    eq = ((Math.random() * (range - min)) + min).toFixed()
    return eq
}
const questionType = ["How many 10's and 1's are in ", "Count 10's and 1's", "bla bla "]
const getQuestion = (dif) => {
    var number;
    var index = parseInt(Math.random() * questionType.length)
    var randomQuestionType = questionType[index]
    if (dif == 'b') {
        number = getRandomNumber(10, 40)

    }
    else if (dif == 'i') {
        number = getRandomNumber(35, 70)
    }
    else {
        number = getRandomNumber(65, 100)
    }
    if (index == 0) {
        randomQuestionType = randomQuestionType + number
    }
    return { question: randomQuestionType, number }
}
const generateNumberProblem = () => {
    const dif = getURLParams.dif
    const { question, number } = getQuestion(dif)
    console.log(question, number)
    return { question, number }
}

export default {
    generateNumberProblem
}