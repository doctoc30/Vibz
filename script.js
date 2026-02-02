/**
 * VIBZ MASTER BRAIN (script.js) - FINAL VERSION
 * This version forces a reset if coming from the Homepage.
 */

const VIBZ_CONFIG = {
    "barber": {
        name: "Barber",
        ig: "vibz_barber"
    },
    "plumber": {
        name: "Plumber",
        ig: "vibz_plumbing"
    }
};

function initMasterFunnel() {
    // 1. THE REFERRER SHIELD
    // If user comes from the homepage, we MUST ignore old memory and show general mode.
    const ref = document.referrer;
    const isFromHome = ref.includes('index.html') || ref.endsWith('.co.uk/') || ref.endsWith('.co.uk');

    if (isFromHome) {
        localStorage.removeItem('selectedNiche');
        console.log("Resetting to General mode because user arrived from Homepage.");
    }

    // 2. GET THE DATA
    const rawKey = localStorage.getItem('selectedNiche');
    const nicheKey = rawKey ? rawKey.toLowerCase().trim() : null;
    const titleElement = document.getElementById('niche-title');

    // 3. APPLY BRANDING
    if (nicheKey && VIBZ_CONFIG[nicheKey]) {
        const config = VIBZ_CONFIG[nicheKey];
        if (titleElement) titleElement.innerText = `Your Elite ${config.name} Website`;
        console.log(`Mode: Specific (${nicheKey})`);
    } else {
        // This is the safety net that shows "What's Your Business?"
        if (titleElement) titleElement.innerText = "What's Your Business?";
        console.log("Mode: General");
    }
}

// Run on load
window.addEventListener('load', initMasterFunnel);

// Allow funnel.html buttons to trigger this manually
window.initMasterFunnel = initMasterFunnel;
