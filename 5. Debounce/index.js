let rectangle = document.querySelector('.rectangle')
let figure = document.querySelectorAll('.square, .triangle, .circle')
let debounceText = document.querySelector('.debounce')

let debounceFlag = true

function debounce() {
    if (debounceFlag) {
        debounceFlag = false
    }
    setTimeout(() => {
        debounceFlag = true
    }, 1000)
}

function figureShow() {
    rectangle.addEventListener('click', () => {
        if (debounceFlag) {
            figure.forEach((elem) => {
                elem.classList.toggle('active')
            })
            debounce()
        } else {
            debounceText.style.visibility = 'visible'
            setTimeout(() => {
                debounceText.style.visibility = 'hidden'
            }, 500)
        }
    })
}

figureShow()