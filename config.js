/**
 * 🎯 CONFIGURATION SUPABASE - FIDDLE-App (Version Agence Automatisée)
 * 🧠 LE CERVEAU CENTRAL
 */

// 🔑 CLÉS API SUPABASE (Connexion directe et sécurisée)
const SUPABASE_URL = "https://qawfwbppnbnskxlkwstu.supabase.co";
const SUPABASE_KEY = "sb_publishable_EbKZkPjtT8rwkEdw3oVRCg_mBJJ_gNJ";

const agenceClients = {
    
    // 🔴 CLIENT 1 : LE BISTROT PARIS
    "bistrot": {
        id: "bistrot", 
        actif: true, // 🛑 Mets 'false' si le client ne paie plus ton agence (Kill Switch)
        nom: "Le Bistrot Paris",
        couleur: "#e63946", 
        
        // ⚙️ Mécanique de fidélité
        seuilPoints: 5,
        recompense: "5 points = 1 Dessert Offert 🍰",
        pointsBienvenue: 1, // Commence à 1 point
        
        // 🛡️ Sécurité Anti-Fraude
        // ⚠️ Astuce Dev : Mets '0.03' (2 min) pendant tes tests, puis remets '12' pour la prod
        delaiAntiFraudeHeures: 12, // Verrouille le compte : 12 heures d'attente requises entre deux scans
        
        // 🔗 Liens Brevo & Externes
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFANfE1Ud8qtliFwPa28l2_ezu8uq3LYTQgyIt1FJdCu6ADCk_qAvGFPQSFp6HtEVLnsSSBWPY0iWuOOLkQD9PtOzEg4zLN0fuwTKabJS3y5yW2LPzsf2FhbihtwWgWsAsrIamq8lCQvUuxIOb6Cn6zN8x4QyFFwDvc_x03QZONNextkyrknz6Uqew8VmYb2VoF5aYAXjhiNuf6A==",
        formScan: "https://9d65705b.sibforms.com/serve/MUIFADjqIProT_Cl28inJrj0bX2b4zK_XA-Ov9LDV2gWtskwsKQ7VVo09QVM5hlDGzylzy6392uTx_swkr0hHIW_VqQybc45jJR5TbzoCVHjs8OaZqF1BF4j-j2hbOTYyNbscvcENAbY2zKv6QDi8hTpGkzLbe-2Ng8qNIkZaPO7yAU4sy6CCAxOAZhIpb1H-gBjsPxIEeL9bWuUsg==",
        lienAvisGoogle: "https://g.page/r/bistrot-exemple"
    },

    // 🟡 CLIENT 2 : VILLA SAINT ANTOINE
    "villa_saint_antoine": {
        id: "villa_saint_antoine",
        actif: true,
        nom: "Villa Saint Antoine",
        couleur: "#c5a059", 
        
        // ⚙️ Mécanique de fidélité
        seuilPoints: 10,
        recompense: "10 points = 1 Cocktail Signature 🍸",
        pointsBienvenue: 1, // 🎁 Offre 1 point dès l'inscription !
        
        // 🛡️ Sécurité Anti-Fraude
        // ⚠️ Astuce Dev : Mets '0.03' (2 min) pendant tes tests, puis remets '8' pour la prod
        delaiAntiFraudeHeures: 0, // Verrouille le compte : 8 heures d'attente requises entre deux scans
        
        // 🔗 Liens Brevo & Externes
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFAPNZrGyP3i0xNF-FdppNziEkhvnAiLtRY8uUfol3hxIyq6VHE11ofNd5fjQp_Iq7tjv6nklXAhjOPj_Le1u6Wxz_U2NCQLtoBMgkuGrjRNvCwMzFg7KcWEyXIcW-JPoDtL2QizWiwcOJl5-G96lbhakbnyeJT1cxI_8ZV4SVOfBt8CDOHTGIi-KdJSAAPTHMADTN5Gyt8PgqdA==",
        formScan: "https://9d65705b.sibforms.com/serve/MUIFAJDcz_H5hCbvQ9g1SOqKVyAo5fIPRSH5Av5deHgtWT5pF0ZkzbdcnwySESsegIdFuxzkw8rMMZkfiUMzvAMDfIaGzl42YBw1P3Fw1H1Z6B914_I3TwYpVPNWMv0nqARUMZI8bG2Cja6rYBZ6EAkXhGLetQKjHnDCX4EP0I8Gv7Te36b1rLjJiUI4Fas-3uxA1-XpotgR3ujdWg==",
        lienAvisGoogle: "https://g.page/r/villa-exemple"
    },
    
    // ⚪ MODE NEUTRE (Sécurité de repli si l'URL est mal tapée)
    "default": {
        id: "default",
        actif: false,
        nom: "FIDDLE-App",
        couleur: "#1e293b",
        seuilPoints: 10,
        recompense: "Sélectionnez un établissement",
        pointsBienvenue: 0,
        delaiAntiFraudeHeures: 0,
        formInscription: "#",
        formScan: "#",
        lienAvisGoogle: "#"
    }
};

/**
 * ⚙️ MOTEUR D'AFFICHAGE DYNAMIQUE
 * Ne touche jamais à cette partie, elle fait le travail toute seule.
 */
function appliquerConfig() {
    const urlParams = new URLSearchParams(window.location.search);
    const restoID = urlParams.get('resto');

    // 1. On charge le resto, ou le mode par défaut si introuvable
    const config = agenceClients[restoID] || agenceClients["default"];

    // 2. Vérification du Kill Switch (Si le restaurant est désactivé)
    if (config.actif === false && config.id !== "default") {
        document.body.innerHTML = `<div style="display:flex; justify-content:center; align-items:center; height:100vh; background:#0f172a; color:white; font-family:sans-serif; text-align:center; padding:20px;">
            <div>
                <h1 style="color:#ef4444; font-size:40px;">⚠️</h1>
                <h2>Programme Suspendu</h2>
                <p style="color:#94a3b8;">Le programme de fidélité de cet établissement est temporairement inactif.</p>
                <p style="color:#64748b; font-size:12px; margin-top:20px;">Powered by Fiddle Bro's</p>
            </div>
        </div>`;
        throw new Error("Arrêt de l'application : Programme restaurant inactif.");
    }

    // 3. Application des couleurs du restaurant (CSS Variables)
    document.documentElement.style.setProperty('--primary', config.couleur);
    document.documentElement.style.setProperty('--primary-glow', config.couleur + '4D'); // Ajoute une transparence (alpha)

    // 4. Injection des textes partout sur le site
    document.title = config.nom + " - Fidélité";
    document.querySelectorAll('.nom-resto').forEach(el => el.innerText = config.nom);
    document.querySelectorAll('.texte-recompense').forEach(el => el.innerHTML = config.recompense);

    return config;
}
