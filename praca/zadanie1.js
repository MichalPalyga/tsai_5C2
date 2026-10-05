let kwadrat = parseInt(prompt("Numer do kwadratu."))
alert(kwadrat_nazwana(kwadrat))

function kwadrat_nazwana(liczba) {
    return liczba * liczba
}

let kwadrat_anonimowa = function(liczba) {
    return liczba * liczba
}

let kwadrat_strzalkowa = (liczba) => {
    return liczba * liczba
}

function czyParzysta(liczba) {
    if(liczba % 2 === 0) {
        return true
    }
    else {
        return false
    }
}
let czyDodatnia = function(liczba) {
    if(liczba > 0) {
        return true
    }
    else {
        return false
    }
}
let czyWiekszaOd100 = (liczba) => {
    if(liczba > 100) {
        return true
    }
    else {
        return false
    }
}

let parzysta = parseInt(prompt("Podaj liczbę do sprawdzenia czy jest parzysta:"))
console.log(czyParzysta(parzysta))

let dodatnia = parseInt(prompt("Podaj liczbę do sprawdzenia czy jest dodatnia:"))
console.log(czyDodatnia(dodatnia))

let wieksza = parseInt(prompt("Podaj liczbę do sprawdzenia czy jest większa od 100."))
console.log(czyWiekszaOd100(wieksza))


function celsiusToFahrenheit(temp) {
    let wynik = (temp * 9/5) + 32
    return wynik
}
let fahrenheitToCelsius = function(temp) {
    let wynik = (temp - 32) * 5/9
    return wynik
}

let celsiusToKelvin = (temp) => {
    let wynik = temp + 273.151
    return wynik
}
let temp_c_to_f = parseFloat(prompt("Podaj temperature w C"))
console.log(celsiusToFahrenheit(temp_c_to_f))

let temp_f_to_c = parseFloat(prompt("Podaj temperature w F"))
console.log(fahrenheitToCelsius(temp_f_to_c))

let temp_c_to_k = parseFloat(prompt("Podaj temperature w C"))
console.log(celsiusToKelvin(temp_c_to_k))

function ocena(punkty){
    switch(true){
        case punkty <= 39:
            return "Niedostateczny"
        case punkty <= 54:
            return "Dopuszczający"
        case punkty <= 69:
            return "Dostateczny"
        case punkty <= 84:
            return "Dobry"
        case punkty <= 94:
            return "Bardzo dobry"
        case punkty <= 100:
            return "Celujący"
    }
}
let czyZdane = (punkty) => {
    if(punkty >= 40){
        return true
    }
    else{
        return false
    }
}
let l_punktow = parseInt(prompt("Podaj liczbe punktów"))
alert(czyZdane(l_punktow))
alert(ocena(l_punktow))