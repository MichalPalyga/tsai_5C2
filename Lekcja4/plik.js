let clothes = ["Kurtka", "spodnie", "buty"]
let prices = [150, 100, 210]
let finalCart = []
let suma = 0

function cart(item){
    for(let i=0; i<clothes.length;i++){
        if(item == clothes[i]){
            console.log("Do koszyka dodano produkt: "+item);
            finalCart.push(clothes[i])
        }else{
            console.log("Nie ma takiego towaru")
        }
    }
    return finalCart
}

function result(code=""){
    let cartSize = finalCart.length;
    for(let i=0;i<cartSize;i++){
        if(code == "Ubrania26" && prices[i]>100){
            suma -=(prices[i]-(prices[i]*0.05))
        }else{
            suma += prices[i]
        }
    } 
}