const selectors = { // começa criando este seletor indicando todo mundo
    mode: 'section.main .mode',
    section: 'section.main',
    title: 'section.main .title',
    clouds: 'section.main .clouds img'
}

// agora seleciona os elementos baseado nos seletores
const mode = document.querySelector(selectors.mode)
const section = document.querySelector(selectors.section)
const title = document.querySelector(selectors.title)
const clouds = document.querySelectorAll(selectors.clouds)

// definindo aqui as classes de heaven and hell que correspondem ao modo dark ou  light
const MODE_LIGHT = 'heaven'
const MODE_DARK = 'hell'

// está função faz a leitura da classe light  ou dark e retorna a classe
// mostra qual o modo atual dele
const getCurrentMode = () => {
    let currentMode = null
    if (section.classList.contains(MODE_LIGHT)) {
        currentMode = MODE_LIGHT
    } else if (section.classList.contains(MODE_DARK)) {
        currentMode = MODE_DARK
    }
    return currentMode 
}

// aqui troca o título
const toggleTitle = () => {
    // aqui pega o currentMode
    const current = getCurrentMode()
    //aqui cria um objeto para usar direto a classe
    const titleText = {}
    titleText[MODE_DARK] = 'Hell'
    titleText[MODE_LIGHT] = 'Heaven'
    //aqui coloca direto com innerText
    title.innerText = titleText[current]
}

// aqui está a classe toggleMainClass 
const toggleMainClass = () => {
    //aqui dentro cria a função getCurrentMode que faz a leitura do section e ve se contem a classe light ou dark
    const current = getCurrentMode()
    // aqui ele remove as classes light ou dark e inverte as classes se for dark coloca light e se for light colcoa dark
    section.classList.remove(MODE_LIGHT, MODE_DARK)
    if (current === MODE_LIGHT) {
        section.classList.add(MODE_DARK)
    } else if (current === MODE_DARK) {
        section.classList.add(MODE_LIGHT)
    }
}
    //aqui muda as núvens
const toggleClouds = () => {
    const current = getCurrentMode()
    //cria um regex para identificar se é heaven ou hell
    const regex = /img\/(heaven|hell)/
    // fala para quem vai substituir
    const newSrc = `img/${current}`

    //aqui pega cada nuvem e faz um forEach e muda com o replace mudando a regex e atualiza lá
    clouds.forEach((img) => {
        const imgSrc = img.scr.replace(regex, newSrc)
        img.src = imgSrc
    })
}

// aqui abaixo está a função toggleMode
// onde começa mudando o nome da classe section.main
const toggleMode = (e) => {
     // mudar a classe da section.main (adicionar .heaven .hell)
     toggleMainClass()

    // mudar o título de heaven para hell
    toggleTitle()
    
    // mudar as nuvens
    toggleClouds()
}

// aqui no botão do mode vai ser definido um evento onde irá mudar para light ou dark mode quando clicado
// a cada clique no botão mode ele vai executar a função toggleMode
mode.addEventListener('click', toggleMode)