const generateTimeProblem = () => {
    let pool = [0, 15, 30, 45]
    const hour = ((Math.random() * (12 - 1)) + 1).toFixed()
    const minute = pool[(Math.random() * (pool.length - 1)).toFixed()]
    const question = minute == 0 ? "Set the clock to " + hour + " O' Clock" : minute == 30 ? "Set the clock to half past " + hour : "Set the clock to " + minute + " past " + hour
    return { question, hour, minute }
}
export default {
    generateTimeProblem
}
