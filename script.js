// Work Experience Data
const workExperienceData = [
    {
        id: 1,
        company: "WeAre8",
        role: "Senior Flutter Developer",
        location: "Thessaloniki, Greece (Hybrid)",
        dates: "Jan 2024 – Jul 2025",
        summary: "Worked on a single product, developing major features that changed core functionality.",
        details: [
            "Developed major features that changed core functionality of the product",
            "Worked closely with product and design teams to implement new features",
            "Maintained high code quality and performance standards"
        ]
    },
    {
        id: 2,
        company: "ATCOM S.A.",
        role: "Senior Flutter Software Engineer",
        location: "Athens, Greece (Remote)",
        dates: "Jan 2024 – Jul 2025",
        summary: "Led development of mobile and web applications, migrating apps to Flutter Web with adaptive UI.",
        details: [
            "Led development (APIs, authentication, data refresh)",
            "Migrated a mobile app to Flutter Web with adaptive UI",
            "Improved performance, reusability, and UI responsiveness",
            "Mentored developers and collaborated with designers and backend teams"
        ]
    },
    {
        id: 3,
        company: "Smartup",
        role: "Team Lead & Flutter Software Engineer",
        location: "Thessaloniki, Greece",
        dates: "Oct 2020 – Oct 2023",
        summary: "Led multiple Flutter projects from draft to production, working with 10+ clients.",
        details: [
            "Contributed to 13 Flutter projects",
            "Worked with 10+ clients",
            "Led projects from draft to production",
            "Trained 6 interns"
        ]
    },
    {
        id: 4,
        company: "Terasology Foundation",
        role: "Software Engineer & UI/UX Designer",
        location: "Remote",
        dates: "May 2020 – Sep 2020",
        program: "Google Summer of Code",
        summary: "Designed and developed a HUD for a game mode.",
        details: [
            "Designed and developed a HUD for a game mode",
            "Collaborated with open-source community",
            "Implemented UI/UX best practices"
        ]
    },
    {
        id: 5,
        company: "Catrobat",
        role: "Lead Software Engineer, UI/UX Designer & Artist",
        location: "Remote",
        dates: "May 2019 – Sep 2019",
        program: "Google Summer of Code",
        summary: "Built an interactive app to teach algorithms.",
        details: [
            "Built an interactive app to teach algorithms",
            "Designed UI/UX and created visual assets",
            "Led development of educational features"
        ]
    }
];

// Projects Data
const projectsData = [
    {
        id: 1,
        name: "Delphi Economic Forum | Mobile App",
        shortDescription: "Event companion app for Delphi Economic Forum attendees, built for offline access, real-time updates, and high-performance usage during a live 4-day event.",
        description: "An event companion app used by all Delphi Forum attendees to explore sessions, speakers, and real-time updates during the 4-day live event. Designed for performance, offline access, and intuitive interaction in a high-pressure, high-visibility setting.",
        company: "ATCOM S.A.",
        period: "Jan 2025 – Mar 2025",
        type: "professional",
        role: "Main Flutter Developer",
        teamSize: 2,
        techStack: ["Flutter", "BLoC"],
        highlights: [
            "OTP-based login using TicketID",
            "Offline data access with background auto-sync",
            "Session and speaker search",
            "Modular UI with modal filters and nested navigation",
            "Scroll-to-top interaction via bottom navigation",
            "Reusable custom components for consistency and performance"
        ],
        keyFeatures: [
            "OTP Login with email verification",
            "Offline mode with background updates",
            "Live session refreshes",
            "Nested modal filter navigation",
            "Polished navigation and transitions"
        ],
        contribution: "Led the Flutter development of the app, created tasks and guided development progress, supported mid-level teammates, and collaborated closely with the PM and design team to ensure smooth delivery.",
        approach: "Offline-first architecture with modular UI design",
        featured: true,
        links: {
            appStore: "https://apps.apple.com/gr/app/delphi-economic-forum/id6740896759",
            playStore: "https://play.google.com/store/apps/details?id=com.atcom.delphi_economic_forum"
        }
    },
    {
        id: 2,
        name: "Nonogram Solver & Puzzle Designer | Thesis Project",
        shortDescription: "Flutter Web thesis project combining heuristic optimization algorithms with interactive puzzle design and visualization.",
        description: "A full-featured Flutter Web application developed for my thesis, combining advanced algorithmic problem solving, responsive UI, and puzzle design. Users can create their own Nonogram puzzles or watch them being solved step by step with full control and visualization.",
        company: "International Hellenic University",
        period: "Dec 2023 – Jan 2025",
        type: "personal",
        role: "Sole Designer, Researcher & Developer",
        teamSize: 1,
        techStack: ["Flutter", "Flutter Web", "Flutter Isolate", "Worker"],
        highlights: [
            "Heuristic optimization algorithm improving solve time from 9 minutes to 1 second",
            "Recursive logic and constraint satisfaction",
            "Heavy computation offloaded using Flutter Isolate & Worker",
            "Step-by-step visual solver with slider control",
            "Regex-based puzzle validation"
        ],
        keyFeatures: [
            "High-performance Nonogram solving",
            "Intuitive puzzle creation",
            "Smooth experience across desktop and mobile",
            "Responsive Flutter Web UI",
            "Custom grid rendering and interactive controls",
            "Animated feedback and transitions"
        ],
        process: "GitHub Projects, Thesis written in LaTeX (Overleaf), Clean architecture principles",
        featured: true,
        links: {
            github: "https://github.com/stefaniamak/nonogram"
        }
    },
    {
        id: 3,
        name: "Hertz Connect | Mobile App",
        shortDescription: "Leasing companion app for Hertz customers, supporting vehicle management, calculators, and service requests.",
        description: "A comprehensive leasing companion app for Hertz customers, providing vehicle management tools, calculators, and service request capabilities. Built with a focus on user experience and seamless integration with Hertz services.",
        company: "ATCOM S.A.",
        period: "Apr 2024 – Aug 2024",
        type: "professional",
        role: "Flutter Developer",
        teamSize: 4,
        techStack: ["Flutter", "BLoC"],
        highlights: [
            "Reusable UI components with blur and transparency",
            "Backend-driven dynamic UI rendering",
            "Custom HTTP rendering widget",
            "Bottom modal navigation with animations",
            "QA and layout bug fixes"
        ],
        contribution: "Developed UI components, helped break down tasks, ensured quality, and collaborated with designers and PM.",
        approach: "Modular UI for Android, iOS, Huawei",
        featured: true,
        links: {
            appStore: "https://apps.apple.com/gr/app/hertz-connect/id6476757022",
            playStore: "https://play.google.com/store/apps/details?id=gr.hertz.companionapp",
            huawei: "https://appgallery.huawei.com/app/C112016581"
        }
    },
    {
        id: 4,
        name: "Polikatikia.gr | Web & Mobile App",
        shortDescription: "Property management app for tenants, owners, and landlords with Flutter Web adaptation.",
        description: "A comprehensive property management platform for tenants, owners, and landlords. Led the mobile-to-web adaptation using Flutter Web, creating responsive layouts and platform-aware components.",
        company: "ATCOM S.A.",
        period: "Jan 2024 – Mar 2024",
        type: "professional",
        role: "Flutter Software Engineer",
        teamSize: 5,
        techStack: ["Flutter", "Flutter Web", "BLoC"],
        highlights: [
            "Led mobile-to-web adaptation with Flutter Web",
            "Built responsive layouts and platform-aware components",
            "Created a developer overlay debug tool",
            "Implemented landlord role and dashboard features"
        ],
        featured: false,
        links: {
            web: "https://admin.polikatikia.gr/",
            appStore: "https://apps.apple.com/gr/app/polikatikia-gr/id1633023569",
            playStore: "https://play.google.com/store/apps/details?id=com.polikatikia.polikatikiaapp"
        }
    },
    {
        id: 5,
        name: "AthletesWeR | Mobile App",
        shortDescription: "Mobile app for athletes with team management and performance tracking features.",
        description: "A comprehensive mobile application for athletes, featuring team management, performance tracking, and social features. Led a team of 3 developers, handling planning, architecture, and client communication.",
        company: "Smartup",
        period: "Mar 2023 – Oct 2023",
        type: "professional",
        role: "Flutter Team Lead & Project Manager",
        teamSize: 4,
        techStack: ["Flutter", "flutter_hooks", "React Admin"],
        highlights: [
            "Led a team of 3 developers",
            "Handled planning, architecture, and client communication",
            "Implemented complex features and accessibility improvements"
        ],
        featured: false,
        links: {
            appStore: "https://apps.apple.com/gr/app/athleteswer/id1664178620",
            playStore: "https://play.google.com/store/apps/details?id=com.smartup.match_racers_app"
        }
    },
    {
        id: 6,
        name: "ArtVolt for Collectors | Mobile App",
        shortDescription: "Mobile app for art collectors to discover, track, and manage their art collections.",
        description: "A mobile application designed for art collectors to discover, track, and manage their art collections. Built as the first end-to-end Flutter app completed solo, with direct client collaboration.",
        company: "Smartup",
        period: "Feb 2023 – Jun 2023",
        type: "professional",
        role: "Flutter Mobile Developer",
        teamSize: 2,
        techStack: ["Flutter", "flutter_hooks"],
        highlights: [
            "~80% of implementation",
            "First end-to-end Flutter app built solo",
            "Direct client collaboration"
        ],
        featured: false,
        links: {
            appStore: "https://apps.apple.com/gb/app/artvolt-collectors/id6446896282",
            playStore: "https://play.google.com/store/apps/details?id=com.BlobArt.artvolt_collectors"
        }
    },
    {
        id: 7,
        name: "Influ | Mobile App",
        shortDescription: "Mobile app with premium features and polished UI for influencer management.",
        description: "A mobile application focused on influencer management and engagement. Led team planning and releases, coordinated directly with client, and implemented premium features with UI polish.",
        company: "Smartup",
        period: "Dec 2021 – Jun 2023",
        type: "professional",
        role: "Flutter Team Lead & Developer",
        teamSize: 5,
        techStack: ["Flutter", "Provider", "Firebase"],
        highlights: [
            "Led team planning and releases",
            "Coordinated directly with client",
            "Implemented premium features and UI polish"
        ],
        featured: false,
        links: {
            appStore: "https://apps.apple.com/us/app/influ/id1612036398",
            playStore: "https://play.google.com/store/apps/details?id=com.smartup.influ"
        }
    },
    {
        id: 8,
        name: "wf100 (Wellness Factor 100) | Mobile App",
        shortDescription: "Wellness app with adaptive questionnaire logic and personalized wellness program UX.",
        description: "A wellness application featuring adaptive questionnaire logic and personalized wellness program user experience. Built entire app from scratch with focus on user personalization and adaptive content delivery.",
        period: "May 2021 – Oct 2021",
        type: "professional",
        role: "Flutter Developer",
        teamSize: 2,
        techStack: ["Flutter", "Provider", "Firebase Authentication", "Firestore"],
        highlights: [
            "Built entire app from scratch",
            "Adaptive questionnaire logic",
            "Personalized wellness program UX"
        ],
        status: "Not published (development completed)",
        featured: false,
        links: {}
    }
];

// Contact Links Data
const contactLinksData = [
    {
        label: "Email",
        url: "mailto:stefania.makrygiannaki@gmail.com",
        icon: "✉"
    },
    {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/stefaniamak/",
        icon: "in"
    },
    {
        label: "GitHub",
        url: "https://github.com/stefaniamak",
        icon: "gh"
    },
    {
        label: "Behance",
        url: "https://www.behance.net/stefaniamak#",
        icon: "be"
    }
];

// Footer Links Data
const footerLinksData = [
    {
        label: "Email",
        url: "mailto:stefania.makrygiannaki@gmail.com"
    },
    {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/stefaniamak/"
    },
    {
        label: "GitHub",
        url: "https://github.com/stefaniamak"
    },
    {
        label: "Behance",
        url: "https://www.behance.net/stefaniamak#"
    }
];

// Theme Management
const themeOrder = ['system', 'light', 'dark'];
const themeIcons = {
    'system': '☯︎',
    'light': '☀︎',
    'dark': '⏾'
};

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
    updateThemeIcon(savedTheme, true); // Skip transition on initial load
}

function setTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'system') {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'system');
    } else {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    
    // Apply system preference if theme is 'system'
    if (theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
    }
    
    updateThemeIcon(theme);
}

function updateThemeIcon(theme, skipTransition = false) {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        if (skipTransition) {
            // Set icon immediately without transition (for initial load)
            themeIcon.textContent = themeIcons[theme];
        } else {
            // Fade out
            themeIcon.classList.add('fade-out');
            
            // Change icon after fade out
            setTimeout(() => {
                themeIcon.textContent = themeIcons[theme];
                // Fade in
                themeIcon.classList.remove('fade-out');
            }, 150); // Half of transition duration
        }
    }
    
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
        themeBtn.setAttribute('aria-label', `${theme.charAt(0).toUpperCase() + theme.slice(1)} theme`);
        themeBtn.setAttribute('title', `${theme.charAt(0).toUpperCase() + theme.slice(1)} theme`);
    }
}

function cycleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'system';
    const currentIndex = themeOrder.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    const nextTheme = themeOrder[nextIndex];
    setTheme(nextTheme);
}

// Theme Toggle Event Listener
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', cycleTheme);
    }
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const currentTheme = localStorage.getItem('theme') || 'system';
    if (currentTheme === 'system') {
        setTheme('system');
        updateThemeIcon('system', true); // Skip transition for system preference changes
    }
});

// Header Navigation
function initHeader() {
    const headerName = document.getElementById('header-name');
    
    headerName.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const headerNav = document.querySelector('.header-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            headerNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                headerNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

// Work Experience Rendering
function renderWorkExperience() {
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = '';
    
    workExperienceData.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = 'experience-item';
        item.setAttribute('role', 'listitem');
        
        const contentId = `exp-${exp.id}`;
        
        item.innerHTML = `
            <button class="experience-header" aria-expanded="false" aria-controls="${contentId}">
                <div class="experience-header-content">
                    <div class="experience-company">${exp.company}</div>
                    <div class="experience-role">${exp.role}${exp.program ? ` · ${exp.program}` : ''}</div>
                    <div class="experience-meta">
                        <span class="experience-location">${exp.location}</span>
                        <span class="experience-dates">${exp.dates}</span>
                    </div>
                    <div class="experience-summary">${exp.summary}</div>
                </div>
                <span class="experience-toggle" aria-hidden="true">+</span>
            </button>
            <div class="experience-content" id="${contentId}" aria-hidden="true">
                <ul>
                    ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `;
        
        experienceList.appendChild(item);
    });
    
    // Initialize accordion after rendering
    initAccordion();
}

// Work Experience Accordion
function initAccordion() {
    const experienceHeaders = document.querySelectorAll('.experience-header');
    
    experienceHeaders.forEach(header => {
        // Remove existing listeners by using a flag
        if (header.dataset.listenerAdded) return;
        header.dataset.listenerAdded = 'true';
        
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            const contentId = header.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            
            // Close all other items
            experienceHeaders.forEach(h => {
                if (h !== header) {
                    h.setAttribute('aria-expanded', 'false');
                    const otherContentId = h.getAttribute('aria-controls');
                    const otherContent = document.getElementById(otherContentId);
                    if (otherContent) {
                        otherContent.setAttribute('aria-hidden', 'true');
                    }
                }
            });
            
            // Toggle current item
            if (isExpanded) {
                header.setAttribute('aria-expanded', 'false');
                content.setAttribute('aria-hidden', 'true');
            } else {
                header.setAttribute('aria-expanded', 'true');
                content.setAttribute('aria-hidden', 'false');
            }
        });
    });
}

// Project Filtering (Multi-select)
let activeFilters = {
    type: [],
    tech: [],
    role: []
};

function initProjectFilters() {
    const filterContainer = document.getElementById('project-filters');
    
    // Get unique filter values
    const types = [...new Set(projectsData.map(p => p.type))];
    const techStacks = [...new Set(projectsData.flatMap(p => p.techStack))];
    const roles = [...new Set(projectsData.map(p => p.role))];
    
    filterContainer.innerHTML = `
        <div class="filter-group">
            <span class="filter-label">Type:</span>
            ${types.map(type => `
                <button class="filter-btn multi-select" data-filter-type="type" data-filter-value="${type}">
                    ${type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
            `).join('')}
        </div>
        <div class="filter-group">
            <span class="filter-label">Tech:</span>
            ${techStacks.map(tech => `
                <button class="filter-btn multi-select" data-filter-type="tech" data-filter-value="${tech}">
                    ${tech}
                </button>
            `).join('')}
        </div>
        <div class="filter-group">
            <span class="filter-label">Role:</span>
            ${roles.map(role => `
                <button class="filter-btn multi-select" data-filter-type="role" data-filter-value="${role}">
                    ${role}
                </button>
            `).join('')}
        </div>
    `;
    
    // Add event listeners
    document.querySelectorAll('.filter-btn.multi-select').forEach(btn => {
        btn.addEventListener('click', () => {
            const filterType = btn.dataset.filterType;
            const filterValue = btn.dataset.filterValue;
            
            // Toggle filter
            if (activeFilters[filterType].includes(filterValue)) {
                activeFilters[filterType] = activeFilters[filterType].filter(v => v !== filterValue);
                btn.classList.remove('active');
            } else {
                activeFilters[filterType].push(filterValue);
                btn.classList.add('active');
            }
            
            renderProjects();
        });
    });
    
    // Render featured projects
    renderFeaturedProjects();
    
    // Render all projects
    renderProjects();
}

function renderFeaturedProjects() {
    const featuredContainer = document.getElementById('featured-projects');
    const featuredProjects = projectsData.filter(p => p.featured).slice(0, 4);
    
    featuredContainer.innerHTML = `
        <h3 class="featured-title">Featured Projects</h3>
        <div class="featured-grid">
            ${featuredProjects.map(project => createFeaturedProjectCard(project)).join('')}
        </div>
    `;
}

function createFeaturedProjectCard(project) {
    const tags = [
        ...project.techStack,
        project.role,
        project.type.charAt(0).toUpperCase() + project.type.slice(1)
    ];
    
    return `
        <div class="featured-card" data-project-id="${project.id}">
            <div class="project-mockup">
                <div class="mockup-placeholder"></div>
            </div>
            <div class="project-info">
                <div class="project-name">${project.name}</div>
                <div class="project-description">${project.shortDescription}</div>
                <div class="project-tags">
                    ${tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderProjects() {
    const projectGrid = document.getElementById('project-grid');
    
    // Filter projects
    let filteredProjects = projectsData;
    
    if (activeFilters.type.length > 0) {
        filteredProjects = filteredProjects.filter(p => activeFilters.type.includes(p.type));
    }
    
    if (activeFilters.tech.length > 0) {
        filteredProjects = filteredProjects.filter(p => 
            p.techStack.some(tech => activeFilters.tech.includes(tech))
        );
    }
    
    if (activeFilters.role.length > 0) {
        filteredProjects = filteredProjects.filter(p => activeFilters.role.includes(p.role));
    }
    
    // Hide featured projects section if filters are active
    const featuredSection = document.getElementById('featured-projects');
    const hasActiveFilters = activeFilters.type.length > 0 || activeFilters.tech.length > 0 || activeFilters.role.length > 0;
    
    if (hasActiveFilters) {
        featuredSection.style.display = 'none';
    } else {
        featuredSection.style.display = 'block';
    }
    
    projectGrid.innerHTML = '';
    
    if (filteredProjects.length === 0) {
        projectGrid.innerHTML = '<p class="no-results">No projects match the selected filters.</p>';
        return;
    }
    
    filteredProjects.forEach(project => {
        const card = createProjectCard(project);
        projectGrid.appendChild(card);
    });
    
    // Add click listeners to featured cards
    document.querySelectorAll('.featured-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.projectId);
            const project = projectsData.find(p => p.id === projectId);
            if (project) {
                openProjectModal(project);
            }
        });
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-project-id', project.id);
    
    const tags = [
        ...project.techStack,
        project.role,
        project.type.charAt(0).toUpperCase() + project.type.slice(1)
    ];
    
    card.innerHTML = `
        <div class="project-name">${project.name}</div>
        <div class="project-description">${project.shortDescription}</div>
        <div class="project-tags">
            ${tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
    `;
    
    card.addEventListener('click', () => openProjectModal(project));
    
    return card;
}

// Project Modal
function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = project.name;
    
    let bodyHTML = '';
    
    // Meta information
    bodyHTML += '<div class="modal-meta">';
    if (project.company) {
        bodyHTML += `<div class="modal-meta-item"><strong>Company:</strong> ${project.company}</div>`;
    }
    if (project.period) {
        bodyHTML += `<div class="modal-meta-item"><strong>Period:</strong> ${project.period}</div>`;
    }
    bodyHTML += `<div class="modal-meta-item"><strong>Role:</strong> ${project.role}</div>`;
    if (project.teamSize) {
        bodyHTML += `<div class="modal-meta-item"><strong>Team Size:</strong> ${project.teamSize}</div>`;
    }
    bodyHTML += `<div class="modal-meta-item"><strong>Type:</strong> ${project.type.charAt(0).toUpperCase() + project.type.slice(1)}</div>`;
    if (project.status) {
        bodyHTML += `<div class="modal-meta-item"><strong>Status:</strong> ${project.status}</div>`;
    }
    bodyHTML += '</div>';
    
    // Description
    bodyHTML += `<div class="modal-section"><p>${project.description}</p></div>`;
    
    // Contribution
    if (project.contribution) {
        bodyHTML += `<div class="modal-section"><strong>My Contribution:</strong><p>${project.contribution}</p></div>`;
    }
    
    // Highlights
    if (project.highlights && project.highlights.length > 0) {
        bodyHTML += '<div class="modal-section">';
        bodyHTML += '<strong>Highlights:</strong>';
        bodyHTML += '<ul>';
        project.highlights.forEach(highlight => {
            bodyHTML += `<li>${highlight}</li>`;
        });
        bodyHTML += '</ul>';
        bodyHTML += '</div>';
    }
    
    // Key Features
    if (project.keyFeatures && project.keyFeatures.length > 0) {
        bodyHTML += '<div class="modal-section">';
        bodyHTML += '<strong>Key Features:</strong>';
        bodyHTML += '<ul>';
        project.keyFeatures.forEach(feature => {
            bodyHTML += `<li>${feature}</li>`;
        });
        bodyHTML += '</ul>';
        bodyHTML += '</div>';
    }
    
    // Tech Stack
    bodyHTML += '<div class="modal-section">';
    bodyHTML += '<strong>Tech Stack:</strong>';
    bodyHTML += '<ul>';
    project.techStack.forEach(tech => {
        bodyHTML += `<li>${tech}</li>`;
    });
    bodyHTML += '</ul>';
    bodyHTML += '</div>';
    
    // Approach/Process
    if (project.approach) {
        bodyHTML += `<div class="modal-section"><strong>Approach:</strong><p>${project.approach}</p></div>`;
    }
    if (project.process) {
        bodyHTML += `<div class="modal-section"><strong>Process & Tools:</strong><p>${project.process}</p></div>`;
    }
    
    // Links
    if (Object.keys(project.links).length > 0) {
        bodyHTML += '<div class="modal-links">';
        if (project.links.github) {
            bodyHTML += `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="modal-link">GitHub</a>`;
        }
        if (project.links.appStore) {
            bodyHTML += `<a href="${project.links.appStore}" target="_blank" rel="noopener noreferrer" class="modal-link">App Store</a>`;
        }
        if (project.links.playStore) {
            bodyHTML += `<a href="${project.links.playStore}" target="_blank" rel="noopener noreferrer" class="modal-link">Google Play</a>`;
        }
        if (project.links.huawei) {
            bodyHTML += `<a href="${project.links.huawei}" target="_blank" rel="noopener noreferrer" class="modal-link">Huawei AppGallery</a>`;
        }
        if (project.links.web) {
            bodyHTML += `<a href="${project.links.web}" target="_blank" rel="noopener noreferrer" class="modal-link">Web App</a>`;
        }
        if (project.links.live) {
            bodyHTML += `<a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="modal-link">Live Demo</a>`;
        }
        bodyHTML += '</div>';
    }
    
    modalBody.innerHTML = bodyHTML;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Modal Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProjectModal);
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('project-modal');
        if (modal && modal.classList.contains('active')) {
            closeProjectModal();
        }
    }
});

// Contact Links Rendering
function renderContactLinks() {
    const contactLinks = document.getElementById('contact-links');
    contactLinks.innerHTML = contactLinksData.map(link => `
        <a href="${link.url}" class="contact-link" aria-label="${link.label}" ${link.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>
            <span class="contact-icon">${link.icon}</span>
            <span class="contact-text">${link.label}</span>
        </a>
    `).join('');
}

// Footer Links Rendering
function renderFooterLinks() {
    const footerLinks = document.getElementById('footer-links');
    footerLinks.innerHTML = footerLinksData.map(link => `
        <a href="${link.url}" ${link.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${link.label}</a>
    `).join('');
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initHeader();
    renderWorkExperience();
    initProjectFilters();
    renderContactLinks();
    renderFooterLinks();
    setCurrentYear();
});
