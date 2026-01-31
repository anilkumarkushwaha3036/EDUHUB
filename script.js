// --- DATABASE OF RESOURCES ---
// All content is managed from this single object.
const db = {

    cs_domain: csDomainDb,
    tools: toolsDb,
    documentation: docsDb
};

// --- DOM ELEMENTS ---
const contentGrid = document.getElementById('content-grid');
const searchInput = document.getElementById('searchInput');
const navLinks = document.querySelectorAll('.nav-link');
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const homePage = document.getElementById('home-page');
const searchInputHero = document.getElementById('searchInputHero');
const categoryCards = document.querySelectorAll('.category-card');

// --- FUNCTIONS ---

function createCardHTML(item) {
    let cardContent = '';

    // Check if this is a CS Domain item with YouTube video
    if (item.category.toLowerCase() === 'cs domain' && item.youtubeVideoId) {
        cardContent = `
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/${item.youtubeVideoId}" 
                title="${item.youtubeTitle}" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
        `;
    } else {
        // Original resource list format for non-CS Domain items
        let resourcesHTML = item.resources.map(res => `
            <li class="resource-item">
                <a href="${res.link}" target="_blank">${res.type}: ${res.title}</a>
                <p>${res.desc}</p>
            </li>
        `).join('');

        // Add online compiler link if it exists
        if (item.online_compiler) {
            resourcesHTML += `
            <li class="resource-item">
                <a href="${item.online_compiler}" target="_blank">Online Compiler: Visit it Online</a>
                <p>An online compiler to practice ${item.topic}.</p>
            </li>
            `;
        }

        cardContent = `
            <ul class="resource-list">
                ${resourcesHTML}
            </ul>
        `;
    }

    // Add logo if it exists (for tools)
    let logoHTML = '';
    if (item.logo) {
        logoHTML = `<img src="${item.logo}" alt="${item.topic} logo" class="tool-logo">`;
    }

    return `
        <div class="card" data-topic="${item.topic.toLowerCase()}" data-category="${item.category.toLowerCase()}">
            ${logoHTML}
            <div class="card-category">${item.category}</div>
            <h2 class="card-title">${item.topic}</h2>
            ${cardContent}
        </div>
    `;
}



/**
 * Renders the home page.
 */
function renderHomePage() {
    homePage.style.display = 'block';
    contentGrid.style.display = 'none';
    document.getElementById('documentation-page').style.display = 'none';
    document.getElementById('cs-domain-page').style.display = 'none';
}

/**
 * Renders the documentation page.
 */
function renderDocumentationPage() {
    homePage.style.display = 'none';
    contentGrid.style.display = 'none';
    document.getElementById('documentation-page').style.display = 'block';
    document.getElementById('cs-domain-page').style.display = 'none';
    
    // Initialize or reinitialize the documentation page
    initializeDocs();
}

/**
 * Renders the CS Domain page.
 */
function renderCSDomainPage() {
    homePage.style.display = 'none';
    contentGrid.style.display = 'none';
    document.getElementById('documentation-page').style.display = 'none';
    document.getElementById('cs-domain-page').style.display = 'block';
    
    // Initialize or reinitialize the CS Domain page
    initializeCSDomain();
}

/**
 * Dynamically loads a CSS file once.
 */
/* Ebooks feature removed - related functions deleted */

/**
 * Initialize documentation tabs and load resources.
 */
function initializeDocs() {
    const languageTabs = document.querySelectorAll('.language-tab');
    const docsResources = document.querySelector('.docs-resources');
    const languageTabsContainer = document.getElementById('languageTabsContainer');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    // Initialize with HTML
    if (docsResources) {
        loadDocsResources('html');
    }

    // Add click event to language tabs
    languageTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const language = this.getAttribute('data-language');
            
            // Update active state
            languageTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Load resources
            loadDocsResources(language);
        });
    });

    // Setup scroll buttons
    if (languageTabsContainer) {
        setupScrollButtons(languageTabsContainer, scrollLeftBtn, scrollRightBtn);
    }
}

/**
 * Initialize CS Domain tabs and load videos.
 */
function initializeCSDomain() {
    const domainTabsContainer = document.getElementById('domainTabsContainer');
    const domainVideosGrid = document.querySelector('.domain-videos-grid');
    const scrollLeftDomainBtn = document.querySelector('.scroll-left-domain');
    const scrollRightDomainBtn = document.querySelector('.scroll-right-domain');

    // Get unique categories from csDomainDb
    const categories = [...new Set(csDomainDb.map(item => item.category))];
    
    // Generate and populate tabs
    if (domainTabsContainer) {
        domainTabsContainer.innerHTML = '';
        categories.forEach((cat, index) => {
            const tab = document.createElement('button');
            tab.className = `domain-tab ${index === 0 ? 'active' : ''}`;
            tab.textContent = cat;
            tab.dataset.category = cat;
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('.domain-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                loadCSDomainVideos(cat);
            });
            domainTabsContainer.appendChild(tab);
        });
    }

    // Load first category by default
    if (categories.length > 0) {
        loadCSDomainVideos(categories[0]);
    }

    // Setup scroll buttons for domain tabs
    if (domainTabsContainer) {
        setupScrollButtons(domainTabsContainer, scrollLeftDomainBtn, scrollRightDomainBtn);
    }
}

/**
 * Load and display CS Domain videos for selected category.
 * @param {string} category - The domain category to display
 */
function loadCSDomainVideos(category) {
    const domainVideosGrid = document.querySelector('.domain-videos-grid');
    if (!domainVideosGrid) return;

    const videos = csDomainDb.filter(item => item.category === category);
    domainVideosGrid.innerHTML = '';

    videos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'domain-video-card';
        card.innerHTML = `
            <div class="video-iframe-container">
                <iframe src="https://www.youtube.com/embed/${video.youtubeVideoId}" 
                    title="${video.youtubeTitle}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
            </div>
            <div class="domain-video-info">
                <div class="domain-video-category">${video.category}</div>
                <h3 class="domain-video-title">${video.topic}</h3>
            </div>
        `;
        domainVideosGrid.appendChild(card);
    });
}

/**
 * Setup horizontal scroll buttons for language tabs.
 * @param {HTMLElement} container - The tabs container
 * @param {HTMLElement} leftBtn - Left scroll button
 * @param {HTMLElement} rightBtn - Right scroll button
 */
function setupScrollButtons(container, leftBtn, rightBtn) {
    const scrollAmount = 200;

    // Check if scrolling is needed and update button visibility
    function updateScrollButtons() {
        const hasScroll = container.scrollWidth > container.clientWidth;
        const isAtStart = container.scrollLeft === 0;
        const isAtEnd = container.scrollLeft >= (container.scrollWidth - container.clientWidth - 10);

        if (hasScroll) {
            leftBtn.style.display = isAtStart ? 'none' : 'flex';
            rightBtn.style.display = isAtEnd ? 'none' : 'flex';
        } else {
            leftBtn.style.display = 'none';
            rightBtn.style.display = 'none';
        }
    }

    // Scroll left
    if (leftBtn) {
        leftBtn.addEventListener('click', () => {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(updateScrollButtons, 300);
        });
    }

    // Scroll right
    if (rightBtn) {
        rightBtn.addEventListener('click', () => {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(updateScrollButtons, 300);
        });
    }

    // Update buttons on scroll
    container.addEventListener('scroll', updateScrollButtons);

    // Initial check
    updateScrollButtons();
}

/**
 * Load and display documentation resources for selected language.
 * @param {string} language - The programming language key
 */
function loadDocsResources(language) {
    const docsResources = document.querySelector('.docs-resources');
    if (!docsResources) return;

    const resources = documentationData[language] || [];
    docsResources.innerHTML = '';

    resources.forEach(resource => {
        const card = document.createElement('div');
        card.className = 'docs-resource-card';
        card.innerHTML = `
            <h3>${resource.name}</h3>
            <p>Official documentation and reference materials</p>
            <a href="${resource.url}" target="_blank" rel="noopener noreferrer">Visit Documentation</a>
        `;
        docsResources.appendChild(card);
    });
}

/**
 * Renders cards to the DOM based on a filter.
 * @param {string} categoryFilter - The category to display (e.g., 'languages', 'all').
 * @param {string} searchFilter - The search term to filter by.
 */
function renderContent(categoryFilter = 'all', searchFilter = '') {
    homePage.style.display = 'none';
    document.getElementById('documentation-page').style.display = 'none';
    document.getElementById('cs-domain-page').style.display = 'none';
    document.getElementById('blog-page').style.display = 'none';
    contentGrid.style.display = 'grid';
    contentGrid.className = 'content-grid ' + categoryFilter;
    contentGrid.innerHTML = '';

    if (categoryFilter === 'documentation') {
        renderDocumentationPage();
        return;
    }

    if (categoryFilter === 'cs_domain') {
        renderCSDomainPage();
        return;
    }

    if (categoryFilter === 'blog') {
        renderBlogPage();
        return;
    }

    let hasResults = false;

    const allItems = [].concat(...Object.values(db));
    
    allItems.forEach(item => {
        const categoryKey = Object.keys(db).find(key => db[key].includes(item));
        
        const categoryMatch = categoryFilter === 'all' || categoryFilter === categoryKey;
        const searchMatch = searchFilter === '' || 
                            item.topic.toLowerCase().includes(searchFilter) ||
                            item.category.toLowerCase().includes(searchFilter);

        if (categoryMatch && searchMatch) {
            contentGrid.innerHTML += createCardHTML(item);
            hasResults = true;
        }
    });

    if (!hasResults) {
        contentGrid.innerHTML = '<p>No results found. Try a different search or category.</p>';
    }
}

// --- EVENT LISTENERS ---

// Navigation link clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active class
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        const category = link.dataset.category;

        if (category === 'home') {
            renderHomePage();
        } else if (category === 'documentation') {
            renderDocumentationPage();
        } else {
            renderContent(category, searchInput.value.toLowerCase());
        }

        // Close mobile nav if open
        if(navMenu.classList.contains('nav-active')) {
            navMenu.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});

// Search input
searchInput.addEventListener('input', () => {
    const activeCategory = document.querySelector('.nav-link.active').dataset.category;
    if (activeCategory === 'home') {
        renderContent('all', searchInput.value.toLowerCase().trim());
    } else {
        renderContent(activeCategory, searchInput.value.toLowerCase().trim());
    }
});

// Hero search input
searchInputHero.addEventListener('input', () => {
    const searchTerm = searchInputHero.value.toLowerCase().trim();
    renderContent('all', searchTerm);
    navLinks.forEach(l => l.classList.remove('active'));
});


// Category card clicks
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        navLinks.forEach(l => l.classList.remove('active'));
        const targetLink = Array.from(navLinks).find(link => link.dataset.category === category);
        if(targetLink){
            targetLink.classList.add('active');
        }
        renderContent(category);
    });
});

// CTA Buttons (on home page)
const ctaButtons = document.querySelectorAll('.cta-btn');
ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        navLinks.forEach(l => l.classList.remove('active'));
        const targetLink = Array.from(navLinks).find(link => link.dataset.category === category);
        if(targetLink){
            targetLink.classList.add('active');
        }
        renderContent(category);
    });
});

// Search button on hero section
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInputHero.value.toLowerCase().trim();
        if (searchTerm) {
            renderContent('all', searchTerm);
            navLinks.forEach(l => l.classList.remove('active'));
        }
    });
}

// Mobile navigation (burger)
burger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});


// --- INITIAL RENDER ---
// Render content for the default active category when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const activeCategory = document.querySelector('.nav-link.active')?.dataset.category || 'home';
    if (activeCategory === 'home') {
        renderHomePage();
    } else {
        renderContent(activeCategory);
    }
});
