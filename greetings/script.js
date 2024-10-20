// Fonction pour obtenir la date en français
function afficherDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('fr-FR', options);
    document.getElementById('date').textContent = date;
}

// Appelle la fonction à l'ouverture de la page
window.onload = afficherDate;
