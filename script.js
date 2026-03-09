const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS2Hrk6JB9O2XjayjzREDISWzAf_lSxUm5vtiyES8oXK97ge9iocYqqhNgIu1pkh5NkEA724gI6HKLb/pub?output=csv";

fetch(url)
.then(res => res.text())
.then(data => {

const linhas = data.split("\n");

let html = "";

// começa do 1 para pular o cabeçalho
for(let i = 1; i < linhas.length; i++){

const item = linhas[i].trim();

if(item !== ""){
html += `<p>• ${item}</p>`;
}

}

document.getElementById("cardapio-lista").innerHTML = html;

});

