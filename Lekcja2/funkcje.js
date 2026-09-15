function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function mul(a, b) {
    return a * b
}
function div(a, b) {
    return a / b
};

let a = parseFLoat(prompt("Podaj liczbę a"));
let b = parseFLoat(prompt("Podaj liczbę b"));
let option = prompt("Podaj działanie \n1.+\n2.\n3.*-\n4./\n5.%")

switch (dzialanie) {
    case '+':
        add(a, b)

        break;
    case '-':
        sub(a, b)
        break;
    case '*':
        mul(a, b)
        break;
    case '/': 
        div(a, b)
        break;
    default:
        console.log("BŁĄD")
}