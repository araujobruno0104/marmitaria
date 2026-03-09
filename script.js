const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS2Hrk6JB9O2XjayjzREDISWzAf_lSxUm5vtiyES8oXK97ge9iocYqqhNgIu1pkh5NkEA724gI6HKLb/pub?output=csv";

fetch(url)
.then(response => response.text())
.then(csv => {

const linhas = csv.split("\n");

const lista = document.getElementById("cardapio");

linhas.forEach((linha,i)=>{

if(i === 0) return;

const item = linha.trim();

if(item){

const li = document.createElement("li");

li.textContent = item;

lista.appendChild(li);

}

});

});

