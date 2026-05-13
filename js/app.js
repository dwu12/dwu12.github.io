/**
 * Di Wu Personal Website - Notes System
 * Vanilla JS + marked.js for markdown rendering
 */

// ============================================
// Configuration
// ============================================

const NOTES_BASE_PATH = 'notes';
const NOTES_TOPIC_PATH = './notes';

// Topic order (sorted alphabetically)
const TOPIC_ORDER = [
    'ab-testing',
    'ai-agent',
    'cloud',
    'continual-life-long-learning',
    'data-centric-ai',
    'deep-learning',
    'docker-git',
    'fine-tuning',
    'linux-shell',
    'llm-inference',
    'machine-learning',
    'ml-system-design',
    'mlops',
    'pypi',
    'product-sense',
    'python',
    'reinforcement-learning',
    'sql',
    'statistic',
    'system-design'
];

// ============================================
// State
// ============================================

let folderStructure = null;
let currentFile = null;
let manifests = {};

// ============================================
// DOM Elements
// ============================================

const sidebarNav = document.getElementById('sidebarNav');
const welcomeState = document.getElementById('welcomeState');
const markdownBody = document.getElementById('markdownBody');
const loadingState = document.getElementById('loadingState');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', async () => {
    if (sidebarNav) {
        await initNotesPage();
    }
    initMobileMenu();
    initTOC();
});

// ============================================
// Notes Page Initialization
// ============================================

async function initNotesPage() {
    showLoading();

    try {
        for (const topic of TOPIC_ORDER) {
            const manifestPath = `${NOTES_BASE_PATH}/${topic}/manifest.json`;
            try {
                const response = await fetch(manifestPath);
                console.log('Fetching:', manifestPath, 'Status:', response.status);
                if (response.ok) {
                    const manifest = await response.json();
                    manifests[topic] = manifest;
                    console.log('Loaded manifest for:', topic);
                }
            } catch (e) {
                console.log('No manifest for:', topic, e.message);
            }
        }

        folderStructure = buildFolderStructure();
        console.log('Folder structure built, topics:', folderStructure.length);
        renderSidebar(folderStructure);

        if (window.location.hash) {
            const filePath = decodeURIComponent(window.location.hash.substring(1));
            await loadMarkdownFile(filePath);
        }
    } catch (error) {
        console.error('Failed to initialize notes page:', error);
        showWelcome();
    }

    hideLoading();
}

// ============================================
// Build Folder Structure from Manifests
// ============================================

function buildFolderStructure() {
    const structure = [];

    for (const topic of TOPIC_ORDER) {
        const manifest = manifests[topic];
        if (!manifest) continue;

        const topicData = {
            key: topic,
            name: manifest.topic || topic,
            path: `${NOTES_BASE_PATH}/${topic}`,
            items: []
        };

        if (manifest.items) {
            topicData.items = buildItemsRecursive(manifest.items, topicData.path);
        }

        structure.push(topicData);
    }

    return structure;
}

function buildItemsRecursive(items, basePath) {
    const result = [];

    for (const item of items) {
        const itemPath = `${basePath}/${item.folder}`;

        const itemData = {
            key: item.folder,
            name: item.name,
            path: `${itemPath}/${item.folder}.md`,
            children: []
        };

        if (item.children && item.children.length > 0) {
            itemData.children = buildItemsRecursive(item.children, itemPath);
        }

        result.push(itemData);
    }

    return result;
}

// ============================================
// Sidebar Rendering
// ============================================

function renderSidebar(structure) {
    if (!sidebarNav) return;

    sidebarNav.innerHTML = '';

    for (const topic of structure) {
        const groupEl = createTopicGroup(topic);
        sidebarNav.appendChild(groupEl);
    }

    attachNavListeners();

    const firstGroup = sidebarNav.querySelector('.nav-group');
    if (firstGroup) {
        firstGroup.classList.add('active');
    }
}

function attachNavListeners() {
    sidebarNav.querySelectorAll('.nav-item[data-path]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = link.dataset.path;
            loadMarkdownFile(path);
            sidebar.classList.remove('open');
        });
    });

    sidebarNav.querySelectorAll('.nav-folder-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const folderItem = toggle.closest('.nav-folder');
            const childItems = folderItem.querySelector('.nav-children');
            const arrow = toggle.querySelector('.folder-arrow');

            if (childItems) {
                const isOpen = childItems.style.display !== 'none';
                childItems.style.display = isOpen ? 'none' : 'block';
                arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
            }

            if (!folderItem.querySelector('.nav-children')) {
                const path = toggle.dataset.path;
                if (path) {
                    loadMarkdownFile(path);
                }
            }
        });
    });
}

function createTopicGroup(topic) {
    const group = document.createElement('div');
    group.className = 'nav-group';
    group.dataset.topic = topic.key;

    group.innerHTML = `
        <button class="nav-group-toggle">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
            <span>${topic.name}</span>
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <div class="nav-group-items">
            ${topic.items.map(item => renderNavItem(item)).join('')}
        </div>
    `;

    const toggle = group.querySelector('.nav-group-toggle');
    toggle.addEventListener('click', () => {
        group.classList.toggle('active');
    });

    return group;
}

function renderNavItem(item, depth = 0) {
    const paddingLeft = 20 + (depth * 16);
    const hasChildren = item.children && item.children.length > 0;

    let html = `
        <div class="nav-folder" data-key="${item.key}">
            <div class="nav-folder-toggle" data-path="${item.path}" style="padding-left: ${paddingLeft}px;">
                <svg class="folder-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
                <span class="folder-name">${item.name}</span>
            </div>
    `;

    if (hasChildren) {
        html += `<div class="nav-children" style="display: none;">`;
        html += item.children.map(child => renderNavItem(child, depth + 1)).join('');
        html += `</div>`;
    }

    html += `</div>`;

    return html;
}

// ============================================
// Markdown File Loading
// ============================================

async function loadMarkdownFile(filePath) {
    if (!filePath) {
        showWelcome();
        return;
    }

    if (currentFile === filePath) return;
    currentFile = filePath;

    showLoading();

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load: ${response.status}`);
        }

        const markdown = await response.text();
        const html = marked.parse(markdown);

        showMarkdown(html);
        updateActiveNavItem(filePath);
        window.location.hash = encodeURIComponent(filePath);
        window.scrollTo(0, 0);

    } catch (error) {
        console.error('Failed to load markdown:', error);
        showWelcome();
    }

    hideLoading();
}

function showMarkdown(html) {
    welcomeState.style.display = 'none';
    markdownBody.style.display = 'block';

    // First insert HTML, then render math
    markdownBody.innerHTML = html;

    if (window.Prism) {
        Prism.highlightAll();
    }

    // Render LaTeX with KaTeX after a small delay to ensure DOM is ready
    if (typeof renderMathInElement === 'function') {
        setTimeout(() => {
            renderMathInElement(markdownBody, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false},
                    {left: '\\[', right: '\\]', display: true},
                    {left: '\\(', right: '\\)', display: false}
                ],
                throwOnError: false
            });
        }, 50);
    } else {
        console.warn('KaTeX renderMathInElement not loaded');
    }

    const links = markdownBody.querySelectorAll('a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Update TOC after content is rendered
    updateTOC();
}

function showWelcome() {
    welcomeState.style.display = 'flex';
    markdownBody.style.display = 'none';
    currentFile = null;
    hideTOCButton();
}

function showLoading() {
    loadingState.style.display = 'flex';
    welcomeState.style.display = 'none';
    markdownBody.style.display = 'none';
}

function hideLoading() {
    loadingState.style.display = 'none';
}

function updateActiveNavItem(filePath) {
    if (!sidebarNav) return;

    sidebarNav.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    sidebarNav.querySelectorAll('.nav-item.active, .nav-folder-toggle.active').forEach(el => el.classList.remove('active'));

    const navLink = sidebarNav.querySelector(`[data-path="${filePath}"]`);
    if (navLink) {
        navLink.classList.add('active');

        const parentGroup = navLink.closest('.nav-group');
        if (parentGroup) {
            parentGroup.classList.add('active');
        }

        let parentFolder = navLink.closest('.nav-folder');
        while (parentFolder && parentFolder !== sidebarNav) {
            const childItems = parentFolder.querySelector('.nav-children');
            const arrow = parentFolder.querySelector('.folder-arrow');
            if (childItems) childItems.style.display = 'block';
            if (arrow) arrow.style.transform = 'rotate(90deg)';
            parentFolder = parentFolder.parentElement.closest('.nav-folder');
        }
    }
}

// ============================================
// Mobile Menu
// ============================================

function initMobileMenu() {
    if (!sidebarToggle || !sidebar) return;

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });
}

// ============================================
// Hash Change Handler
// ============================================

window.addEventListener('hashchange', () => {
    if (window.location.hash) {
        const filePath = decodeURIComponent(window.location.hash.substring(1));
        loadMarkdownFile(filePath);
    } else {
        showWelcome();
    }
});

// ============================================
// Floating Table of Contents
// ============================================

const tocToggle = document.getElementById('tocToggle');
const tocPanel = document.getElementById('tocPanel');
const tocNav = document.getElementById('tocNav');
const tocClose = document.getElementById('tocClose');

function initTOC() {
    if (!tocToggle || !tocPanel) return;

    tocToggle.addEventListener('click', () => {
        tocPanel.classList.toggle('open');
    });

    tocClose.addEventListener('click', () => {
        tocPanel.classList.remove('open');
    });
}

function buildTOC(headings) {
    if (!tocNav) return;

    tocNav.innerHTML = '';

    headings.forEach(heading => {
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = heading.text;
        link.className = heading.level;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.getElementById(heading.id);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                tocPanel.classList.remove('open');
            }
        });

        tocNav.appendChild(link);
    });
}

function extractHeadings() {
    if (!markdownBody) return [];

    const headings = [];
    const elements = markdownBody.querySelectorAll('h1, h2, h3, h4');

    elements.forEach((el, index) => {
        if (!el.id) {
            el.id = 'heading-' + index;
        }
        headings.push({
            id: el.id,
            text: el.textContent,
            level: 'h' + el.tagName.toLowerCase()
        });
    });

    return headings;
}

function showTOCButton() {
    if (tocToggle) {
        tocToggle.classList.add('visible');
    }
}

function hideTOCButton() {
    if (tocToggle) {
        tocToggle.classList.remove('visible');
        tocPanel.classList.remove('open');
    }
}

function updateTOC() {
    const headings = extractHeadings();
    if (headings.length > 0) {
        buildTOC(headings);
        showTOCButton();
    } else {
        hideTOCButton();
    }
}