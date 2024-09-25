document.getElementById("inviaButton").addEventListener("click", function() {
    // Prendo i valori dai campi di input
    const nome = document.getElementById("name").value.trim();
    const cognome = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("cell").value.trim();
    const dataOra = document.getElementById("ora").value.trim();
    const marcaAuto = document.getElementById("marca").value;
    const carburante = document.getElementById("carb").value;
    const modelloAuto = document.getElementById("modello").value.trim();
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

    if (isEmpty(dataOra)) {
        alert("Per favore inserisci la data e l'ora.");
        return;
    }

    if (isEmpty(modelloAuto)) {
        alert("Per favore inserisci il modello della tua auto.");
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
    document.getElementById("ora").value = "";
    document.getElementById("marca").value = "volk"; // Imposta la marca di default su Volkswagen
    document.getElementById("carb").value = "diesel"
    document.getElementById("modello").value = "";
    document.getElementById("messaggio").value = "";

    // Messaggio di conferma
    alert("Il tagliando è stato prenotato con successo!");

    // Creazione del contenuto da visualizzare
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>Il tuo tagliando:</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Cognome:</strong> ${cognome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <p><strong>Data e Ora:</strong> ${dataOra}</p>
        <p><strong>Marca Auto:</strong> ${marcaAuto}</p>
        <p><strong>Modello Auto:</strong> ${modelloAuto}</p>
        <p><strong>Carburante Auto:</strong> ${carburante}</p>
        <p><strong>Messaggio:</strong> ${messaggio}</p>
    `;

});
