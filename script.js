/**
 * VIBZ MASTER BRAIN (script.js) - SIMPLIFIED VERSION
 * Always shows "What's Your Business?" unless specifically searched
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
    // 1. CHECK FOR SPECIAL CASE: Did user just search from homepage?
    // Look for a special flag that only gets set when using search
    const fromSearch = sessionStorage.getItem('fromHomepageSearch');
    
    // 2. GET THE DATA - but only if they came from search
    let nicheKey = null;
    if (fromSearch === 'true') {
        // Only check localStorage if they specifically searched
        const rawKey = localStorage.getItem('selectedNiche');
        nicheKey = rawKey ? rawKey.toLowerCase().trim() : null;
        // Clear the flag so it doesn't persist
        sessionStorage.removeItem('fromHomepageSearch');
    }
    
    // 3. APPLY BRANDING
    const titleElement = document.getElementById('niche-title');
    
    if (nicheKey && VIBZ_CONFIG[nicheKey]) {
        // Only show specific headline if they specifically searched
        const config = VIBZ_CONFIG[nicheKey];
        if (titleElement) titleElement.innerText = `Your Elite ${config.name} Website`;
        console.log(`Mode: Specific (${nicheKey}) - from search`);
    } else {
        // DEFAULT: Always show "What's Your Business?"
        if (titleElement) titleElement.innerText = "What's Your Business?";
        console.log("Mode: General (default)");
    }
}

// Run on load
window.addEventListener('load', initMasterFunnel);

// Allow funnel.html buttons to trigger this manually
window.initMasterFunnel = initMasterFunnel;
