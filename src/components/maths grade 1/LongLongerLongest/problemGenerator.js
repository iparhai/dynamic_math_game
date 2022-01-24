const generate = () => {
    const options = ['long', 'longer', 'longest']
    return options[parseInt(Math.random() * options.length)]
}
export default {
    generate
}