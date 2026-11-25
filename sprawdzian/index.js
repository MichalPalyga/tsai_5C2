let produkty = ["narty", " hantle", " skakanka", " mata", " bierznia"];
let cena = [' 140',' 40',' 20',' 30',' 1500'];
let wybor = prompt("Wybierz produkt: "+ produkty);
let koszyk = [];
let koniec = prompt("Dodać więcej? (Tak/Nie)");

let razem = 0;
if(koniec == "Tak"){
    prompt(wybor)
}
else if (koniec == "Nie"){
    koszyk.push(wybor)
}
console.log(koszyk)
let kod = prompt("Kod promocyjny: ")
function zaplata(suma){
    
    if(kod == "Aktywny26" || suma > 450){
        let razem = suma - suma * 0.1
        console.log(razem)
    }
    else{
        let razem = suma
        console.log(razem)
    }
}
