// Blog data with latest tech articles
const blogDb = [
    {
        id: 1,
        title: "The Future of Artificial Intelligence in 2026",
        excerpt: "Explore the latest advancements in AI technology and what we can expect in the coming years.",
        category: "AI",
        image: "https://images.unsplash.com/photo-1677442d019cecf856d40e3a18980enllarge=true",
        date: "January 28, 2026",
        readTime: "5 min read",
        link: "https://example.com/ai-future-2026"
    },
    {
        id: 2,
        title: "Web Development Trends You Must Know",
        excerpt: "Discover the latest frameworks, tools, and best practices shaping modern web development.",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
        date: "January 25, 2026",
        readTime: "7 min read",
        link: "https://example.com/web-trends-2026"
    },
    {
        id: 3,
        title: "Cybersecurity Best Practices for 2026",
        excerpt: "Learn essential security measures to protect your applications and data from evolving threats.",
        category: "Security",
        image: "https://images.unsplash.com/photo-1516321318423-f06f70ab7cb0?w=500&h=300&fit=crop",
        date: "January 22, 2026",
        readTime: "8 min read",
        link: "https://example.com/cybersecurity-2026"
    },
    {
        id: 4,
        title: "Cloud Computing: From Theory to Practice",
        excerpt: "A comprehensive guide to implementing cloud solutions in your organization.",
        category: "Cloud",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65b?w=500&h=300&fit=crop",
        date: "January 20, 2026",
        readTime: "9 min read",
        link: "https://example.com/cloud-guide-2026"
    },
    {
        id: 5,
        title: "Machine Learning Algorithms Explained",
        excerpt: "Deep dive into popular ML algorithms and how to choose the right one for your project.",
        category: "Machine Learning",
        image: "https://images.unsplash.com/photo-1555949519-2f4fcff298c8?w=500&h=300&fit=crop",
        date: "January 18, 2026",
        readTime: "10 min read",
        link: "https://example.com/ml-algorithms-2026"
    },
    {
        id: 6,
        title: "DevOps Automation: Tools and Techniques",
        excerpt: "Master the art of continuous integration and deployment with modern DevOps tools.",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
        date: "January 15, 2026",
        readTime: "6 min read",
        link: "https://example.com/devops-automation-2026"
    },
    {
        id: 7,
        title: "Blockchain Technology Simplified",
        excerpt: "Understanding blockchain, smart contracts, and the decentralized web.",
        category: "Blockchain",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=500&h=300&fit=crop",
        date: "January 12, 2026",
        readTime: "7 min read",
        link: "https://example.com/blockchain-guide-2026"
    },
    {
        id: 8,
        title: "Mobile App Development: iOS vs Android",
        excerpt: "A detailed comparison to help you choose the right platform for your next mobile app.",
        category: "Mobile",
        image: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=500&h=300&fit=crop",
        date: "January 10, 2026",
        readTime: "8 min read",
        link: "https://example.com/mobile-comparison-2026"
    },
    {
        id: 9,
        title: "React vs Vue: Which Framework Should You Learn?",
        excerpt: "Comparing popular JavaScript frameworks and their use cases.",
        category: "Frontend",
        image: "https://images.unsplash.com/photo-1633356122544-f134ef2944f7?w=500&h=300&fit=crop",
        date: "January 8, 2026",
        readTime: "6 min read",
        link: "https://example.com/react-vs-vue-2026"
    },
    {
        id: 10,
        title: "API Design Best Practices",
        excerpt: "Create scalable and maintainable APIs with these essential design principles.",
        category: "Backend",
        image: "https://images.unsplash.com/photo-1516534775068-bb57e39c1a0c?w=500&h=300&fit=crop",
        date: "January 5, 2026",
        readTime: "7 min read",
        link: "https://example.com/api-design-2026"
    }
];

/**
 * Renders the Blog page.
 */
function renderBlogPage() {
    const homePage = document.getElementById('home-page');
    const contentGrid = document.getElementById('content-grid');
    const documentationPage = document.getElementById('documentation-page');
    const csDomainPage = document.getElementById('cs-domain-page');
    const blogPage = document.getElementById('blog-page');

    if (homePage) homePage.style.display = 'none';
    if (contentGrid) contentGrid.style.display = 'none';
    if (documentationPage) documentationPage.style.display = 'none';
    if (csDomainPage) csDomainPage.style.display = 'none';
    if (blogPage) blogPage.style.display = 'block';
    
    // Initialize or reinitialize the blog page
    initializeBlog();
}

/**
 * Initialize blog and load articles.
 */
function initializeBlog() {
    const blogArticlesGrid = document.querySelector('.blog-articles-grid');

    if (blogArticlesGrid) {
        loadBlogArticles(blogDb);
    }
}

/**
 * Load and display blog articles.
 * @param {Array} articles - Array of article objects to display
 */
function loadBlogArticles(articles) {
    const blogArticlesGrid = document.querySelector('.blog-articles-grid');
    if (!blogArticlesGrid) return;

    blogArticlesGrid.innerHTML = '';

    if (articles.length === 0) {
        blogArticlesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No articles found matching your search.</p>';
        return;
    }

    articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'blog-article-card';
        card.innerHTML = `
            <div class="blog-article-image">
                <img src="${article.image}" alt="${article.title}">
                <span class="blog-category-badge">${article.category}</span>
            </div>
            <div class="blog-article-content">
                <div class="blog-article-meta">
                    <span class="blog-date">${article.date}</span>
                    <span class="blog-read-time">${article.readTime}</span>
                </div>
                <h3 class="blog-article-title">${article.title}</h3>
                <p class="blog-article-excerpt">${article.excerpt}</p>
                <a href="${article.link}" target="_blank" rel="noopener noreferrer" class="blog-read-more">Read Full Article →</a>
            </div>
        `;
        blogArticlesGrid.appendChild(card);
    });
}
