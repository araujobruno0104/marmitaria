const url = "https://docs.google.com/spreadsheets/d/1Hx3dTYEZOj1SKSN0xcS53rLto4TnaITdWaZW4h3Hqds/edit?usp=drivesdk";

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
