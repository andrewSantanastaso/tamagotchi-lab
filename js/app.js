/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}
let timer
let gameOver

/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.getElementById('boredom-stat')
const hungerStatEl = document.getElementById('hunger-stat')
const sleepinessStatEl = document.getElementById('sleepiness-stat')
const playBtnEl = document.getElementById('play')
const feedBtnEl = document.getElementById('feed')
const sleepBtnEl = document.getElementById('sleep')
const gameMessageEl = document.getElementById('message')
const resetBtnEl = document.getElementById('restart')

/*-------------------------------- Functions --------------------------------*/
const init = () => {
    // state.value = 0
    state.boredom = 0
    state.hunger = 0
    state.sleepiness = 0
    resetBtnEl.classList.add('hidden')
    gameMessageEl.classList.add('hidden')
    gameOver = false
    timer = setInterval(runGame, 2000)
    render()
}
const runGame = () => {
    updateStates()
    checkGameOver()
    render()

}
const render = () => {
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepinessStatEl.textContent = state.sleepiness
    if (gameOver) {
        clearInterval(timer)
        resetBtnEl.classList.remove('hidden')
        gameMessageEl.classList.remove('hidden')
    }
}
const updateStates = () => {
    if (gameOver) { return }
    state.boredom += generateRandomNum()
    state.hunger += generateRandomNum()
    state.sleepiness += generateRandomNum()

}
const generateRandomNum = () => {
    return Math.floor(Math.random() * 4)
}

const checkGameOver = () => {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true

    }
}

const playBtnClick = () => {
    state.boredom = 0
    render()
}
const feedBtnClick = () => {
    state.hunger = 0
    render()
}

const sleepBtnClick = () => {
    state.sleepiness = 0
    render()
}
/*----------------------------- Event Listeners -----------------------------*/
window.addEventListener('load', init)
playBtnEl.addEventListener('click', playBtnClick)
feedBtnEl.addEventListener('click', feedBtnClick)
sleepBtnEl.addEventListener('click', sleepBtnClick)
resetBtnEl.addEventListener('click', init)