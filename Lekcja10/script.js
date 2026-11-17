let trojkat = document.getElementById('trojkat')
let prostokat = document.getElementById('prostokat')
let figura = document.getElementById('figura')

trojkat.addEventListener('click', () => {
    figura.src = "/Lekcja10/pliki/1d.bmp"
})
prostokat.addEventListener('click', () => {
    figura.src = "/Lekcja10/pliki/2d.bmp"
})

let button = document.querySelector('button')
let wynik = document.getElementById('wynik')

button.addEventListener('click', (event) => {
    event.preventDefault()
    let bok1_pod = document.getElementById('bok1_pod').value
    let bok2_wys = document.getElementById('bok2_wys').value
    if (figura.src = "/Lekcja10/pliki/1d.bmp") {
        wynik.textContent = (bok1_pod * bok2_wys) / 2
    }
    else{
        wynik.textContent = bok1_pod * bok2_wys
    }
})
