import getURLParams from '../../../utils/getURLParams'
const getRandomNumber = (min, range) => {
    let eq;
    eq = ((Math.random() * (range - min)) + min).toFixed()
    return parseInt(eq)
}
const nameAndNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

const getQuestion = (dif) => {
    var name = ""
    var number = 0
    if (dif == "b") {
        number = getRandomNumber(1, 3)
    }
    else if (dif == "i") {
        number = getRandomNumber(3, 6)
    }
    else {
        number = getRandomNumber(7, 10)
    }
    name = nameAndNumbers[number]
    return { name, number }
}

const generateProblem = () => {
    const dif = getURLParams.dif
    const { name, number } = getQuestion(dif)
    return { name, number }
}
const generateNameOption = (numbers) => {

    var options = numbers.map((item) => {
        return nameAndNumbers[item]
    })
    return options
}
const generateNumberOption = (originalProblem, limit) => {
    var options = []
    const dif = getURLParams.dif

    for (var i = 0; i < limit; i++) {
        var option;

        option = getRandomNumber(0, 10)

        console.log(originalProblem, option)

        if (option == originalProblem.number || options.find((name) => name === option)) {
            i--
        }
        else {
            options.push(option)
        }
    }
    return options
}
const shuffleArray = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        var index = parseInt(Math.random() * arr.length)
        var temp = arr[index]
        arr[index] = arr[i]
        arr[i] = temp
    }
    return arr
}
const generateOptions = (originalProblem, limit) => {
    var numbers = generateNumberOption(originalProblem, limit)
    var names = generateNameOption(numbers)
    console.log(numbers, names)
    names = names.sort(() => Math.random() - 0.5)
    numbers = numbers.sort(() => Math.random() - 0.5)

    var index = getRandomNumber(0, numbers.length - 1)
    numbers[index] = originalProblem.number
    names[index] = originalProblem.name
    return { names, numbers }
}

export default {
    generateProblem,
    generateOptions

}