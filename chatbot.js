// Portfolio Chatbot
class PortfolioChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];

        this.portfolioData = {
            name: "Righteous Onyedi Nhlanhla Mpila Nwariwe",
            title: "Software Developer | Data Analyst | Power BI & SQL | Web Developer | Passion for AI & Cybersecurity",
            profileSummary:
                "An ambitious tech enthusiast with strong programming skills in SQL, Python, JavaScript, HTML, CSS, and web technologies. Experienced in full-stack development, API integration, and data analytics, with active participation in industry events and leadership roles.",
            skills: {
                technical: [
                    "Python", "HTML/CSS", "JavaScript", "SQL", "PowerBI"
                ],
                software: [
                    "Web Application Development",
                    "Full-Stack Development",
                    "UI/UX Design",
                    "Database Management",
                    "API Integration"
                ],
                professional: [
                    "Communication",
                    "Leadership",
                    "Teamwork",
                    "Adaptability",
                    "Problem Solving",
                    "Ability to Work Under Pressure"
                ]
            },
            education: {
                institution: "North-West University, Vanderbijlpark",
                degree: "Bachelor of Science (BSc) in Information Technology",
                period: "February 2023 – 2025"
            },
            certifications: [
                "Diploma in Quantum Computing & Programming – QSouthAfrica (July 2023)",
                "FNB App Academy 2025 – Certificate in Full Stack Development (24 July 2025)",
                "Introduction to SQL(Certificate) – Sololearn (07 January, 2026)"
            ],
            academicDocuments: [
                "Final Academic Transcript – BSc in Information Technology, North-West University",
                "Completion Letter – North-West University Program Completion Confirmation"
            ],
            experience: [
                {
                    title: "Recruitment Officer – Geekulcha (NWU Vaal Campus)",
                    period: "March 2024 – November 2024",
                    details: [
                        "Planned and developed web applications",
                        "Integrated databases using C#",
                        "Facilitated HTML/CSS training",
                        "Managed solo and team-based projects"
                    ]
                },
                {
                    title: "Treasurer – Faculty of Natural and Agricultural Sciences (NWU)",
                    period: "2024 – 2025",
                    details: [
                        "Managed faculty budgets and financial records",
                        "Prepared financial reports",
                        "Ensured transparency and accountability"
                    ]
                },
                {
                    title: "Class Representative – MTHS 225",
                    period: "2024",
                    details: [
                        "Liaison between students and lecturers",
                        "Organised study sessions",
                        "Resolved academic concerns"
                    ]
                },
                {
                    title: "Web Developer & Data Handler – SneakyFinds (Self-Employed)",
                    period: "Jan 2025 – Dec 2025",
                    details: [
                        "Developed full-stack platform using Firebase",
                        "Designed UI/UX",
                        "Managed database and backend logic",
                        "Conducted business and market analysis"
                    ]
                }
            ],
            projects: [
                {
                    name: "SneakyFinds - Online Thrift Store",
                    description:
                        "A complete online thrift store promoting sustainable shopping with secure authentication, cart management, and admin controls.",
                    tech: "HTML, CSS, JavaScript, Firebase"
                },
                {
                    name: "AI Automation Internship Assignment",
                    description:
                        "AI-driven automation assignment focusing on intelligent task automation, process efficiency, and practical AI integration for real-world business workflows.",
                    tech: "AI Automation, JavaScript, Workflow Optimization"
                },
                {
                    name: "ClearVue Sales Report System",
                    description:
                        "Sales reporting system with MongoDB backend and Power BI analytics dashboard for ClearVue Ltd.",
                    tech: "Node.js, MongoDB, Power BI, JavaScript"
                },
                {
                    name: "Driving School Management System",
                    description:
                        "Comprehensive driving school management system handling student registrations, lesson scheduling, instructor assignments, and progress tracking.",
                    tech: "Web Application, Student Management, Scheduling System"
                },
                {
                    name: "Internship and Job Placement Hub",
                    description:
                        "Comprehensive internship and job placement platform connecting students with potential employers, featuring job postings and application tracking.",
                    tech: "School Project, Job Portal, Student-Employer Connection"
                }
            ],
            industryInvolvement: [
                "Geekulcha Hackathon Participant (2023)",
                "GEEXPO Judge – NWU VAAL (2024)",
                "IT WEB Security Summit Participant (2024)"
            ],
            resources: {
                aiInternshipVideo:
                    "https://drive.google.com/file/d/1wREhl5bwdIhyAe9YNH_raxSR_TjTE8DH/preview",
                sneakyFindsVideo:
                    "https://drive.google.com/file/d/1Z_EK1k-DJOM0QcKxzrL8WC9yW8AsVdI5/preview",
                drivingSchoolVideo:
                    "https://drive.google.com/file/d/1a4yMDXC3A-zfNsV62VH_CK5eSwj9b77S/preview",
                internshipPlacementVideo:
                    "https://drive.google.com/file/d/1JN4yuV-NwyPFu4Pm1aRQAvfvYPzkXr9B/preview",
                clearVueVideo:
                    "https://drive.google.com/file/d/1_0gVvQ1qMjvQTIfRuAoT2LmrE-AdxLiM/preview",
                googleSheetsAssignment:
                    "https://docs.google.com/spreadsheets/d/1hD698_710CCJ_qr7qVtsz3MDTm8CxAvz9PSM6CffqVs/edit"
            },
            contact: {
                email: "righteousonyedi@gmail.com",
                phone: "068 002 2727",
                linkedin: "https://www.linkedin.com/in/righteous-nwariwe-01023727a",
                github: "https://github.com/RighteousNwariwe",
                portfolio: "https://righteousnwariwe.github.io/Virtual-Portfolio/"
            },
            location: "Johannesburg, South Africa",
            interests: ["Cybersecurity", "Full-Stack Development", "Programming", "Technology Trends"]
        };

        this.initializeElements();
        this.bindEvents();
        this.addWelcomeMessage();
    }

    initializeElements() {
        this.container = document.getElementById('chatbot-container');
        this.toggle = document.getElementById('chatbot-toggle');
        this.window = document.getElementById('chatbot-window');
        this.closeBtn = document.getElementById('chatbot-close');
        this.messagesContainer = document.getElementById('chatbot-messages');
        this.input = document.getElementById('chatbot-input');
        this.sendBtn = document.getElementById('chatbot-send');
    }

    bindEvents() {
        this.toggle.addEventListener('click', () => this.toggleChat());
        this.closeBtn.addEventListener('click', () => this.closeChat());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        this.window.style.display = this.isOpen ? 'flex' : 'none';
        if (this.isOpen) this.input.focus();
    }

    closeChat() {
        this.isOpen = false;
        this.window.style.display = 'none';
    }

    addWelcomeMessage() {
        this.addMessage(
            'bot',
            "Hello! I'm Righteous's portfolio assistant. Ask me about skills, projects, certifications, experience, academic documents, assignments, videos, or contact info."
        );
    }

    addMessage(sender, content) {
        const div = document.createElement('div');
        div.className = `message ${sender}-message`;
        div.innerHTML = `<div class="message-content">${content}</div>`;
        this.messagesContainer.appendChild(div);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    sendMessage() {
        const text = this.input.value.trim();
        if (!text) return;

        this.addMessage('user', text);
        this.input.value = '';

        // typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing';
        typingDiv.innerHTML = '<div class="message-content">Typing...</div>';
        this.messagesContainer.appendChild(typingDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

        setTimeout(() => {
            typingDiv.remove();
            const response = this.generateResponse(text);
            this.addMessage('bot', response);
        }, 1000 + Math.random() * 1000);
    }

    generateResponse(text) {
        const input = text.toLowerCase();

        // Greetings
        if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
            return `Hi! I'm your assistant for Righteous's portfolio. You can ask about skills, experience, projects, certifications, academic documents, assignments, or demo videos.`;
        }

        // Skills
        if (input.includes("skill") || input.includes("programming") || input.includes("technology")) {
            return `Righteous's technical skills: ${this.portfolioData.skills.technical.join(", ")}.<br>
            Professional skills: ${this.portfolioData.skills.professional.join(", ")}.<br>
            Software & tools: ${this.portfolioData.skills.software.join(", ")}.`;
        }

        // Education
        if (input.includes("education") || input.includes("degree") || input.includes("university") || input.includes("study")) {
            const edu = this.portfolioData.education;
            return `${edu.degree} at ${edu.institution} (${edu.period})`;
        }

        // Experience
        if (input.includes("experience") || input.includes("work") || input.includes("job")) {
            return this.portfolioData.experience.map(exp =>
                `<b>${exp.title}</b> (${exp.period}): ${exp.details.join(", ")}`
            ).join("<br><br>");
        }

        // Projects
        if (input.includes("project") || input.includes("github") || input.includes("code")) {
            return this.portfolioData.projects
                .map(p => `<b>${p.name}</b>: ${p.description} [Tech: ${p.tech}]`)
                .join("<br><br>");
        }

        // Certifications
        if (input.includes("certification") || input.includes("course")) {
            return this.portfolioData.certifications.join("<br>");
        }

        // Academic Documents
        if (input.includes("transcript") || input.includes("academic") || input.includes("completion")) {
            return this.portfolioData.academicDocuments.join("<br>");
        }

        // Videos / Assignments
        if (input.includes("ai") || input.includes("internship")) return `AI Internship Video: ${this.portfolioData.resources.aiInternshipVideo}`;
        if (input.includes("sneaky")) return `SneakyFinds Demo Video: ${this.portfolioData.resources.sneakyFindsVideo}`;
        if (input.includes("driving")) return `Driving School Demo Video: ${this.portfolioData.resources.drivingSchoolVideo}`;
        if (input.includes("internship placement") || input.includes("job placement")) return `Internship and Job Placement Hub Video: ${this.portfolioData.resources.internshipPlacementVideo}`;
        if (input.includes("clearvue")) return `ClearVue Sales Report Demo: ${this.portfolioData.resources.clearVueVideo}`;
        if (input.includes("google") || input.includes("assignment")) return `Google Sheets Assignment: ${this.portfolioData.resources.googleSheetsAssignment}`;

        // Industry involvement
        if (input.includes("industry") || input.includes("event") || input.includes("hackathon")) {
            return this.portfolioData.industryInvolvement.join("<br>");
        }

        // Contact
        if (input.includes("contact") || input.includes("email") || input.includes("linkedin") || input.includes("phone")) {
            const c = this.portfolioData.contact;
            return `Email: ${c.email}<br>Phone: ${c.phone}<br>LinkedIn: ${c.linkedin}<br>GitHub: ${c.github}`;
        }

        // Default response
        const responses = [
            "I can help you with Righteous's skills, experience, projects, certifications, academic documents, assignments, or contact info.",
            "Ask me about his technical or professional skills, projects, academic documents, or videos.",
            "You can ask about experience, education, certifications, academic documents, industry involvement, or demo resources.",
            "I'm here to guide you through Righteous's portfolio. Try asking about skills, projects, academic documents, or contact info."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Initialize chatbot
document.addEventListener('DOMContentLoaded', () => new PortfolioChatbot());
