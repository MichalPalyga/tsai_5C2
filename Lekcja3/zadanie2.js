let a = parseFloat(prompt("Podaj liczbę a: "));
let b = parseFloat(prompt("Podaj liczbę b: "));
let c = parseFloat(prompt("Podaj liczbę c: "));

function sum() {
    let wynik = a + b;
    console.log("Suma wynosi: " + wynik)
}
sum()

function sub() {
    let sub = a - b;
    console.log("Różnica wynosi: " + sub)
}
sub()

function mul() {
    let mul = a * b;
    console.log("Iloczyn wynosi: " + mul)
}
mul()

function div() {
    let div = a / b;
    console.log("Iloraz wynosi: " + div)
}
div()

let dzialanie = prompt("Podaj działanie \n1.+\n2.-\n3.*\n4./")
switch (dzialanie) {
    case '+':
        sum()
        break;
    case '-':
        sub()
        break;
    case '*':
        mul()
        break;
    case '/':
        div()
        break;
}

function max(){
    Math.max(a,b,c)
}
max()