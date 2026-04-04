export const PROJECTS = [
  {
    id: 'smart-classroom',
    title: 'Smart Classroom System',
    subtitle: 'Full-Stack MERN Platform',
    shortDesc:
      'Full-stack MERN platform for students and faculty featuring QR-based attendance, real-time chat, timetable management, and academic analytics.',
    overview:
      'A comprehensive university interaction platform built to modernize campus communication and academic management. The system serves both students and faculty with distinct role-based dashboards, enabling seamless interaction and data-driven academic decisions.',
    highlights: [
      'QR-code based attendance system with automatic tracking and reporting',
      'Real-time chat between students and faculty using WebSockets',
      'Dynamic timetable management with scheduling and conflict detection',
      'Academic analytics dashboard with performance trend visualizations',
      'Role-based access control with JWT-secured authentication',
      'RESTful API backend powering a responsive React frontend',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'JWT'],
    year: '2024',
    github: 'https://github.com/jeyeshkarthik/smart-classroom-system',
    status: 'Completed',
    accent: '#7c6af7',
  },
  {
    id: 'metro-ticket',
    title: 'Metro Ticket Booking',
    subtitle: 'Transit Booking Platform',
    shortDesc:
      'Metro ticketing app with BFS route finding, live train schedules, booking history, and a complete Oracle database backend.',
    overview:
      'A complete metro ticket booking web application that simulates a real-world transit system. Built with a focus on algorithmic efficiency and relational database design, it provides an end-to-end booking experience from route discovery to ticket confirmation.',
    highlights: [
      'BFS-based shortest route finding algorithm across the metro network',
      'Live train schedule display and real-time status updates',
      'Complete booking history and e-ticket management system',
      'Oracle database with normalized schema and optimized queries',
      'Fare calculation engine based on distance and zone classifications',
      'User authentication with secure session management',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Oracle DB', 'Node.js'],
    year: '2024',
    github: 'https://github.com/jeyeshkarthik/metro-ticket-booking-system',
    status: 'Completed',
    accent: '#4facfe',
  },
  {
    id: 'games-website',
    title: 'GameZone',
    subtitle: 'Full-Stack Gaming Platform',
    shortDesc:
      'A modern full-stack gaming website with multiple browser-based games and persistent global leaderboards powered by Node.js and SQLite.',
    overview:
      'A complete gaming platform featuring multiple browser-based games with real persistent global leaderboards. Built with React and Vite on the frontend and an Express + SQLite backend, GameZone delivers a polished gaming experience with a real competitive element.',
    highlights: [
      'Multiple browser-based games including Snake, Minesweeper, and Tic-Tac-Toe',
      'Global leaderboard system with persistent SQLite database',
      'Real-time score saving and ranking via REST API',
      'Modern React frontend built with Vite for fast load times',
      'Express.js backend with full CRUD operations for scores',
      'Fully responsive design across desktop, tablet, and mobile',
    ],
    tech: ['React', 'Vite', 'Node.js', 'Express', 'SQLite'],
    year: '2025',
    github: 'https://github.com/jeyeshkarthik/games-website',
    status: 'Completed',
    accent: '#43e97b',
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis Projects',
    subtitle: 'Exploratory Data Analysis with Python',
    shortDesc:
      'EDA on NYC school performance and Netflix datasets — statistical analysis, data cleaning, and visualizations using Python.',
    overview:
      'A series of data analysis projects built to explore real-world datasets and extract meaningful insights. These projects cover the complete EDA pipeline — from raw data ingestion and cleaning through to statistical analysis and publication-quality visualizations.',
    highlights: [
      'EDA on NYC school performance data revealing borough-wide academic patterns',
      'Netflix movie dataset analysis uncovering decade-based production trends',
      'Data cleaning and transformation pipelines built with Pandas',
      'Statistical analysis using NumPy for numerical pattern detection',
      'Rich visualizations with Matplotlib and Seaborn (heatmaps, bar charts, distributions)',
      'Documented findings and insight summaries for each dataset explored',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    year: '2023',
    github: null,
    status: 'Completed',
    accent: '#f7971e',
  },
  {
    id: 'iot-research',
    title: 'IoT Smart Home Privacy',
    subtitle: 'Academic Research Paper',
    shortDesc:
      'Investigating privacy-preserving architectures and trust frameworks for IoT-based smart home environments.',
    overview:
      'An ongoing research paper investigating the intersection of IoT device security, privacy architecture, and trust management in smart home environments. The research systematically evaluates existing frameworks and proposes improvements grounded in decentralized trust models.',
    highlights: [
      'Investigating privacy-preserving architectures for connected smart home devices',
      'Analyzing and comparing trust frameworks across IoT ecosystems',
      'Comprehensive literature review on device authentication models',
      'Studying data security protocols and decentralized trust mechanisms',
      'Evaluating compliance with GDPR and privacy-by-design principles',
      'Proposing a risk-tiered mitigation strategy for identified vulnerabilities',
    ],
    tech: ['IoT Security', 'Python', 'Research Methodology', 'Literature Review'],
    year: '2025',
    github: null,
    status: 'In Progress',
    accent: '#ee0979',
  },
];

export const SKILLS = [
  { category: 'Languages', emoji: '⌨️', items: ['Python', 'Java', 'C', 'C++', 'JavaScript'] },
  { category: 'Frontend', emoji: '🎨', items: ['React', 'HTML5', 'CSS3', 'Vite'] },
  { category: 'Backend', emoji: '⚙️', items: ['Node.js', 'Express', 'REST APIs', 'Socket.io'] },
  { category: 'Data Science', emoji: '📊', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { category: 'Database', emoji: '🗄️', items: ['MongoDB', 'SQLite', 'Oracle DB', 'SQL'] },
  { category: 'DevOps', emoji: '🚀', items: ['Docker', 'Nginx', 'Git', 'CI/CD'] },
];
