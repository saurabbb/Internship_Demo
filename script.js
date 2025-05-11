// Quote data
const quotes = [
    {
        category: "science",
        text: "The important thing is not to stop questioning. Curiosity has its own reason for existing."
    },
    {
        category: "science",
        text: "Science is not only a disciple of reason but also one of romance and passion."
    },
    {
        category: "science",
        text: "The good thing about science is that it's true whether or not you believe in it."
    },
    {
        category: "science",
        text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."
    },
    {
        category: "science",
        text: "Science is a way of thinking much more than it is a body of knowledge."
    },
    {
        category: "motivation",
        text: "The only limit to our realization of tomorrow is our doubts of today."
    },
    {
        category: "motivation",
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts."
    },
    {
        category: "motivation",
        text: "Believe you can and you're halfway there."
    },
    {
        category: "motivation",
        text: "Your limitation—it's only your imagination."
    },
    {
        category: "motivation",
        text: "Push yourself, because no one else is going to do it for you."
    },
    {
        category: "wisdom",
        text: "The only true wisdom is in knowing you know nothing."
    },
    {
        category: "wisdom",
        text: "Knowing yourself is the beginning of all wisdom."
    },
    {
        category: "wisdom",
        text: "Turn your wounds into wisdom."
    },
    {
        category: "wisdom",
        text: "The fool doth think he is wise, but the wise man knows himself to be a fool."
    },
    {
        category: "wisdom",
        text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it."
    }
];

// DOM elements
const quoteText = document.getElementById('quote-text');
const categorySelect = document.getElementById('category');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const randomBtn = document.getElementById('random');
const increaseFontBtn = document.getElementById('increase-font');
const decreaseFontBtn = document.getElementById('decrease-font');
const themeToggle = document.getElementById('theme-toggle');

// App state
let currentIndex = 0;
let currentCategory = 'all';
let filteredQuotes = [...quotes];
let fontSize = 1.2; // rem

// Initialize the app
function init() {
    // Event listeners
    categorySelect.addEventListener('change', handleCategoryChange);
    prevBtn.addEventListener('click', showPreviousQuote);
    nextBtn.addEventListener('click', showNextQuote);
    randomBtn.addEventListener('click', showRandomQuote);
    increaseFontBtn.addEventListener('click', increaseFontSize);
    decreaseFontBtn.addEventListener('click', decreaseFontSize);
    themeToggle.addEventListener('change', toggleTheme);
    
    // Load initial quote
    updateQuoteDisplay();
}

// Handle category change
function handleCategoryChange(e) {
    currentCategory = e.target.value;
    currentIndex = 0;
    
    if (currentCategory === 'all') {
        filteredQuotes = [...quotes];
    } else {
        filteredQuotes = quotes.filter(quote => quote.category === currentCategory);
    }
    
    updateQuoteDisplay();
}

// Show previous quote
function showPreviousQuote() {
    if (filteredQuotes.length === 0) return;
    
    currentIndex = (currentIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
    updateQuoteDisplay();
}

// Show next quote
function showNextQuote() {
    if (filteredQuotes.length === 0) return;
    
    currentIndex = (currentIndex + 1) % filteredQuotes.length;
    updateQuoteDisplay();
}

// Show random quote
function showRandomQuote() {
    if (filteredQuotes.length === 0) return;
    
    currentIndex = Math.floor(Math.random() * filteredQuotes.length);
    updateQuoteDisplay();
}

// Update the quote display
function updateQuoteDisplay() {
    if (filteredQuotes.length === 0) {
        quoteText.textContent = 'No quotes available for this category.';
        return;
    }
    
    quoteText.textContent = filteredQuotes[currentIndex].text;
}

// Font size controls
function increaseFontSize() {
    fontSize = Math.min(fontSize + 0.1, 2.5); // Max 2.5rem
    document.documentElement.style.setProperty('--font-size', `${fontSize}rem`);
}

function decreaseFontSize() {
    fontSize = Math.max(fontSize - 0.1, 0.8); // Min 0.8rem
    document.documentElement.style.setProperty('--font-size', `${fontSize}rem`);
}

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);