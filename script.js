// 1. THE LIBRARY: This holds the unique data for every niche
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
};

// 2. THE SWITCHBOARD: This function runs on your Master Funnel page
function initMasterFunnel() {
    // Check which niche was stored in the browser
    const nicheKey = localStorage.getItem('selectedNiche');
    
    // Find the elements on your HTML page
    const titleElement = document.getElementById('niche-title');
    const igElement = document.getElementById('ig-link');

    // NEW LOGIC: Only change to a specific niche if one is actually selected
    if (nicheKey && VIBZ_CONFIG[nicheKey]) {
        const config = VIBZ_CONFIG[nicheKey];
        if (titleElement) titleElement.innerText = `Your Elite ${config.name} Website`;
        if (igElement) igElement.href = `https://instagram.com/${config.ig}`;
        console.log(`System loaded in ${nicheKey} mode!`);
    } else {
        // DEFAULT: Show the standard headline if no niche is in memory
        if (titleElement) titleElement.innerText = "What's Your Business?";
        console.log("System loaded in General mode!");
    }
}

// Automatically run the switchboard when the page loads
window.onload = initMasterFunnel;
