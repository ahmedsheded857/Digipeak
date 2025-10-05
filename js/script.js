// تهيئة AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// كائن يحتوي على جميع النصوص باللغتين الإنجليزية والعربية
const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.about": "About",
        "nav.stats": "Stats",
        "nav.projects": "Our Projects",
        "nav.contact": "Contact",
        
        // Hero Section
        "hero.title": "We Build the <span class='gradient-text'>Future</span> of Digital Experience",
        "hero.subtitle": "At Digipeak, we provide integrated technological solutions to accelerate your business growth in the digital age",
        "hero.cta": "Start Your Project Now",
        
        // Services Section
        "services.title": "Our Integrated Services",
        "services.subtitle": "We offer a comprehensive range of technical services to turn your ideas into tangible reality",
        "services.web": "Web Development",
        "services.webDesc": "We design and develop responsive and fast websites using the latest technologies to achieve your business goals.",
        "services.mobile": "Mobile Apps",
        "services.mobileDesc": "We create innovative mobile applications for iOS and Android to expand your brand's reach.",
        "services.security": "Cyber Security",
        "services.securityDesc": "We protect your data and systems from electronic threats using the latest protection technologies.",
        "services.design": "UI/UX Design",
        "services.designDesc": "We design attractive and easy-to-use user interfaces that enhance customer experience and achieve conversion goals.",
        "services.ai": "AI Solutions",
        "services.aiDesc": "We develop custom AI solutions to automate your operations and make smarter decisions.",
        "services.marketing": "Digital Marketing",
        "services.marketingDesc": "We implement effective digital marketing strategies to increase your brand visibility and attract new customers.",
        "services.readMore": "Read More",
        
        // About Section
        "about.title": "About Us",
        "about.p1": "Digipeak is a leading technology company founded in 2015, specializing in providing integrated digital solutions for companies and institutions across various sectors.",
        "about.p2": "We believe that technology should be a tool for achieving growth and innovation, and we always strive to provide customized solutions that meet our clients' needs and exceed their expectations.",
        "about.p3": "Our team consists of a group of experts, developers, and professional designers who combine creativity with technical expertise to achieve the best results.",
        "about.projects": "Completed Projects",
        "about.clients": "Satisfied Clients",
        "about.experience": "Years of Experience",
        "about.readMore": "Read More",
        "about.readLess": "Read Less",
        
        // Stats Section
        "stats.title": "Our Impact in Numbers",
        "stats.subtitle": "Quantifying our success and experience through key metrics",
        "stats.clients": "Clients Served",
        "stats.projects": "Projects Completed",
        "stats.experience": "Years of Experience",
        "stats.team": "Team Members",
        
        // Projects Section
        "projects.title": "Our Projects",
        "projects.subtitle": "Explore our portfolio of successful projects across different categories",
        "projects.all": "All Projects",
        "projects.web": "Web Development",
        "projects.mobile": "Mobile Apps",
        "projects.security": "Cyber Security",
        "projects.marketing": "Digital Marketing",
        "projects.design": "UI/UX Design",
        "projects.ai": "AI Solutions",
        "projects.view": "View Project",
        "projects.viewLive": "View Live Project",
        
        // Project Details
        "projects.web1.title": "E-commerce Platform",
        "projects.web1.desc": "A comprehensive online shopping platform with advanced features and secure payment integration.",
        "projects.web2.title": "Corporate Website",
        "projects.web2.desc": "A modern corporate website with CMS integration and responsive design for optimal user experience.",
        "projects.mobile1.title": "Fitness Tracking App",
        "projects.mobile1.desc": "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
        "projects.mobile2.title": "Personal Finance App",
        "projects.mobile2.desc": "An intuitive mobile application for managing personal finances, budgets, and investment portfolios.",
        "projects.security1.title": "Enterprise Security System",
        "projects.security1.desc": "A comprehensive security solution for enterprise networks with threat detection and prevention capabilities.",
        "projects.security2.title": "Data Protection Framework",
        "projects.security2.desc": "Implementation of a robust data protection framework with encryption and access control mechanisms.",
        "projects.marketing1.title": "Digital Marketing Campaign",
        "projects.marketing1.desc": "A comprehensive digital marketing campaign that increased brand awareness by 150% in 3 months.",
        "projects.marketing2.title": "SEO Optimization Strategy",
        "projects.marketing2.desc": "Implementation of an SEO strategy that improved organic search rankings and increased website traffic by 200%.",
        "projects.design1.title": "Banking App UI Design",
        "projects.design1.desc": "A modern and intuitive user interface design for a mobile banking application with enhanced user experience.",
        "projects.design2.title": "E-commerce UX Research",
        "projects.design2.desc": "Comprehensive user experience research and redesign for an e-commerce platform to improve conversion rates.",
        "projects.ai1.title": "AI-Powered Chatbot",
        "projects.ai1.desc": "Development of an intelligent chatbot for customer service with natural language processing capabilities.",
        "projects.ai2.title": "Predictive Analytics System",
        "projects.ai2.desc": "Implementation of a machine learning system for predictive analytics and business intelligence.",
        
        // Tech Stack Section
        "tech.title": "Our Technologies",
        "tech.subtitle": "We use the latest technologies and tools to ensure high-quality solutions",
        
        // Contact Section
        "contact.title": "Contact Us",
        "contact.subtitle": "We're here to answer your inquiries and help you start your next project",
        "contact.info": "Contact Information",
        "contact.address": "Address",
        "contact.addressValue": "Riyadh, Saudi Arabia",
        "contact.phone": "Phone",
        "contact.email": "Email",
        "contact.hours": "Working Hours",
        "contact.hoursValue": "Sunday - Thursday: 9 AM - 5 PM",
        "contact.form.name": "Full Name",
        "contact.form.email": "Email Address",
        "contact.form.subject": "Subject",
        "contact.form.message": "Your Message",
        "contact.form.submit": "Send Message",
        
        // Footer
        "footer.about": "A leading company in providing integrated technological solutions to accelerate business growth in the digital age.",
        "footer.quickLinks": "Quick Links",
        "footer.services": "Our Services",
        "footer.resources": "Resources",
        "footer.blog": "Blog",
        "footer.faq": "FAQ",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.support": "Technical Support",
        "footer.copyright": "All Rights Reserved &copy; 2023 Digipeak",
        
        // Modal
        "modal.features": "Key Features"
    },
    ar: {
        // التنقل
        "nav.home": "الرئيسية",
        "nav.services": "الخدمات",
        "nav.about": "عن الشركة",
        "nav.stats": "الإحصائيات",
        "nav.projects": "مشاريعنا",
        "nav.contact": "تواصل معنا",
        
        // القسم الرئيسي
        "hero.title": "نبني <span class='gradient-text'>مستقبل</span> التجربة الرقمية",
        "hero.subtitle": "نحن في Digipeak نقدم حلولًا تكنولوجية متكاملة لتسريع نمو أعمالك في العصر الرقمي",
        "hero.cta": "ابدأ مشروعك الآن",
        
        // قسم الخدمات
        "services.title": "خدماتنا المتكاملة",
        "services.subtitle": "نقدم مجموعة شاملة من الخدمات التقنية لتحويل أفكارك إلى واقع ملموس",
        "services.web": "تطوير الويب",
        "services.webDesc": "نصمم ونطور مواقع ويب متجاوبة وسريعة باستخدام أحدث التقنيات لتحقيق أهداف أعمالك.",
        "services.mobile": "تطبيقات الموبايل",
        "services.mobileDesc": "نبتكر تطبيقات جوال مبتكرة لنظامي iOS و Android لتوسيع نطاق وصول علامتك التجارية.",
        "services.security": "الأمن السيبراني",
        "services.securityDesc": "نحمي بياناتك وأنظمتك من التهديدات الإلكترونية باستخدام أحدث تقنيات الحماية.",
        "services.design": "تصميم واجهات المستخدم",
        "services.designDesc": "نصمم واجهات مستخدم جذابة وسهلة الاستخدام تعزز تجربة العملاء وتحقق أهداف التحويل.",
        "services.ai": "حلول الذكاء الاصطناعي",
        "services.aiDesc": "نطور حلول ذكاء اصطناعي مخصصة لأتمتة عملياتك واتخاذ قرارات أكثر ذكاءً.",
        "services.marketing": "التسويق الرقمي",
        "services.marketingDesc": "ننفذ استراتيجيات تسويق رقمية فعالة لزيادة ظهور علامتك التجارية وجذب عملاء جدد.",
        "services.readMore": "اقرأ المزيد",
        
        // قسم عن الشركة
        "about.title": "من نحن",
        "about.p1": "Digipeak هي شركة تكنولوجية رائدة تأسست عام 2015، متخصصة في تقديم حلول رقمية متكاملة للشركات والمؤسسات في مختلف القطاعات.",
        "about.p2": "نحن نؤمن بأن التكنولوجيا يجب أن تكون أداة لتحقيق النمو والابتكار، ونسعى دائمًا لتقديم حلول مخصصة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.",
        "about.p3": "فريقنا يتكون من مجموعة من الخبراء والمطورين والمصممين المحترفين الذين يجمعون بين الإبداع والخبرة التقنية لتحقيق أفضل النتائج.",
        "about.projects": "مشروع مكتمل",
        "about.clients": "عميل راضٍ",
        "about.experience": "سنوات خبرة",
        "about.readMore": "اقرأ المزيد",
        "about.readLess": "اقرأ أقل",
        
        // قسم الإحصائيات
        "stats.title": "تأثيرنا بالأرقام",
        "stats.subtitle": "قياس نجاحنا وخبرتنا من خلال المقاييس الرئيسية",
        "stats.clients": "عميل تم خدمتهم",
        "stats.projects": "مشروع مكتمل",
        "stats.experience": "سنوات خبرة",
        "stats.team": "أعضاء الفريق",
        
        // قسم المشاريع
        "projects.title": "مشاريعنا",
        "projects.subtitle": "استكشف مجموعة من مشاريعنا الناجحة عبر مختلف الفئات",
        "projects.all": "جميع المشاريع",
        "projects.web": "تطوير الويب",
        "projects.mobile": "تطبيقات الموبايل",
        "projects.security": "الأمن السيبراني",
        "projects.marketing": "التسويق الرقمي",
        "projects.design": "تصميم واجهات المستخدم",
        "projects.ai": "حلول الذكاء الاصطناعي",
        "projects.view": "عرض المشروع",
        "projects.viewLive": "عرض المشروع مباشرة",
        
        // تفاصيل المشاريع
        "projects.web1.title": "منصة التجارة الإلكترونية",
        "projects.web1.desc": "منصة تسوق شاملة عبر الإنترنت مع ميزات متقدمة وتكامل دفع آمن.",
        "projects.web2.title": "موقع الشركة",
        "projects.web2.desc": "موقع شركة حديث مع تكامل نظام إدارة المحتوى وتصميم متجاوب لتجربة مستخدم مثالية.",
        "projects.mobile1.title": "تطبيق تتبع اللياقة البدنية",
        "projects.mobile1.desc": "تطبيق جوال لتتبع التمارين والتغذية ومقاييس الصحة مع توصيات مخصصة.",
        "projects.mobile2.title": "تطبيق التمويل الشخصي",
        "projects.mobile2.desc": "تطبيق جوال بديهي لإدارة الشؤون المالية الشخصية والميزانيات ومحافظ الاستثمار.",
        "projects.security1.title": "نظام أمن المؤسسات",
        "projects.security1.desc": "حل أمني شامل لشبكات المؤسسات مع قدرات الكشف عن التهديدات والوقاية منها.",
        "projects.security2.title": "إطار حماية البيانات",
        "projects.security2.desc": "تنفيذ إطار قوي لحماية البيانات مع آليات التشفير والتحكم في الوصول.",
        "projects.marketing1.title": "حملة تسويق رقمي",
        "projects.marketing1.desc": "حملة تسويق رقمية شاملة زادت من الوعي بالعلامة التجارية بنسبة 150٪ في 3 أشهر.",
        "projects.marketing2.title": "استراتيجية تحسين محركات البحث",
        "projects.marketing2.desc": "تنفيذ استراتيجية SEO حسنت ترتيب البحث العضوي وزادت حركة المرور إلى الموقع بنسبة 200٪.",
        "projects.design1.title": "تصميم واجهة تطبيق مصرفي",
        "projects.design1.desc": "تصميم واجهة مستخدم حديثة وبديهية لتطبيق مصرفي على الهاتف المحمول مع تجربة مستخدم محسنة.",
        "projects.design2.title": "بحث تجربة المستخدم للتجارة الإلكترونية",
        "projects.design2.desc": "بحث شامل في تجربة المستخدم وإعادة تصميم لمنصة التجارة الإلكترونية لتحسين معدلات التحويل.",
        "projects.ai1.title": "روبوت محادثة مدعوم بالذكاء الاصطناعي",
        "projects.ai1.desc": "تطوير روبوت محادثة ذكي لخدمة العملاء مع قدرات معالجة اللغة الطبيعية.",
        "projects.ai2.title": "نظام التحليلات التنبؤية",
        "projects.ai2.desc": "تنفيذ نظام تعلم آلي للتحليلات التنبؤية وذكاء الأعمال.",
        
        // قسم التقنيات
        "tech.title": "تقنياتنا",
        "tech.subtitle": "نستخدم أحدث التقنيات والأدوات لضمان تقديم حلول عالية الجودة",
        
        // قسم التواصل
        "contact.title": "تواصل معنا",
        "contact.subtitle": "نحن هنا للإجابة على استفساراتك ومساعدتك في بدء مشروعك التالي",
        "contact.info": "معلومات التواصل",
        "contact.address": "العنوان",
        "contact.addressValue": "الرياض، المملكة العربية السعودية",
        "contact.phone": "الهاتف",
        "contact.email": "البريد الإلكتروني",
        "contact.hours": "ساعات العمل",
        "contact.hoursValue": "الأحد - الخميس: 9 ص - 5 م",
        "contact.form.name": "الاسم الكامل",
        "contact.form.email": "البريد الإلكتروني",
        "contact.form.subject": "الموضوع",
        "contact.form.message": "رسالتك",
        "contact.form.submit": "إرسال الرسالة",
        
        // الفوتر
        "footer.about": "شركة رائدة في تقديم الحلول التكنولوجية المتكاملة لتسريع نمو الأعمال في العصر الرقمي.",
        "footer.quickLinks": "روابط سريعة",
        "footer.services": "خدماتنا",
        "footer.resources": "موارد",
        "footer.blog": "المدونة",
        "footer.faq": "الأسئلة الشائعة",
        "footer.privacy": "سياسة الخصوصية",
        "footer.terms": "شروط الخدمة",
        "footer.support": "الدعم الفني",
        "footer.copyright": "جميع الحقوق محفوظة &copy; 2023 Digipeak",
        
        // المودال
        "modal.features": "الميزات الرئيسية"
    }
};

// بيانات الخدمات التفصيلية
const serviceDetails = {
    web: {
        title: "Web Development",
        icon: '<i class="fas fa-code"></i>',
        description: "Our web development services focus on creating responsive, high-performance websites that deliver exceptional user experiences. We leverage the latest technologies and frameworks to build scalable solutions that grow with your business.",
        features: [
            "Responsive design for all devices",
            "Custom web applications",
            "E-commerce solutions",
            "Content management systems",
            "API integration",
            "Performance optimization"
        ],
        additional: "We follow agile development methodologies to ensure timely delivery and continuous improvement of your web presence."
    },
    mobile: {
        title: "Mobile Apps",
        icon: '<i class="fas fa-mobile-alt"></i>',
        description: "We develop native and cross-platform mobile applications that provide seamless experiences on both iOS and Android devices. Our apps are designed with user engagement and business objectives in mind.",
        features: [
            "Native iOS and Android development",
            "Cross-platform solutions",
            "User-centered design",
            "Backend integration",
            "App store optimization",
            "Ongoing maintenance and updates"
        ],
        additional: "Our mobile development process includes thorough testing across multiple devices to ensure optimal performance and user satisfaction."
    },
    security: {
        title: "Cyber Security",
        icon: '<i class="fas fa-shield-alt"></i>',
        description: "Protect your digital assets with our comprehensive cybersecurity solutions. We implement multi-layered security measures to safeguard your systems, data, and reputation from evolving threats.",
        features: [
            "Vulnerability assessments",
            "Penetration testing",
            "Security monitoring",
            "Incident response planning",
            "Data encryption",
            "Compliance consulting"
        ],
        additional: "Our security experts stay current with the latest threats and protection strategies to provide you with cutting-edge security solutions."
    },
    design: {
        title: "UI/UX Design",
        icon: '<i class="fas fa-palette"></i>',
        description: "Create engaging digital experiences with our UI/UX design services. We combine aesthetic appeal with functional design to create interfaces that users love and that drive business results.",
        features: [
            "User research and analysis",
            "Wireframing and prototyping",
            "Visual design systems",
            "Interaction design",
            "Usability testing",
            "Design system development"
        ],
        additional: "We follow a human-centered design approach, ensuring that every design decision is backed by user research and testing."
    },
    ai: {
        title: "AI Solutions",
        icon: '<i class="fas fa-robot"></i>',
        description: "Leverage the power of artificial intelligence to automate processes, gain insights from data, and create intelligent applications that give you a competitive edge.",
        features: [
            "Machine learning models",
            "Natural language processing",
            "Computer vision solutions",
            "Predictive analytics",
            "AI-powered chatbots",
            "Data mining and analysis"
        ],
        additional: "Our AI solutions are tailored to your specific business needs, helping you harness the power of data to make smarter decisions."
    },
    marketing: {
        title: "Digital Marketing",
        icon: '<i class="fas fa-chart-line"></i>',
        description: "Boost your online presence and drive growth with our data-driven digital marketing strategies. We create comprehensive campaigns that increase visibility, engagement, and conversions.",
        features: [
            "Search engine optimization (SEO)",
            "Social media marketing",
            "Content marketing",
            "Pay-per-click advertising",
            "Email marketing campaigns",
            "Analytics and reporting"
        ],
        additional: "We measure and analyze campaign performance continuously, allowing us to optimize strategies for maximum ROI."
    }
};

// بيانات المشاريع التفصيلية
const projectDetails = {
    web1: {
        title: "E-commerce Platform",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A comprehensive online shopping platform with advanced features and secure payment integration. This project involved developing a full-stack e-commerce solution with user authentication, product management, shopping cart functionality, and secure payment processing.",
        features: [
            "User authentication and authorization",
            "Product catalog with search and filtering",
            "Shopping cart and checkout process",
            "Secure payment gateway integration",
            "Order management system",
            "Customer reviews and ratings"
        ],
        additional: "The platform was built using React for the frontend and Node.js for the backend, with MongoDB for data storage. It supports multiple payment methods and includes an admin dashboard for managing products, orders, and customers.",
        link: "#"
    },
    web2: {
        title: "Corporate Website",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A modern corporate website with CMS integration and responsive design for optimal user experience. This project focused on creating a professional online presence for a multinational corporation with multiple regional offices.",
        features: [
            "Content management system integration",
            "Multi-language support",
            "Responsive design for all devices",
            "Interactive company portfolio",
            "Contact forms and lead generation",
            "SEO optimization"
        ],
        additional: "The website was developed using WordPress with custom themes and plugins to meet the client's specific requirements. It includes advanced features like location-based content and integrated analytics.",
        link: "#"
    },
    mobile1: {
        title: "Fitness Tracking App",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations. This app helps users achieve their fitness goals through data-driven insights and personalized coaching.",
        features: [
            "Workout tracking and planning",
            "Nutrition and calorie tracking",
            "Health metrics monitoring",
            "Personalized recommendations",
            "Social features and challenges",
            "Integration with wearables"
        ],
        additional: "The app was developed using React Native for cross-platform compatibility, with a Node.js backend and Firebase for real-time data synchronization. It includes AI-powered recommendations based on user behavior and goals.",
        link: "#"
    },
    mobile2: {
        title: "Personal Finance App",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "An intuitive mobile application for managing personal finances, budgets, and investment portfolios. This app provides users with comprehensive financial insights and tools to make informed decisions.",
        features: [
            "Expense tracking and categorization",
            "Budget planning and monitoring",
            "Investment portfolio management",
            "Bill reminders and payments",
            "Financial goal setting",
            "Secure data encryption"
        ],
        additional: "Built with Flutter for seamless performance across iOS and Android, the app integrates with banking APIs for automatic transaction import and uses machine learning for spending pattern analysis.",
        link: "#"
    },
    security1: {
        title: "Enterprise Security System",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A comprehensive security solution for enterprise networks with threat detection and prevention capabilities. This system protects organizations from cyber threats through advanced monitoring and response mechanisms.",
        features: [
            "Network intrusion detection",
            "Real-time threat monitoring",
            "Automated incident response",
            "Vulnerability assessment",
            "Security policy enforcement",
            "Compliance reporting"
        ],
        additional: "The system was implemented using a combination of open-source security tools and custom-developed components to meet the specific security requirements of the enterprise environment.",
        link: "#"
    },
    security2: {
        title: "Data Protection Framework",
        image: "https://images.unsplash.com/photo-1563013541-2d0e9fba7c47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Implementation of a robust data protection framework with encryption and access control mechanisms. This project focused on securing sensitive data across multiple systems and applications.",
        features: [
            "Data encryption at rest and in transit",
            "Role-based access control",
            "Data loss prevention",
            "Audit logging and monitoring",
            "Data classification and tagging",
            "Compliance with data protection regulations"
        ],
        additional: "The framework was designed to be scalable and adaptable to different data protection requirements, with support for various encryption algorithms and access control models.",
        link: "#"
    },
    marketing1: {
        title: "Digital Marketing Campaign",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A comprehensive digital marketing campaign that increased brand awareness by 150% in 3 months. This campaign utilized multiple channels and strategies to reach target audiences effectively.",
        features: [
            "Social media marketing",
            "Content marketing strategy",
            "Email marketing automation",
            "PPC advertising campaigns",
            "Influencer partnerships",
            "Performance analytics and optimization"
        ],
        additional: "The campaign resulted in significant increases in website traffic, social media engagement, and lead generation, with a strong return on investment for the client.",
        link: "#"
    },
    marketing2: {
        title: "SEO Optimization Strategy",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Implementation of an SEO strategy that improved organic search rankings and increased website traffic by 200%. This project involved comprehensive technical and content optimization.",
        features: [
            "Technical SEO audit and fixes",
            "Keyword research and strategy",
            "Content optimization and creation",
            "Link building campaign",
            "Local SEO optimization",
            "Performance monitoring and reporting"
        ],
        additional: "The strategy focused on both on-page and off-page SEO factors, resulting in improved search visibility and higher quality traffic to the client's website.",
        link: "#"
    },
    design1: {
        title: "Banking App UI Design",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A modern and intuitive user interface design for a mobile banking application with enhanced user experience. This design focuses on simplicity, security, and ease of use for financial transactions.",
        features: [
            "User-centered design approach",
            "Secure authentication flows",
            "Intuitive transaction interfaces",
            "Personalized dashboard",
            "Accessibility considerations",
            "Consistent design system"
        ],
        additional: "The design was created following extensive user research and testing, resulting in a banking app that users find both secure and easy to navigate for their financial needs.",
        link: "#"
    },
    design2: {
        title: "E-commerce UX Research",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Comprehensive user experience research and redesign for an e-commerce platform to improve conversion rates. This project identified pain points in the user journey and implemented solutions to enhance the shopping experience.",
        features: [
            "User journey mapping",
            "Usability testing and analysis",
            "Information architecture optimization",
            "Checkout process simplification",
            "Mobile experience enhancement",
            "A/B testing and validation"
        ],
        additional: "The research led to a 35% increase in conversion rates and significant improvements in user satisfaction scores, demonstrating the value of user-centered design in e-commerce.",
        link: "#"
    },
    ai1: {
        title: "AI-Powered Chatbot",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Development of an intelligent chatbot for customer service with natural language processing capabilities. This AI solution handles customer inquiries, provides support, and escalates complex issues to human agents.",
        features: [
            "Natural language understanding",
            "Contextual conversation management",
            "Multi-language support",
            "Integration with knowledge base",
            "Sentiment analysis",
            "Seamless handoff to human agents"
        ],
        additional: "The chatbot was trained on extensive customer service data and can handle over 70% of common inquiries without human intervention, significantly reducing response times and improving customer satisfaction.",
        link: "#"
    },
    ai2: {
        title: "Predictive Analytics System",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Implementation of a machine learning system for predictive analytics and business intelligence. This system analyzes historical data to forecast trends, identify opportunities, and support data-driven decision making.",
        features: [
            "Data collection and preprocessing",
            "Machine learning model training",
            "Real-time prediction capabilities",
            "Interactive dashboards and reports",
            "Anomaly detection",
            "Automated insights generation"
        ],
        additional: "The system processes large volumes of data from multiple sources and provides accurate predictions that have helped clients optimize operations, reduce costs, and identify new revenue opportunities.",
        link: "#"
    }
};

// تهيئة تأثير الجسيمات في الخلفية
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة tsParticles
    tsParticles.load("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ["#00b4ff", "#00ffea", "#9d4edd", "#ff2a6d"]
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00b4ff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // تأثير الشريط العلوي عند التمرير
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // تأثير المؤشر
    const cursor = document.querySelector('.cursor-light');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
    
    // تأثير تكبير المؤشر عند التمرير فوق العناصر القابلة للنقر
    const clickableElements = document.querySelectorAll('a, button, .service-card, .portfolio-item, .project-card');
    
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
        });
    });

    // القائمة المتنقلة للهواتف
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    mobileMenu.addEventListener('click', function() {
        nav.classList.toggle('show');
    });

    // إرسال نموذج التواصل
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you as soon as possible.');
        contactForm.reset();
    });

    // نظام تبديل الوضع الليلي/النهاري
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // التحقق من التفضيل المخزن أو استخدام الوضع الافتراضي (الليلي)
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.textContent = '🌞';
    } else {
        body.classList.remove('light-mode');
        themeIcon.textContent = '🌙';
    }
    
    // تبديل الوضع عند النقر
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeIcon.textContent = '🌞';
        } else {
            localStorage.setItem('theme', 'dark');
            themeIcon.textContent = '🌙';
        }
    });

    // نظام تبديل اللغة
    const languageToggle = document.getElementById('language-toggle');
    const languageIcon = document.getElementById('language-icon');
    const html = document.documentElement;
    
    // التحقق من اللغة المخزنة أو استخدام اللغة الافتراضية (الإنجليزية)
    const savedLanguage = localStorage.getItem('language') || 'en';
    if (savedLanguage === 'ar') {
        setLanguage('ar');
    } else {
        setLanguage('en');
    }
    
    // تبديل اللغة عند النقر
    languageToggle.addEventListener('click', function() {
        const currentLang = html.getAttribute('lang');
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    });
    
    // دالة لتعيين اللغة وتطبيق الترجمة
    function setLanguage(lang) {
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        languageIcon.textContent = lang === 'ar' ? 'EN' : 'AR';
        
        // تطبيق الترجمات على جميع العناصر
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.setAttribute('placeholder', translations[lang][key]);
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // تحديث زر "اقرأ المزيد" في قسم عن الشركة
        const aboutReadMoreBtn = document.getElementById('about-read-more');
        const aboutMoreContent = document.getElementById('about-more');
        const aboutReadMoreSpan = aboutReadMoreBtn.querySelector('span');
        const aboutReadMoreIcon = aboutReadMoreBtn.querySelector('i');
        
        if (aboutMoreContent.classList.contains('expanded')) {
            aboutReadMoreSpan.textContent = translations[lang]['about.readLess'];
            aboutReadMoreIcon.classList.remove('fa-chevron-down');
            aboutReadMoreIcon.classList.add('fa-chevron-up');
        } else {
            aboutReadMoreSpan.textContent = translations[lang]['about.readMore'];
            aboutReadMoreIcon.classList.remove('fa-chevron-up');
            aboutReadMoreIcon.classList.add('fa-chevron-down');
        }
    }

    // تصفية المشاريع حسب الفئة
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // إزالة الفئة النشطة من جميع الأزرار
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة الفئة النشطة للزر المحدد
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // تصفية المشاريع
            projectCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ========== الكود الجديد ==========
    
    // مودال الخدمات
    const serviceModal = document.getElementById('service-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalIcon = document.getElementById('modal-icon');
    const modalDescription = document.getElementById('modal-description');
    const modalFeaturesList = document.getElementById('modal-features-list');
    const modalAdditional = document.getElementById('modal-additional');
    const serviceReadMoreButtons = document.querySelectorAll('.service-read-more');
    
    // فتح مودال الخدمة
    serviceReadMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            const serviceData = serviceDetails[service];
            
            if (serviceData) {
                modalIcon.innerHTML = serviceData.icon;
                modalTitle.textContent = serviceData.title;
                modalDescription.textContent = serviceData.description;
                modalAdditional.textContent = serviceData.additional;
                
                // إضافة الميزات
                modalFeaturesList.innerHTML = '';
                serviceData.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    modalFeaturesList.appendChild(li);
                });
                
                // عرض المودال
                serviceModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // إغلاق مودال الخدمة
    modalClose.addEventListener('click', function() {
        serviceModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // إغلاق المودال بالنقر خارج المحتوى
    serviceModal.addEventListener('click', function(e) {
        if (e.target === serviceModal) {
            serviceModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // زر "اقرأ المزيد" في قسم عن الشركة
    const aboutReadMoreBtn = document.getElementById('about-read-more');
    const aboutMoreContent = document.getElementById('about-more');
    
    aboutReadMoreBtn.addEventListener('click', function() {
        aboutMoreContent.classList.toggle('expanded');
        
        const icon = this.querySelector('i');
        const currentLang = document.documentElement.getAttribute('lang');
        
        if (aboutMoreContent.classList.contains('expanded')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
            this.querySelector('span').textContent = translations[currentLang]['about.readLess'];
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
            this.querySelector('span').textContent = translations[currentLang]['about.readMore'];
        }
    });
    
    // العدادات المتحركة
    const clientsCounter = document.getElementById('clients-counter');
    const projectsCounter = document.getElementById('projects-counter');
    const experienceCounter = document.getElementById('experience-counter');
    const teamCounter = document.getElementById('team-counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(clientsCounter, 0, 75, 2000);
                animateCounter(projectsCounter, 0, 150, 2500);
                animateCounter(experienceCounter, 0, 8, 1500);
                animateCounter(teamCounter, 0, 25, 1800);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counterObserver.observe(document.getElementById('counter-stats'));
    
    // دالة العد المتحرك
    function animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // مودال المشاريع
    const projectModal = document.getElementById('project-modal');
    const projectModalClose = document.getElementById('project-modal-close');
    const projectModalImg = document.getElementById('project-modal-img');
    const projectModalTitle = document.getElementById('project-modal-title');
    const projectModalDescription = document.getElementById('project-modal-description');
    const projectModalFeaturesList = document.getElementById('project-modal-features-list');
    const projectModalAdditional = document.getElementById('project-modal-additional');
    const projectModalLink = document.getElementById('project-modal-link');
    
    // فتح مودال المشروع
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const project = this.getAttribute('data-project');
            const projectData = projectDetails[project];
            
            if (projectData) {
                projectModalImg.src = projectData.image;
                projectModalTitle.textContent = projectData.title;
                projectModalDescription.textContent = projectData.description;
                projectModalAdditional.textContent = projectData.additional;
                projectModalLink.href = projectData.link;
                
                // إضافة الميزات
                projectModalFeaturesList.innerHTML = '';
                projectData.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    projectModalFeaturesList.appendChild(li);
                });
                
                // عرض المودال
                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // إغلاق مودال المشروع
    projectModalClose.addEventListener('click', function() {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // إغلاق المودال بالنقر خارج المحتوى
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
// JavaScript for enhanced interactivity and infinite smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const techItems = document.querySelectorAll('.tech-item');
    
    // Add hover effects
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Enhanced infinite scrolling animation
    const techSlider = document.querySelector('.tech-slider');
    if (techSlider) {
        // Clone the slider content for seamless looping
        const sliderContent = techSlider.innerHTML;
        techSlider.innerHTML = sliderContent + sliderContent + sliderContent;
        
        // Calculate animation duration based on content width
        const totalWidth = techSlider.scrollWidth / 3; // Original content width
        const animationDuration = totalWidth / 50; // Adjust speed (pixels per second)
        
        // Apply the animation
        techSlider.style.animation = `scroll-tech ${animationDuration}s linear infinite`;
        
        // Pause animation on hover
        techSlider.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        techSlider.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
        
        // Ensure smooth animation performance
        techSlider.style.willChange = 'transform';
    }
    
    // Alternative approach using JavaScript animation for better performance
    function startInfiniteScroll() {
        const slider = document.querySelector('.tech-slider');
        if (!slider) return;
        
        let animationFrame;
        let position = 0;
        const speed = 0.5; // Adjust speed here (lower = slower)
        
        function animate() {
            position -= speed;
            
            // Reset position when half of the duplicated content has passed
            const sliderWidth = slider.scrollWidth / 3; // Original width
            if (Math.abs(position) >= sliderWidth) {
                position = 0;
            }
            
            slider.style.transform = `translateX(${position}px)`;
            animationFrame = requestAnimationFrame(animate);
        }
        
        // Start animation
        animate();
        
        // Pause on hover
        slider.addEventListener('mouseenter', function() {
            cancelAnimationFrame(animationFrame);
        });
        
        slider.addEventListener('mouseleave', function() {
            animate();
        });
    }
    
    // Start the JavaScript-based animation (uncomment to use instead of CSS animation)
    // startInfiniteScroll();
});