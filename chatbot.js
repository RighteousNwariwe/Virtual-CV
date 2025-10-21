// Portfolio Chatbot
class PortfolioChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.portfolioData = {
            name: "Righteous Onyedi Nhlanhla Mpila Nwariwe",
            title: "Ambitious IT Student | Full-Stack Developer | Cybersecurity Enthusiast",
            skills: {
                technical: ["Python", "C#", "HTML/CSS", "JavaScript", "Java", "Database Management"],
                professional: ["Communication", "Leadership", "Teamwork", "Adaptability", "Problem-Solving", "Work Under Pressure"]
            },
            experience: [
                {
                    title: "Recruitment Officer, Geekulcha (NWU Vaal Campus)",
                    period: "March 2024 – November 2024",
                    responsibilities: [
                        "Planned and developed web applications, troubleshooting and resolving issues",
                        "Integrated databases using C# and facilitated HTML/CSS training for students",
                        "Managed solo and team projects, translating requirements into efficient systems"
                    ]
                }
            ],
            education: [
                {
                    institution: "North-West University (Vaal Campus)",
                    degree: "Bachelor of Science in Information Technology",
                    status: "Currently pursuing"
                }
            ],
            projects: [
                "CarServPro - HTML project",
                "CMPG111-Semester1-2023 - Python assignments",
                "Data-Structure-projects - Collection of 2nd year assignments",
                "SneakyFinds - Online thrift store website",
                "Virtual-Portfolio - This portfolio website"
            ],
            contact: {
                email: "righteousonyedi@gmail.com",
                phone: "068 002 2727",
                linkedin: "https://www.linkedin.com/in/righteous-nwariwe-01023727a",
                github: "https://github.com/RighteousNwariwe"
            },
            location: "Johannesburg",
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
        if (this.isOpen) {
            this.input.focus();
        }
    }

    closeChat() {
        this.isOpen = false;
        this.window.style.display = 'none';
    }

    addWelcomeMessage() {
        this.addMessage('bot', 'Hello! I\'m your Portfolio Assistant. I can answer questions about Righteous\'s skills, experience, projects, education, and more. What would you like to know?');
    }

    addMessage(sender, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = content;
        
        messageDiv.appendChild(messageContent);
        this.messagesContainer.appendChild(messageDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    async sendMessage() {
        const userInput = this.input.value.trim();
        if (!userInput) return;

        this.addMessage('user', userInput);
        this.input.value = '';

        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing';
        typingDiv.innerHTML = '<div class="message-content">Typing...</div>';
        this.messagesContainer.appendChild(typingDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

        // Simulate typing delay
        setTimeout(() => {
            typingDiv.remove();
            const response = this.generateResponse(userInput);
            this.addMessage('bot', response);
        }, 1000 + Math.random() * 1000);
    }

    generateResponse(userInput) {
        const input = userInput.toLowerCase();
        
        // Greetings
        if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
            return 'Hello! I\'m here to help you learn about Righteous\'s portfolio. You can ask about his skills, experience, projects, education, or contact information.';
        }

        // Skills questions
        if (input.includes('skill') || input.includes('programming') || input.includes('technology')) {
            if (input.includes('technical') || input.includes('programming')) {
                return `Righteous has strong technical skills in: ${this.portfolioData.skills.technical.join(', ')}. He's particularly skilled in C# (90%) and HTML/CSS (95%).`;
            }
            if (input.includes('professional') || input.includes('soft')) {
                return `His professional skills include: ${this.portfolioData.skills.professional.join(', ')}. He excels in communication (92%) and teamwork (90%).`;
            }
            return `Righteous has both technical and professional skills. Technical: ${this.portfolioData.skills.technical.join(', ')}. Professional: ${this.portfolioData.skills.professional.join(', ')}.`;
        }

        // Experience questions
        if (input.includes('experience') || input.includes('work') || input.includes('job')) {
            const exp = this.portfolioData.experience[0];
            return `Righteous worked as a ${exp.title} from ${exp.period}. His key responsibilities included: ${exp.responsibilities.join(', ')}.`;
        }

        // Education questions
        if (input.includes('education') || input.includes('degree') || input.includes('university') || input.includes('study')) {
            const edu = this.portfolioData.education[0];
            return `Righteous is currently pursuing a ${edu.degree} at ${edu.institution}.`;
        }

        // Projects questions
        if (input.includes('project') || input.includes('github') || input.includes('code')) {
            return `Righteous has worked on several projects including: ${this.portfolioData.projects.join(', ')}. You can view his GitHub profile at ${this.portfolioData.contact.github}`;
        }

        // Contact questions
        if (input.includes('contact') || input.includes('email') || input.includes('phone') || input.includes('reach')) {
            return `You can contact Righteous via email at ${this.portfolioData.contact.email}, phone at ${this.portfolioData.contact.phone}, or LinkedIn at ${this.portfolioData.contact.linkedin}.`;
        }

        // About questions
        if (input.includes('about') || input.includes('who') || input.includes('background')) {
            return `Righteous is an ambitious Information Technology student from Johannesburg. He's a full-stack developer and cybersecurity enthusiast with strong skills in programming and a passion for using technology to make a positive impact.`;
        }

        // Location questions
        if (input.includes('where') || input.includes('location') || input.includes('live')) {
            return `Righteous is based in Johannesburg, South Africa.`;
        }

        // Interests/Passions
        if (input.includes('interest') || input.includes('passion') || input.includes('hobby')) {
            return `Righteous is passionate about ${this.portfolioData.interests.join(', ')}. He's particularly interested in cybersecurity and staying updated on technology trends.`;
        }

        // CV/Resume questions
        if (input.includes('cv') || input.includes('resume') || input.includes('download')) {
            return `You can download Righteous's CV directly from his portfolio. It contains detailed information about his experience, skills, and qualifications.`;
        }

        // GitHub questions
        if (input.includes('github') || input.includes('repository') || input.includes('repo')) {
            return `Righteous's GitHub profile contains ${this.portfolioData.projects.length} projects including web applications, Python assignments, and his portfolio. Visit ${this.portfolioData.contact.github} to see his code.`;
        }

        // LinkedIn questions
        if (input.includes('linkedin') || input.includes('professional') || input.includes('network')) {
            return `Connect with Righteous on LinkedIn for professional networking: ${this.portfolioData.contact.linkedin}`;
        }

        // Default response
        const responses = [
            "That's an interesting question! I can help you learn about Righteous's skills, experience, projects, education, or contact information. Could you be more specific?",
            "I'd be happy to help! You can ask me about Righteous's technical skills, work experience, educational background, or how to contact him.",
            "Let me help you find information about Righteous's portfolio. Try asking about his skills, projects, experience, or contact details.",
            "I'm here to answer questions about Righteous's portfolio. You can ask about his programming skills, work experience, education, or contact information."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioChatbot();
});
