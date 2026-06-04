/** 
 * 🎯 CONFIGURATION SUPABASE - FYDELIO App (Système Agence Automatisé) 
 * 🧠 LE CERVEAU CENTRAL — VERSION SÉCURISÉE v2.0
 */ 

// ====================================================================
// 🔑 CLÉS API — Publishable uniquement (normale d'être visible)
// Les écritures passent par le PROXY Google, jamais en direct
// ====================================================================
const SUPABASE_URL  = "https://qawfwbppnbnskxlkwstu.supabase.co"; 
const SUPABASE_KEY  = "sb_publishable_EbKZkPjtT8rwkEdw3oVRCg_mBJJ_gNJ"; 

// ====================================================================
// 🔐 PROXY GOOGLE APPS SCRIPT
// Toutes les écritures (inscription, scan) passent par ici
// La clé service_role est cachée côté Google, jamais exposée
// ====================================================================
const PROXY_URL = "https://script.google.com/macros/s/AKfycbyQQK6NYmt1kbEqHCvbiRgKMcAp67587m-P56gJnc_waPThOuNBgE4vknt088MCg1kYoA/exec";

// ====================================================================
// 🏪 CONFIGURATION RESTAURANTS
// ====================================================================
const agenceClients = { 
    
    // 🔴 CLIENT 1 : LE BISTROT PARIS 
    "bistrot": { 
        id: "bistrot",  
        actif: true, 
        nom: "Le Bistrot Paris", 
        couleur: "#e63946",  
        
        colonnePoints: "points_bistrot",
        colonneSecu:   "last_scan_bistrot",
        
        seuilPoints:       5, 
        recompense:        "5 points = 1 Dessert Offert 🍰", 
        pointsBienvenue:   1, 
        delaiAntiFraudeHeures: 8, 
        
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFAESstQ4kFjs5tSSEuAUb078K1PIdoNELBwJ7tLNuNoHf11B7lT3xWSCj01e8LU6zBl3BXuyVmK0K9Me9TqGZsy08pGdId-xDEyzGZyKVRCk7xtuKVsixH0tGiylUQVp9xq-StGMmJQdXnxKrCRE7YI9k_jOZxSVXa7GCvMhzOnfiKpgaqbx1lt2gQolqG2f6jNd-9IU4pBDQBw==",
        formScan:        "https://9d65705b.sibforms.com/serve/MUIFAOePOBZfsMcBcRLjNHxzRRcE4JOO7KkIUUl-70j1fNtHkfMPRTWW5Zuy7zF3UyGwNof6y9ODrHL0GFlLIiA3QI9rRSYJFzPV3BAyXnMvbpWYnuY7XxrzYz3WLZ3oCE_HCWSE8cdc-g2-cQTG0dFVOvrT1QYgiC2ierk8TDGGCxyssJTlSQLC_dBpY4bhkKVf2BOm6JhOvoTSlQ==",
        lienAvisGoogle:  "https://g.page/r/bistrot-exemple" 
    }, 

    // 🟡 CLIENT 2 : VILLA SAINT ANTOINE 
    "villa_saint_antoine": { 
        id: "villa_saint_antoine", 
        actif: true, 
        nom: "Villa Saint Antoine", 
        couleur: "#c5a059",  
        
        colonnePoints: "points_villa",
        colonneSecu:   "last_scan_villa",
        
        seuilPoints:       10, 
        recompense:        "10 points = 1 Cocktail Signature 🍸", 
        pointsBienvenue:   1, 
        delaiAntiFraudeHeures: 8, 
        
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFAPNZrGyP3i0xNF-FdppNziEkhvnAiLtRY8uUfol3hxIyq6VHE11ofNd5fjQp_Iq7tjv6nklXAhjOPj_Le1u6Wxz_U2NCQLtoBMgkuGrjRNvCwMzFg7KcWEyXIcW-JPoDtL2QizWiwcOJl5-G96lbhakbnyeJT1cxI_8ZV4SVOfBt8CDOHTGIi-KdJSAAPTHMADTN5Gyt8PgqdA==",
        formScan:        "https://9d65705b.sibforms.com/serve/MUIFAJDcz_H5hCbvQ9g1SOqKVyAo5fIPRSH5Av5deHgtWT5pF0ZkzbdcnwySESsegIdFuxzkw8rMMZkfiUMzvAMDfIaGzl42YBw1P3Fw1H1Z6B914_I3TwYpVPNWMv0nqARUMZI8bG2Cja6rYBZ6EAkXhGLetQKjHnDCX4EP0I8Gv7Te36b1rLjJiUI4Fas-3uxA1-XpotgR3ujdWg==",
        lienAvisGoogle:  "https://g.page/r/villa-exemple" 
    },
    
    // 🔵 CLIENT 3 : LE CERCLE RESTAURANT
"le_cercle": { 
    id: "le_cercle",  
    actif: true, 
    nom: "Le Cercle Restaurant", 
    couleur: "#1B5E6F",  
    
    colonnePoints: "points_le_cercle",
    colonneSecu:   "last_scan_le_cercle",
    
    seuilPoints:       10, 
    recompense:        "10 points = 1 cadeau 🍽️", 
    pointsBienvenue:   1, 
    delaiAntiFraudeHeures: 8, 
    
    formInscription: "https://9d65705b.sibforms.com/serve/MUIFAAq8Zq46uohNk6P_X8-iEDt-W7cd4Pu9qyW6UTzcJb0lmoTQNOX_MlYnJah58xcHTPTx5ibhKG8JLPvgRlfzi_u4xRTuE1EaXDbq2jmA0xKVYwdeiJhNsVx743cDGVUVNOMZ7JmWIrxwmPHczzPRWx2_Dw6ZtaR2tRbZHAu6gJeda0lSdYWw1oDf7EUmDQWLY-X-ZgkbVABjMg==",
    formScan:        "https://9d65705b.sibforms.com/serve/MUIFANxsMpjJJ-tVbxuUjEEyLbUn0DgrwxJNycClPHSWGt7jmrNAFdLhbiY3rVCp2Nm8M-B1Eyh22ybn_XGjOVHsxhDaduSL-c96btTOwhSdtqmaha6Kn-L3TRwK59CVb5NVAJ0MgMyANlIdoibtI-aUkbA5lGz9faK9_uRAUrttPWUdZGANL3ym432kzWLGQquXFOe5mWGQCXb0_g==",
    lienAvisGoogle:  "https://g.page/r/lecercle-restaurant" 
},
    
    // ⚪ MODE NEUTRE 
    "default": { 
        id: "default", 
        actif: false, 
        nom: "FYDELIO", 
        couleur: "#0F766E", 
        colonnePoints: "points_default",
        colonneSecu:   "last_scan_default",
        seuilPoints:   10, 
        recompense:    "Sélectionnez un établissement", 
        pointsBienvenue:       0, 
        delaiAntiFraudeHeures: 0, 
        formInscription: "#", 
        formScan:        "#", 
        lienAvisGoogle:  "#" 
    } 
}; 

// ====================================================================
// ⚙️ APPLIQUER LA CONFIG RESTAURANT (depuis l'URL du QR Code)
// Le paramètre ?resto= venant du QR Code est normal et attendu
// ====================================================================
function appliquerConfig() { 
    const urlParams = new URLSearchParams(window.location.search); 
    const restoID   = urlParams.get('resto'); 

    // Sécurité : whitelist stricte des restos autorisés
    const restosBlancs = Object.keys(agenceClients).filter(k => k !== "default");
    const restoValide  = restosBlancs.includes(restoID) ? restoID : null;
    const config       = restoValide ? agenceClients[restoValide] : agenceClients["default"]; 

    // Resto inactif ou inconnu
    if (!config.actif || !restoValide) { 
        document.body.innerHTML = `
            <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#0f172a;color:white;font-family:sans-serif;text-align:center;padding:20px;"> 
                <div> 
                    <h1 style="color:#0F766E;font-size:40px;">🛡️</h1> 
                    <h2 style="margin-top:10px;">Programme Suspendu</h2> 
                    <p style="color:#94a3b8;margin-top:10px;">Le service de fidélité de cet établissement est temporairement inactif.</p> 
                    <p style="color:#64748b;font-size:12px;margin-top:30px;letter-spacing:1px;font-weight:bold;">Powered by FYDELIO</p> 
                </div> 
            </div>`; 
        throw new Error("Arrêt : Programme restaurant inactif ou inconnu."); 
    } 

    document.documentElement.style.setProperty('--primary',      config.couleur); 
    document.documentElement.style.setProperty('--primary-glow', config.couleur + '4D'); 
    document.title = config.nom + " | Fidélité FYDELIO"; 
    document.querySelectorAll('.nom-resto').forEach(el => el.innerText  = config.nom); 
    document.querySelectorAll('.texte-recompense').forEach(el => el.innerHTML = config.recompense); 

    return config; 
}

// ====================================================================
// 📡 APPELS API — Toujours via le proxy, jamais en direct
// ====================================================================

/**
 * Inscrire un nouveau client
 * @param {string} email
 * @param {string} prenom
 * @param {string} restoId
 */
async function inscrireClient(email, prenom, restoId) {
    const res = await fetch(PROXY_URL, {
        method: "POST",
        body: JSON.stringify({
            action: "inscrireClient",
            payload: { email, prenom, restoId }
        })
    });
    return await res.json();
}

/**
 * Valider un scan (ajouter un point)
 * @param {string} email
 * @param {string} restoId
 */
async function validerScan(email, restoId) {
    const res = await fetch(PROXY_URL, {
        method: "POST",
        body: JSON.stringify({
            action: "validerScan",
            payload: { email, restoId }
        })
    });
    return await res.json();
}

/**
 * Vérifier le statut d'un client (points, anti-fraude)
 * @param {string} email
 * @param {string} restoId
 */
async function verifierClient(email, restoId) {
    const res = await fetch(PROXY_URL, {
        method: "POST",
        body: JSON.stringify({
            action: "verifierClient",
            payload: { email, restoId }
        })
    });
    return await res.json();
}
