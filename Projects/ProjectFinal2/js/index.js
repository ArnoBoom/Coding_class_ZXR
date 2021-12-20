let page = {
    page1: null,
    page2: null,
    page3: null,
}
let text1 = null
let text2 = null
let btn1 = null
let btn2 = null
let btn3 = null
let btn4 = null
let btn5 = null
let imgText1 = null
let imgText2 = null
let people1 = null
let people4 = null
let people2 = null
let people3 = null
window.onload = function() {
    page.page1 = document.querySelector('.page1')
       page.page2 = document.querySelector('.page2')
    page.page3 = document.querySelector('.page3')
    text1 = document.querySelector('.text1')
    text2 = document.querySelector('.text2')
    btn1 = document.querySelector('.btn1')
    btn2 = document.querySelector('.btn2')

    btn3 = document.querySelector('.btn3')
    btn4 = document.querySelector('.btn4')
    btn5 = document.querySelector('.btn5')
    imgText1 = document.querySelector('.img-text1')
    imgText2 = document.querySelector('.img-text2')
    people1 = document.querySelector('.people1')
    people4 = document.querySelector('.people4')
    people2 = document.querySelector('.people2')
    people3 = document.querySelector('.people3')
    setWidth()
    on(btn4, 'click', () => {
        setPage(2)
    })
    on(btn5, 'click', () => {
        setPage(3)
    })


    on(btn1, 'click', () => {
        setPage(3)
    })
    on(btn2, 'click', () => {
        setPage(1)
    })
    on(btn3, 'click', () => {
        setPage(1)
    })
    function setPage(num) {
        let arr = [1, 2, 3]
        arr.forEach(item => {
            if (item == num) {
                page[`page${ num }`].style.display = 'block'
            } else {
                page[`page${ item }`].style.display = 'none'
            }
        })
        people4.style.display = 'block'
        let bg2 = document.querySelector('.page2 .bg-img')
        let bg2Ratio = bg2.offsetWidth / Number(bg2.getAttribute('naturalWidth'))
        let people1NaturalWidth = Number(people1.getAttribute('naturalWidth'))
        people1.style.width = (people1NaturalWidth * bg2Ratio) * (1 / 2) + 'px'
        people1.style.transform = 'rotateX(66deg) rotateY(-9deg) rotateZ(23deg)'
        people1.style.transition = 'all 1s ease-out'
        people1.style.opacity = 0
        imgText1.style.transition = 'all 1s ease-out'
        imgText1.style.opacity = 0
        people2.style.display = 'block'
        let bg3 = document.querySelector('.page3 .bg-img')
        let bg3Ratio = bg3.offsetWidth / Number(bg3.getAttribute('naturalWidth'))
        let people3NaturalWidth = Number(people3.getAttribute('naturalWidth'))
        people3.style.width = (people3NaturalWidth * bg3Ratio) * (1 / 2) + 'px'
        people3.style.bottom = '39%'
        people3.style.right = '21.4%'
        people3.style.transform = 'rotateY(53deg) rotateZ(3deg)'
        people3.style.transition = 'all 1s ease-out'
        people3.style.opacity = 0
        imgText2.style.transition = 'all 1s ease-out'
        imgText2.style.opacity = 0
        setWidth()
    }

  
    on(people2, 'click', () => {
        people2.style.display = 'none'
        let bg3 = document.querySelector('.page3 .bg-img')
        let bg3Ratio = bg3.offsetWidth / Number(bg3.getAttribute('naturalWidth'))
        let people3NaturalWidth = Number(people3.getAttribute('naturalWidth'))
        people3.style.width = people3NaturalWidth * bg3Ratio + 'px'
        people3.style.bottom = '32%'
        people3.style.right = '21%'
        people3.style.transform = 'none'
        people3.style.transition = 'all 1s ease-in'
        people3.style.opacity = 1
        imgText2.style.transition = 'all 1s ease-in'
        imgText2.style.opacity = 1
    })
    on(people3, 'click', () => {
        people2.style.display = 'block'
        let bg3 = document.querySelector('.page3 .bg-img')
        let bg3Ratio = bg3.offsetWidth / Number(bg3.getAttribute('naturalWidth'))
        let people3NaturalWidth = Number(people3.getAttribute('naturalWidth'))
        people3.style.width = (people3NaturalWidth * bg3Ratio) * (1 / 2) + 'px'
        people3.style.bottom = '39%'
        people3.style.right = '21.4%'
        people3.style.transform = 'rotateY(53deg) rotateZ(3deg)'
        people3.style.transition = 'all 1s ease-out'
        people3.style.opacity = 0
        imgText2.style.transition = 'all 1s ease-out'
        imgText2.style.opacity = 0
    })
    on(imgText2, 'click', () => {
        people2.style.display = 'block'
        let bg3 = document.querySelector('.page3 .bg-img')
        let bg3Ratio = bg3.offsetWidth / Number(bg3.getAttribute('naturalWidth'))
        let people3NaturalWidth = Number(people3.getAttribute('naturalWidth'))
        people3.style.width = (people3NaturalWidth * bg3Ratio) * (1 / 2) + 'px'
        people3.style.bottom = '39%'
        people3.style.right = '21.4%'
        people3.style.transform = 'rotateY(53deg) rotateZ(3deg)'
        people3.style.transition = 'all 1s ease-out'
        people3.style.opacity = 0
        imgText2.style.transition = 'all 1s ease-out'
        imgText2.style.opacity = 0
    })
    on(people4, 'click', () => {
        people4.style.display = 'none'
        people1.style.transition = 'all 1s ease-in'
        people1.style.opacity = 1
        let bg2 = document.querySelector('.page2 .bg-img')
        let bg2Ratio = bg2.offsetWidth / Number(bg2.getAttribute('naturalWidth'))
        let people1NaturalWidth = Number(people1.getAttribute('naturalWidth'))
        people1.style.width = people1NaturalWidth * bg2Ratio + 'px'
        people1.style.transform = 'none'
        
        imgText1.style.transition = 'all 1s ease-in'
        imgText1.style.opacity = 1
    })
    on(people1, 'click', () => {
        setTimeout(() => {
            people4.style.display = 'block'
        }, 750)
        let bg2 = document.querySelector('.page2 .bg-img')
        let bg2Ratio = bg2.offsetWidth / Number(bg2.getAttribute('naturalWidth'))
        let people1NaturalWidth = Number(people1.getAttribute('naturalWidth'))
        people1.style.width = (people1NaturalWidth * bg2Ratio) * (1 / 2) + 'px'
        people1.style.transform = 'rotateX(66deg) rotateY(-9deg) rotateZ(23deg)'
        people1.style.transition = 'all 1s ease-out'
        people1.style.opacity = 0
        imgText1.style.transition = 'all 1s ease-out'
        imgText1.style.opacity = 0
    })
    on(imgText1, 'click', () => {
        setTimeout(() => {
            people4.style.display = 'block'
        }, 750)
        let bg2 = document.querySelector('.page2 .bg-img')
        let bg2Ratio = bg2.offsetWidth / Number(bg2.getAttribute('naturalWidth'))
        let people1NaturalWidth = Number(people1.getAttribute('naturalWidth'))
        people1.style.width = (people1NaturalWidth * bg2Ratio) * (1 / 2) + 'px'
        people1.style.transform = 'rotateX(66deg) rotateY(-9deg) rotateZ(23deg)'
        people1.style.transition = 'all 1s ease-out'
        people1.style.opacity = 0
        imgText1.style.transition = 'all 1s ease-out'
        imgText1.style.opacity = 0
    })
}
window.onresize = function() {
    setWidth()
}
function setWidth() {
    let bg1 = document.querySelector('.page1 .bg-img')
    let bg1Ratio = bg1.offsetWidth / Number(bg1.getAttribute('naturalWidth'))
    let text1NaturalWidth = Number(text1.getAttribute('naturalWidth'))
    text1.style.width = text1NaturalWidth * bg1Ratio + 'px'
    let text2NaturalWidth = Number(text2.getAttribute('naturalWidth'))
    text2.style.width = text2NaturalWidth * bg1Ratio + 'px'
    let btn4NaturalWidth = Number(btn4.getAttribute('naturalWidth'))
    btn4.style.width = btn4NaturalWidth * bg1Ratio + 'px'
    let btn5NaturalWidth = Number(btn5.getAttribute('naturalWidth'))
    btn5.style.width = btn5NaturalWidth * bg1Ratio + 'px'

    let bg2 = document.querySelector('.page2 .bg-img')
    let bg2Ratio = bg2.offsetWidth / Number(bg2.getAttribute('naturalWidth'))
    let btn1NaturalWidth = Number(btn1.getAttribute('naturalWidth'))
    btn1.style.width = btn1NaturalWidth * bg2Ratio + 'px'

    
    let btn2NaturalWidth = Number(btn2.getAttribute('naturalWidth'))
    btn2.style.width = btn2NaturalWidth * bg2Ratio + 'px'
    let people1NaturalWidth = Number(people1.getAttribute('naturalWidth'))
    people1.style.width = (people1NaturalWidth * bg2Ratio) * (1 / 2) + 'px'
    let people4NaturalWidth = Number(people4.getAttribute('naturalWidth'))
    people4.style.width = people4NaturalWidth * bg2Ratio + 'px'
    imgText1.style.width = people4NaturalWidth * bg2Ratio + 'px'

    let bg3 = document.querySelector('.page3 .bg-img')
    let bg3Ratio = bg3.offsetWidth / Number(bg3.getAttribute('naturalWidth'))
    let btn3NaturalWidth = Number(btn3.getAttribute('naturalWidth'))
    btn3.style.width = btn3NaturalWidth * bg3Ratio + 'px'
    let people2NaturalWidth = Number(people2.getAttribute('naturalWidth'))
    people2.style.width = people2NaturalWidth * bg3Ratio + 'px'
    let people3NaturalWidth = Number(people3.getAttribute('naturalWidth'))
    people3.style.width = (people3NaturalWidth * bg3Ratio) * (1 / 2) + 'px'
    imgText2.style.width = people3NaturalWidth * bg3Ratio + 'px'
}

function checkSize(imgElement) {
    let naturalHeight = imgElement.naturalHeight
    let naturalWidth = imgElement.naturalWidth
    imgElement.setAttribute('naturalWidth', naturalWidth)
    imgElement.setAttribute('naturalHeight', naturalHeight)
}