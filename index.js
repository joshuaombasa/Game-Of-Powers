import {charactersData} from './data.js'

import Character from './character.js'

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

const wizard = new Character(charactersData.hero)

const orc = new Character(charactersData.monster)

render()





