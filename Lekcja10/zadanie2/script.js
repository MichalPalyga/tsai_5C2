let tabela = document.querySelector('table')
let wykonane = document.createElement('td').appendChild("button")
let usun = document.createElement("td").appendChild("button")
let row = tabela.appendChild(document.createElement("tr"))
                .appendChild(wykonane)
                .appendChild(usun)

let dodaj = document.getElementById('dodaj')
dodaj.addEventListener('click',(event)=>{
    event.preventDefault()
    tabela.appendChild(row)
})