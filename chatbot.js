// Portfolio Chatbot
class PortfolioChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];

        this.portfolioData = {
            name: "Righteous Onyedi Nhlanhla Mpila Nwariwe",
            title: "Data Analyst | Full-Stack Developer | AI & Data Enthusiast",
            profileSummary:
                "An ambitious tech enthusiast with strong programming skills in C#, Java, Python, JavaScript, SQL, and web technologies. Experienced in full-stack development, API integration, and data analytics, with active participation in industry events and leadership roles.",
            skills: {
                technical: [
                    "Python", "C#", "HTML/CSS", "JavaScript", "Java", "SQL", "C++", "PowerBI"
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
                    name: "ClearVue Sales Report System",
                    description:
                        "Sales reporting system with MongoDB backend and Power BI analytics dashboard.",
                    tech: "Node.js, MongoDB, Power BI, JavaScript"
                },
                {
                    name: "SneakyFinds Online Thrift Store",
                    description:
                        "E-commerce thrift platform with authentication, cart, checkout, and admin modules.",
                    tech: "HTML, CSS, JavaScript, Firebase"
                },
                {
                    name: "Wow Foods - E-commerce Website",
                    description:
                        "Modern e-commerce platform for food ordering and delivery with payment integration and real-time tracking.",
                    tech: "E-commerce Platform | Web Development | Food Delivery"
                },
                {
                    name: "API-Driven Movie Review Data Integration",
                    description:
                        "Automated Google Sheets solution integrating NYT and TMDB APIs with enriched movie metadata.",
                    tech: "Google Apps Script, NYT API, TMDB API"
                }
            ],
            industryInvolvement: [
                "Geekulcha Hackathon Participant (2023)",
                "GEEXPO Judge – NWU VAAL (2024)",
                "IT WEB Security Summit Participant (2024)"
            ],
            resources: {
                aiInternshipVideo:
                    "https://drive.google.com/file/d/1wREhl5bwdIhyAe9YNH_raxSR_TjTE8DH/view",
                sneakyFindsVideo:
                    "https://drive.google.com/file/d/1Z_EK1k-DJOM0QcKxzrL8WC9yW8AsVdI5/view",
                wowFoodsVideo:
                    "https://drive.google.com/file/d/1nOEnzlV6nO4YGDRbaEWepFrDieuTjUdz/view",
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
        if (input.includes("wow") || input.includes("food")) return `Wow Foods Demo Video: ${this.portfolioData.resources.wowFoodsVideo}`;
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
