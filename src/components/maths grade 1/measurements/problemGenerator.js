import getURLParams from "../../../utils/getURLParams"

const types = [{
    name: "Mountain",
    key: ["High", "Higher", "Highest"]
}, {
    name: "Building",
    key: ["Tall", "Taller", "Tallest", "Short", "Shorter", "Shortest"]
}, {
    name: "Animal",
    key: ["Heavy", "Heavier", "Heaviest", "Long", "Longer", "Longest", "Light", "Lighter", "Lightest"]
}]
const generate = () => {
    const dif = getURLParams.dif
    var type;
    if (dif == 'b') {
        type = types[0]
    }
    else if (dif == 'i') {
        type = types[1]
    }
    else {
        type = types[2]
    }
    const quesKey = type.key[parseInt(Math.random() * type.key.length)]
    const question = "Find the " + quesKey + " " + type.name + " of all."
    return { question, quesKey }
}
export default {
    generate
}