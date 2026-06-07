// Portfolio Chatbot
class PortfolioChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];

        this.portfolioData = {
            name: "Righteous Onyedi Nhlanhla Mpila Nwariwe",
            title: "Full-Stack Developer | Data Scientist | Data Analyst",
            profileSummary:
                "A full-stack developer and data professional with a BSc in IT. Experienced in React/Firebase e-commerce, Power BI dashboards, Python/Pandas ETL pipelines, and Apache Kafka real-time analytics.",
            skills: {
                technical: [
                    "Python", "JavaScript", "React.js", "HTML/CSS", "SQL", "Tailwind CSS", "Firebase"
                ],
                data: [
                    "Power BI", "Excel", "Pandas", "ETL Pipelines", "Apache Kafka", "Google Apps Script", "Statistical Analysis"
                ],
                software: [
                    "Full-Stack Development",
                    "Database Management",
                    "REST API Integration",
                    "Business Intelligence",
                    "Firebase Hosting",
                    "Vite"
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
            cvs: [
                "Full-Stack Developer – Full Stack Developer CV(Righteous Nwaiwe).pdf",
                "Data Scientist – Data Scientist CV(Righteous Nwariwe).pdf",
                "Data Analyst – Data Analyst CV(Righteous Nwariwe).pdf"
            ],
            academicDocuments: [
                "Final Academic Transcript – BSc in Information Technology, North-West University",
                "Completion Letter – North-West University Program Completion Confirmation"
            ],
            experience: [
                {
                    title: "Full Stack Developer – SneakyFinds Pty Ltd",
                    period: "January 2025 – December 2025",
                    details: [
                        "Built production React/Firebase e-commerce platform",
                        "Managed real-time inventory and order data",
                        "Implemented SEO and admin dashboards",
                        "Delivered business insights from customer data"
                    ]
                },
                {
                    title: "Data Analytics & Engineering – ClearVue BI System",
                    period: "July 2025 – November 2025",
                    details: [
                        "Designed Power BI KPI dashboards",
                        "Built Python/Pandas ETL workflows",
                        "Integrated MongoDB, SQL, and Apache Kafka",
                        "Optimised data modelling and reporting accuracy"
                    ]
                },
                {
                    title: "Freelance Web Developer",
                    period: "January 2024 – Present",
                    details: [
                        "Developed responsive e-commerce apps for businesses",
                        "Integrated Firebase auth and real-time databases",
                        "Deployed production apps via Firebase Hosting"
                    ]
                },
                {
                    title: "Recruitment Officer – Geekulcha (NWU Vaal Campus)",
                    period: "March 2024 – November 2024",
                    details: [
                        "Planned and developed web applications",
                        "Integrated databases using C#",
                        "Facilitated HTML/CSS training",
                        "Managed solo and team-based projects"
                    ]
                }
            ],
            projects: [
                {
                    name: "SneakyFinds – Online Thrift Store",
                    description:
                        "Production-ready thrift e-commerce with single-item inventory, real-time sync, bank transfers, and WhatsApp/email notifications.",
                    tech: "React.js, Firebase, EmailJS",
                    links: { live: "https://sneakyfinds.co.za/", github: "https://github.com/RighteousNwariwe/SneakyFinds" }
                },
                {
                    name: "Wow Foods – E-Commerce Platform",
                    description:
                        "Full-featured fast-food e-commerce with authentication, real-time orders, payments, and admin dashboard for Cape Town restaurant.",
                    tech: "React 18, Firebase, Vite",
                    links: { live: "https://wow-foods-5edc4.web.app/", github: "https://github.com/RighteousNwariwe/Wow-Foods" }
                },
                {
                    name: "Lord's Driving School",
                    description:
                        "Full-stack driving school app with lesson scheduling, Firebase backend, and Tailwind CSS responsive UI.",
                    tech: "React.js, Tailwind CSS, Firebase",
                    links: { live: "https://lords-driving-school.web.app/" }
                },
                {
                    name: "Internship & Job Placement Hub",
                    description:
                        "Responsive job portal connecting students and employers with role-based auth, job filtering, and application tracking.",
                    tech: "HTML, CSS, SCSS, JavaScript, Bootstrap 4",
                    links: { github: "https://github.com/RighteousNwariwe/Intern-Job-Portal" }
                },
                {
                    name: "ClearVue Sales Report System",
                    description:
                        "Sales reporting and BI system with MongoDB, Kafka, Python ETL, and Power BI dashboards.",
                    tech: "MongoDB, Power BI, Python, Apache Kafka",
                    links: { github: "https://github.com/RighteousNwariwe/ClearVue-Sales-Report" }
                },
                {
                    name: "AI Automation Internship Assignment",
                    description:
                        "AI-driven automation assignment focusing on intelligent task automation and business workflow optimisation.",
                    tech: "AI Automation, JavaScript, Workflow Optimization"
                }
            ],
            industryInvolvement: [
                "Basketball Team Member",
                "Chess Club Participant",
                "Hacking & Cybersecurity Enthusiast",
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
            interests: ["Full-Stack Development", "Data Science", "Data Analytics", "Business Intelligence"]
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
            Data & analytics: ${this.portfolioData.skills.data.join(", ")}.<br>
            Professional skills: ${this.portfolioData.skills.professional.join(", ")}.<br>
            Software & tools: ${this.portfolioData.skills.software.join(", ")}.`;
        }

        // CV downloads
        if (input.includes("cv") || input.includes("resume") || input.includes("curriculum")) {
            return `Righteous offers three tailored CVs. Scroll to the Download CV section and choose:<br>
            ${this.portfolioData.cvs.join("<br>")}`;
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
                .map(p => {
                    let links = "";
                    if (p.links) {
                        if (p.links.live) links += `<br>Live: ${p.links.live}`;
                        if (p.links.github) links += `<br>GitHub: ${p.links.github}`;
                    }
                    return `<b>${p.name}</b>: ${p.description} [Tech: ${p.tech}]${links}`;
                })
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
        if (input.includes("ai") || input.includes("internship assignment")) return `AI Internship Video: ${this.portfolioData.resources.aiInternshipVideo}`;
        if (input.includes("wow") || input.includes("food")) return `Wow Foods Live Demo: https://wow-foods-5edc4.web.app/<br>GitHub: https://github.com/RighteousNwariwe/Wow-Foods`;
        if (input.includes("sneaky")) return `SneakyFinds Live: https://sneakyfinds.co.za/<br>Demo Video: ${this.portfolioData.resources.sneakyFindsVideo}`;
        if (input.includes("driving") || input.includes("lord")) return `Lord's Driving School Live Demo: https://lords-driving-school.web.app/<br>Demo Video: ${this.portfolioData.resources.drivingSchoolVideo}`;
        if (input.includes("internship placement") || input.includes("job placement") || input.includes("job portal")) return `Intern-Job-Portal GitHub: https://github.com/RighteousNwariwe/Intern-Job-Portal<br>Demo Video: ${this.portfolioData.resources.internshipPlacementVideo}`;
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
