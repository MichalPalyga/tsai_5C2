let gen = document.getElementById('generuj')

gen.addEventListener('click',()=>{
    let bilet = document.getElementById('bilet')
let strefa = document.getElementById('strefa').value
let godz = document.getElementById('godz').value
let minut = parseInt(document.getElementById('minut').value)
let godz_to_min = parseInt(godz * 60)
let czas = godz_to_min + minut 
let stawka = 0
let p_godz = 0
if(strefa == "A"){
    p_godz = 5
}
else if (strefa == "B"){
    p_godz = 6
}
else {
    p_godz = 8.4
}
if(strefa == "A"){
    stawka = 1.25
}
else if (strefa == "B"){
    stawka = 1.50
}
else {
    stawka = 2.10
}
let koszt = 0
if(czas <=60){
    koszt = p_godz
}
else{
    koszt = p_godz + ((czas - 60) / 15)*stawka
}
bilet.innerHTML = "<strong>Podsumowanie:</strong>" +
                  "<br>" +
                  "Podstrefa: <strong>" + strefa + "</strong>" +
                  "<br>" +
                  "Czas parkowania: <strong>" + godz + "godz. " + minut + "min.</strong>" +
                  "<br>" +
                  "Koszt parkowania: <strong>" + koszt + "</strong>"
bilet.style.display = "inline-block"
})


