let aktywny = 'MistyRose'
let nieaktywny = '#FFAEA5'
let bazab = document.getElementById('Bazab')
let opisyb = document.getElementById('Opisyb')
let galeriab = document.getElementById('Galeriab')
let baza = document.getElementById('baza')
let opis = document.getElementById('opis')
let galeria = document.getElementById('galeria')
bazab.addEventListener('click',()=>{
        opisyb.style.backgroundColor = nieaktywny
        bazab.style.backgroundColor = aktywny
        galeriab.style.backgroundColor = nieaktywny
        baza.style.display = 'block'
        opis.style.display = 'none'
        galeria.style.display = 'none'
})
opisyb.addEventListener('click',()=>{
    opisyb.style.backgroundColor = aktywny
    bazab.style.backgroundColor = nieaktywny
    galeriab.style.backgroundColor = nieaktywny
    baza.style.display = 'none'
    opis.style.display = 'block'
    galeria.style.display = 'none'
})
galeriab.addEventListener('click',()=>{
    opisyb.style.backgroundColor = nieaktywny
    bazab.style.backgroundColor = nieaktywny
    galeriab.style.backgroundColor = aktywny
    baza.style.display = 'none'
    opis.style.display = 'none'
    galeria.style.display = 'block'
})