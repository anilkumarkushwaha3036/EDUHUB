const ebooksDb = [
    {
        id: 1,
        title: "Introduction to Algorithms",
        author: "Cormen, Leiserson, Rivest",
        poster: "https://covers.openlibrary.org/b/isbn/0262033844-L.jpg",
        download: "https://openlibrary.org/isbn/0262033844"
    },
    {
        id: 2,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        poster: "https://covers.openlibrary.org/b/isbn/0596517742-L.jpg",
        download: "https://openlibrary.org/isbn/0596517742"
    },
    {
        id: 3,
        title: "Deep Learning",
        author: "Ian Goodfellow",
        poster: "https://covers.openlibrary.org/b/isbn/0262035618-L.jpg",
        download: "https://openlibrary.org/isbn/0262035618"
    },
    {
        id: 4,
        title: "Clean Code",
        author: "Robert C. Martin",
        poster: "https://covers.openlibrary.org/b/isbn/0132350882-L.jpg",
        download: "https://openlibrary.org/isbn/0132350882"
    },
    {
        id: 5,
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        poster: "https://covers.openlibrary.org/b/isbn/0201633612-L.jpg",
        download: "https://openlibrary.org/isbn/0201633612"
    }
];

function initializeEbooks() {
    const ebooksGrid = document.querySelector('.ebooks-grid');
    if (!ebooksGrid) return;
    ebooksGrid.innerHTML = '';

    ebooksDb.forEach(book => {
        const card = document.createElement('div');
        card.className = 'ebook-card';
        card.innerHTML = `
            <div class="ebook-poster">
                <img src="${book.poster}" alt="${book.title} poster">
            </div>
            <div class="ebook-info">
                <div class="ebook-title">${book.title}</div>
                <div class="ebook-author">${book.author}</div>
                <div class="ebook-actions">
                    <a class="download-btn" href="${book.download}" target="_blank" rel="noopener noreferrer" title="Download">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 11l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21H3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                </div>
            </div>
        `;
        ebooksGrid.appendChild(card);
    });
}

// expose for manual calls
window.initializeEbooks = initializeEbooks;