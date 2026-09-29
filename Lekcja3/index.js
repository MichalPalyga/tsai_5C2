const tablica = [12, 21, 33, -3, 3, 66, 76, 81, -9, -101];
function suma(tablica) {
    let wynik = 0;
    for (let i = 0; i < tablica.length; i++) {
        wynik += tablica[i];
    }
    return wynik;
}
console.log(suma(tablica));

let najwieksza = Math.max(...tablica)
console.log(najwieksza);
let najmniejsza = Math.min(...tablica)
console.log(najmniejsza);

function parzysta() {
    let liczba = parseFloat(prompt("Podaj liczbę:"));
    if (liczba % 2 === 0) {
        console.log("Liczba " + liczba + " jest parzysta. Dzielniki tej liczby to: ");
        for (let i = 1; i <= liczba; i++) {
            if (liczba % i === 0) {
                console.log(i);
            }
        }
    } else {
        console.log("Liczba jest nieparzysta.");
    }
}
parzysta();

function dodatnia() {
    let liczba = 0;
    for (let i = 0; i<tablica.length;i++){
        if (tablica[i]>0){
            liczba++;
        }
    }
    console.log("Liczb dodatnich jest " + liczba);
}
dodatnia();