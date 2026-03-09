const sheetID = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS2Hrk6JB9O2XjayjzREDISWzAf_lSxUm5vtiyES8oXK97ge9iocYqqhNgIu1pkh5NkEA724gI6HKLb/pub?output=csv"

const url = `https://opensheet.elk.sh/${sheetID}/1`

fetch(url)
.then(res => res.json())
.then(data => {

const lista = document.getElementById("cardapio")

data.forEach(item => {

const li = document.createElement("li")

li.textContent = item.item

lista.appendChild(li)

})

})

