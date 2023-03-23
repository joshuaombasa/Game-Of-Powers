function Character(data) {
    Object.assign(this, data) 

    this.getRandomNumberArrayHtml =  () => {
        let randomArray = ''
        return randomArray = new Array(this.diceCount).fill(0).map((num) => {
        return `<div class="dice">${Math.floor(Math.random() * 6)+1}</div>`
    })
    }

    this.getCharacterHtml = function () {
        const {name, avatar, health, diceCount} = this;

    let characterHtml = ''
     return characterHtml = 

    `<h3 class="character-name">${name}</h3>
    <div class="img-container">
    <img src="${avatar}" alt="" class="character-img">
    </div>
    <div class="character-health">health: <b>${health}</b> </div>
    <div class="dice-container" id="dice-container">
    ${this.getRandomNumberArrayHtml(this.diceCount).join('')}
    </div>
    `
    }
}

export default Character