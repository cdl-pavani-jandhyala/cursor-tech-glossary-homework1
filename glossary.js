// Glossary data
export const glossaryEntries = [
    {
        term: "API",
        description: "Application Programming Interface - A set of protocols and tools for building software applications that define how different software components should interact.",
        tags: ["web", "development", "backend"]
    },
    {
        term: "REST",
        description: "Representational State Transfer - An architectural style for designing networked applications that uses standard HTTP methods and stateless communication.",
        tags: ["web", "api", "architecture"]
    },
    {
        term: "JavaScript",
        description: "A high-level, interpreted programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
        tags: ["programming", "web", "frontend"]
    },
    {
        term: "Docker",
        description: "A platform that uses containerization to package applications and their dependencies into lightweight, portable containers that can run consistently across different environments.",
        tags: ["devops", "containers", "deployment"]
    },
    {
        term: "Git",
        description: "A distributed version control system designed to track changes in source code during software development, enabling collaboration and version management.",
        tags: ["version-control", "development", "tools"]
    },
    {
        term: "Microservices",
        description: "An architectural approach where applications are built as a collection of loosely coupled, independently deployable services that communicate over well-defined APIs.",
        tags: ["architecture", "backend", "scalability"]
    },
    {
        term: "TypeScript",
        description: "A typed superset of JavaScript that compiles to plain JavaScript, adding static type definitions to help catch errors during development.",
        tags: ["programming", "web", "types"]
    },
    {
        term: "CI/CD",
        description: "Continuous Integration and Continuous Deployment - Practices that automate the process of integrating code changes, testing, and deploying applications.",
        tags: ["devops", "automation", "deployment"]
    }
];
// Function to filter glossary entries by search query
export function filterGlossaryEntries(query) {
    if (!query.trim()) {
        return glossaryEntries;
    }
    const lowerQuery = query.toLowerCase();
    return glossaryEntries.filter((entry) => {
        // Check if query matches term
        if (entry.term.toLowerCase().includes(lowerQuery)) {
            return true;
        }
        // Check if query matches description
        if (entry.description.toLowerCase().includes(lowerQuery)) {
            return true;
        }
        // Check if query matches any tag
        return entry.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));
    });
}
// Function to render glossary entries
function renderGlossary(filterQuery = '') {
    const container = document.getElementById('glossary-container');
    if (!container) {
        console.error('Glossary container not found');
        return;
    }
    const filteredEntries = filterGlossaryEntries(filterQuery);
    if (filteredEntries.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12">
                <p class="text-gray-600 text-lg">No results found for "${filterQuery}"</p>
                <p class="text-gray-500 text-sm mt-2">Try searching with different keywords</p>
            </div>
        `;
        return;
    }
    container.innerHTML = filteredEntries.map((entry) => `
        <article class="glossary-entry bg-white rounded-lg shadow-sm p-5">
            <h2 class="text-2xl">${entry.term}</h2>
            <p class="mb-0">${entry.description}</p>
            <div class="glossary-tags-container">
                <span class="glossary-tags-label">Categories</span>
                <div class="flex flex-wrap gap-2" role="list" aria-label="Tags">
                    ${entry.tags.map((tag) => `
                        <span class="glossary-tag" role="listitem">${tag}</span>
                    `).join('')}
                </div>
            </div>
        </article>
    `).join('');
}
// Initialize the glossary when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Render all entries initially
    renderGlossary();
    // Add event listener for search input
    const searchInput = document.getElementById('search-input');
    if (searchInput && searchInput instanceof HTMLInputElement) {
        searchInput.addEventListener('input', (event) => {
            const target = event.target;
            renderGlossary(target.value);
        });
    }
});
