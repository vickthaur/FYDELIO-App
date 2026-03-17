/**
 * 🎯 CONFIGURATION SUPABASE - FIDDLE-App
 * Ce fichier centralise l'intelligence du système et la connexion à la base de données.
 */

// 🔑 CLÉS API SUPABASE (Sécurisées pour la lecture/écriture publique de ta table)
const SUPABASE_URL = "https://qawfwbppnbnskxlkwstu.supabase.co";
const SUPABASE_KEY = "sb_publishable_EbKZkPjtT8rwkEdw3oVRCg_mBJJ_gNJ";

const agenceClients = {
    // ⚪ ÉTAT NEUTRE (Si aucun restaurant n'est spécifié)
    "default": {
        id: "default",
        nom: "FIDDLE-App",
        couleur: "#1e293b", // Slate neutre
        seuilPoints: 10,
        recompense: "Sélectionnez un établissement",
        logo: "https://vickthaur.github.io/FIDDLE-App/logo-agence.png",
        formInscription: "#",
        colonne_points: null // Pas de points en mode neutre
    },

    // 🔴 CLIENT : LE BISTROT
    "bistrot": {
        id: "bistrot",
        nom: "Le Bistrot Paris",
        couleur: "#e63946", 
        seuilPoints: 5,
        recompense: "5 points = 1 Dessert Offert 🍰",
        logo: "https://vickthaur.github.io/FIDDLE-App/logo-bistrot.png",
        // On garde Brevo UNIQUEMENT pour l'inscription et l'envoi de mail
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFANfE1Ud8qtliFwPa28l2_ezu8uq3LYTQgyIt1FJdCu6ADCk_qAvGFPQSFp6HtEVLnsSSBWPY0iWuOOLkQD9PtOzEg4zLN0fuwTKabJS3y5yW2LPzsf2FhbihtwWgWsAsrIamq8lCQvUuxIOb6Cn6zN8x4QyFFwDvc_x03QZONNextkyrknz6Uqew8VmYb2VoF5aYAXjhiNuf6A==",
        colonne_points: "points_bistrot" // 🎯 Le nom exact de la colonne dans Supabase
    },

    // 🟡 CLIENT : VILLA SAINT ANTOINE
    "villa_saint_antoine": {
        id: "villa_saint_antoine",
        nom: "Villa Saint Antoine",
        couleur: "#c5a059", 
        seuilPoints: 10,
        recompense: "10 points = 1 Cocktail Signature 🍸",
        logo: "https://vickthaur.github.io/FIDDLE-App/logo-villa.png",
        // On garde Brevo UNIQUEMENT pour l'inscription et l'envoi de mail
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFAPNZrGyP3i0xNF-FdppNziEkhvnAiLtRY8uUfol3hxIyq6VHE11ofNd5fjQp_Iq7tjv6nklXAhjOPj_Le1u6Wxz_U2NCQLtoBMgkuGrjRNvCwMzFg7KcWEyXIcW-JPoDtL2QizWiwcOJl5-G96lbhakbnyeJT1cxI_8ZV4SVOfBt8CDOHTGIi-KdJSAAPTHMADTN5Gyt8PgqdA==",
        colonne_points: "points_villa" // 🎯 Le nom exact de la colonne dans Supabase
    }
};

/**
 * MOTEUR DE CONFIGURATION
 * Extrait le restaurant de l'URL (?resto=...) et applique les styles
 */
function appliquerConfig() {
    const urlParams = new URLSearchParams(window.location.search);
    const restoID = urlParams.get('resto');

    // On récupère les données du client ou le mode par défaut
    const config = agenceClients[restoID] || agenceClients["default"];

    // Application des couleurs et styles dynamiques (Variables CSS)
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
