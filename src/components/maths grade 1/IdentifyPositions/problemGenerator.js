import getURLParams from "../../../utils/getURLParams";

const positions = ['above', 'below', 'under', 'over', 'before', 'after', 'far', 'near']
const generate = () => {
    const dif = getURLParams.dif
    var position;
    if (dif == 'b') {
        position = positions[parseInt(Math.random() * 2)]

    }
    else if (dif == 'm') {
        position = positions[parseInt(Math.random() * 4)]

    }
    else {
        position = positions[parseInt(Math.random() * positions.length)]

    }
    const question = "Find the Shape which is " + (position == "far" ? position + " from" : position == "near" ? position + " to" : position) + " the table";
    return { question, position }
}
export default {
    generate
}