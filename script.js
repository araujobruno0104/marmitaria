const url = "COLE_AQUI_LINK_CSV_DA_PLANILHA";

fetch(url)
.then(res => res.text())
.then(data => {

const linhas = data.split("\n");

let html = "";

linhas.forEach(item => {

if(item.trim() !== ""){
html += `<p>• ${item}</p>`;
}

});

document.getElementById("cardapio-lista").innerHTML = html;

});