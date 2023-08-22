const video1 = document.getElementById('video1')
const videoTime = document.querySelector('.video__time')

video1.addEventListener('click', () => {
    if (video1.paused){
        video1.play()
    } else {
        video1.pause()
    }
})

video1.addEventListener('timeupdate', () => {
    const minutes = String(Math.floor(video1.currentTime / 60)).padStart(2, '0')
    const seconds = String(Math.floor(video1.currentTime) % 60).padStart(2, '0')
    const milliseconds = String(Math.floor((video1.currentTime - Math.floor(video1.currentTime)) * 1000)).padStart(3, '0')
    videoTime.innerText = `${minutes}:${seconds}:${milliseconds}`
})

// Миллисекунды так и должны неравномерно идти?