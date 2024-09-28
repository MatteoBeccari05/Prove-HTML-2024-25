let button = document.body.querySelector("button");
let colori = ["red", "green"];
let i = 0;

button.addEventListener('click' , function(){
    localStorage.setItem("colore" , colori[i%colori.length]);
    i++;
});