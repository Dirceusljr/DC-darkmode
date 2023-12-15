const botao = document.getElementById('btn-mode')
const conteudo = document.getElementById('conteudo')
const icone = document.getElementById('icone')
const login = document.getElementById('login')
const userName = document.getElementById('userName')
const iconeLogin = document.getElementById('iconeLogin')

// botao.addEventListener('click', () => {
//     conteudo.classList.toggle('dark-mode')
// })

login.addEventListener('click', () => {
    let usuario = prompt('Seu usuario:')
    localStorage.setItem('userName', usuario)
    userName.innerHTML = usuario

    if (usuario !== '') {
        iconeLogin.classList.remove('fa-regular')
        iconeLogin.classList.add('fa-solid')
    } else {
        iconeLogin.classList.remove('fa-solid')
        iconeLogin.classList.add('fa-regular')
    }

})

window.addEventListener('load', () => {
    let darkMode = localStorage.getItem('dark-mode')

    if (darkMode == 'ativado') {
        ativaDarkMode()
    } else {
        desativaDarkMode ()
    }

    let usuario = localStorage.getItem('userName')
    userName.innerHTML = usuario
})

botao.addEventListener('click', acionaBotao)

function acionaBotao() {
    let darkMode = localStorage.getItem('dark-mode')

    if (darkMode == 'ativado') {
        desativaDarkMode();
    } else {
        ativaDarkMode()
    }
}

function ativaDarkMode() {
    localStorage.setItem('dark-mode','ativado')
    conteudo.classList.remove('white-mode')
    conteudo.classList.add('dark-mode')
    icone.classList.remove('fa-regular')
    icone.classList.add('fa-solid')
}

function desativaDarkMode() {
    localStorage.setItem('dark-mode', 'desativado')
    conteudo.classList.remove('dark-mode')
    conteudo.classList.add('white-mode')
    icone.classList.remove('fa-solid')
    icone.classList.add('fa-regular')
}