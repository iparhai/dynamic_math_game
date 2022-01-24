
const solveAdditionProblem = (problem, answer) => {
    let sum = 0
    problem.split('+').map((item, index) => {
        sum += parseInt(item)
    })
    if( sum == answer){
        return true
    }
    return false
}
export default{
    solveAdditionProblem
}