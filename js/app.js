const LightBox = document.querySelector('light-box')
const imgs = document.querySelectorAll('.images')
const MainBox = document.querySelector('.clicked-box')
const ClickedImage = MainBox.querySelector('.clicked-img')
const CloseBTN = MainBox.querySelector('.close')

console.log(ClickedImage)
console.log(imgs[1].src)


imgs.forEach(imgs => {
  imgs.addEventListener('click' , () => {
    ClickedImage.src = imgs.src
    MainBox.style.display = 'flex'
    MainBox.style.opacity = '1'

  })
})
CloseBTN.addEventListener('click' , () => {
  MainBox.style.display = 'none'
  MainBox.style.opacity = '0'
})