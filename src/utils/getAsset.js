// import listReactFiles from 'list-react-files'

import { object } from "prop-types";
import getURLParams from "./getURLParams";


const objectList = importAll(require.context('../../assets/objects', false, /\.(png|jpe?g|svg|gif)$/));
const backgroundList = importAll(require.context('../../assets/backgrounds', false, /\.(png|jpe?g|svg|gif)$/));
const backgroundMusicList = importAll(require.context('../../assets/backgroundSounds', false, /\.(mp3)$/));
const soundEffectsEnglish = importAll(require.context('../../assets/soundEffects/english', false, /\.(mp3|wav)$/));
const soundEffectsUrdu = importAll(require.context('../../assets/soundEffects/urdu', false, /\.(mp3|wav)$/));


const generateRandom = (min, max) => {
    const index = (Math.random() * (max - min) + min)
    return parseInt(index)
}

const fetchRelevantObject = (background, objectList) => {
    // const objects = objectList[generateRandom(0, objectList.length - 1)]
    const backgroundIndex = parseInt(background.split('/')[3].split('.')[0])
    let releventObjects = []
    objectList.map((item, index) => {
        item.split('/')[3].split('_')[0].split('.').map((itm, idx) => {
            if (backgroundIndex == parseInt(itm)) {
                releventObjects.push(item)
            }
        })
    })
    return releventObjects
}
const getRandomTheme = () => {
    const background = backgroundList[generateRandom(0, backgroundList.length)]
    const objects = fetchRelevantObject(background, objectList)
    const backgroundMusic = backgroundMusicList[generateRandom(0, backgroundMusicList.length)]
    const soundEffect = getSoundEffects()
    return { background, objects, backgroundMusic, soundEffect }
}
const getSoundEffects = () => {
    const lang = getURLParams.lang
    if (lang == 'u') {
        return soundEffectsUrdu
    }
    return soundEffectsEnglish
}
const getObjectByProperty = (property) => {
    const objects = objectList.filter((item) => {
        if (item.includes(property)) return true
        return false
    })
    console.log(objects)
    return objects[0]
}
const getObjectListByProperty = (property) => {
    const objects = objectList.filter((item) => {
        if (item.includes(property)) return true
        return false
    })
    console.log(objects)
    return objects
}
function importAll(r) {
    return r.keys().map(r);
}
export default {
    getRandomTheme,
    getObjectByProperty,
    getObjectListByProperty
}