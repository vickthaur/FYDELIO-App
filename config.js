/** * 🎯 CONFIGURATION SUPABASE - FYDELIO App (Système Agence Automatisé) 
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
        pointsBienvenue: 1, 
        
        // 🛡️ Sécurité Anti-Fraude 
        delaiAntiFraudeHeures: 8, // Verrouillage temporaire (pour tests)
        
        // 🔗 Liens Externes 
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFAESstQ4kFjs5tSSEuAUb078K1PIdoNELBwJ7tLNuNoHf11B7lT3xWSCj01e8LU6zBl3BXuyVmK0K9Me9TqGZsy08pGdId-xDEyzGZyKVRCk7xtuKVsixH0tGiylUQVp9xq-StGMmJQdXnxKrCRE7YI9k_jOZxSVXa7GCvMhzOnfiKpgaqbx1lt2gQolqG2f6jNd-9IU4pBDQBw==",
        formScan: "https://9d65705b.sibforms.com/serve/MUIFAOePOBZfsMcBcRLjNHxzRRcE4JOO7KkIUUl-70j1fNtHkfMPRTWW5Zuy7zF3UyGwNof6y9ODrHL0GFlLIiA3QI9rRSYJFzPV3BAyXnMvbpWYnuY7XxrzYz3WLZ3oCE_HCWSE8cdc-g2-cQTG0dFVOvrT1QYgiC2ierk8TDGGCxyssJTlSQLC_dBpY4bhkKVf2BOm6JhOvoTSlQ==",
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
        pointsBienvenue: 1, 
        
        // 🛡️ Sécurité Anti-Fraude 
        delaiAntiFraudeHeures: 8, 
        
        // 🔗 Liens Externes 
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFAPNZrGyP3i0xNF-FdppNziEkhvnAiLtRY8uUfol3hxIyq6VHE11ofNd5fjQp_Iq7tjv6nklXAhjOPj_Le1u6Wxz_U2NCQLtoBMgkuGrjRNvCwMzFg7KcWEyXIcW-JPoDtL2QizWiwcOJl5-G96lbhakbnyeJT1cxI_8ZV4SVOfBt8CDOHTGIi-KdJSAAPTHMADTN5Gyt8PgqdA==",
        formScan: "https://9d65705b.sibforms.com/serve/MUIFAJDcz_H5hCbvQ9g1SOqKVyAo5fIPRSH5Av5deHgtWT5pF0ZkzbdcnwySESsegIdFuxzkw8rMMZkfiUMzvAMDfIaGzl42YBw1P3Fw1H1Z6B914_I3TwYpVPNWMv0nqARUMZI8bG2Cja6rYBZ6EAkXhGLetQKjHnDCX4EP0I8Gv7Te36b1rLjJiUI4Fas-3uxA1-XpotgR3ujdWg==",
        lienAvisGoogle: "https://g.page/r/villa-exemple" 
    }, 
    
    // ⚪ MODE NEUTRE (Sécurité de repli) 
    "default": { 
        id: "default", 
        actif: false, 
        nom: "FYDELIO", 
        couleur: "#0F766E", 
        seuilPoints: 10, 
        recompense: "Sélectionnez un établissement", 
        pointsBienvenue: 0, 
        delaiAntiFraudeHeures: 0, 
        formInscription: "#", 
        formScan: "#", 
        lienAvisGoogle: "#" 
    } 
}; 

/** * ⚙️ MOTEUR D'AFFICHAGE DYNAMIQUE 
 * Ne touche jamais à cette partie, elle fait le travail toute seule. 
 */ 
function appliquerConfig() { 
    const urlParams = new URLSearchParams(window.location.search); 
    const restoID = urlParams.get('resto'); 

    // 1. On charge le resto, ou le mode par défaut si introuvable 
    const config = agenceClients[restoID] || agenceClients["default"]; 

    // 2. Vérification du Kill Switch FYDELIO 
    if (config.actif === false && config.id !== "default") { 
        document.body.innerHTML = `<div style="display:flex; justify-content:center; align-items:center; height:100vh; background:#0f172a; color:white; font-family:sans-serif; text-align:center; padding:20px;"> 
            <div> 
                <h1 style="color:#0F766E; font-size:40px;">🛡️</h1> 
                <h2 style="margin-top:10px;">Programme Suspendu</h2> 
                <p style="color:#94a3b8; margin-top:10px;">Le service de fidélité de cet établissement est temporairement inactif.</p> 
                <p style="color:#64748b; font-size:12px; margin-top:30px; letter-spacing:1px; font-weight:bold;">Powered by FYDELIO</p> 
            </div> 
        </div>`; 
        throw new Error("Arrêt de l'application : Programme restaurant inactif."); 
    } 

    // 3. Application des couleurs FYDELIO (Variables CSS) 
    document.documentElement.style.setProperty('--primary', config.couleur); 
    document.documentElement.style.setProperty('--primary-glow', config.couleur + '4D'); 

    // 4. Injection des textes 
    document.title = config.nom + " | Fidélité FYDELIO"; 
    document.querySelectorAll('.nom-resto').forEach(el => el.innerText = config.nom); 
    document.querySelectorAll('.texte-recompense').forEach(el => el.innerHTML = config.recompense); 

    return config; 
}
