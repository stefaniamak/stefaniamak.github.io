// Work Experience Data
const workExperienceData = [
    {
        id: 1,
        company: "WeAre8",
        role: "Senior Flutter Developer",
        location: "Thessaloniki, Greece (Hybrid)",
        dates: "Aug 2025 – Dec 2025",
        summary: "Worked in a single product in major features changing core functionalities of the product.",
        details: [
            "Worked in a single product in major features changing core functionalities of the product"
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
            "Led development, managing APIs, data refresh, and authentication",
            "Migrated a mobile app to Flutter Web, creating an adaptive UI",
            "Enhanced team productivity through structured tasks and guidance",
            "Optimized UI performance, fixed bugs, and improved reusability",
            "Mentored developers and collaborated with designers and backend teams",
            "Skilled in Flutter UI, BLoC, and platform-specific optimizations"
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
            "Developed & Contributed to 13 unique Flutter projects",
            "Worked with 10+ clients to plan and refine products",
            "Led projects from draft to production",
            "Boosted productivity by improving project management",
            "Trained 6 interns, guiding them from scratch to full integration"
        ]
    },
    {
        id: 4,
        company: "Terasology Foundation",
        role: "Software Engineer & UI/UX Designer",
        location: "Remote",
        dates: "May 2020 – Sep 2020",
        program: "Google Summer of Code",
        summary: "Designed and developed a user-friendly HUD for Light and Shadow, a game mode for the organization.",
        details: [
            "Software Engineer",
            "UI/UX Designer",
            "Designed and Developed a user-friendly HUD for Light and Shadow, a game mode for the organization. Project info at GSoC Archive or my final report"
        ]
    },
    {
        id: 5,
        company: "Catrobat",
        role: "Lead Software Engineer, UI/UX Designer & Artist",
        location: "Graz (Remote)",
        dates: "May 2019 – Sep 2019",
        program: "Google Summer of Code",
        summary: "Developed an interactive mobile app to teach algorithms.",
        details: [
            "Lead Software Engineer",
            "UI/UX Designer and Artist (storyboards and original designs)",
            "Developed an interactive mobile app to teach algorithms. GSoC Archive"
        ]
    }
];

// Teaching & Mentoring Experience Data
const teachingData = [
    {
        id: 1,
        company: "i-Mentor, UMBRELLA Volunteering Program, International Hellenic University",
        role: "Mentor",
        location: "",
        dates: "Oct 2019 — Jul 2022",
        summary: "Mentored undergraduate students to support degree completion and academic success.",
        details: [
            "Mentored undergraduate students to support degree completion and academic success",
            "Managed and moderated a Discord forum to facilitate communication between students and professors",
            "Participated in seminars on educational techniques, communication, and personal development, applying insights to mentoring"
        ]
    },
    {
        id: 2,
        company: "Private Computer Science Tutor for High School Student",
        role: "Private Tutor",
        location: "Thessaloniki, Greece",
        dates: "Mar 2020 — Jun 2020",
        summary: "Delivered tailored sessions preparing the student for the Greek final exams for University admission.",
        details: [
            "Delivered tailored sessions preparing the student for the Greek final exams for University admission",
            "Designed exercises and lessons to strengthen problem-solving and understanding"
        ]
    }
];

// Education Data
const educationData = [
    {
        id: 1,
        company: "International Hellenic University",
        role: "Bachelor's degree, Information Technology",
        location: "",
        dates: "Oct 2016",
        summary: "",
        details: [
            "BSc Thesis Commendation: My BSc thesis, titled \"Nonogram: Development of a Puzzle Solver and Designer,\" was evaluated as one of the best theses of 2025 by the examination committee of the International Hellenic University, Department of Information and Electronic Engineering.",
            "In 2025, over 200 theses were completed. From 15 shortlisted submissions for commendation, 5 were selected, including mine."
        ]
    }
];

// Projects Data
const projectsData = [
    {
        id: 9,
        name: "Background Generator | Web App",
        shortDescription: "Interactive Flutter Web app for generating complex geometric background graphics, created as an experiment in AI-assisted development.",
        description: "A Flutter Web application that recreates complex generative UI graphics through mathematical calculations. Built as an exploration of AI-assisted development, this project tested the capabilities of ChatGPT and Cursor AI in generating complex graphics code. The final implementation combines AI-generated code with manual refinement to create an interactive background generator that produces intricate geometric patterns.",
        period: "Oct 2025",
        type: ["personal"],
        role: ["Software Engineer", "Designer"],
        teamSize: 1,
        techStack: ["Flutter", "Flutter Web"],
        highlights: [
            "AI-assisted development experiment using ChatGPT and Cursor AI",
            "Mathematical calculations for complex geometric graphics generation",
            "Two-phase development: AI-only attempt vs. guided AI approach",
            "Manual code refinement and optimization",
            "Flutter Web implementation with performance optimization",
            "Rapid development completed in two evenings"
        ],
        keyFeatures: [
            "Interactive background generation",
            "Real-time graphics rendering",
            "Customizable visual parameters",
            "Responsive web interface",
            "Smooth animations and transitions"
        ],
        contribution: "Designed and developed the entire application, experimenting with AI-assisted coding workflows. Guided AI through the development process, manually refined code where AI struggled, and implemented custom graphics algorithms.",
        approach: "AI-assisted development with manual refinement. Initial attempt with AI-only generation failed; shifted to guided approach where logic was designed manually and AI wrote the implementation, with subsequent manual fixes and optimizations.",
        featured: false,
        links: {
            github: "https://github.com/stefaniamak/background-generator",
            web: "https://stefaniamak.github.io/background-generator/"
        }
    },
    {
        id: 1,
        name: "Delphi Economic Forum | Mobile App",
        shortDescription: "Event companion app for Delphi Economic Forum attendees, built for offline access, real-time updates, and high-performance usage during a live 4-day event.",
        description: "An event companion app used by all Delphi Forum attendees to explore sessions, speakers, and real-time updates during the 4-day live event. Designed for performance, offline access, and intuitive interaction in a high-pressure, high-visibility setting.",
        company: "ATCOM S.A.",
        period: "Jan 2025 – Mar 2025",
        type: ["professional"],
        role: ["Software Engineer"],
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
        type: ["academic"],
        role: ["Software Engineer", "Designer", "Researcher"],
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
        type: ["professional"],
        role: ["Software Engineer"],
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
        type: ["professional"],
        role: ["Software Engineer"],
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
        type: ["professional"],
        role: ["Team Lead", "Project Manager"],
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
        type: ["professional"],
        role: ["Software Engineer"],
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
        type: ["professional"],
        role: ["Team Lead", "Software Engineer"],
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
        type: ["professional"],
        role: ["Software Engineer"],
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

// Calculate duration from date string
function calculateDuration(dateString) {
    const monthNames = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    
    // Parse date string like "Jan 2024 – Jul 2025" or "Oct 2020 – Oct 2023"
    const dateParts = dateString.split(' – ');
    if (dateParts.length !== 2) return '';
    
    const startPart = dateParts[0].trim();
    const endPart = dateParts[1].trim();
    
    // Check if it's "Present" or current
    const isPresent = endPart.toLowerCase() === 'present' || endPart.toLowerCase() === 'current';
    
    // Parse start date
    const startMatch = startPart.match(/(\w+)\s+(\d{4})/);
    if (!startMatch) return '';
    
    const startMonth = monthNames[startMatch[1]];
    const startYear = parseInt(startMatch[2]);
    
    // Parse end date
    let endMonth, endYear;
    if (isPresent) {
        const now = new Date();
        endMonth = now.getMonth();
        endYear = now.getFullYear();
    } else {
        const endMatch = endPart.match(/(\w+)\s+(\d{4})/);
        if (!endMatch) return '';
        endMonth = monthNames[endMatch[1]];
        endYear = parseInt(endMatch[2]);
    }
    
    // Calculate difference
    let years = endYear - startYear;
    let months = endMonth - startMonth;
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Format duration
    const durationParts = [];
    if (years > 0) {
        durationParts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
    }
    if (months > 0) {
        durationParts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`);
    }
    
    // If less than a month, show as days or just "Less than 1 mo"
    if (durationParts.length === 0) {
        return 'Less than 1 mo';
    }
    
    return durationParts.join(' ');
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
        const duration = calculateDuration(exp.dates);
        const datesDisplay = duration ? `${exp.dates} · ${duration}` : exp.dates;
        
        item.innerHTML = `
            <button class="experience-header" aria-expanded="false" aria-controls="${contentId}">
                <div class="experience-header-content">
                    <div class="experience-company">${exp.company}</div>
                    <div class="experience-role">${exp.role}${exp.program ? ` · ${exp.program}` : ''}</div>
                    <div class="experience-meta">
                        <span class="experience-location">${exp.location}</span>
                        <span class="experience-dates">${datesDisplay}</span>
                    </div>
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
    
    // Initialize scroll animations
    initTimelineAnimations();
}

// Highlight important information in education text
function highlightEducationText(text) {
    let highlightedText = text;
    const MARKER = '___BOLD_MARKER___';
    
    // First, replace "BSc Thesis Commendation" with a marker to protect it
    const boldKeyword = 'BSc Thesis Commendation';
    const boldRegex = new RegExp(`(${boldKeyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    highlightedText = highlightedText.replace(boldRegex, MARKER);
    
    // Then, process underlines for only the top important phrases
    // (order matters - longer phrases first to avoid partial matches)
    const underlineKeywords = [
        'Nonogram: Development of a Puzzle Solver and Designer',
        'best theses of 2025',
        '5 were selected'
    ];
    
    // Apply underlines
    underlineKeywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        highlightedText = highlightedText.replace(regex, '<u>$1</u>');
    });
    
    // Finally, replace the marker with bold tags
    highlightedText = highlightedText.replace(new RegExp(MARKER.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '<strong>BSc Thesis Commendation</strong>');
    
    return highlightedText;
}

// Teaching & Mentoring Experience Rendering
function renderTeaching() {
    const teachingList = document.getElementById('teaching-list');
    teachingList.innerHTML = '';
    
    teachingData.forEach((teaching, index) => {
        const item = document.createElement('div');
        item.className = 'experience-item';
        item.setAttribute('role', 'listitem');
        
        const contentId = `teaching-${teaching.id}`;
        const duration = calculateDuration(teaching.dates);
        const datesDisplay = duration ? `${teaching.dates} · ${duration}` : teaching.dates;
        
        item.innerHTML = `
            <button class="experience-header" aria-expanded="false" aria-controls="${contentId}">
                <div class="experience-header-content">
                    <div class="experience-company">${teaching.company}</div>
                    <div class="experience-role">${teaching.role}</div>
                    <div class="experience-meta">
                        ${teaching.location ? `<span class="experience-location">${teaching.location}</span>` : ''}
                        <span class="experience-dates">${datesDisplay}</span>
                    </div>
                </div>
                <span class="experience-toggle" aria-hidden="true">+</span>
            </button>
            <div class="experience-content" id="${contentId}" aria-hidden="true">
                <ul>
                    ${teaching.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `;
        
        teachingList.appendChild(item);
    });
    
    // Initialize accordion after rendering
    initAccordion();
    
    // Initialize scroll animations
    initTimelineAnimations();
}

// Education Rendering
function renderEducation() {
    const educationList = document.getElementById('education-list');
    educationList.innerHTML = '';
    
    educationData.forEach((edu, index) => {
        const item = document.createElement('div');
        item.className = 'experience-item';
        item.setAttribute('role', 'listitem');
        
        const contentId = `edu-${edu.id}`;
        const datesDisplay = edu.dates;
        
        // Only show toggle if there are details to display
        const hasDetails = edu.details && edu.details.length > 0;
        const toggleButton = hasDetails ? `<span class="experience-toggle" aria-hidden="true">+</span>` : '';
        const detailsContent = hasDetails ? `
            <div class="experience-content" id="${contentId}" aria-hidden="true">
                ${edu.details.map(detail => `<p>${highlightEducationText(detail)}</p>`).join('')}
            </div>
        ` : '';
        
        // Use button for expandable items, div for non-expandable
        const headerTag = hasDetails ? 'button' : 'div';
        const headerAttrs = hasDetails 
            ? `class="experience-header" aria-expanded="false" aria-controls="${contentId}"`
            : `class="experience-header" style="cursor: default; pointer-events: none;"`;
        
        item.innerHTML = `
            <${headerTag} ${headerAttrs}>
                <div class="experience-header-content">
                    <div class="experience-company">${edu.company}</div>
                    <div class="experience-role">${edu.role}</div>
                    <div class="experience-meta">
                        ${edu.location ? `<span class="experience-location">${edu.location}</span>` : ''}
                        <span class="experience-dates">${datesDisplay}</span>
                    </div>
                </div>
                ${toggleButton}
            </${headerTag}>
            ${detailsContent}
        `;
        
        educationList.appendChild(item);
    });
    
    // Initialize accordion after rendering (only if there are expandable items)
    if (educationData.some(edu => edu.details && edu.details.length > 0)) {
        initAccordion();
    }
    
    // Initialize scroll animations
    initTimelineAnimations();
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
            const item = header.closest('.experience-item');
            
            // Check if there's another open experience and if clicked item is below it
            let hasOpenExperienceAbove = false;
            if (!isExpanded) {
                experienceHeaders.forEach(h => {
                    if (h !== header && h.getAttribute('aria-expanded') === 'true') {
                        const otherItem = h.closest('.experience-item');
                        if (otherItem && item) {
                            // Check if the other item is above the clicked item
                            const otherRect = otherItem.getBoundingClientRect();
                            const currentRect = item.getBoundingClientRect();
                            if (otherRect.top < currentRect.top) {
                                hasOpenExperienceAbove = true;
                            }
                        }
                    }
                });
            }
            
            // Close all other items when opening a new one
            if (!isExpanded) {
                experienceHeaders.forEach(h => {
                    if (h !== header) {
                        h.setAttribute('aria-expanded', 'false');
                        const otherContentId = h.getAttribute('aria-controls');
                        const otherContent = document.getElementById(otherContentId);
                        const otherItem = h.closest('.experience-item');
                        if (otherContent) {
                            otherContent.setAttribute('aria-hidden', 'true');
                        }
                        if (otherItem) {
                            otherItem.classList.remove('active');
                        }
                    }
                });
            }
            
            // Toggle current item
            if (isExpanded) {
                header.setAttribute('aria-expanded', 'false');
                content.setAttribute('aria-hidden', 'true');
                if (item) {
                    item.classList.remove('active');
                }
            } else {
                header.setAttribute('aria-expanded', 'true');
                content.setAttribute('aria-hidden', 'false');
                if (item) {
                    item.classList.add('active');
                }
                // Adjust delay based on whether there's an open experience above
                // If there is, wait for closing animation (400ms) + buffer
                // Otherwise, use shorter delay
                const scrollDelay = hasOpenExperienceAbove ? 450 : 150;
                
                setTimeout(() => {
                    const rect = item.getBoundingClientRect();
                    const headerHeight = 80; // Account for fixed header
                    const scrollOffset = headerHeight + 40; // Additional padding for visibility
                    const targetPosition = window.scrollY + rect.top - scrollOffset;
                    
                    window.scrollTo({
                        top: Math.max(0, targetPosition), // Ensure we don't scroll to negative position
                        behavior: 'smooth'
                    });
                }, scrollDelay);
            }
        });
    });
}

// Timeline Scroll Animations
function initTimelineAnimations() {
    const experienceItems = document.querySelectorAll('.experience-item');
    
    // Use Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    experienceItems.forEach((item, index) => {
        // Stagger animation delays
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
}

// Project Cards Scroll Animation
function initProjectAnimations() {
    const projectCards = document.querySelectorAll('.project-card:not(.hidden)');
    
    if (projectCards.length === 0) return;
    
    // Use Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    projectCards.forEach((card, index) => {
        // Stagger animation delays
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
        
        // Check if card is already in viewport on load
        const rect = card.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
            // Small delay to ensure DOM is ready, then make visible
            setTimeout(() => {
                card.classList.add('visible');
                observer.unobserve(card);
            }, 100);
        }
    });
}

// Helper Functions for Project Filtering

// Normalize role strings to standardized role arrays
function normalizeRoles(roleString) {
    const roles = [];
    const roleLower = roleString.toLowerCase();
    
    // Check for Lead Software Engineer
    if (roleLower.includes('lead software engineer')) {
        roles.push('Lead Software Engineer');
    }
    
    // Check for Team Lead
    if (roleLower.includes('team lead') || roleLower.includes('(team lead)')) {
        roles.push('Team Lead');
    }
    
    // Check for Project Manager
    if (roleLower.includes('project manager')) {
        roles.push('Project Manager');
    }
    
    // Check for Software Engineer (Flutter Developer, Flutter Software Engineer, etc.)
    if (roleLower.includes('developer') || 
        roleLower.includes('software engineer') || 
        roleLower.includes('flutter developer') ||
        roleLower.includes('flutter mobile developer') ||
        roleLower.includes('main flutter developer')) {
        // Only add if not already added as Lead Software Engineer
        if (!roles.includes('Lead Software Engineer')) {
            roles.push('Software Engineer');
        }
    }
    
    // Check for Designer
    if (roleLower.includes('designer') || roleLower.includes('ui/ux designer')) {
        roles.push('Designer');
    }
    
    // Check for Researcher
    if (roleLower.includes('researcher')) {
        roles.push('Researcher');
    }
    
    // Check for Artist
    if (roleLower.includes('artist')) {
        roles.push('Artist');
    }
    
    // If no roles found, default to Software Engineer
    if (roles.length === 0) {
        roles.push('Software Engineer');
    }
    
    return roles;
}

// Extract programming languages from tech stack
function extractLanguages(techStack) {
    const languages = [];
    const techLower = techStack.map(tech => tech.toLowerCase());
    
    // Map frameworks to languages
    if (techLower.some(tech => tech.includes('flutter'))) {
        languages.push('Dart');
    }
    
    if (techLower.some(tech => tech.includes('react'))) {
        languages.push('JavaScript');
    }
    
    // Add more language mappings as needed
    // For now, we only have Flutter/Dart projects
    
    return [...new Set(languages)]; // Return unique languages
}

// Infer platforms from project links and tech stack
function inferPlatforms(project) {
    const platforms = [];
    
    // Check links
    if (project.links) {
        if (project.links.appStore) {
            platforms.push('iOS');
        }
        if (project.links.playStore || project.links.huawei) {
            platforms.push('Android');
        }
        if (project.links.web || project.links.live) {
            platforms.push('Web');
        }
    }
    
    // Check tech stack for Flutter Web
    if (project.techStack && project.techStack.some(tech => 
        tech.toLowerCase().includes('flutter web') || 
        tech.toLowerCase().includes('web'))) {
        if (!platforms.includes('Web')) {
            platforms.push('Web');
        }
    }
    
    return [...new Set(platforms)]; // Return unique platforms
}

// Extract platform type from project name (everything after "|")
function extractPlatformType(name) {
    const separatorIndex = name.indexOf('|');
    if (separatorIndex === -1) {
        return { cleanName: name, platformType: null };
    }
    const cleanName = name.substring(0, separatorIndex).trim();
    const platformType = name.substring(separatorIndex + 1).trim();
    return { cleanName, platformType };
}

// Get platform label for accessibility
function getPlatformLabel(platform) {
    const labels = {
        'iOS': 'iOS',
        'Android': 'Android',
        'Web': 'Web'
    };
    return labels[platform] || platform;
}

// Get platform icon
function getPlatformIcon(platform) {
    const icons = {
        'iOS': '',
        'Android': '𖠌',
        'Web': '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="7.5" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M 1.5 9 A 7.5 3.5 0 0 0 16.5 9" stroke="currentColor" stroke-width="1" fill="none"/><path d="M 1.5 9 A 7.5 3.5 0 0 1 16.5 9" stroke="currentColor" stroke-width="1" fill="none"/><path d="M 1.5 9 A 7.5 2 0 0 0 16.5 9" stroke="currentColor" stroke-width="1" fill="none"/><path d="M 1.5 9 A 7.5 2 0 0 1 16.5 9" stroke="currentColor" stroke-width="1" fill="none"/><path d="M 9 1.5 A 3.5 7.5 0 0 0 9 16.5" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M 9 1.5 A 3.5 7.5 0 0 1 9 16.5" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>'
    };
    return icons[platform] || '';
}

// Create CSS-based bookmark HTML for platform (procedural drawing approach)
function createPlatformBookmark(platform, url) {
    const label = getPlatformLabel(platform);
    const platformLower = platform.toLowerCase();
    const icon = getPlatformIcon(platform);
    const titleAttr = url ? `title="${url}"` : '';
    
    return `<div 
        class="platform-bookmark" 
        data-platform="${platformLower}"
        ${url ? `data-url="${url}"` : ''}
        aria-label="${label} platform${url ? ` - ${url}` : ''}"
        ${titleAttr}
        role="button"
        tabindex="0">
        <span class="bookmark-fill bookmark-fill-top"></span>
        <span class="bookmark-fill bookmark-fill-left"></span>
        <span class="bookmark-fill bookmark-fill-right"></span>
        <span class="bookmark-stroke bookmark-stroke-top"></span>
        <span class="bookmark-stroke bookmark-stroke-left"></span>
        <span class="bookmark-stroke bookmark-stroke-right"></span>
        <span class="bookmark-stroke bookmark-stroke-bottom-left"></span>
        <span class="bookmark-stroke bookmark-stroke-bottom-right"></span>
        <span class="bookmark-stroke bookmark-stroke-hover"></span>
        <span class="bookmark-icon">${icon}</span>
    </div>`;
}

// Project Filtering (Multi-select)
let activeFilters = {
    type: [],
    language: [],
    platform: [],
    role: []
};

// Toggle platform filter from bookmark click
function togglePlatformFilter(platform) {
    const filterIndex = activeFilters.platform.indexOf(platform);
    if (filterIndex > -1) {
        activeFilters.platform.splice(filterIndex, 1);
    } else {
        activeFilters.platform.push(platform);
    }
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn[data-filter-type="platform"]').forEach(btn => {
        if (btn.dataset.filterValue === platform) {
            btn.classList.toggle('active', activeFilters.platform.includes(platform));
        }
    });
    
    // Re-render projects
    renderProjects();
    
    // Update bookmark active states
    updateBookmarkStates();
    
    // Initialize scroll animations for project cards
    initProjectAnimations();
}

// Update bookmark active states based on current filters
function updateBookmarkStates() {
    document.querySelectorAll('.platform-bookmark').forEach(bookmark => {
        const platform = bookmark.getAttribute('data-platform');
        if (activeFilters.platform.includes(platform)) {
            bookmark.classList.add('active');
        } else {
            bookmark.classList.remove('active');
        }
    });
}

function initProjectFilters() {
    const filterContainer = document.getElementById('project-filters');
    
    // Get unique filter values with counts
    const typeCounts = {};
    projectsData.forEach(p => {
        p.type.forEach(type => {
            typeCounts[type] = (typeCounts[type] || 0) + 1;
        });
    });
    const types = [...new Set(projectsData.flatMap(p => p.type))].sort((a, b) => typeCounts[b] - typeCounts[a]);
    
    const languageCounts = {};
    projectsData.forEach(p => {
        const projectLanguages = extractLanguages(p.techStack);
        projectLanguages.forEach(lang => {
            languageCounts[lang] = (languageCounts[lang] || 0) + 1;
        });
    });
    const languages = [...new Set(projectsData.flatMap(p => extractLanguages(p.techStack)))].sort((a, b) => languageCounts[b] - languageCounts[a]);
    
    const platformCounts = {};
    projectsData.forEach(p => {
        const projectPlatforms = inferPlatforms(p);
        projectPlatforms.forEach(platform => {
            platformCounts[platform] = (platformCounts[platform] || 0) + 1;
        });
    });
    const platforms = [...new Set(projectsData.flatMap(p => inferPlatforms(p)))].sort((a, b) => platformCounts[b] - platformCounts[a]);
    
    const roleCounts = {};
    projectsData.forEach(p => {
        p.role.forEach(role => {
            roleCounts[role] = (roleCounts[role] || 0) + 1;
        });
    });
    const roles = [...new Set(projectsData.flatMap(p => p.role))].sort((a, b) => roleCounts[b] - roleCounts[a]);
    
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
            <span class="filter-label">Language:</span>
            ${languages.map(lang => `
                <button class="filter-btn multi-select" data-filter-type="language" data-filter-value="${lang}">
                    ${lang}
                </button>
            `).join('')}
        </div>
        <div class="filter-group">
            <span class="filter-label">Platform:</span>
            ${platforms.map(platform => `
                <button class="filter-btn multi-select" data-filter-type="platform" data-filter-value="${platform}">
                    ${platform}
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
    
    // Render all projects
    renderProjects();
}

function renderProjects() {
    const projectGrid = document.getElementById('project-grid');
    
    // Filter projects
    let filteredProjects = projectsData;
    
    // Filter by type (array intersection)
    if (activeFilters.type.length > 0) {
        filteredProjects = filteredProjects.filter(p => 
            p.type.some(type => activeFilters.type.includes(type))
        );
    }
    
    // Filter by language (extracted from tech stack)
    if (activeFilters.language.length > 0) {
        filteredProjects = filteredProjects.filter(p => {
            const projectLanguages = extractLanguages(p.techStack);
            return projectLanguages.some(lang => activeFilters.language.includes(lang));
        });
    }
    
    // Filter by platform (inferred from links)
    if (activeFilters.platform.length > 0) {
        filteredProjects = filteredProjects.filter(p => {
            const projectPlatforms = inferPlatforms(p);
            return projectPlatforms.some(platform => activeFilters.platform.includes(platform));
        });
    }
    
    // Filter by role (array intersection)
    if (activeFilters.role.length > 0) {
        filteredProjects = filteredProjects.filter(p => 
            p.role.some(role => activeFilters.role.includes(role))
        );
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
    
    // Update bookmark states after rendering
    updateBookmarkStates();
    
    // Initialize scroll animations for project cards
    initProjectAnimations();
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-project-id', project.id);
    
    // Add project type class for styling
    const projectType = project.type[0]; // Use first type if multiple
    card.classList.add(`project-type-${projectType}`);
    
    // Extract platform type from name
    const { cleanName, platformType } = extractPlatformType(project.name);
    
    // Get platforms (iOS, Android, Web)
    const platforms = inferPlatforms(project);
    
    // Only tech stack as chips
    const techStackTags = project.techStack || [];
    
    // Build HTML
    // Project type label at top left
    const projectTypeLabel = project.type.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ');
    const typeLabelHTML = `<div class="project-type-label">${projectTypeLabel}</div>`;
    
    // Platform bookmarks above title
    let platformBookmarksHTML = '';
    if (platforms.length > 0) {
        // Calculate right offset for each bookmark (16px base + 34px spacing per bookmark for wider size)
        platforms.forEach((platform, index) => {
            const rightOffset = 16 + (platforms.length - 1 - index) * 34; // 26px width + 8px spacing
            // Get URL for this platform
            let platformUrl = null;
            if (project.links) {
                if (platform === 'iOS' && project.links.appStore) {
                    platformUrl = project.links.appStore;
                } else if (platform === 'Android' && project.links.playStore) {
                    platformUrl = project.links.playStore;
                } else if (platform === 'Web') {
                    // Check for web link (web or live)
                    if (project.links.web) {
                        platformUrl = project.links.web;
                    } else if (project.links.live) {
                        platformUrl = project.links.live;
                    }
                }
            }
            const bookmarkHTML = createPlatformBookmark(platform, platformUrl);
            platformBookmarksHTML += bookmarkHTML.replace('class="platform-bookmark"', `class="platform-bookmark" style="right: ${rightOffset}px;"`);
        });
    }
    
    // Project name on its own line (below bookmarks and type label)
    let cardHTML = `${typeLabelHTML}${platformBookmarksHTML}<div class="project-name">${cleanName}</div>`;
    
    let bodyHTML = `<div class="project-description">${project.shortDescription}</div>`;
    
    // Role section
    if (project.role && project.role.length > 0) {
        bodyHTML += `<div class="project-role-section">`;
        bodyHTML += `<span class="project-meta-label">Role:</span>`;
        bodyHTML += `<span class="project-role">${project.role.join(', ')}</span>`;
        bodyHTML += `</div>`;
    }
    
    // Tech stack chips only
    if (techStackTags.length > 0) {
        bodyHTML += `<div class="project-tags">`;
        bodyHTML += techStackTags.map(tech => `<span class="project-tag">${tech}</span>`).join('');
        bodyHTML += `</div>`;
    }
    
    card.innerHTML = cardHTML + bodyHTML;
    
    // Add click handler for card (excluding bookmarks)
    card.addEventListener('click', (e) => {
        // Don't open modal if clicking on a bookmark
        if (!e.target.closest('.platform-bookmark')) {
            openProjectModal(project);
        }
    });
    
    // Add click handlers for platform bookmarks
    const bookmarkElements = card.querySelectorAll('.platform-bookmark');
    bookmarkElements.forEach(bookmark => {
        bookmark.addEventListener('click', (e) => {
            e.stopPropagation();
            const url = bookmark.getAttribute('data-url');
            if (url) {
                // Open the URL in a new tab
                window.open(url, '_blank', 'noopener,noreferrer');
            } else {
                // Fallback to filter if no URL
                const platform = bookmark.getAttribute('data-platform');
                togglePlatformFilter(platform);
            }
        });
        
        // Add keyboard support
        bookmark.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                const url = bookmark.getAttribute('data-url');
                if (url) {
                    // Open the URL in a new tab
                    window.open(url, '_blank', 'noopener,noreferrer');
                } else {
                    // Fallback to filter if no URL
                    const platform = bookmark.getAttribute('data-platform');
                    togglePlatformFilter(platform);
                }
            }
        });
    });
    
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
    const platforms = inferPlatforms(project);
    bodyHTML += '<div class="modal-meta">';
    if (project.company) {
        bodyHTML += `<div class="modal-meta-item"><strong>Company:</strong> ${project.company}</div>`;
    }
    if (project.period) {
        bodyHTML += `<div class="modal-meta-item"><strong>Period:</strong> ${project.period}</div>`;
    }
    bodyHTML += `<div class="modal-meta-item"><strong>Role:</strong> ${project.role.join(', ')}</div>`;
    if (project.teamSize) {
        bodyHTML += `<div class="modal-meta-item"><strong>Team Size:</strong> ${project.teamSize}</div>`;
    }
    bodyHTML += `<div class="modal-meta-item"><strong>Type:</strong> ${project.type.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ')}</div>`;
    if (platforms.length > 0) {
        bodyHTML += `<div class="modal-meta-item"><strong>Platform:</strong> ${platforms.join(', ')}</div>`;
    }
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
    const email = 'stefania.makrygiannaki@gmail.com';
    const linkedinName = 'Stefania Makrygiannaki';
    const linkedinUrl = 'https://www.linkedin.com/in/stefaniamak/';
    
    contactLinks.innerHTML = `
        <p class="contact-intro">
            Whether you're reaching out for business opportunities or just want to geek out over smooth animations and pixel-perfect details ∙ feel free to 
            <a href="mailto:${email}" class="contact-inline-link">email me</a> or 
            <a href="${linkedinUrl}" class="contact-inline-link" target="_blank" rel="noopener noreferrer">connect with me on LinkedIn</a>.
        </p>
        <div class="contact-methods">
            <div class="contact-method">
                <p class="contact-method-label">Email</p>
                <a href="mailto:${email}" class="contact-method-link">${email}</a>
            </div>
            <div class="contact-method">
                <p class="contact-method-label">LinkedIn</p>
                <a href="${linkedinUrl}" class="contact-method-link" target="_blank" rel="noopener noreferrer">${linkedinName}</a>
            </div>
        </div>
    `;
}

// Footer Links Rendering - No longer needed as footer is now static HTML
// Removed renderFooterLinks() function

// Set current year in footer - No longer needed as year is hardcoded to 2026
// Removed setCurrentYear() function

// Typing Animation for Hero Statement
function initTypingAnimation() {
    const statementElement = document.getElementById('hero-statement');
    if (!statementElement) return;
    
    const text = 'Painting with code.';
    const baseSpeed = 100; // Base milliseconds per character
    const speedVariation = 30; // Random variation for natural feel
    let currentIndex = 0;
    
    // Show cursor immediately and let it blink for 1 second before typing
    statementElement.innerHTML = '<span class="typing-cursor" aria-hidden="true">|</span>';
    
    function getTypingSpeed(char) {
        // Longer pause at punctuation
        if (char === '.' || char === ',' || char === '!' || char === '?') {
            return baseSpeed * 2.5 + Math.random() * speedVariation;
        }
        // Slight pause at spaces
        if (char === ' ') {
            return baseSpeed * 1.3 + Math.random() * speedVariation;
        }
        // Variable speed for regular characters
        return baseSpeed + (Math.random() * speedVariation - speedVariation / 2);
    }
    
    function typeCharacter() {
        if (currentIndex < text.length) {
            const char = text[currentIndex];
            statementElement.innerHTML = text.substring(0, currentIndex + 1) + '<span class="typing-cursor" aria-hidden="true">|</span>';
            currentIndex++;
            
            const nextSpeed = getTypingSpeed(char);
            setTimeout(typeCharacter, nextSpeed);
        } else {
            // Animation complete - cursor stays and continues blinking
            statementElement.innerHTML = text + '<span class="typing-cursor" aria-hidden="true">|</span>';
        }
    }
    
    // Start typing animation after a short delay
    setTimeout(() => {
        typeCharacter();
    }, 300);
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initHeader();
    initTypingAnimation();
    renderWorkExperience();
    renderTeaching();
    renderEducation();
    initProjectFilters();
    renderContactLinks();
});
