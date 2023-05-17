const selectors = { //este seletor indica todo mundo
    mode: 'section.main .mode',
    section: 'section.main',
    title: 'section.main .title',
    clouds: 'section.main .clouds img'
}

const mode = document.querySelector(selectors.mode)
const section = document.querySelector(selectors.section)
const title = document.querySelector(selectors.title)
const clouds = document.querySelectorAll(selectors.clouds)

const MODE_LIGHT = 'heaven'
const MODE_DARK = 'hell'

const getCurrentMode = () => {
    let getCurrentMode = null
    if (section.classList.contains(MODE_LIGHT)) {
        currentMode = MODE_LIGHT
    } else if (section.classList.contains(MODE_DARK)) {
        currentMode = MODE_DARK
    }
    return currentMode 
}

const toggleTitle = () => {
    console.log(getCurrentMode())
}


const toggleMode = (e) => {
    // mudar o título de heaven para hell
    toggleTitle()
    // mudar as nuvens
    // mudar a classe da section.main (adicionar .heaven .hell)
}


mode.addEventListener('click', toggleMode)