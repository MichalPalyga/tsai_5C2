function add(a, b) {
    return a + b
};
function sub(a, b) {
    return a - b
};
function mul(a, b) {
    return a * b
};
function div(a, b) {
    return a / b
};
function res(a,b){
    return a % b
};

let a = parseInt(prompt("Podaj liczbę a"));
let b = parseInt(prompt("Podaj liczbę b"));
let option = prompt("Podaj działanie \n1.+\n2.\n3.*-\n4./\n5.%")

switch(option) {
    case '+':
       console.log(add(a, b))
        break;
    case '-':
        console.log(sub(a, b))
        break;
    case '*':
        console.log(mul(a, b))
        break;
    case '/': 
        console.log(div(a, b))
        break;
    case '%':
        console.log(res(a, b))
        break;
    default:
        console.log("BŁĄD")
}