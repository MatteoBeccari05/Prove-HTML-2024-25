document.getElementById("inviaButton").addEventListener("click", function() {
    // Prendo i valori dai campi di input
    const nome = document.getElementById("name").value.trim();
    const cognome = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("cell").value.trim();
    const messaggio = document.getElementById("messaggio").value.trim();

    // Funzione per controllare se un campo è vuoto
    function isEmpty(value) {
        return value === "";
    }

    // Verifica dei vari campi
    if (isEmpty(nome)) {
        alert("Per favore inserisci il tuo nome.");
        return;
    }

    if (isEmpty(cognome)) {
        alert("Per favore inserisci il tuo cognome.");
        return;
    }

    if (isEmpty(email)) {
        alert("Per favore inserisci la tua email.");
        return;
    }

    if (isEmpty(telefono)) {
        alert("Per favore inserisci il tuo numero di telefono.");
        return;
    }

    if (isEmpty(messaggio)) {
        alert("Per favore inserisci un messaggio.");
        return;
    }

    // Se tutti i campi sono validi, svuoto l'input
    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cell").value = "";
    document.getElementById("messaggio").value = "";

    // Messaggio di conferma
    alert("Richiesta inviata con successo!");

    // Creazione del contenuto da visualizzare
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>La tua richiesta:</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Cognome:</strong> ${cognome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <p><strong>Messaggio:</strong> ${messaggio}</p>
        <p> Cercheremo di risponderti il prima possibile! <p>
    `;

});
