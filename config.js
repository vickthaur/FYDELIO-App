/**
 * CONFIGURATION GENERALE AGENCE - FIDDLE
 * Pour ajouter un client : duplique un bloc dans 'agenceClients'
 */

const agenceClients = {
    // ---------------------------------------------------------
    // CLIENT 1 : LE BISTROT
    // ---------------------------------------------------------
    "bistrot": {
        id: "bistrot",
        nom: "Le Bistrot Paris",
        couleur: "#e63946", // Rouge
        seuilPoints: 5,
        recompense: "5 points = 1 Dessert Offert 🍰",
        logo: "https://vickthaur.github.io/FIDDLE/logo-bistrot.png",
        
        // Liens Brevo spécifiques
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFANfE1Ud8qtliFwPa28l2_ezu8uq3LYTQgyIt1FJdCu6ADCk_qAvGFPQSFp6HtEVLnsSSBWPY0iWuOOLkQD9PtOzEg4zLN0fuwTKabJS3y5yW2LPzsf2FhbihtwWgWsAsrIamq8lCQvUuxIOb6Cn6zN8x4QyFFwDvc_x03QZONNextkyrknz6Uqew8VmYb2VoF5aYAXjhiNuf6A==",
        formValidation: "https://9d65705b.sibforms.com/serve/MUIFADjqIProT_Cl28inJrj0bX2b4zK_XA-Ov9LDV2gWtskwsKQ7VVo09QVM5hlDGzylzy6392uTx_swkr0hHIW_VqQybc45jJR5TbzoCVHjs8OaZqF1BF4j-j2hbOTYyNbscvcENAbY2zKv6QDi8hTpGkzLbe-2Ng8qNIkZaPO7yAU4sy6CCAxOAZhIpb1H-gBjsPxIEeL9bWuUsg==",
        
        // Google Script spécifique (si tu veux séparer les bases de données)
        googleScript: "https://script.google.com/macros/s/AKfycbyjfLm46q2wuOjqn1kwII6bmM4QGGG8iD9S3VXa3bQ3_eL9NvOZQcQ4KEBow4l0mNU9xg/exec"
    },

    // ---------------------------------------------------------
    // CLIENT 2 : VILLA SAINT ANTOINE
    // ---------------------------------------------------------
    "villa_saint_antoine": {
        id: "villa_saint_antoine",
        nom: "Villa Saint Antoine",
        couleur: "#c5a059", // Doré
        seuilPoints: 10,
        recompense: "10 points = 1 Cocktail Signature 🍸",
        logo: "https://vickthaur.github.io/FIDDLE/logo-villa.png",
        
        // Liens Brevo (A remplacer par les nouveaux formulaires créés pour eux)
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFAPNZrGyP3i0xNF-FdppNziEkhvnAiLtRY8uUfol3hxIyq6VHE11ofNd5fjQp_Iq7tjv6nklXAhjOPj_Le1u6Wxz_U2NCQLtoBMgkuGrjRNvCwMzFg7KcWEyXIcW-JPoDtL2QizWiwcOJl5-G96lbhakbnyeJT1cxI_8ZV4SVOfBt8CDOHTGIi-KdJSAAPTHMADTN5Gyt8PgqdA==",
        formValidation: "https://9d65705b.sibforms.com/serve/MUIFAJDcz_H5hCbvQ9g1SOqKVyAo5fIPRSH5Av5deHgtWT5pF0ZkzbdcnwySESsegIdFuxzkw8rMMZkfiUMzvAMDfIaGzl42YBw1P3Fw1H1Z6B914_I3TwYpVPNWMv0nqARUMZI8bG2Cja6rYBZ6EAkXhGLetQKjHnDCX4EP0I8Gv7Te36b1rLjJiUI4Fas-3uxA1-XpotgR3ujdWg==",
        
        googleScript: "https://script.google.com/macros/s/AKfycbyjfLm46q2wuOjqn1kwII6bmM4QGGG8iD9S3VXa3bQ3_eL9NvOZQcQ4KEBow4l0mNU9xg/exec" 
    }

    // AJOUTER UN CLIENT ICI :
    // "nom_id": { ... }
};

/**
 * FONCTION DE DEPLOIEMENT CONFIG
 * Appelle cette fonction au début de chaque fichier (index, scanner, valider)
 */
function appliquerConfig() {
    // 1. On analyse l'URL pour savoir quel resto afficher
    const urlParams = new URLSearchParams(window.location.search);
    let restoID = urlParams.get('resto');

    // Sécurité : si rien n'est précisé ou si le resto n'existe pas, on met le bistrot par défaut
    if (!restoID || !agenceClients[restoID]) {
        restoID = "bistrot"; 
    }

    const config = agenceClients[restoID];

    // 2. Application du Style Visuel (Variables CSS)
    document.documentElement.style.setProperty('--primary', config.couleur);
    // Création d'un "Glow" (lueur) basé sur la couleur principale
    document.documentElement.style.setProperty('--primary-glow', config.couleur + '4D'); 

    // 3. Mise à jour des textes et titre
    document.title = config.nom + " - Programme Fidélité";
    
    // On remplit tous les éléments qui ont les classes correspondantes
    document.querySelectorAll('.nom-resto').forEach(el => el.innerText = config.nom);
    document.querySelectorAll('.texte-recompense').forEach(el => el.innerHTML = config.recompense);

    // 4. On retourne l'objet complet pour que le reste du code puisse l'utiliser
    return config;
}
