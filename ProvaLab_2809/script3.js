function CambiaColore()
{
    document.body.style.backgroundColor = localStorage.getItem("colore")
}

//CambiaColore();
window.addEventListener('storage', CambiaColore());
