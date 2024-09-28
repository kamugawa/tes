let angle = 0
const items = document.querySelectorAll('.carousel-item')
const itemCount = items.length
const rotateStep = 360 / itemCount

function updateCarousel() {
  const carousel = document.querySelector('.carousel')
  carousel.style.transform = `rotateY(${angle}deg)`
}

function prevSlide() {
  angle += rotateStep
  updateCarousel()
}

function nextSlide() {
  angle -= rotateStep
  updateCarousel()
}

document.addEventListener('DOMContentLoaded', () => {
  items.forEach((item, i) => {
    const angleForItem = rotateStep * i
    item.style.transform = `rotateY(${angleForItem}deg) translateZ(500px)`
  })
})
