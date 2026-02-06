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
        id: 10,
        name: "Personal Portfolio Website | Web App",
        shortDescription: "A fully responsive personal portfolio website built from scratch with vanilla HTML, CSS, and JavaScript, featuring theme modes, interactive project showcase, and accessible design.",
        description: "A personal portfolio website showcasing work experience, projects, and professional background. Built entirely from scratch using vanilla web technologies with no build process or dependencies. Features a clean, minimal editorial aesthetic with three theme modes (Light, Dark, System), interactive project filtering, expandable work experience sections, and detailed project modal views. Designed with accessibility in mind, using semantic HTML, proper ARIA labels, and keyboard navigation throughout.",
        period: "Feb 2026",
        startDate: new Date(2026, 1, 1),
        endDate: new Date(2026, 1, 28),
        type: ["personal"],
        role: ["Software Engineer", "Designer"],
        teamSize: 1,
        techStack: ["HTML", "CSS", "JavaScript"],
        highlights: [
            "Built from scratch with vanilla web technologies (no frameworks or build tools)",
            "Fully responsive design optimized for mobile, tablet, and desktop",
            "Three theme modes with system preference detection and smooth transitions",
            "Interactive project showcase with multi-criteria filtering (type, language, platform, role)",
            "Expandable accordion interface for work experience sections",
            "Detailed project modal views with platform bookmarks and company linking",
            "Typing animation in hero section with natural character timing",
            "Accessible design with semantic HTML, ARIA labels, and keyboard navigation",
            "Clean, minimal editorial aesthetic with custom typography (Jacquarda Bastarda, Roboto Slab, Inter)"
        ],
        keyFeatures: [
            "Responsive grid layouts for projects and experience sections",
            "Theme toggle with localStorage persistence",
            "Project filtering by type, language, platform, and role",
            "Platform bookmarks (iOS, Android, Web) with procedural CSS drawing",
            "Smooth scroll animations and transitions",
            "URL hash navigation for deep linking to projects and sections",
            "Mobile-friendly navigation with hamburger menu",
            "Company-project relationships with cross-linking",
            "No build process required - pure HTML/CSS/JS"
        ],
        contribution: "Designed and developed the entire website from scratch, including all UI/UX design, responsive layouts, interactive features, and accessibility implementations. Created custom CSS animations, theme system, and project filtering logic.",
        approach: "Vanilla web development approach focusing on performance, accessibility, and maintainability. No frameworks or build tools - pure HTML, CSS, and JavaScript for maximum simplicity and fast loading. Designed with a mobile-first responsive approach and progressive enhancement.",
        featured: true,
        links: {
            github: "https://github.com/stefaniamak/stefaniamak.github.io",
            web: "https://stefaniamak.github.io/"
        }
    },
    {
        id: 11,
        name: "WeAre8 - The People's Platform | Mobile App",
        shortDescription: "Social media platform that pays users for watching ads, combining video content, text posts, and community features to create a more ethical and value-driven social experience.",
        description: "A social media platform that pays users for watching ads, combining video content (like TikTok), text posts (like Twitter/X), and community features. WeAre8 aims to create a more ethical social media experience by giving users control and value, rather than exploiting them through addictive algorithms. The platform allows users to create and join communities, share content, and earn money while engaging with brands.",
        companyId: "work-1", // WeAre8
        period: "Aug 2025 – Dec 2025",
        startDate: new Date(2025, 7, 1),
        endDate: new Date(2025, 11, 31),
        type: ["professional"],
        role: ["Software Engineer"],
        teamSize: 7,
        techStack: ["Flutter", "iOS", "Android"],
        highlights: [
            "Built the Communities feature from scratch as part of a 3-developer team - a new user type allowing users to create and join community spaces",
            "Implemented account creation and profile editing for communities",
            "Developed comprehensive post management system for communities",
            "Created member management functionality for community creators (only the creator can manage members)",
            "Implemented Moments management (Instagram Stories-like feature) for communities",
            "Fixed critical bugs and improved core app functionality",
            "Made significant graphical, UI, and UX improvements throughout the app",
            "Collaborated with a team of 7 developers on a complex social media platform"
        ],
        keyFeatures: [
            "Communities feature allowing users to create vibrant community spaces where they set the tone, invite members, share powerful moments, and switch seamlessly between personal and community mode to engage on every level",
            "Post management for communities with full CRUD operations",
            "Member management system for community creators (only the creator can manage members)",
            "Moments feature (stories-like) for communities",
            "Social media platform combining video content (like TikTok), text posts (like Twitter/X), and community features",
            "User payment system for watching ads",
            "Cross-platform Flutter app for iOS and Android",
            "Improved UI/UX across the entire application"
        ],
        contribution: "Developed the Communities feature as part of a 3-developer team, a major new functionality that introduced a new user type to the platform. Implemented account creation and profile editing for communities. Built key parts of the Communities system including post management, member management (where only the community creator can manage members), and Moments (stories) functionality. Fixed numerous bugs throughout the app and made significant graphical, UI, and UX improvements to enhance user experience across the platform.",
        approach: "Collaborative development within a team of 7 Flutter developers, with the Communities feature built by a smaller 3-developer team. Focused on building robust, scalable features while maintaining code quality and user experience. Worked closely with product and design teams to implement the Communities feature according to specifications, ensuring smooth integration with existing app architecture.",
        featured: true,
        links: {
            appStore: "https://apps.apple.com/us/app/weare8-the-peoples-platform/id1391527170",
            playStore: "https://play.google.com/store/apps/details?id=com.eight.app&hl=en_AU&gl=US"
        }
    },
    {
        id: 9,
        name: "Background Generator | Web App",
        shortDescription: "Interactive Flutter Web app for generating complex geometric background graphics, created as an experiment in AI-assisted development.",
        description: "A Flutter Web application that recreates complex generative UI graphics through mathematical calculations. Built as an exploration of AI-assisted development, this project tested the capabilities of ChatGPT and Cursor AI in generating complex graphics code. The final implementation combines AI-generated code with manual refinement to create an interactive background generator that produces intricate geometric patterns.",
        period: "Oct 2025",
        startDate: new Date(2025, 9, 1),
        endDate: new Date(2025, 9, 31),
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
        companyId: "work-2", // ATCOM S.A.
        period: "Jan 2025 – Mar 2025",
        startDate: new Date(2025, 0, 1),
        endDate: new Date(2025, 2, 31),
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
        companyId: "education-1", // International Hellenic University
        period: "Dec 2023 – Jan 2025",
        startDate: new Date(2023, 11, 1),
        endDate: new Date(2025, 0, 31),
        type: ["academic", "personal"],
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
        companyId: "work-2", // ATCOM S.A.
        period: "Apr 2024 – Aug 2024",
        startDate: new Date(2024, 3, 1),
        endDate: new Date(2024, 7, 31),
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
        companyId: "work-2", // ATCOM S.A.
        period: "Jun 2024 – Nov 2024",
        startDate: new Date(2024, 5, 1),
        endDate: new Date(2024, 10, 30),
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
        companyId: "work-3", // Smartup
        period: "Mar 2023 – Oct 2023",
        startDate: new Date(2023, 2, 1),
        endDate: new Date(2023, 9, 31),
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
        companyId: "work-3", // Smartup
        period: "Feb 2023 – Jun 2023",
        startDate: new Date(2023, 1, 1),
        endDate: new Date(2023, 5, 30),
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
        id: 25,
        name: "Smart HR | Mobile App",
        shortDescription: "Internal corporate HR management app designed to streamline forms, submissions, and employee workflow processes.",
        description: "An internal corporate HR management app designed to streamline forms, submissions, and employee workflow processes. The app serves as a centralized tool for efficient HR operations and secure internal data handling.",
        companyId: "work-3", // Smartup
        period: "Feb 2022",
        startDate: new Date(2022, 1, 1),
        endDate: new Date(2022, 1, 28),
        type: ["professional"],
        role: ["Developer"],
        teamSize: 3,
        techStack: ["Flutter", "Dart"],
        highlights: [
            "Delivered production-ready features for complex HR workflows",
            "Ensured secure and accurate state management for sensitive employee data",
            "Maintained visual consistency across the app while adding new functionality"
        ],
        keyFeatures: [
            "Multi-input validated HR forms for employee submissions",
            "Digital workflow for streamlined corporate HR processes",
            "Centralized internal data handling with secure state management",
            "Corporate design system integration for consistent UI"
        ],
        contribution: "Implemented a fully functional form-based screen within the app. Ensured full compatibility with the corporate design system. Managed state handling for multi-step submissions and internal processes. Delivered UI components aligned with existing team and architectural standards.",
        featured: false,
        links: {
            appStore: "https://apps.apple.com/us/app/smarthr/id1644858912",
            playStore: "https://play.google.com/store/apps/details?id=com.smartupweb.smartuphr",
            web: "https://smartup-hr.web.app/"
        }
    },
    {
        id: 21,
        name: "Paymi - Private Lessons Payment Tracker | Mobile App",
        shortDescription: "Mobile-focused application designed to help private tutors manage lesson payments, extra hours, and financial tracking.",
        description: "A mobile-focused application designed to help private tutors manage lesson payments, extra hours, and financial tracking. The app replaces informal paper-based workflows with a clear, structured digital system, providing transparency for both teachers and students.",
        companyId: "education-1", // International Hellenic University
        period: "Apr 2023 – May 2023",
        startDate: new Date(2023, 3, 1),
        endDate: new Date(2023, 4, 31),
        type: ["academic"],
        role: ["Software Engineer", "Designer", "Researcher"],
        teamSize: 1,
        techStack: ["Flutter", "Dart", "Firebase Auth", "Firebase Firestore"],
        highlights: [
            "Solved common scheduling and payment confusion for private educators",
            "Designed for minimal learning curve and quick adoption",
            "Implemented real-time balance calculations",
            "Integrated cloud-based authentication and persistence",
            "Combined UX research with full product implementation"
        ],
        keyFeatures: [
            "Client and contract management with subject and grade tracking",
            "Automated hourly and overtime charging system",
            "Lesson and payment history with dynamic totals",
            "Secure authentication via Firebase",
            "Real-time cloud data synchronization"
        ],
        contribution: "Conducted user research on private tutoring workflows and pain points. Analyzed existing finance tools to identify effective usability patterns. Designed the application structure and interaction flows for non-technical users. Implemented the Flutter application based on real user requirements. Developed automated charging logic based on hourly rates and overtime. Designed the full UI, branding, logo, and mascot.",
        featured: false,
        links: {
            github: "https://github.com/stefaniamak/payments-tracker"
        }
    },
    {
        id: 24,
        name: "Xenia Rooftop (Expose Yourself) | Mobile App",
        shortDescription: "Lifestyle and events-focused mobile application designed to support a venue/brand presence through a dedicated mobile experience.",
        description: "Xenia Rooftop, later rebranded as Expose Yourself, is a lifestyle and events-focused mobile application designed to support a venue/brand presence through a dedicated mobile experience. The app provides users with information, content, and interactions related to the brand's activities and offerings.",
        companyId: "work-3", // Smartup
        period: "Apr 2022",
        startDate: new Date(2022, 3, 1),
        endDate: new Date(2022, 3, 30),
        type: ["professional"],
        role: ["Developer"],
        teamSize: null,
        techStack: ["Flutter", "Dart", "REST APIs"],
        highlights: [
            "Guided a junior developer throughout the app's development lifecycle",
            "Assisted with Flutter implementations and problem-solving",
            "Helped ensure consistency and maintainability in the codebase",
            "Contributed to overall app quality and delivery readiness"
        ],
        keyFeatures: [
            "Brand-focused content presentation",
            "Event or venue-related information display",
            "Mobile-first user experience",
            "Flutter-based UI implementation"
        ],
        contribution: "Focused less on core feature ownership and more on supporting the overall development process. Guided a junior developer through architectural and implementation decisions while also assisting with specific Flutter implementations where needed, ensuring the app followed good practices and remained stable.",
        featured: false,
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.smartup.xeniarooftop",
            web: "https://xenia-rooftop.web.app/"
        }
    },
    {
        id: 26,
        name: "TLG Service App | Mobile App",
        shortDescription: "Utility-focused application designed for professional service workflows, enabling tracking of tasks and parts for technicians.",
        description: "A utility-focused application designed for professional service workflows, enabling tracking of tasks and parts for technicians. The app prioritizes reliability, clarity, and functional usability for professional users in the field.",
        companyId: "work-3", // Smartup
        period: "Oct 2022",
        startDate: new Date(2022, 9, 1),
        endDate: new Date(2022, 9, 31),
        type: ["professional"],
        role: ["Developer"],
        teamSize: null,
        techStack: ["Flutter", "Dart"],
        highlights: [
            "Delivered reliable solutions for service and parts management workflows",
            "Maintained a consistent and usable interface for specialized professional users"
        ],
        keyFeatures: [
            "Continuous bug fixing and maintenance for high reliability",
            "Minor UI refinements to improve operational clarity"
        ],
        contribution: "Focused on bug fixes and minor UI improvements to enhance usability. Ensured functional stability across all existing screens. Implemented targeted adjustments to improve clarity and workflow efficiency.",
        featured: false,
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.smartup.servicePartsApp"
        }
    },
    {
        id: 27,
        name: "West AZ | Mobile App",
        shortDescription: "Location-based application for the West SA organization, designed to facilitate engagement between users and local services within a specific geographic area.",
        description: "A location-based application for the West SA organization, designed to facilitate engagement between users and local services within a specific geographic area. The app focuses on stability, responsive design, and clarity for a professional audience.",
        companyId: "work-3", // Smartup
        period: "Aug 2022",
        startDate: new Date(2022, 7, 1),
        endDate: new Date(2022, 7, 31),
        type: ["professional"],
        role: ["Developer"],
        teamSize: null,
        techStack: ["Flutter", "Dart", "Material UI"],
        highlights: [
            "Delivered a polished and professional interface within an existing codebase",
            "Maintained high usability and stability for organization-specific use cases"
        ],
        keyFeatures: [
            "Location-based engagement and service discovery module",
            "Local services support with material UI consistency",
            "Layout responsiveness across multiple device resolutions",
            "Systematic bug tracking and reliability improvements"
        ],
        contribution: "Implemented incremental improvements and minor features to existing screens. Enhanced UI consistency and visual correctness across production screens. Applied layout corrections to ensure responsiveness across Android devices. Fixed bugs to improve overall reliability and performance.",
        featured: false,
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.smartup.westAz"
        }
    },
    {
        id: 7,
        name: "Influ | Mobile App",
        shortDescription: "Mobile app with premium features and polished UI for influencer management.",
        description: "A mobile application focused on influencer management and engagement. Led team planning and releases, coordinated directly with client, and implemented premium features with UI polish.",
        companyId: "work-3", // Smartup
        period: "Dec 2021 – Oct 2023",
        startDate: new Date(2021, 11, 1),
        endDate: new Date(2023, 9, 31),
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
        period: "Mar 2021 – Sep 2021",
        startDate: new Date(2021, 2, 1),
        endDate: new Date(2021, 8, 30),
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
    },
    {
        id: 22,
        name: "skai.gr | Mobile App",
        shortDescription: "Official app of one of Greece's largest news and media organizations, delivering real-time news content and live updates to a nationwide audience.",
        description: "The SKAI.gr mobile application is the official app of one of Greece's largest news and media organizations. It delivers real-time news content and live updates to a nationwide audience, with performance and reliability being critical due to high traffic during breaking news events.",
        companyId: "work-3", // Smartup
        period: "Nov 2021",
        startDate: new Date(2021, 10, 1),
        endDate: new Date(2021, 10, 30),
        type: ["professional"],
        role: ["Developer"],
        teamSize: null,
        techStack: ["Flutter", "Dart", "REST APIs", "State Management", "Animations"],
        highlights: [
            "Delivered a mission-critical live feature for a major news platform",
            "Enhanced user attention through motion-based urgency indicators",
            "Managed real-time content updates without disrupting browsing flow",
            "Worked within a high-traffic, production-critical environment"
        ],
        keyFeatures: [
            "Backend-triggered \"Live Now\" home card",
            "Live article view with automatic updates",
            "Pulsing animated visual indicator for urgency",
            "Seamless navigation between home and live content",
            "Optimized news delivery for high-traffic usage"
        ],
        contribution: "Implemented the high-visibility \"Live Now\" feature on the home screen. Collaborated with backend developers on state-driven live content updates. Integrated streaming calls for real-time article updates. Implemented animated urgency indicators for live news. Fixed media-related issues including embedded video integrations.",
        featured: false,
        links: {
            appStore: "https://apps.apple.com/us/app/skai-gr/id1076335165",
            playStore: "https://play.google.com/store/apps/details?id=gr.skai.skai_android"
        }
    },
    {
        id: 23,
        name: "Push2Shop (Agora) | Mobile App",
        shortDescription: "Smart shopping application focused on connecting users with local businesses through personalized and location-based offers.",
        description: "Push2Shop, later rebranded as Agora, is a smart shopping application focused on connecting users with local businesses through personalized and location-based offers. The product evolved significantly during its rebranding phase, introducing new features and UI refinements.",
        companyId: "work-3", // Smartup
        period: "Sep 2022",
        startDate: new Date(2022, 8, 1),
        endDate: new Date(2022, 8, 30),
        type: ["professional"],
        role: ["Developer"],
        teamSize: 4,
        techStack: ["Flutter", "Dart", "REST APIs", "State Management"],
        highlights: [
            "Supported the evolution of a consumer-facing shopping platform",
            "Contributed to scalable architectural decisions",
            "Participated in UI refinement during active product growth",
            "Product later featured on Greek Dragons' Den (2024)"
        ],
        keyFeatures: [
            "Personalized offers based on user behavior",
            "Location-based business discovery",
            "Scalable feature expansion architecture",
            "Refined UI system for evolving product needs",
            "Advanced state management for shopping flows"
        ],
        contribution: "Contributed to feature development and production improvements. Refined UI and UX during the rebranding phase. Provided guidance on Flutter implementation choices. Supported long-term maintainability decisions within the codebase.",
        featured: false,
        links: {
            appStore: "https://apps.apple.com/ci/app/agora-ai/id1628286208",
            playStore: "https://play.google.com/store/apps/details?id=com.push2shop.pushapp"
        }
    },
    {
        id: 18,
        name: "Smart Delivery (White Label App) | Mobile App",
        shortDescription: "White-label delivery engine used to power multiple client-specific applications with a standardized ordering and delivery workflow.",
        description: "A white-label delivery engine used to power multiple client-specific applications. The platform provides a standardized ordering and delivery workflow that can be customized for individual restaurants or stores. It supports the full lifecycle from browsing and ordering to deployment and maintenance.",
        companyId: "work-3", // Smartup
        period: "Nov 2021 – Oct 2023",
        startDate: new Date(2021, 10, 1),
        endDate: new Date(2023, 9, 31),
        type: ["professional"],
        role: ["Developer", "Technical Support"],
        teamSize: null,
        techStack: ["Flutter", "Dart"],
        highlights: [
            "Maintained over a dozen live app flavors simultaneously",
            "Ensured consistent versioning across multiple store deployments",
            "Optimized the engine for long-term code reuse",
            "Supported high-traffic delivery applications in production",
            "Managed complex multi-account store release requirements"
        ],
        keyFeatures: [
            "Flavor-based deployment system",
            "End-to-end delivery ordering engine",
            "Store version and update tracking",
            "Centralized release and deployment pipeline",
            "Internal task and maintenance coordination"
        ],
        contribution: "Fixed critical production bugs and implemented new features. Created and managed multiple white-label app flavors. Maintained internal tracking of live apps, versions, and store links. Managed full deployment processes for App Store and Google Play. Distributed maintenance and bug-fixing tasks within the team.",
        featured: false,
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.smartup.smartdelivery"
        }
    },
    {
        id: 19,
        name: "Surf (Smart Food) | Mobile App",
        shortDescription: "Loyalty-focused delivery application that rewards users by returning a percentage of their purchases to a digital wallet for future use.",
        description: "A loyalty-focused delivery application that rewards users by returning a percentage of their purchases to a digital wallet for future use. The app supports food ordering, fleet management, and digital signatures, and was designed with a business model that prioritizes customer rewards over platform commissions.",
        companyId: "work-3", // Smartup
        period: "Feb 2021 – Sep 2021",
        startDate: new Date(2021, 1, 1),
        endDate: new Date(2021, 8, 30),
        type: ["professional"],
        role: ["Developer", "Technical Support"],
        teamSize: null,
        techStack: ["Flutter", "Dart"],
        highlights: [
            "Implemented a loyalty system used by major companies such as IKEA and Intersport",
            "Delivered production-grade Flutter animations during internship period",
            "Contributed to a large-scale consumer-facing delivery platform",
            "Supported professional delivery workflows with reliable UI behavior"
        ],
        keyFeatures: [
            "Surf Wallet loyalty reward system",
            "Delivery fleet management and digital signature support",
            "Interactive store discovery with filtering",
            "Reward-based games and contests",
            "User profile customization"
        ],
        contribution: "Focused on UI-driven development for the production application. Implemented all in-app animations, including checkout transitions. Designed and built animated UI elements for the checkout flow. Created the sponsors section on the home screen. Assisted with production debugging and responsive UI support.",
        featured: false,
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.smartup.surf",
            appStore: "https://apps.apple.com/gr/app/surf/id1546354283"
        }
    },
    {
        id: 20,
        name: "Terasology HUD Redesign | Desktop",
        shortDescription: "Redesigned and improved the Heads-Up Displays (HUDs) of the open-source voxel game Terasology, focusing on clarity, information hierarchy, and player focus.",
        description: "A project developed as part of Google Summer of Code 2020, focused on redesigning and improving the Heads-Up Displays (HUDs) of the open-source voxel game Terasology. The work spanned multiple game modules, with particular focus on the Light and Shadow (LAS) and Master of Oreon (MOO) game modes. The goal was to improve clarity, information hierarchy, and player focus through both visual and technical enhancements.",
        companyId: "work-4", // Terasology Foundation
        period: "May 2020 – Sep 2020",
        startDate: new Date(2020, 4, 1),
        endDate: new Date(2020, 8, 30),
        type: ["professional", "academic"],
        role: ["Software Engineer", "Designer"],
        teamSize: null,
        techStack: ["Java", "GitHub", "Delta and Override asset systems"],
        highlights: [
            "Successfully completed the Google Summer of Code 2020 program",
            "Designed a poker-card-inspired dialogue box theme for LAS",
            "Reworked the inventory into a vertical ring-style layout",
            "Conducted competitive research on game UI best practices",
            "Implemented blueprint previews for building systems in MOO"
        ],
        keyFeatures: [
            "Vertical quickslot inventory with enhanced item visibility",
            "Dynamic scoreboard with team and victory state indicators",
            "Themed ammunition and health UI elements",
            "Dialogue box system with improved readability",
            "Interactive blueprint previews for construction workflows"
        ],
        contribution: "Redesigned HUD layout and information hierarchy for the LAS game mode. Improved the Task Selection Screen for the MOO module. Implemented code-level improvements to support new visual assets. Updated internal documentation regarding Delta and Override asset systems. Managed 51 pull requests and 9 GitHub issues during the program.",
        featured: false,
        links: {
            gist: "https://gist.github.com/stefaniamak/44ae4cb491d0bec61e77ab7cb513c721"
        }
    },
    {
        id: 15,
        name: "Virop | Mobile App",
        shortDescription: "Native Android e-commerce application developed during the COVID-19 pandemic to support the purchase of quarantine necessities.",
        description: "A native Android e-commerce application developed during the COVID-19 pandemic to support the purchase of quarantine necessities. The app provides a complete shopping experience, including product browsing, cart management, and order tracking, alongside a local administrator panel for managing users, inventory, and orders.",
        companyId: "education-1", // International Hellenic University
        period: "May 2020 – Jun 2020",
        startDate: new Date(2020, 4, 18),
        endDate: new Date(2020, 5, 11),
        type: ["academic"],
        role: ["Software Engineer", "Designer"],
        teamSize: 1,
        techStack: ["Java", "SQL"],
        highlights: [
            "Implemented session persistence using SharedPreferences",
            "Designed SQL schema with cascade update and delete rules",
            "Built a custom DrawerLayout navigation system",
            "Added real-time product performance tracking in admin views",
            "Ensured data persistence between local storage and UI components"
        ],
        keyFeatures: [
            "User registration and login with session persistence",
            "Shopping cart with persistent state",
            "Admin panels for product, user, and order management",
            "Local SQL database with multi-table schema",
            "Bottom sheet dialogs for dynamic data editing"
        ],
        contribution: "Developed the entire native Android application from scratch. Implemented all UI fragments and navigation flows. Designed and integrated a local SQL database for products and orders. Built a CartMap Hashtable system to persist shopping sessions. Created a custom administrator dashboard for managing app data.",
        featured: false,
        links: {
            github: "https://github.com/stefaniamak/Virop"
        }
    },
    {
        id: 12,
        name: "The Magic Word | Mobile App",
        shortDescription: "Educational mobile game teaching programming concepts to teenage girls through visual novel storytelling combined with interactive coding exercises.",
        description: "An educational mobile game developed as part of Google Summer of Code 2019 for the Catrobat organization. The game teaches programming concepts to teenage girls through visual novel storytelling combined with interactive coding exercises. The project bridges pedagogy, game design, and software development, with a strong focus on inclusivity and human-centered learning.",
        companyId: "work-5", // Catrobat
        period: "May 2019 – Sep 2019",
        startDate: new Date(2019, 4, 1),
        endDate: new Date(2019, 8, 30),
        type: ["academic", "professional"],
        role: ["Lead Software Engineer", "Designer", "Artist"],
        teamSize: 2,
        techStack: ["Catrobat", "Photoshop"],
        highlights: [
            "Completed as part of the highly competitive Google Summer of Code program",
            "Resulted in a peer-reviewed publication at Constructionism 2020",
            "Combined storytelling with hands-on algorithmic learning",
            "Contributed to a major Free and Open Source Software ecosystem",
            "Designed for an underrepresented demographic in software education"
        ],
        keyFeatures: [
            "Visual novel storytelling format",
            "Interactive block-based coding exercises",
            "Original 2D character and environment artwork",
            "Structured progression for learning programming concepts",
            "Themed UI and complete menu system"
        ],
        contribution: "Served as the sole developer responsible for coding, UI/UX, and graphics. Designed the narrative structure and interactive learning mechanics. Collaborated with a psychology student to apply educational design principles. Created custom character variations with new expressions and hand movements. Designed papyrus-themed UI assets and the main menu interface.",
        featured: false,
        links: {
            behance: "https://www.behance.net/gallery/97406113/The-Magic-Word-Graphics-Software-Development"
        }
    },
    {
        id: 13,
        name: "Fuzzy Logic Car Simulation | Web App",
        shortDescription: "Intelligent systems project that simulates a car's braking behavior at traffic lights using fuzzy logic rather than binary decision-making.",
        description: "An intelligent systems project that simulates a car's braking behavior at traffic lights using fuzzy logic rather than binary decision-making. The system calculates gradual speed reduction based on traffic light distance and color, aiming to mimic human driving behavior while complying with the Highway Code. The project explores how multi-valued logic can solve real-world uncertainty more naturally than strict rule-based systems.",
        companyId: "education-1", // International Hellenic University
        period: "Apr 2019 – May 2019",
        startDate: new Date(2019, 3, 8),
        endDate: new Date(2019, 4, 21),
        type: ["academic"],
        role: ["Software Engineer", "Researcher"],
        teamSize: 3,
        techStack: ["JavaScript", "p5.js"],
        highlights: [
            "Achieved smooth, human-like braking behavior",
            "Maintained compliance with traffic regulations through logic-based rules",
            "Visualized intelligent system decisions in real time",
            "Demonstrated effectiveness of fuzzy logic for uncertain environments",
            "Balanced system complexity with readable, maintainable logic"
        ],
        keyFeatures: [
            "Input fuzzification for traffic light distance and color",
            "Rule-based speed adjustment logic",
            "Real-time speed calculation visualization",
            "Gaussian and triangular membership functions",
            "Centroid-based defuzzification for car physics"
        ],
        contribution: "Implemented fuzzy rules for speed adjustment under varying conditions. Developed real-time visual charts showing speed percentage changes. Researched and compared Mamdani and Sugeno fuzzy systems. Implemented centroid-based defuzzification logic. Programmed Gaussian membership functions for distance categorization.",
        featured: false,
        links: {
            github: "https://github.com/stefaniamak/Fuzzy-Logic-Gradual-halt-of-Car-at-Traffic-Light",
            web: "https://stefaniamak.github.io/Fuzzy-Logic-Gradual-halt-of-Car-at-Traffic-Light/"
        }
    },
    {
        id: 16,
        name: "itHappens | Desktop",
        shortDescription: "Social discovery and trip-planning platform designed to help users find, organize, and participate in local events.",
        description: "A social discovery and trip-planning platform designed to help users find, organize, and participate in local events. The application allows users to track attendance, coordinate plans with friends, and manage their social calendar through a centralized interface. The project emphasizes user-centered design, collaboration, and scalable system structure.",
        companyId: "education-1", // International Hellenic University
        period: "Oct 2019 – Jan 2020",
        startDate: new Date(2019, 9, 1),
        endDate: new Date(2020, 0, 31),
        type: ["academic"],
        role: ["Team Lead", "Software Engineer", "Designer"],
        teamSize: 7,
        techStack: ["C#", "TSQL"],
        highlights: [
            "Selected by the lecturer as a reference project for future students",
            "Delivered a complete prototype covering all planned features",
            "Demonstrated effective team leadership and task coordination",
            "Balanced design, engineering, and documentation responsibilities",
            "Applied structured user-centered design methodologies"
        ],
        keyFeatures: [
            "Event discovery with category-based filtering",
            "Social participation via attending and interested lists",
            "User account creation and profile management",
            "Event creation and user-generated content support",
            "Centralized event and trip planning interface"
        ],
        contribution: "Acted as primary accountable lead for research, design, and coordination. Managed a multidisciplinary team of seven members. Designed core UI flows and high-fidelity interactive prototypes. Implemented key UI components and contributed to data handling features. Authored technical documentation and the complete project README.",
        featured: false,
        links: {
            github: "https://github.com/stefaniamak/itHappens"
        }
    },
    {
        id: 17,
        name: "Woman in a Bar | Desktop",
        shortDescription: "3D visual modeling project focused on character rigging, atmospheric lighting, and environmental storytelling.",
        description: "A 3D visual modeling project focused on character rigging, atmospheric lighting, and environmental storytelling. The project depicts a stylized bar interior featuring a human character placed within a carefully designed lighting and fog environment. Emphasis was placed on material realism, scene composition, and mood creation.",
        companyId: "education-1", // International Hellenic University
        period: "Nov 2019 – Dec 2019",
        startDate: new Date(2019, 10, 21),
        endDate: new Date(2019, 11, 11),
        type: ["academic"],
        role: ["Artist", "Designer"],
        teamSize: 1,
        techStack: ["Blender", "Photoshop"],
        highlights: [
            "Built a multi-light source setup with spotlights and emission surfaces",
            "Solved advanced hair simulation challenges",
            "Applied realistic cloth material physics for improved motion fidelity",
            "Created a procedural city background for environmental depth",
            "Used Rigify to ensure correct parent-child mesh relationships"
        ],
        keyFeatures: [
            "Humanoid character rigging with Meta-Rig armatures",
            "Atmospheric lighting and fog-based depth simulation",
            "High-detail texture unwrapping for character assets",
            "Procedural environment generation",
            "Character animation through keyframe control"
        ],
        contribution: "Modeled and rigged a humanoid 3D character including hair and clothing. Hand-painted detailed textures for skin, eyes, and facial features. Designed the bar interior with complex window shading and materials. Implemented atmospheric fog using Principled Volume nodes. Animated character movement using Dope Sheet keyframes.",
        featured: false,
        links: {
            github: "https://github.com/stefaniamak/3D-graphics"
        }
    },
    {
        id: 14,
        name: "Pizza Place Booking App | Desktop",
        shortDescription: "Desktop application for managing restaurant logistics, table reservations, and customer food orders through a unified workflow.",
        description: "A desktop application developed to manage restaurant logistics, table reservations, and customer food orders through a unified workflow. The application allows users to browse a digital menu, select specific tables through a spatial interface, and place pre-orders before arriving at the restaurant. The project was completed in five days during Stefania Makrygiannaki's second year at university and focuses on usability, clarity, and real-world restaurant constraints.",
        companyId: "education-1", // International Hellenic University
        period: "May 2018",
        startDate: new Date(2018, 4, 15),
        endDate: new Date(2018, 4, 20),
        type: ["academic"],
        role: ["Software Engineer", "Designer"],
        teamSize: 1,
        techStack: ["Java Swing"],
        highlights: [
            "Combined table reservation and food pre-ordering into a single workflow",
            "Implemented spatial mapping for realistic restaurant logistics",
            "Delivered a complete standalone academic project within a tight deadline",
            "Maintained high UI clarity for non-technical users",
            "Demonstrated early application of human-centered design principles"
        ],
        keyFeatures: [
            "Interactive top-down restaurant map",
            "Table reservation with status indicators",
            "Categorized digital menu browsing",
            "Integrated food pre-ordering system",
            "Automated order confirmation logic"
        ],
        contribution: "Developed the full desktop application from scratch using Java Swing. Designed user-centered UI flows for spatial table selection. Implemented the digital menu browsing experience. Built backend logic for order confirmation and status tracking. Created a top-down restaurant map system for real-time table management.",
        featured: false,
        links: {
            github: "https://github.com/stefaniamak/Pizza-Online-Shop"
        }
    }
];

// Helper function to find company entry by ID across all sections
function findCompanyEntry(companyId) {
    if (!companyId) return null;
    
    // Check work experience
    const workEntry = workExperienceData.find(exp => `work-${exp.id}` === companyId);
    if (workEntry) {
        return { ...workEntry, section: 'work', itemId: `work-${workEntry.id}` };
    }
    
    // Check teaching
    const teachingEntry = teachingData.find(teaching => `teaching-${teaching.id}` === companyId);
    if (teachingEntry) {
        return { ...teachingEntry, section: 'teaching', itemId: `teaching-${teachingEntry.id}` };
    }
    
    // Check education
    const educationEntry = educationData.find(edu => `education-${edu.id}` === companyId);
    if (educationEntry) {
        return { ...educationEntry, section: 'education', itemId: `education-${educationEntry.id}` };
    }
    
    return null;
}

// Helper function to navigate to company entry
function navigateToCompanyEntry(companyId) {
    const companyEntry = findCompanyEntry(companyId);
    if (!companyEntry) return;
    
    // Close project modal if open
    const modal = document.getElementById('project-modal');
    if (modal && modal.classList.contains('active')) {
        closeProjectModal();
    }
    
    // Wait for modal to close, then find and expand the company entry
    setTimeout(() => {
        const item = document.querySelector(`[data-item-id="${companyEntry.itemId}"]`);
        if (!item) return;
        
        const header = item.querySelector('.experience-header');
        if (!header) return;
        
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        
        // If not expanded, expand it first
        if (!isExpanded) {
            header.click();
        }
        
        // Wait for expansion animation, then scroll to the item
        const scrollDelay = isExpanded ? 100 : 450; // Wait longer if we just expanded
        
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
    }, 300); // Wait for modal close animation
}

// Helper function to get projects by company name (case-insensitive)
function getProjectsByCompany(companyName) {
    if (!companyName) return [];
    return projectsData.filter(project => {
        // If project has companyId, use it to find the company entry
        if (project.companyId) {
            const companyEntry = findCompanyEntry(project.companyId);
            if (companyEntry) {
                return companyEntry.company.toLowerCase().trim() === companyName.toLowerCase().trim();
            }
        }
        // Fallback to direct company field match (for backward compatibility)
        if (project.company) {
            return project.company.toLowerCase().trim() === companyName.toLowerCase().trim();
        }
        return false;
    });
}

// Create compact project card for horizontal list
function createCompactProjectCard(project, navigationContext = null) {
    const card = document.createElement('div');
    card.className = 'compact-project-card';
    card.setAttribute('data-project-id', project.id);
    
    // Extract clean name (remove platform type from name)
    const { cleanName } = extractPlatformType(project.name);
    
    // Get project type label
    const projectTypeLabel = project.type && project.type.length > 0 
        ? project.type[0].charAt(0).toUpperCase() + project.type[0].slice(1)
        : '';
    
    // Get platforms (iOS, Android, Web)
    const platforms = inferPlatforms(project);
    
    // Build minimal HTML
    let cardHTML = '';
    if (projectTypeLabel) {
        cardHTML += `<span class="compact-project-type">${projectTypeLabel}</span>`;
    }
    cardHTML += `<span class="compact-project-name">${cleanName}</span>`;
    
    // Add platform indicators (non-clickable)
    if (platforms.length > 0) {
        cardHTML += `<div class="compact-project-platforms">`;
        platforms.forEach(platform => {
            cardHTML += `<span class="compact-platform-badge">${platform}</span>`;
        });
        cardHTML += `</div>`;
    }
    
    card.innerHTML = cardHTML;
    
    // Add click handler to open project modal
    card.addEventListener('click', () => {
        // Find full project data by ID
        const fullProject = projectsData.find(p => p.id === project.id);
        if (fullProject) {
            // Use provided navigation context (company's projects list)
            openProjectModal(fullProject, false, navigationContext);
        }
    });
    
    // Add keyboard support
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Open project: ${cleanName}`);
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const fullProject = projectsData.find(p => p.id === project.id);
            if (fullProject) {
                // Use provided navigation context (company's projects list)
                openProjectModal(fullProject, false, navigationContext);
            }
        }
    });
    
    return card;
}

// Render company projects list into a container
function renderCompanyProjects(companyName, containerElement) {
    const projects = getProjectsByCompany(companyName);
    
    if (projects.length === 0) {
        return; // Don't render anything if no projects
    }
    
    // Create projects list container
    const projectsContainer = document.createElement('div');
    projectsContainer.className = 'company-projects-container';
    
    // Add title
    const title = document.createElement('div');
    title.className = 'company-projects-title';
    title.textContent = 'Related Projects';
    projectsContainer.appendChild(title);
    
    // Create horizontal scrolling list
    const projectsList = document.createElement('div');
    projectsList.className = 'company-projects-list';
    
    // Add compact project cards (pass company's projects list as navigation context)
    projects.forEach(project => {
        const card = createCompactProjectCard(project, projects);
        projectsList.appendChild(card);
    });
    
    projectsContainer.appendChild(projectsList);
    containerElement.appendChild(projectsContainer);
}

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
        item.setAttribute('data-item-id', `work-${exp.id}`);
        
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
                <div class="experience-details-title">Details</div>
                <ul>
                    ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `;
        
        experienceList.appendChild(item);
        
        // Add company projects list after the content is appended
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            renderCompanyProjects(exp.company, contentElement);
        }
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
        item.setAttribute('data-item-id', `teaching-${teaching.id}`);
        
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
                <div class="experience-details-title">Details</div>
                <ul>
                    ${teaching.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `;
        
        teachingList.appendChild(item);
        
        // Add company projects list after the content is appended
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            renderCompanyProjects(teaching.company, contentElement);
        }
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
        item.setAttribute('data-item-id', `education-${edu.id}`);
        
        const contentId = `edu-${edu.id}`;
        const datesDisplay = edu.dates;
        
        // Only show toggle if there are details to display
        const hasDetails = edu.details && edu.details.length > 0;
        const toggleButton = hasDetails ? `<span class="experience-toggle" aria-hidden="true">+</span>` : '';
        const detailsContent = hasDetails ? `
            <div class="experience-content" id="${contentId}" aria-hidden="true">
                <div class="experience-details-title">Details</div>
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
        
        // Add company projects list after the content is appended (only if content exists)
        if (hasDetails) {
            const contentElement = document.getElementById(contentId);
            if (contentElement) {
                renderCompanyProjects(edu.company, contentElement);
            }
        }
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
                // Remove hash from URL when closing
                if (window.location.hash) {
                    const itemId = item ? item.getAttribute('data-item-id') : null;
                    if (itemId && window.location.hash === `#${itemId}`) {
                        history.replaceState(null, '', window.location.pathname + window.location.search);
                    }
                }
            } else {
                header.setAttribute('aria-expanded', 'true');
                content.setAttribute('aria-hidden', 'false');
                if (item) {
                    item.classList.add('active');
                }
                // Update URL hash when opening (only if not already set to this value)
                const itemId = item ? item.getAttribute('data-item-id') : null;
                if (itemId && window.location.hash !== `#${itemId}`) {
                    history.replaceState(null, '', `#${itemId}`);
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
        // No stagger delay - all cards animate at the same speed
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

// Date parsing and formatting functions
const monthNames = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
};

const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Parse period string to startDate and endDate
function parsePeriodToDates(periodString) {
    if (!periodString) return { startDate: null, endDate: null };
    
    // Handle single month format: "May 2018"
    const singleMonthMatch = periodString.match(/^([A-Za-z]{3})\s+(\d{4})$/);
    if (singleMonthMatch) {
        const month = monthNames[singleMonthMatch[1]];
        const year = parseInt(singleMonthMatch[2]);
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month + 1, 0); // Last day of the month
        return { startDate, endDate };
    }
    
    // Handle range format: "Apr 2023 – May 2023" or "Apr 2023 - May 2023"
    const rangeMatch = periodString.match(/^([A-Za-z]{3})\s+(\d{4})\s*[–-]\s*([A-Za-z]{3})\s+(\d{4})$/);
    if (rangeMatch) {
        const startMonth = monthNames[rangeMatch[1]];
        const startYear = parseInt(rangeMatch[2]);
        const endMonth = monthNames[rangeMatch[3]];
        const endYear = parseInt(rangeMatch[4]);
        const startDate = new Date(startYear, startMonth, 1);
        const endDate = new Date(endYear, endMonth + 1, 0); // Last day of the end month
        return { startDate, endDate };
    }
    
    // Handle year-only format: "2022"
    const yearOnlyMatch = periodString.match(/^(\d{4})$/);
    if (yearOnlyMatch) {
        const year = parseInt(yearOnlyMatch[1]);
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year, 11, 31);
        return { startDate, endDate };
    }
    
    // Fallback: return null dates if parsing fails
    return { startDate: null, endDate: null };
}

// Format Date object to "MMM YYYY" format
function formatDate(date) {
    if (!date) return '';
    return `${monthAbbreviations[date.getMonth()]} ${date.getFullYear()}`;
}

// Calculate duration in years and months between two dates (matching work experience format)
function calculateDurationFromDates(startDate, endDate) {
    if (!startDate || !endDate) return '';
    
    // Calculate difference
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    
    // Adjust if end day is before start day (e.g., May 20 to Jun 11)
    if (endDate.getDate() < startDate.getDate()) {
        months--;
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Format duration (matching work experience format: "1yr 6 mos" - no space after number before yr/yrs, space before mos)
    const durationParts = [];
    if (years > 0) {
        durationParts.push(`${years}${years === 1 ? 'yr' : 'yrs'}`);
    }
    if (months > 0) {
        durationParts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`);
    }
    
    // If less than a month, show as ">1 mos"
    if (durationParts.length === 0) {
        return '>1 mos';
    }
    
    return durationParts.join(' ');
}

// Format period with duration: "Apr 2023 - May 2023 · 2 mos" or "May 2018 · >1 mos" for single month
function formatPeriodWithDuration(startDate, endDate) {
    if (!startDate || !endDate) return '';
    
    const startFormatted = formatDate(startDate);
    const endFormatted = formatDate(endDate);
    
    // Check if same month
    if (startDate.getMonth() === endDate.getMonth() && 
        startDate.getFullYear() === endDate.getFullYear()) {
        return `${startFormatted} · >1 mos`;
    }
    
    const duration = calculateDurationFromDates(startDate, endDate);
    return `${startFormatted} - ${endFormatted} · ${duration}`;
}

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
    
    // Check for JavaScript directly
    if (techLower.some(tech => tech.includes('javascript'))) {
        languages.push('JavaScript');
    }
    
    // Add more language mappings as needed
    
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

// Project Filtering (Single-select per category)
let activeFilters = {
    type: [],
    language: [],
    platform: [],
    role: []
};

// Track current filtered projects list and index for modal navigation
let currentFilteredProjects = [];
let currentProjectIndex = -1;
// Track navigation context (the list of projects to navigate through)
let currentNavigationContext = [];

// Toggle platform filter from bookmark click (single selection)
function togglePlatformFilter(platform) {
    // If this platform is already selected, deselect it
    if (activeFilters.platform.includes(platform)) {
        activeFilters.platform = [];
    } else {
        // Otherwise, select only this platform (single selection)
        activeFilters.platform = [platform];
    }
    
    // Update filter buttons - only one can be active at a time
    document.querySelectorAll('.filter-btn[data-filter-type="platform"]').forEach(btn => {
        if (btn.dataset.filterValue === platform) {
            btn.classList.toggle('active', activeFilters.platform.includes(platform));
        } else {
            btn.classList.remove('active');
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
                    <span class="filter-btn-text">${type.charAt(0).toUpperCase() + type.slice(1)}</span>
                    <span class="filter-btn-close" aria-label="Remove filter">×</span>
                </button>
            `).join('')}
        </div>
        <div class="filter-group">
            <span class="filter-label">Language:</span>
            ${languages.map(lang => `
                <button class="filter-btn multi-select" data-filter-type="language" data-filter-value="${lang}">
                    <span class="filter-btn-text">${lang}</span>
                    <span class="filter-btn-close" aria-label="Remove filter">×</span>
                </button>
            `).join('')}
        </div>
        <div class="filter-group">
            <span class="filter-label">Platform:</span>
            ${platforms.map(platform => `
                <button class="filter-btn multi-select" data-filter-type="platform" data-filter-value="${platform}">
                    <span class="filter-btn-text">${platform}</span>
                    <span class="filter-btn-close" aria-label="Remove filter">×</span>
                </button>
            `).join('')}
        </div>
        <div class="filter-group">
            <span class="filter-label">Role:</span>
            ${roles.map(role => `
                <button class="filter-btn multi-select" data-filter-type="role" data-filter-value="${role}">
                    <span class="filter-btn-text">${role}</span>
                    <span class="filter-btn-close" aria-label="Remove filter">×</span>
                </button>
            `).join('')}
        </div>
    `;
    
    // Add event listeners (single selection per category)
    document.querySelectorAll('.filter-btn.multi-select').forEach(btn => {
        // Handle click on the button (but not on the close icon)
        btn.addEventListener('click', (e) => {
            // Don't trigger if clicking the close icon
            if (e.target.classList.contains('filter-btn-close')) {
                return;
            }
            
            const filterType = btn.dataset.filterType;
            const filterValue = btn.dataset.filterValue;
            
            // Single selection: if already selected, deselect; otherwise, select only this one
            if (activeFilters[filterType].includes(filterValue)) {
                // Deselect
                activeFilters[filterType] = [];
                btn.classList.remove('active');
            } else {
                // Select only this filter (clear others in the same category)
                activeFilters[filterType] = [filterValue];
                // Update all buttons in this category
                document.querySelectorAll(`.filter-btn[data-filter-type="${filterType}"]`).forEach(b => {
                    if (b === btn) {
                        b.classList.add('active');
                    } else {
                        b.classList.remove('active');
                    }
                });
            }
            
            renderProjects();
        });
        
        // Handle click on the close icon
        const closeIcon = btn.querySelector('.filter-btn-close');
        if (closeIcon) {
            closeIcon.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent button click
                const filterType = btn.dataset.filterType;
                const filterValue = btn.dataset.filterValue;
                
                // Deselect this filter
                activeFilters[filterType] = [];
                btn.classList.remove('active');
                
                renderProjects();
            });
        }
    });
    
    // Render all projects
    renderProjects();
}

// Get filtered projects list (shared function for rendering and navigation)
function getFilteredProjects() {
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
    
    // Sort by endDate descending (newest end date first), then by startDate descending as secondary sort
    filteredProjects.sort((a, b) => {
        if (!a.endDate || !b.endDate) return 0; // Keep projects without dates in their original position
        const endDateDiff = b.endDate - a.endDate;
        if (endDateDiff !== 0) return endDateDiff;
        // If end dates are equal, sort by startDate descending
        if (!a.startDate || !b.startDate) return 0;
        return b.startDate - a.startDate;
    });
    
    return filteredProjects;
}

function renderProjects() {
    const projectGrid = document.getElementById('project-grid');
    
    // Get filtered projects
    const filteredProjects = getFilteredProjects();
    
    projectGrid.innerHTML = '';
    
    if (filteredProjects.length === 0) {
        projectGrid.innerHTML = '<p class="no-results">No projects match the selected filters.</p>';
        return;
    }
    
    filteredProjects.forEach(project => {
        const card = createProjectCard(project, filteredProjects);
        projectGrid.appendChild(card);
    });
    
    // Update bookmark states after rendering
    updateBookmarkStates();
    
    // Initialize scroll animations for project cards
    initProjectAnimations();
}

function createProjectCard(project, navigationContext = null) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-project-id', project.id);
    card.setAttribute('data-item-id', `project-${project.id}`);
    
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
    // Project type labels at top left (multiple labels in a flex container)
    // Sort types alphabetically before rendering
    const sortedTypes = [...project.type].sort();
    const typeLabelHTML = `<div class="project-type-labels">${sortedTypes.map(t => {
        const typeLabel = t.charAt(0).toUpperCase() + t.slice(1);
        return `<span class="project-type-label">${typeLabel}</span>`;
    }).join('')}</div>`;
    
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
            // Use provided navigation context or current filtered projects
            const context = navigationContext !== null ? navigationContext : getFilteredProjects();
            openProjectModal(project, false, context);
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
function openProjectModal(project, skipAnimation = false, navigationContext = null) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalContent = document.querySelector('.modal-content');
    
    // Check if modal is already open (switching projects)
    const isSwitching = modal.classList.contains('active');
    
    // Use provided navigation context or fall back to current filtered projects
    if (navigationContext !== null) {
        currentNavigationContext = navigationContext;
    } else {
        currentNavigationContext = getFilteredProjects();
    }
    
    // Store for backward compatibility (used by some functions)
    currentFilteredProjects = currentNavigationContext;
    
    // Find current index in the navigation context
    currentProjectIndex = currentNavigationContext.findIndex(p => p.id === project.id);
    
    // Update URL hash when opening project modal (only if not already set to this value)
    if (window.location.hash !== `#project-${project.id}`) {
        history.replaceState(null, '', `#project-${project.id}`);
    }
    
    // Fade out existing content if switching projects
    if (isSwitching && !skipAnimation) {
        modalTitle.style.opacity = '0';
        modalBody.style.opacity = '0';
        
        // Wait for fade out, then update content and fade in
        setTimeout(() => {
            updateModalContent(project, modalTitle, modalBody, modalContent);
        }, 150);
        return;
    }
    
    // Initial open - update content immediately
    updateModalContent(project, modalTitle, modalBody, modalContent);
}

// Update modal content (separated for reuse)
function updateModalContent(project, modalTitle, modalBody, modalContent) {
    // Scroll to top when switching projects
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
    
    // Extract clean name (remove platform type from name)
    const { cleanName, platformType } = extractPlatformType(project.name);
    
    // Get platforms (iOS, Android, Web)
    const platforms = inferPlatforms(project);
    
    // Build title HTML with project type labels and clean name
    let titleHTML = '';
    
    // Project type labels at top left (multiple labels in a flex container)
    // Sort types alphabetically before rendering
    const sortedTypes = [...project.type].sort();
    titleHTML += `<div class="modal-type-labels">${sortedTypes.map(t => {
        const typeLabel = t.charAt(0).toUpperCase() + t.slice(1);
        return `<span class="modal-type-label">${typeLabel}</span>`;
    }).join('')}</div>`;
    
    // Project name with underline animation
    titleHTML += `<div class="modal-title-wrapper"><span class="modal-title-name">${cleanName}</span></div>`;
    
    modalTitle.innerHTML = titleHTML;
    
    let bodyHTML = '';
    
    // Meta information (compact style)
    bodyHTML += '<div class="modal-meta">';
    if (project.companyId) {
        const companyEntry = findCompanyEntry(project.companyId);
        if (companyEntry) {
            const labelText = companyEntry.section === 'education' ? 'Institution:' : 'Company:';
            bodyHTML += `<div class="modal-meta-item"><span class="modal-meta-label">${labelText}</span> <span class="modal-meta-value"><a href="#" class="modal-company-link" data-company-id="${project.companyId}">${companyEntry.company}</a></span></div>`;
        }
    } else if (project.company) {
        // Fallback for projects without companyId
        bodyHTML += `<div class="modal-meta-item"><span class="modal-meta-label">Company:</span> <span class="modal-meta-value">${project.company}</span></div>`;
    }
    if (project.startDate && project.endDate) {
        const periodDisplay = formatPeriodWithDuration(project.startDate, project.endDate);
        bodyHTML += `<div class="modal-meta-item"><span class="modal-meta-label">Period:</span> <span class="modal-meta-value">${periodDisplay}</span></div>`;
    } else if (project.period) {
        // Fallback for projects without startDate/endDate
        bodyHTML += `<div class="modal-meta-item"><span class="modal-meta-label">Period:</span> <span class="modal-meta-value">${project.period}</span></div>`;
    }
    bodyHTML += `<div class="modal-meta-item"><span class="modal-meta-label">Role:</span> <span class="modal-meta-value">${project.role.join(', ')}</span></div>`;
    if (platforms.length > 0) {
        // Build platform links
        const platformLinks = platforms.map(platform => {
            let platformUrl = null;
            if (project.links) {
                if (platform === 'iOS' && project.links.appStore) {
                    platformUrl = project.links.appStore;
                } else if (platform === 'Android' && (project.links.playStore || project.links.huawei)) {
                    platformUrl = project.links.playStore || project.links.huawei;
                } else if (platform === 'Web' && (project.links.web || project.links.live)) {
                    platformUrl = project.links.web || project.links.live;
                }
            }
            
            if (platformUrl) {
                return `<a href="${platformUrl}" target="_blank" rel="noopener noreferrer" class="modal-platform-link">${platform}</a>`;
            } else {
                return `<span class="modal-platform-text">${platform}</span>`;
            }
        });
        bodyHTML += `<div class="modal-meta-item"><span class="modal-meta-label">Platforms:</span> <span class="modal-meta-value">${platformLinks.join(', ')}</span></div>`;
    }
    if (project.teamSize) {
        bodyHTML += `<div class="modal-meta-item"><span class="modal-meta-label">Team Size:</span> <span class="modal-meta-value">${project.teamSize}</span></div>`;
    }
    if (project.status) {
        bodyHTML += `<div class="modal-meta-item"><span class="modal-meta-label">Status:</span> <span class="modal-meta-value">${project.status}</span></div>`;
    }
    bodyHTML += '</div>';
    
    // Description
    bodyHTML += `<div class="modal-section"><p class="modal-description">${project.description}</p></div>`;
    
    // Contribution
    if (project.contribution) {
        bodyHTML += `<div class="modal-section"><strong class="modal-section-title">My Contribution</strong><p>${project.contribution}</p></div>`;
    }
    
    // Highlights
    if (project.highlights && project.highlights.length > 0) {
        bodyHTML += '<div class="modal-section">';
        bodyHTML += '<strong class="modal-section-title">Highlights</strong>';
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
        bodyHTML += '<strong class="modal-section-title">Key Features</strong>';
        bodyHTML += '<ul>';
        project.keyFeatures.forEach(feature => {
            bodyHTML += `<li>${feature}</li>`;
        });
        bodyHTML += '</ul>';
        bodyHTML += '</div>';
    }
    
    // Tech Stack (using tags like in cards)
    bodyHTML += '<div class="modal-section">';
    bodyHTML += '<strong class="modal-section-title">Tech Stack</strong>';
    bodyHTML += '<div class="modal-tech-stack">';
    project.techStack.forEach(tech => {
        bodyHTML += `<span class="project-tag">${tech}</span>`;
    });
    bodyHTML += '</div>';
    bodyHTML += '</div>';
    
    // Approach/Process
    if (project.approach) {
        bodyHTML += `<div class="modal-section"><strong class="modal-section-title">Approach</strong><p>${project.approach}</p></div>`;
    }
    if (project.process) {
        bodyHTML += `<div class="modal-section"><strong class="modal-section-title">Process & Tools</strong><p>${project.process}</p></div>`;
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
        if (project.links.behance) {
            bodyHTML += `<a href="${project.links.behance}" target="_blank" rel="noopener noreferrer" class="modal-link">Behance</a>`;
        }
        if (project.links.gist) {
            bodyHTML += `<a href="${project.links.gist}" target="_blank" rel="noopener noreferrer" class="modal-link">Final GSoC Report</a>`;
        }
        bodyHTML += '</div>';
    }
    
    modalBody.innerHTML = bodyHTML;
    
    // Add click handlers for company links in modal
    const companyLinks = modalBody.querySelectorAll('.modal-company-link');
    companyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const companyId = link.getAttribute('data-company-id');
            if (companyId) {
                navigateToCompanyEntry(companyId);
            }
        });
    });
    
    const modal = document.getElementById('project-modal');
    const isSwitching = modal.classList.contains('active');
    
    if (!isSwitching) {
        // Initial open
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Ensure scroll listener is attached
        attachModalScrollListener();
        
        // Reset scroll state when opening modal
        resetModalScrollState();
    }
    
    // Update navigation button states
    updateModalNavigationButtons();
    
    // Position navigation buttons based on modal position (after a brief delay to ensure modal is rendered)
    setTimeout(() => {
        positionModalNavigationButtons();
        
        // Fade in new content after positioning
        if (isSwitching) {
            const modalTitle = document.getElementById('modal-title');
            const modalBody = document.getElementById('modal-body');
            if (modalTitle && modalBody) {
                modalTitle.style.opacity = '1';
                modalBody.style.opacity = '1';
            }
        }
        
        // Check if at bottom and update button info
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            const scrollHeight = modalContent.scrollHeight;
            const clientHeight = modalContent.clientHeight;
            const currentScrollTop = modalContent.scrollTop;
            const isAtBottom = scrollHeight - currentScrollTop - clientHeight < 10;
            
            if (isAtBottom) {
                updateButtonProjectInfo();
            }
        }
    }, 50);
}

// Update navigation button states based on current position
function updateModalNavigationButtons() {
    const prevButton = document.getElementById('modal-nav-prev');
    const nextButton = document.getElementById('modal-nav-next');
    
    if (!prevButton || !nextButton) return;
    
    const totalProjects = currentNavigationContext.length;
    
    // Hide buttons if only one project
    if (totalProjects <= 1) {
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
        return;
    } else {
        prevButton.style.display = '';
        nextButton.style.display = '';
    }
    
    // Disable prev button if at first project
    if (currentProjectIndex <= 0) {
        prevButton.disabled = true;
        prevButton.setAttribute('aria-disabled', 'true');
    } else {
        prevButton.disabled = false;
        prevButton.setAttribute('aria-disabled', 'false');
    }
    
    // Disable next button if at last project
    if (currentProjectIndex >= totalProjects - 1) {
        nextButton.disabled = true;
        nextButton.setAttribute('aria-disabled', 'true');
    } else {
        nextButton.disabled = false;
        nextButton.setAttribute('aria-disabled', 'false');
    }
    
    // Update hover tooltips with project names or fallback text
    updateButtonTooltips();
}

// Update button tooltips with project names
function updateButtonTooltips() {
    const prevButton = document.getElementById('modal-nav-prev');
    const nextButton = document.getElementById('modal-nav-next');
    const prevTooltip = prevButton?.querySelector('.modal-nav-hover-tooltip');
    const nextTooltip = nextButton?.querySelector('.modal-nav-hover-tooltip');
    
    if (!prevButton || !nextButton) return;
    
    // Previous button tooltip - show project name if available, otherwise "Older Project"
    if (currentProjectIndex > 0 && currentNavigationContext.length > 0) {
        const prevProject = currentNavigationContext[currentProjectIndex - 1];
        const { cleanName } = extractPlatformType(prevProject.name);
        if (prevTooltip) {
            prevTooltip.innerHTML = '<span class="modal-nav-label-title">Previous:</span><span class="modal-nav-label-name">' + cleanName + '</span>';
        }
        prevButton.setAttribute('title', cleanName);
        prevButton.setAttribute('aria-label', `Previous project: ${cleanName}`);
    } else {
        if (prevTooltip) {
            prevTooltip.innerHTML = '<span class="modal-nav-label-title">Previous:</span><span class="modal-nav-label-name">Older Project</span>';
        }
        prevButton.setAttribute('title', 'Older Project');
        prevButton.setAttribute('aria-label', 'Older Project');
    }
    
    // Next button tooltip - show project name if available, otherwise "Newer Project"
    if (currentProjectIndex < currentNavigationContext.length - 1 && currentNavigationContext.length > 0) {
        const nextProject = currentNavigationContext[currentProjectIndex + 1];
        const { cleanName } = extractPlatformType(nextProject.name);
        if (nextTooltip) {
            nextTooltip.innerHTML = '<span class="modal-nav-label-title">Next:</span><span class="modal-nav-label-name">' + cleanName + '</span>';
        }
        nextButton.setAttribute('title', cleanName);
        nextButton.setAttribute('aria-label', `Next project: ${cleanName}`);
    } else {
        if (nextTooltip) {
            nextTooltip.innerHTML = '<span class="modal-nav-label-title">Next:</span><span class="modal-nav-label-name">Newer Project</span>';
        }
        nextButton.setAttribute('title', 'Newer Project');
        nextButton.setAttribute('aria-label', 'Newer Project');
    }
    
    // Update padding after tooltips are set
    const modalContentEl = document.querySelector('.modal-content');
    if (modalContentEl) {
        setTimeout(() => {
            // Check both tooltips to find the tallest one
            const prevHeight = prevTooltip?.offsetHeight || 0;
            const nextHeight = nextTooltip?.offsetHeight || 0;
            const maxCardHeight = Math.max(prevHeight, nextHeight);
            if (maxCardHeight > 0) {
                const bottomPadding = Math.max(88, maxCardHeight + 40);
                modalContentEl.style.paddingBottom = `${bottomPadding}px`;
            }
        }, 10);
    }
}

// Navigate to previous project
function navigateToPreviousProject() {
    if (currentProjectIndex <= 0 || currentNavigationContext.length === 0) return;
    
    // Restore opacity when clicked
    restoreButtonOpacity();
    
    const previousProject = currentNavigationContext[currentProjectIndex - 1];
    if (previousProject) {
        // Pass the current navigation context to maintain it
        openProjectModal(previousProject, false, currentNavigationContext);
    }
}

// Navigate to next project
function navigateToNextProject() {
    if (currentProjectIndex >= currentNavigationContext.length - 1 || currentNavigationContext.length === 0) return;
    
    // Restore opacity when clicked
    restoreButtonOpacity();
    
    const nextProject = currentNavigationContext[currentProjectIndex + 1];
    if (nextProject) {
        // Pass the current navigation context to maintain it
        openProjectModal(nextProject, false, currentNavigationContext);
    }
}

// Track previous button position state for animation
let previousButtonPosition = null; // 'sides' or 'bottom'
let isPositionAnimating = false; // Flag to prevent scroll opacity changes during animation
let positionAnimationTimeouts = []; // Array of timeout references for canceling animations

// Position navigation buttons based on modal's actual position
function positionModalNavigationButtons() {
    const modal = document.getElementById('project-modal');
    const modalContent = document.querySelector('.modal-content');
    const prevButton = document.getElementById('modal-nav-prev');
    const nextButton = document.getElementById('modal-nav-next');
    
    if (!modal || !modalContent || !prevButton || !nextButton) return;
    
    // Only position on desktop (mobile uses CSS only)
    if (window.innerWidth <= 767) {
        // Reset any desktop positioning styles - let CSS handle mobile
        prevButton.style.top = '';
        prevButton.style.left = '';
        prevButton.style.right = '';
        prevButton.style.bottom = '';
        prevButton.style.transform = '';
        prevButton.classList.remove('modal-nav-bottom');
        
        nextButton.style.top = '';
        nextButton.style.left = '';
        nextButton.style.right = '';
        nextButton.style.bottom = '';
        nextButton.style.transform = '';
        nextButton.classList.remove('modal-nav-bottom');
        previousButtonPosition = null;
        return;
    }
    
    // Get modal content position
    const modalRect = modalContent.getBoundingClientRect();
    const buttonOffset = 64; // Distance from modal edge
    const minSpacing = 24; // Minimum spacing from browser edge
    const cardWidth = 240; // Max width of the label card
    const cardSpacing = 12; // Spacing between button and card
    
    const leftSpace = modalRect.left;
    const rightSpace = window.innerWidth - modalRect.right;
    
    // Check if buttons AND their cards fit on sides
    // Need space for: button offset + button width + card spacing + card width + min spacing
    const buttonWidth = 48; // Desktop button width
    const totalLeftSpaceNeeded = buttonOffset + buttonWidth + cardSpacing + cardWidth + minSpacing;
    const totalRightSpaceNeeded = buttonOffset + buttonWidth + cardSpacing + cardWidth + minSpacing;
    
    const buttonsFitOnSides = leftSpace >= totalLeftSpaceNeeded && rightSpace >= totalRightSpaceNeeded;
    
    // Determine new position
    const newPosition = buttonsFitOnSides ? 'sides' : 'bottom';
    
    // Helper function to get target opacity based on scroll
    function getTargetOpacity() {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            const currentScrollTop = modalContent.scrollTop;
            const scrollHeight = modalContent.scrollHeight;
            const clientHeight = modalContent.clientHeight;
            const isAtBottom = scrollHeight - currentScrollTop - clientHeight < 10;
            
            if (isAtBottom) {
                return '1'; // Full opacity at bottom
            }
            if (!isAtBottom && currentScrollTop > 0) {
                return '0.3'; // Low opacity when scrolling down
            }
        }
        return '0.9'; // Default opacity (90%)
    }
    
    // Check if position changed and animate transition
    const positionChanged = previousButtonPosition !== null && previousButtonPosition !== newPosition;
    
    if (positionChanged) {
        // Cancel any ongoing animations and restore opacity immediately
        positionAnimationTimeouts.forEach(timeout => clearTimeout(timeout));
        positionAnimationTimeouts = [];
        
        // If we're canceling an animation, restore opacity first
        if (isPositionAnimating) {
            const targetOpacity = getTargetOpacity();
            prevButton.style.transition = 'opacity 0.3s ease';
            nextButton.style.transition = 'opacity 0.3s ease';
            prevButton.style.opacity = targetOpacity;
            nextButton.style.opacity = targetOpacity;
            // Update shadow state based on opacity
            if (targetOpacity === '0.3') {
                prevButton.classList.add('modal-nav-faded');
                nextButton.classList.add('modal-nav-faded');
            } else {
                prevButton.classList.remove('modal-nav-faded');
                nextButton.classList.remove('modal-nav-faded');
            }
        }
        
        // Reset animation state
        isPositionAnimating = true;
        
        // IMPORTANT: Reposition buttons INSTANTLY (no animation) while visible
        // This ensures position change happens immediately, separate from fade
        applyButtonPosition(prevButton, nextButton, modalRect, newPosition, buttonOffset, leftSpace, rightSpace);
        
        // Now fade out buttons at new position
        prevButton.style.transition = 'opacity 0.3s ease';
        nextButton.style.transition = 'opacity 0.3s ease';
        prevButton.style.opacity = '0';
        nextButton.style.opacity = '0';
        
        // Fade in at new position
        const timeout1 = setTimeout(() => {
            const targetOpacity = getTargetOpacity();
            
            // Fade in at new position
            prevButton.style.opacity = targetOpacity;
            nextButton.style.opacity = targetOpacity;
            // Update shadow state based on opacity
            if (targetOpacity === '0.3') {
                prevButton.classList.add('modal-nav-faded');
                nextButton.classList.add('modal-nav-faded');
            } else {
                prevButton.classList.remove('modal-nav-faded');
                nextButton.classList.remove('modal-nav-faded');
            }
            
            // Remove transition override after animation completes
            const timeout2 = setTimeout(() => {
                prevButton.style.transition = '';
                nextButton.style.transition = '';
                isPositionAnimating = false;
                positionAnimationTimeouts = [];
            }, 300);
            positionAnimationTimeouts.push(timeout2);
        }, 300);
        positionAnimationTimeouts.push(timeout1);
    } else {
        // No position change, just apply position directly
        // Cancel any ongoing animations since position didn't change
        positionAnimationTimeouts.forEach(timeout => clearTimeout(timeout));
        positionAnimationTimeouts = [];
        
        // Restore proper opacity if animation was in progress
        if (isPositionAnimating) {
            const targetOpacity = getTargetOpacity();
            prevButton.style.transition = 'opacity 0.3s ease';
            nextButton.style.transition = 'opacity 0.3s ease';
            prevButton.style.opacity = targetOpacity;
            nextButton.style.opacity = targetOpacity;
            // Update shadow state based on opacity
            if (targetOpacity === '0.3') {
                prevButton.classList.add('modal-nav-faded');
                nextButton.classList.add('modal-nav-faded');
            } else {
                prevButton.classList.remove('modal-nav-faded');
                nextButton.classList.remove('modal-nav-faded');
            }
        }
        
        isPositionAnimating = false;
        applyButtonPosition(prevButton, nextButton, modalRect, newPosition, buttonOffset, leftSpace, rightSpace);
    }
    
    previousButtonPosition = newPosition;
}

// Apply button position (extracted for reuse)
function applyButtonPosition(prevButton, nextButton, modalRect, position, buttonOffset, leftSpace, rightSpace) {
    // Store current transition to restore it after position change
    const prevTransition = prevButton.style.transition || '';
    const nextTransition = nextButton.style.transition || '';
    
    // Temporarily disable all transitions to ensure instant position change
    prevButton.style.transition = 'none';
    nextButton.style.transition = 'none';
    
    if (position === 'sides') {
        // Position on sides - based on modal's actual position
        prevButton.classList.remove('modal-nav-bottom');
        nextButton.classList.remove('modal-nav-bottom');
        
        // Position based on modal's actual position
        const modalCenterY = modalRect.top + (modalRect.height / 2);
        const prevLeft = modalRect.left - buttonOffset;
        const nextRight = window.innerWidth - modalRect.right - buttonOffset;
        
        prevButton.style.top = `${modalCenterY}px`;
        prevButton.style.left = `${prevLeft}px`;
        prevButton.style.right = 'auto';
        prevButton.style.bottom = 'auto';
        prevButton.style.transform = 'translateY(-50%)';
        
        nextButton.style.top = `${modalCenterY}px`;
        nextButton.style.right = `${nextRight}px`;
        nextButton.style.left = 'auto';
        nextButton.style.bottom = 'auto';
        nextButton.style.transform = 'translateY(-50%)';
    } else {
        // Position at bottom center - within modal, relative to modal's bottom
        prevButton.classList.add('modal-nav-bottom');
        nextButton.classList.add('modal-nav-bottom');
        
        // Position relative to modal's bottom edge (20px from modal bottom, centered horizontally)
        const bottomOffset = 20;
        const modalBottom = modalRect.bottom;
        const modalCenterX = modalRect.left + (modalRect.width / 2);
        const buttonY = window.innerHeight - modalBottom + bottomOffset;
        
        prevButton.style.top = 'auto';
        prevButton.style.bottom = `${buttonY}px`;
        prevButton.style.left = `${modalCenterX}px`;
        prevButton.style.right = 'auto';
        prevButton.style.transform = 'translateX(calc(-100% - 12px))';
        
        nextButton.style.top = 'auto';
        nextButton.style.bottom = `${buttonY}px`;
        nextButton.style.right = `${window.innerWidth - modalCenterX}px`;
        nextButton.style.left = 'auto';
        nextButton.style.transform = 'translateX(calc(100% + 12px))';
    }
    
    // Force reflow to ensure position is applied instantly before restoring transition
    void prevButton.offsetHeight;
    void nextButton.offsetHeight;
    
    // Restore the original transition (which should only be for opacity)
    prevButton.style.transition = prevTransition;
    nextButton.style.transition = nextTransition;
}

// Update button positions on window resize - instant, no debounce
window.addEventListener('resize', () => {
    const modal = document.getElementById('project-modal');
    if (modal && modal.classList.contains('active')) {
        positionModalNavigationButtons();
    }
});

// Track scroll for button opacity
let lastScrollTop = 0;

function handleModalScroll() {
    const modal = document.getElementById('project-modal');
    const modalContent = document.querySelector('.modal-content');
    const prevButton = document.getElementById('modal-nav-prev');
    const nextButton = document.getElementById('modal-nav-next');
    
    if (!modal || !modal.classList.contains('active') || !modalContent || !prevButton || !nextButton) {
        return;
    }
    
    // Don't change opacity during position animation
    if (isPositionAnimating) {
        return;
    }
    
    const currentScrollTop = modalContent.scrollTop;
    const scrollHeight = modalContent.scrollHeight;
    const clientHeight = modalContent.clientHeight;
    const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';
    
    // Check if scrolled to bottom (with small threshold for rounding)
    const isAtBottom = scrollHeight - currentScrollTop - clientHeight < 10;
    
    if (isAtBottom) {
        // At bottom - make buttons fully opaque and show project info
        prevButton.style.opacity = '1';
        nextButton.style.opacity = '1';
        prevButton.classList.remove('modal-nav-faded');
        nextButton.classList.remove('modal-nav-faded');
        updateButtonProjectInfo();
    } else if (scrollDirection === 'down' && currentScrollTop > 0) {
        // Fade out when scrolling down (but keep clickable)
        prevButton.style.opacity = '0.3';
        nextButton.style.opacity = '0.3';
        prevButton.classList.add('modal-nav-faded');
        nextButton.classList.add('modal-nav-faded');
        hideButtonProjectInfo();
    } else if (scrollDirection === 'up' || currentScrollTop === 0) {
        // Fade in when scrolling up or at top
        prevButton.style.opacity = '0.9';
        nextButton.style.opacity = '0.9';
        prevButton.classList.remove('modal-nav-faded');
        nextButton.classList.remove('modal-nav-faded');
        hideButtonProjectInfo();
    }
    
    lastScrollTop = currentScrollTop;
}

// Update button project info when at bottom
function updateButtonProjectInfo() {
    const prevButton = document.getElementById('modal-nav-prev');
    const nextButton = document.getElementById('modal-nav-next');
    const prevInfo = prevButton?.querySelector('.modal-nav-info');
    const nextInfo = nextButton?.querySelector('.modal-nav-info');
    const contentElement = document.querySelector('.modal-content');
    
    if (!prevInfo || !nextInfo || !contentElement) return;
    
    // Get previous project info
    if (currentProjectIndex > 0 && currentNavigationContext.length > 0) {
        const prevProject = currentNavigationContext[currentProjectIndex - 1];
        const { cleanName } = extractPlatformType(prevProject.name);
        prevInfo.innerHTML = '<span class="modal-nav-label-title">Previous:</span><span class="modal-nav-label-name">' + cleanName + '</span>';
        prevButton.classList.add('modal-nav-show-info');
    } else {
        prevInfo.textContent = '';
        prevButton.classList.remove('modal-nav-show-info');
    }
    
    // Get next project info
    if (currentProjectIndex < currentNavigationContext.length - 1 && currentNavigationContext.length > 0) {
        const nextProject = currentNavigationContext[currentProjectIndex + 1];
        const { cleanName } = extractPlatformType(nextProject.name);
        nextInfo.innerHTML = '<span class="modal-nav-label-title">Next:</span><span class="modal-nav-label-name">' + cleanName + '</span>';
        nextButton.classList.add('modal-nav-show-info');
    } else {
        nextInfo.textContent = '';
        nextButton.classList.remove('modal-nav-show-info');
    }
    
    // Update bottom padding to match card height
    // Wait for DOM to update, then measure card height
    setTimeout(() => {
        const visibleInfo = prevInfo.offsetParent ? prevInfo : (nextInfo.offsetParent ? nextInfo : null);
        if (visibleInfo && visibleInfo.offsetHeight > 0) {
            const cardHeight = visibleInfo.offsetHeight;
            const bottomPadding = Math.max(88, cardHeight + 40); // Minimum 88px, or card height + spacing
            contentElement.style.paddingBottom = `${bottomPadding}px`;
        }
    }, 10);
}

// Hide project info from buttons
function hideButtonProjectInfo() {
    const prevButton = document.getElementById('modal-nav-prev');
    const nextButton = document.getElementById('modal-nav-next');
    
    if (prevButton) {
        prevButton.classList.remove('modal-nav-show-info');
    }
    if (nextButton) {
        nextButton.classList.remove('modal-nav-show-info');
    }
}

// Restore button opacity when clicked
function restoreButtonOpacity() {
    const prevButton = document.getElementById('modal-nav-prev');
    const nextButton = document.getElementById('modal-nav-next');
    if (prevButton) {
        prevButton.style.opacity = '0.9';
        prevButton.classList.remove('modal-nav-faded');
    }
    if (nextButton) {
        nextButton.style.opacity = '0.9';
        nextButton.classList.remove('modal-nav-faded');
    }
    hideButtonProjectInfo();
}

// Add scroll listener to modal content (attach when modal opens)
let scrollListenerAttached = false;

function attachModalScrollListener() {
    if (scrollListenerAttached) return;
    
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('scroll', handleModalScroll, { passive: true });
        scrollListenerAttached = true;
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    attachModalScrollListener();
});

// Reset scroll position and button opacity when modal opens
function resetModalScrollState() {
    lastScrollTop = 0;
    const prevButton = document.getElementById('modal-nav-prev');
    const nextButton = document.getElementById('modal-nav-next');
    if (prevButton && nextButton) {
        prevButton.style.opacity = '0.9';
        nextButton.style.opacity = '0.9';
        prevButton.classList.remove('modal-nav-faded');
        nextButton.classList.remove('modal-nav-faded');
    }
    hideButtonProjectInfo();
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    // Disable navigation buttons when modal is closed
    const prevButton = document.getElementById('modal-nav-prev');
    const nextButton = document.getElementById('modal-nav-next');
    if (prevButton) {
        prevButton.disabled = true;
        prevButton.setAttribute('aria-disabled', 'true');
    }
    if (nextButton) {
        nextButton.disabled = true;
        nextButton.setAttribute('aria-disabled', 'true');
    }
    
    // Remove hash from URL when closing modal
    if (window.location.hash && window.location.hash.startsWith('#project-')) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }
}

// Modal Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const prevButton = document.getElementById('modal-nav-prev');
    const nextButton = document.getElementById('modal-nav-next');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProjectModal);
    }
    if (prevButton) {
        // Use touchend for immediate navigation on mobile (fires before click)
        // This ensures navigation happens on first tap, not waiting for click
        let touchHandled = false;
        const handlePrevTouch = (e) => {
            if (!touchHandled) {
                touchHandled = true;
                e.preventDefault();
                e.stopPropagation();
                navigateToPreviousProject();
                // Reset flag after a short delay to allow for rapid taps
                setTimeout(() => { touchHandled = false; }, 100);
            }
        };
        prevButton.addEventListener('touchend', handlePrevTouch, { passive: false });
        prevButton.addEventListener('click', (e) => {
            // On mobile, touchend already handled it, so prevent duplicate navigation
            if (touchHandled) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            navigateToPreviousProject();
        });
        
        // Make info card clickable
        const prevInfo = prevButton.querySelector('.modal-nav-info');
        if (prevInfo) {
            let prevInfoTouchHandled = false;
            const handlePrevInfoTouch = (e) => {
                if (!prevInfoTouchHandled) {
                    prevInfoTouchHandled = true;
                    e.preventDefault();
                    e.stopPropagation();
                    navigateToPreviousProject();
                    setTimeout(() => { prevInfoTouchHandled = false; }, 100);
                }
            };
            prevInfo.addEventListener('touchend', handlePrevInfoTouch, { passive: false });
            prevInfo.addEventListener('click', (e) => {
                if (prevInfoTouchHandled) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                e.stopPropagation();
                navigateToPreviousProject();
            });
        }
        // Make hover tooltip clickable
        const prevTooltip = prevButton.querySelector('.modal-nav-hover-tooltip');
        if (prevTooltip) {
            let prevTooltipTouchHandled = false;
            const handlePrevTooltipTouch = (e) => {
                if (!prevTooltipTouchHandled) {
                    prevTooltipTouchHandled = true;
                    e.preventDefault();
                    e.stopPropagation();
                    navigateToPreviousProject();
                    setTimeout(() => { prevTooltipTouchHandled = false; }, 100);
                }
            };
            prevTooltip.addEventListener('touchend', handlePrevTooltipTouch, { passive: false });
            prevTooltip.addEventListener('click', (e) => {
                if (prevTooltipTouchHandled) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                e.stopPropagation();
                navigateToPreviousProject();
            });
        }
    }
    if (nextButton) {
        // Use touchend for immediate navigation on mobile (fires before click)
        // This ensures navigation happens on first tap, not waiting for click
        let touchHandled = false;
        const handleNextTouch = (e) => {
            if (!touchHandled) {
                touchHandled = true;
                e.preventDefault();
                e.stopPropagation();
                navigateToNextProject();
                // Reset flag after a short delay to allow for rapid taps
                setTimeout(() => { touchHandled = false; }, 100);
            }
        };
        nextButton.addEventListener('touchend', handleNextTouch, { passive: false });
        nextButton.addEventListener('click', (e) => {
            // On mobile, touchend already handled it, so prevent duplicate navigation
            if (touchHandled) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            navigateToNextProject();
        });
        
        // Make info card clickable
        const nextInfo = nextButton.querySelector('.modal-nav-info');
        if (nextInfo) {
            let nextInfoTouchHandled = false;
            const handleNextInfoTouch = (e) => {
                if (!nextInfoTouchHandled) {
                    nextInfoTouchHandled = true;
                    e.preventDefault();
                    e.stopPropagation();
                    navigateToNextProject();
                    setTimeout(() => { nextInfoTouchHandled = false; }, 100);
                }
            };
            nextInfo.addEventListener('touchend', handleNextInfoTouch, { passive: false });
            nextInfo.addEventListener('click', (e) => {
                if (nextInfoTouchHandled) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                e.stopPropagation();
                navigateToNextProject();
            });
        }
        // Make hover tooltip clickable
        const nextTooltip = nextButton.querySelector('.modal-nav-hover-tooltip');
        if (nextTooltip) {
            let nextTooltipTouchHandled = false;
            const handleNextTooltipTouch = (e) => {
                if (!nextTooltipTouchHandled) {
                    nextTooltipTouchHandled = true;
                    e.preventDefault();
                    e.stopPropagation();
                    navigateToNextProject();
                    setTimeout(() => { nextTooltipTouchHandled = false; }, 100);
                }
            };
            nextTooltip.addEventListener('touchend', handleNextTooltipTouch, { passive: false });
            nextTooltip.addEventListener('click', (e) => {
                if (nextTooltipTouchHandled) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                e.stopPropagation();
                navigateToNextProject();
            });
        }
    }
    
    // Drag-to-dismiss for mobile bottom sheet
    initModalDragToDismiss();
});

// Drag-to-dismiss functionality for mobile bottom sheet
function initModalDragToDismiss() {
        const modal = document.getElementById('project-modal');
    const modalContent = document.querySelector('.modal-content');
    
    if (!modal || !modalContent) return;
    
    let touchStartY = 0;
    let touchCurrentY = 0;
    let isDragging = false;
    let scrollTop = 0;
    
    // Check if we're on mobile
    function isMobile() {
        return window.innerWidth <= 767;
    }
    
    modalContent.addEventListener('touchstart', (e) => {
        if (!isMobile() || !modal.classList.contains('active')) return;
        
        // Only start drag if touching near the top of the modal or if content is scrolled to top
        scrollTop = modalContent.scrollTop;
        const touchY = e.touches[0].clientY;
        const modalRect = modalContent.getBoundingClientRect();
        const touchOffsetFromTop = touchY - modalRect.top;
        
        // Allow drag if scrolled to top or touching in top 120px of modal (includes drag handle area)
        if (scrollTop === 0 || touchOffsetFromTop < 120) {
            touchStartY = touchY;
            isDragging = true;
            modalContent.style.transition = 'none'; // Disable transition during drag
        }
    }, { passive: true });
    
    modalContent.addEventListener('touchmove', (e) => {
        if (!isMobile() || !isDragging || !modal.classList.contains('active')) return;
        
        touchCurrentY = e.touches[0].clientY;
        const deltaY = touchCurrentY - touchStartY;
        
        // Only allow dragging down (positive deltaY)
        if (deltaY > 0) {
            // Prevent scrolling while dragging
            if (scrollTop === 0) {
                e.preventDefault();
            }
            
            // Apply transform to show drag feedback
            modalContent.style.transform = `translateY(${deltaY}px)`;
            
            // Add opacity fade based on drag distance
            const maxDrag = 200; // Maximum drag distance for full fade
            const opacity = Math.max(0.3, 1 - (deltaY / maxDrag));
            modalContent.style.opacity = opacity;
        }
    }, { passive: false });
    
    modalContent.addEventListener('touchend', () => {
        if (!isMobile() || !isDragging || !modal.classList.contains('active')) return;
        
        isDragging = false;
        const deltaY = touchCurrentY - touchStartY;
        const threshold = 100; // Minimum drag distance to close (in pixels)
        
        // Re-enable transition
        modalContent.style.transition = '';
        
        if (deltaY > threshold) {
            // Close modal if dragged down enough
            closeProjectModal();
        } else {
            // Snap back to original position
            modalContent.style.transform = '';
            modalContent.style.opacity = '';
        }
        
        // Reset values
        touchStartY = 0;
        touchCurrentY = 0;
    }, { passive: true });
    
    // Reset transform when modal closes
    const observer = new MutationObserver(() => {
        if (!modal.classList.contains('active')) {
            modalContent.style.transform = '';
            modalContent.style.opacity = '';
            modalContent.style.transition = '';
        }
    });
    
    observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
}

// Close modal on Escape key and handle arrow key navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('project-modal');
    if (!modal || !modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeProjectModal();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateToPreviousProject();
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateToNextProject();
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

// Handle URL hash to expand items on page load
function handleHashNavigation() {
    const hash = window.location.hash;
    if (!hash) return;
    
    const itemId = hash.substring(1); // Remove the #
    
    // Check if it's a project
    if (itemId.startsWith('project-')) {
        const projectId = parseInt(itemId.replace('project-', ''));
        const project = projectsData.find(p => p.id === projectId);
        if (project) {
            // Wait for projects to be rendered
            setTimeout(() => {
                openProjectModal(project);
            }, 100);
        }
        return;
    }
    
    // Check if it's a work experience, teaching, or education item
    const item = document.querySelector(`[data-item-id="${itemId}"]`);
    if (item) {
        const header = item.querySelector('.experience-header');
        if (header && header.getAttribute('aria-expanded') === 'false') {
            // Wait a bit for animations to settle, then expand
            setTimeout(() => {
                header.click();
            }, 300);
        }
    }
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
    
    // Handle hash navigation after everything is rendered
    setTimeout(() => {
        handleHashNavigation();
    }, 500);
    
    // Listen for hash changes (e.g., browser back/forward)
    window.addEventListener('hashchange', () => {
        // If hash is removed, close any open modals or expanded items
        if (!window.location.hash) {
            const modal = document.getElementById('project-modal');
            if (modal && modal.classList.contains('active')) {
                closeProjectModal();
            }
            // Close all expanded experience items
            document.querySelectorAll('.experience-header[aria-expanded="true"]').forEach(header => {
                header.click();
            });
        } else {
            handleHashNavigation();
        }
    });
});
