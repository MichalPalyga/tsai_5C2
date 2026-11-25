// sposób 1 - for
// for(let i=0; i<cards.length;i++){
//     console.log("FOR: ", cards[i])
// }
// sposób 2 - foreach
// cards.forEach(card => {
// console.log("FOREACH: ", card)
// })

let cards = document.querySelectorAll(".card");
const btn = document.querySelector(".btn");
let saldo = 0;
let saldoHandler = document.querySelector(".cash");
const add100 = document.querySelector("#add100");
const add500 = document.querySelector("#add500")
const add1000 = document.querySelector("#add1000")

add100.addEventListener('click', () => {
    saldo += 100;
    saldoHandler.textContent = saldo
})
add500.addEventListener('click', () => {
    saldo += 500;
    saldoHandler.textContent = saldo
})
add1000.addEventListener('click', () => {
    saldo += 1000;
    saldoHandler.textContent = saldo
})

btn.addEventListener("click", () => {
    if (saldo >= 100) {
        saldo -= 100;
        saldoHandler.textContent = saldo
        cards.forEach(card => {
            card.textContent = Math.round(Math.random() * 10)
            card.style.backgroundColor = ""
        })
        for (let i = 0; i < cards.length; i++) {
            let counter = 0;
            for (let j = 0; j < cards.length; j++) {
                if (cards[i].textContent === cards[j].textContent) {
                    counter++
                }
            }
            if (counter >= 3) {
                switch (cards[i].textContent) {
                    case "0":
                        saldo += 10000;
                        saldoHandler.textContent = saldo;
                        break;
                    case "1":
                        saldo += 100;
                        saldoHandler.textContent = saldo
                        break;
                    case "2":
                        saldo += 200;
                        saldoHandler.textContent = saldo
                        break;
                    case "3":
                        saldo += 300;
                        saldoHandler.textContent = saldo
                        break;
                    case "4":
                        saldo += 400;
                        saldoHandler.textContent = saldo
                        break;
                    case "5":
                        saldo += 500;
                        saldoHandler.textContent = saldo
                        break;
                    case "6":
                        saldo += 600;
                        saldoHandler.textContent = saldo
                        break;
                    case "7":
                        saldo += 700;
                        saldoHandler.textContent = saldo
                        break;
                    case "8":
                        saldo += 800;
                        saldoHandler.textContent = saldo
                        break;
                    case "9":
                        saldo += 900;
                        saldoHandler.textContent = saldo
                        break;
                    case "10":
                        saldo += 1000;
                        saldoHandler.textContent = saldo
                        break;
                }   
                cards[i].style.backgroundColor = "green";
            }
        }
    } else {
        alert("Wpłać przynajmniej 100!")
    }
})