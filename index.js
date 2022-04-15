window.addEventListener('scroll', function() {
    let header = document.querySelector('header')
    header.classList.toggle('moved', pageYOffset > 0)
})
let wishes = document.querySelector('.wishes')
let contentBox = document.querySelector('#wishesBox')
wishes.addEventListener('click', function() {
    contentBox.classList.toggle('hidenOpacity')
    setTimeout(() => {
        contentBox.classList.toggle('hidenDisplay')
    },500)
})

let menuBtn = document.querySelector('.menuBtn')
let imgBtn = menuBtn.querySelector('img')
let content = document.querySelector('.content')
function menu() {
    content.classList.toggle('menu')
    menuBtn.classList.toggle('clicked')
    if (menuBtn.classList.contains('clicked')) {
        imgBtn.setAttribute('src','image/close.png')
        return
    }
    imgBtn.setAttribute('src','image/menu.png')
}
menuBtn.addEventListener('click',() => menu())
let navigation = document.querySelector('.navigation')
navigation.querySelectorAll('a').forEach(value => 
    value.addEventListener('click',() => menu())
)

