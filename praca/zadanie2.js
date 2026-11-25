let a = parseInt(prompt("Podaj liczbę a: "));
let b = parseInt(prompt("Podaj liczbę b: "));
let c = parseInt(prompt("Podaj liczbę c: "));
let dzialanie = prompt("Podaj działanie \n1.+\n2.-\n3.*\n4./")

function suma(a, b) {
    return a + b;
}
alert("Suma wynosi: " + suma(a, b));

function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}

function podstawy() {
    console.log("Różnica wynosi: " + sub(a,b));
    console.log("Iloczyn wynosi: " + mul(a,b));
    console.log("Iloraz wynosi: " + div(a,b));
}
podstawy();

function kalkulator() {
    let wynik;
    switch (dzialanie) {
        case "+":
            wynik = suma(a, b)
            break;
        case "-":
            wynik = sub(a, b)
            break;
        case "*":
            wynik = mul(a, b)
            break;
        case "/":
            wynik = div(a, b)
            break;
    }
    document.getElementById("wynik").innerHTML = wynik;
}
kalkulator()

function maxi(a, b, c) {
    return Math.max(a, b, c)
}
alert("Największa liczba z podanych to: " + maxi(a, b, c))

let wzrost = parseInt(prompt("Podaj wzrost w cm"))
let masa = parseInt(prompt("Podaj wagę w kg"))
function kategoria_wzrostu(wzrost) {
    if (wzrost <= 150) {
        alert("niski");
    }
    else if (wzrost >= 180) {
        alert("wysoki");
    }
    else {
        alert("średni");
    }
}
kategoria_wzrostu(wzrost)

function BMI(wzrost, masa) {
    let wzrostM = wzrost / 100
    let bmi = masa / (wzrostM * wzrostM);
    let komentarz;
    if (bmi < 18.5) {
        komentarz = "za mało!"
    }
    else if (bmi > 25) {
        komentarz = "za dużo!"
    }
    else {
        komentarz = "OK!"
    }
    document.getElementById("wynik").innerHTML = "BMI: " + bmi.toFixed(2) + ": " + komentarz
}
BMI(wzrost, masa)

let data1 = Date(prompt("Podaj datę urodzenia pierwszej osoby: "))
let data2 = Date(prompt("Podaj datę urodzenia drugiej osoby: "))

function starszy(data1, data2) {
    if (data1 < data2) {
        alert("Pierwsza osoba jest starsza")
    }
    else if (data1 > data2) {
        alert("Druga osoba jest starsza")
    }
    else {
        alert("Obie osoby są w tym samym wieku")
    }
}
starszy(data1, data2)

function przestepny() {
    let teraz = new Date();
    let rok = teraz.getFullYear();
    if ((rok % 400 === 0) || (rok % 4 === 0 && rok % 100 !== 0)) {
        console.log("Rok " + rok + " jest przestępny.");
    } else {
        console.log("Rok " + rok + " nie jest przestępny.");
    }
}
przestepny()
// let haveLower = password !== password.toLowerCase()
// let haveUpper = password !== password.toUpperCase()
// if(password.length < 8){
// }

function SILA() {
    let haslo = document.getElementById("haslo").value
    let komunikat = document.getElementById("komunikat")
    let sila = "mocne"
    if (haslo.length <= 4) {
        sila = "słabe"
    }
    else if (haslo.length <= 8) {
        sila = "średnie"
    }
    if (!/[0-9]/.test(haslo)) {
        sila = "słabe"
    }
    if (!/[A-ZĄĆĘŁŃÓŚŹŻ]/.test(haslo)) {
        sila = "słabe"
    }
    if (!/[a-ząćęłńóźż]/.test(haslo)) {
        sila = "słabe"
    }
    if (!/[!@#$%^&*(),.?":{}<>|_\-+=]/.test(haslo)) {
        sila = "słabe"
    }
    komunikat.innerHTML = "Siła hasła: " + sila
}
SILA()

function trojkat(a, b, c) {
    if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
        console.log("Z podanych cyfr można utworzyć trójkąt.")
    }
    else {
        console.log("Z podanych cyfr nie można ułożyć trójkąta.")
    }
}
trojkat(a, b, c)

function SZYFR(event) {
    let znak = event.key
    if (/^[a-zA-Z]$/.test(znak)) {
        let kod = znak.charCodeAt(0);
        let zaszyfrowany;

        if (znak >= "a" && znak <= "z") {
            zaszyfrowany = String.fromCharCode(
                ((kod - 97 + 2) % 26) + 97
            );
        } else {
            zaszyfrowany = String.fromCharCode(
                ((kod - 65 + 2) % 26) + 65
            );
        }

        document.getElementById("szyfr").innerHTML += zaszyfrowany;
    }
}