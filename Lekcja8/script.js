const btn_st = document.querySelector('#stozek');
const btn_ku = document.querySelector('#kula');
const btn_os = document.querySelector('#ostro');
let ob_s = document.querySelector('#ob_s');
let pb_s = document.querySelector('#pb_s');
let ob_k = document.querySelector('#ob_k');
let pb_k = document.querySelector('#pb_k');
let ob_o = document.querySelector('#ob_o');
let pb_o = document.querySelector('#pb_o');
let prawi = document.querySelector('#prawi');

btn_st.addEventListener('click', () => {
    document.querySelector('.stozek').style.display = 'flex'
})
btn_ku.addEventListener('click', () => {
    document.querySelector('.kula').style.display = 'flex'
})
btn_os.addEventListener('click', () => {
    document.querySelector('.ostro').style.display = 'flex'
})

document.querySelector("#form_stozek").addEventListener('submit', (event) => {
    event.preventDefault()
    let rs = document.querySelector('#r').value;
    let h = document.querySelector('#h').value;
    let l = document.querySelector('#l').value;
    if(rs > 0 && h > 0 && l > 0){
    ob_s.textContent = "Objętość:" + Math.round(1 / 3 * 3.14 * rs * rs * h, 2)
    pb_s.textContent = "Pole boczne:" + Math.round(3.14 * rs * l)}
    else{
        alert("Liczba nie może być ujemna")
    }
})

document.querySelector("#form_kula").addEventListener('submit', (event) => {
    event.preventDefault()
    let rk = document.querySelector('#rk').value;
    if(rk > 0){
    ob_k.textContent = "Objętość:" + Math.round(4 / 3 * 3.14 * rk *rk * rk, 2)
    pb_k.textContent = "Pole:" + Math.round(4 * 3.14 * rk ** 2, 2)}
    else{
        alert("Liczba nie może być ujemna")
    }
})

document.querySelector("#form_ostro").addEventListener('submit', (event) => {
    event.preventDefault()
    let wys = document.querySelector('#wys').value;
    let bok1 = document.querySelector('#bok1').value;
    let bok2 = document.querySelector('#bok2').value;
    if(wys > 0 && bok1 > 0 && bok2 > 0){
    ob_o.textContent = "Objętość:" + Math.round(1 / 3 * bok1 * bok2 * wys, 2)}
    else{
        alert("Liczba nie może być ujemna")
    }
    if (bok1 == bok2) {
        prawi.textContent = "Ostrosłup prawidłowy"
    }
    else {
        prawi.textContent = "Ostrosłup nieprawidłowy"
    }
})
