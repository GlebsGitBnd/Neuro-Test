let fullImage = ['https://static-cse.canva.com/blob/846923/photo1502082553048f009c37129b9e1583341920812.jpeg',
    'https://img.freepik.com/premium-photo/a-river-runs-through-a-valley-with-mountains-in-the-background_853645-1284.jpg?w=2000',
    'https://klike.net/uploads/posts/2019-11/1574605225_2.jpg',
    'https://n1s1.hsmedia.ru/7d/f4/65/7df465013dd467c13ab94d0ff1c2cd4d/1000x600_0xac120003_8887241501666366066.jpeg',
    'https://kudann.ru/uploads/af315a318da415860ee72551a830a06f.png',
    'https://phonoteka.org/uploads/posts/2022-01/1642965811_1-phonoteka-org-p-krasivii-fon-priroda-1.jpg']

class Slider {
    constructor(fullImage, imgBox, prev, next) {
        this.fullImage = fullImage
        this.imgBox = imgBox
        this.prev = prev
        this.next = next
        this.count = 0
    }

    //Заполняет контейнер картинками
    fillContainerImg() {
        this.fullImage.map((value, index) => {
            this.imgBox.innerHTML += `<div class="img_box__item"><img src="${value}" alt="${index}_item"></div>`
        })
    }

    //Следующий слайд
    nextClick() {
        if(this.count === (this.fullImage.length - 2)){
            this.next.style.opacity = '30%'
        }
        if (this.count < this.fullImage.length - 1) {
            this.count += 1
            this.imgBox.style.transform += `translateX(-800px)`
            this.prev.style.opacity = '100%'
        }
    }

    //Предыдущий слайд
    prevClick() {
        if(this.count === 1){
            this.prev.style.opacity = '30%'
        }
        if (this.count > 0) {
            this.count -= 1
            this.imgBox.style.transform += `translateX(800px)`
            this.next.style.opacity = '100%'
        }
    }

    //Регистрация событий
    useSlider() {
        this.next.addEventListener('click', () => {
            this.nextClick()
        })
        this.prev.addEventListener('click', () => {
            this.prevClick()
        })
    }
}
const [imgContainer, buttonPrev, buttonNext] = document.querySelectorAll('.slider__img_box, .btn__prev, .btn__next')

const slider = new Slider(fullImage, imgContainer, buttonPrev, buttonNext)
slider.fillContainerImg()
slider.useSlider()