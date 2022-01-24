const shapes = ["Square", 'Circle', 'Star', 'Rectangle', 'Triangle']
const generate = () => {
    const shape = shapes[parseInt(Math.random() * shapes.length)]
    const question = "Find " + shape;
    return { question, shape }
}
export default {
    generate
}