let button = document.querySelector("button");
let div = document.body.querySelector("div");

button.addEventListener('click', function(){
    let paragrafo = document.createElement("p");   //creo l'elemento
    paragrafo.textContent = "CIAO";
    paragrafo.style.backgroundColor = '#26ff00';
    paragrafo.style.textAlign = "center";
    paragrafo.style.fontFamily = "Verdana";
    paragrafo.style.fontSize = "100px";
    document.body.appendChild(paragrafo);
    div.style.background = "#ff0000";
    div.style.fontSize = "50px";
});