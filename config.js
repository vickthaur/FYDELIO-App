/**
 * 🎯 CONFIGURATION GÉNÉRALE - FIDDLE-App
 * Ce fichier est le point central de l'application. 
 * Il gère l'aiguillage des données Brevo et Google Scripts.
 */

const agenceClients = {
    // ⚪ CONFIGURATION NEUTRE (FIDDLE-App)
    "default": {
        id: "default",
        nom: "FIDDLE-App",
        couleur: "#1e293b", 
        seuilPoints: 10,
        recompense: "Sélectionnez un établissement",
        logo: "https://vickthaur.github.io/FIDDLE-App/logo-agence.png",
        formInscription: "#",
        formValidation: "#",
        scriptLecture: "https://script.google.com/macros/s/AKfycbzSDXzxN_N8xgLWE6B_Ng61IbjF0tj-LKJgwe_v4pLb_hD6dEdOXVDrd8VTZkF1pTQAGg/exec",
        scriptValidation: "https://script.google.com/macros/s/AKfycbwbIc7jwVu38x5n6sfRVu5dHZK2Y0hvkv5nipXzRpgE52a4FX52PbTkHkGhQdS_Eew3Iw/exec"
    },

    // 🔴 CLIENT : LE BISTROT
    "bistrot": {
        id: "bistrot",
        nom: "Le Bistrot Paris",
        couleur: "#e63946", 
        seuilPoints: 5,
        recompense: "5 points = 1 Dessert Offert 🍰",
        logo: "https://vickthaur.github.io/FIDDLE-App/logo-bistrot.png",
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFANfE1Ud8qtliFwPa28l2_ezu8uq3LYTQgyIt1FJdCu6ADCk_qAvGFPQSFp6HtEVLnsSSBWPY0iWuOOLkQD9PtOzEg4zLN0fuwTKabJS3y5yW2LPzsf2FhbihtwWgWsAsrIamq8lCQvUuxIOb6Cn6zN8x4QyFFwDvc_x03QZONNextkyrknz6Uqew8VmYb2VoF5aYAXjhiNuf6A==",
        formValidation: "https://9d65705b.sibforms.com/serve/MUIFADjqIProT_Cl28inJrj0bX2b4zK_XA-Ov9LDV2gWtskwsKQ7VVo09QVM5hlDGzylzy6392uTx_swkr0hHIW_VqQybc45jJR5TbzoCVHjs8OaZqF1BF4j-j2hbOTYyNbscvcENAbY2zKv6QDi8hTpGkzLbe-2Ng8qNIkZaPO7yAU4sy6CCAxOAZhIpb1H-gBjsPxIEeL9bWuUsg==",
        scriptLecture: "https://script.google.com/macros/s/AKfycbzSDXzxN_N8xgLWE6B_Ng61IbjF0tj-LKJgwe_v4pLb_hD6dEdOXVDrd8VTZkF1pTQAGg/exec",
        scriptValidation: "https://script.google.com/macros/s/AKfycbwbIc7jwVu38x5n6sfRVu5dHZK2Y0hvkv5nipXzRpgE52a4FX52PbTkHkGhQdS_Eew3Iw/exec"
    },

    // 🟡 CLIENT : VILLA SAINT ANTOINE
    "villa_saint_antoine": {
        id: "villa_saint_antoine",
        nom: "Villa Saint Antoine",
        couleur: "#c5a059", 
        seuilPoints: 10,
        recompense: "10 points = 1 Cocktail Signature 🍸",
        logo: "https://vickthaur.github.io/FIDDLE-App/logo-villa.png",
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFAPNZrGyP3i0xNF-FdppNziEkhvnAiLtRY8uUfol3hxIyq6VHE11ofNd5fjQp_Iq7tjv6nklXAhjOPj_Le1u6Wxz_U2NCQLtoBMgkuGrjRNvCwMzFg7KcWEyXIcW-JPoDtL2QizWiwcOJl5-G96lbhakbnyeJT1cxI_8ZV4SVOfBt8CDOHTGIi-KdJSAAPTHMADTN5Gyt8PgqdA==",
        formValidation: "https://9d65705b.sibforms.com/serve/MUIFAJDcz_H5hCbvQ9g1SOqKVyAo5fIPRSH5Av5deHgtWT5pF0ZkzbdcnwySESsegIdFuxzkw8rMMZkfiUMzvAMDfIaGzl42YBw1P3Fw1H1Z6B914_I3TwYpVPNWMv0nqARUMZI8bG2Cja6rYBZ6EAkXhGLetQKjHnDCX4EP0I8Gv7Te36b1rLjJiUI4Fas-3uxA1-XpotgR3ujdWg==",
        scriptLecture: "https://script.google.com/macros/s/AKfycbzSDXzxN_N8xgLWE6B_Ng61IbjF0tj-LKJgwe_v4pLb_hD6dEdOXVDrd8VTZkF1pTQAGg/exec",
        scriptValidation: "https://script.google.com/macros/s/AKfycbwbIc7jwVu38x5n6sfRVu5dHZK2Y0hvkv5nipXzRpgE52a4FX52PbTkHkGhQdS_Eew3Iw/exec"
    }
};

/**
 * MOTEUR DE CONFIGURATION
 * Extrait le restaurant de l'URL (?resto=...) et applique les styles/liens.
 */
function appliquerConfig() {
    const urlParams = new URLSearchParams(window.location.search);
    const restoID = urlParams.get('resto');

    // On récupère les données du client ou le mode par défaut
    const config = agenceClients[restoID] || agenceClients["default"];

    // Application des couleurs et styles dynamiques
    document.documentElement.style.setProperty('--primary', config.couleur);
    document.documentElement.style.setProperty('--primary-glow', config.couleur + '4D'); 

    // Mise à jour des textes sur toutes les pages
    document.title = config.nom + " - Fidélité";
    
    document.querySelectorAll('.nom-resto').forEach(el => {
        el.innerText = config.nom;
    });

    document.querySelectorAll('.texte-recompense').forEach(el => {
        el.innerHTML = config.recompense;
    });

    return config;
}
