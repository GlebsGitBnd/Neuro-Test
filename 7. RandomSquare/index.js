const squareContainer = document.querySelector('.square_container')
const squareCount = document.querySelector('.square__count')
const random = Math.floor(Math.random() * 100) + 1
const discharges = '0123456789ABCDEF';

squareCount.innerText = random

//В задании было написано с помощью цикла, по этому функции не использовал
for(let i = 0; i < random; i++){
    let color = '#'
    for (let j = 0; j < 6; j++){
        color += discharges[Math.floor(Math.random() * 16)]
    }
    squareContainer.innerHTML += `<div class="color"></div>`

    const lastElem = document.querySelector('.square_container > :last-child')
    lastElem.style.background = color
}

