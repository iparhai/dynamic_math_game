const solveProblem = (ans, problem) => {
    if (ans.number == problem.number && ans.name == problem.name) {
        return true
    }
    return false
}
export default {
    solveProblem
}