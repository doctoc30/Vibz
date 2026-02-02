/**
 * VIBZ script.js - FIXED VERSION
 * Shows "What's Your Business?" by default
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
    // SIMPLE FIX: Just show "What's Your Business?" always
    const titleElement = document.getElementById('niche-title');
    
    if (titleElement) {
        titleElement.innerText = "What's Your Business?";
    }
}

// Run on load
window.addEventListener('load', initMasterFunnel);

// Allow funnel.html buttons to trigger this manually
window.initMasterFunnel = initMasterFunnel;
