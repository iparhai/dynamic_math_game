
const solveSubtractionProblem = (problem, answer) => {
    let sum = 0
    problem.split('-').map((item, index) => {
        if (sum == 0) sum = parseInt(item)
        else sum -= parseInt(item)
    })
    console.log(sum)
    if (sum == answer) {
        return true  
    }
    return false
}
export default {
    solveSubtractionProblem
}