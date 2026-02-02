/**
 * VIBZ MASTER BRAIN (script.js)
 * Synchronized with Index JS and Funnel HTML
 */

// 1. THE LIBRARY: Holds data for specific niches
const VIBZ_CONFIG = {
    "barber": {
        name: "Barber",
        ig: "vibz_barber",
        questions: ["Online Booking?", "Product Shop?", "Style Gallery?"]
    },
    "plumber": {
        name: "Plumber",
        ig: "vibz_plumbing",
        questions: ["Emergency Call-out?", "Gas Safe Certs?", "Price Calculator?"]
    }
    // Add more niches here (e.g., "dentist", "cafe") following the same format
};

// 2. THE SWITCHBOARD: Controls the branding on funnel.html
function initMasterFunnel() {
    // Check for memory and convert to lowercase to prevent errors
    const rawKey = localStorage.getItem('selectedNiche');
    const nicheKey = rawKey ? rawKey.toLowerCase() : null;
    
    const titleElement = document.getElementById('niche-title');
    const igElement = document.getElementById('ig-link');

    // 3. LOGIC CHECK
    if (nicheKey && VIBZ_CONFIG[nicheKey]) {
        // MATCH FOUND: Show specific niche branding
        const config = VIBZ_CONFIG[nicheKey];
        if (titleElement) titleElement.innerText = `Your Elite ${config.name} Website`;
        if (igElement) igElement.href = `https://instagram.com/${config.ig}`;
        console.log(`System: ${nicheKey} mode activated.`);
    } else {
        // NO MATCH OR EMPTY: Show default general branding
        if (titleElement) {
            titleElement.innerText = "What's Your Business?";
        }
        console.log("System: General mode activated.");
    }
}

// 4. EXECUTION: Run as soon as the window finishes loading
window.addEventListener('load', initMasterFunnel);

// Also expose it globally so funnel.html buttons can trigger it instantly
window.initMasterFunnel = initMasterFunnel;
