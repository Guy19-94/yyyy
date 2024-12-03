
// Fonction pour générer un tirage basé sur les numéros du dernier tirage
function generatePredictionBasedDraw() {
    const lastNumbersInput = document.getElementById("lastNumbers").value;
    const lastLuckyInput = document.getElementById("lastLuckyNumber").value;

    if (!lastNumbersInput || !lastLuckyInput) {
        alert("Veuillez entrer tous les numéros du dernier tirage !");
        return;
    }

    const lastNumbers = lastNumbersInput.split(",").map(Number).filter(n => n >= 1 && n <= 49);
    const lastLuckyNumber = parseInt(lastLuckyInput, 10);

    if (lastNumbers.length !== 5 || isNaN(lastLuckyNumber) || lastLuckyNumber < 1 || lastLuckyNumber > 10) {
        alert("Veuillez entrer exactement 5 numéros principaux (1-49) et un numéro chance (1-10) !");
        return;
    }

    let predictedNumbers = [];
    while (predictedNumbers.length < 5) {
        let variation = Math.floor(Math.random() * 3) - 1; // Variation de -1 à +1
        let candidate = lastNumbers[predictedNumbers.length] + variation;
        if (candidate < 1) candidate = 1;
        if (candidate > 49) candidate = 49;
        if (!predictedNumbers.includes(candidate)) {
            predictedNumbers.push(candidate);
        }
    }

    let predictedLucky = lastLuckyNumber + (Math.random() > 0.5 ? 1 : -1);
    if (predictedLucky < 1) predictedLucky = 1;
    if (predictedLucky > 10) predictedLucky = 10;

    displayResults("Tirage Prédictif", predictedNumbers, predictedLucky);
}

// Fonction pour afficher les résultats
function displayResults(title, mainNumbers, luckyNumber) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h2>${title}</h2>
        <p>Numéros principaux : <strong>${mainNumbers.join(", ")}</strong></p>
        <p>Numéro chance : <strong>${luckyNumber}</strong></p>
    `;
}
