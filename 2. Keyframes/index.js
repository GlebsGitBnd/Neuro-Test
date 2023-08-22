const figure = document.querySelectorAll('.circle, .triangle, .square, .rectangle')

class Keyframes{
    constructor(figure) {
        this.figure = figure
    }

    // Добавляет класс с анимацией по нажатию
    animationUse(){
        this.figure.forEach((elem) => {
            elem.addEventListener('click', () => {
                elem.classList.toggle('active')
            })
            console.log(elem)
        })
    }
}

const figureDance = new Keyframes(figure)
figureDance.animationUse()