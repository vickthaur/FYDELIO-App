// LE DICTIONNAIRE DE TES CLIENTS
const agenceClients = {
    "bistrot": {
        nom: "Le Bistrot Paris",
        recompense: "Cumulez <span class='highlight'>5 points</span> = 1 Dessert Offert 🍰",
        couleur: "#e63946", // Le rouge de ton Bistrot
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFANfE1Ud8qtliFwPa28l2_ezu8uq3LYTQgyIt1FJdCu6ADCk_qAvGFPQSFp6HtEVLnsSSBWPY0iWuOOLkQD9PtOzEg4zLN0fuwTKabJS3y5yW2LPzsf2FhbihtwWgWsAsrIamq8lCQvUuxIOb6Cn6zN8x4QyFFwDvc_x03QZONNextkyrknz6Uqew8VmYb2VoF5aYAXjhiNuf6A==",
        formValidation: "https://9d65705b.sibforms.com/serve/MUIFADjqIProT_Cl28inJrj0bX2b4zK_XA-Ov9LDV2gWtskwsKQ7VVo09QVM5hlDGzylzy6392uTx_swkr0hHIW_VqQybc45jJR5TbzoCVHjs8OaZqF1BF4j-j2hbOTYyNbscvcENAbY2zKv6QDi8hTpGkzLbe-2Ng8qNIkZaPO7yAU4sy6CCAxOAZhIpb1H-gBjsPxIEeL9bWuUsg=="
    }
    // Plus tard, on rajoutera d'autres restos ici !
};

// La fonction magique qui lit l'URL et met à jour la page
function appliquerConfig() {
    const urlParams = new URLSearchParams(window.location.search);
    let restoID = urlParams.get('resto');

    // Si on ne précise pas de resto dans le lien, on met le Bistrot par défaut
    if (!restoID || !agenceClients[restoID]) {
        restoID = "bistrot"; 
    }

    const config = agenceClients[restoID];

    // On change la couleur
    document.documentElement.style.setProperty('--primary', config.couleur);
    
    // On met à jour les textes
    document.querySelectorAll('.nom-resto').forEach(el => el.innerText = config.nom);
    document.querySelectorAll('.texte-recompense').forEach(el => el.innerHTML = config.recompense);
    document.title = config.nom + " - Fidélité";

    return { id: restoID, ...config };
}