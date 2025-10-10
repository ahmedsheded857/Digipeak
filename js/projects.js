// إعدادات AOS المتجاوبة حسب حجم الشاشة
function initAOS() {
    // الكشف عن حجم الشاشة
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
    
    // إعدادات مختلفة حسب حجم الشاشة
    const aosConfig = {
        // الإعدادات الأساسية
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        
        // إعدادات تختلف حسب حجم الشاشة
        offset: isMobile ? 80 : (isTablet ? 120 : 200),
        delay: isMobile ? 0 : (isTablet ? 50 : 100),
        duration: isMobile ? 500 : (isTablet ? 600 : 800),
        easing: 'ease-in-out',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom'
    };
    
    // تهيئة AOS بالإعدادات
    AOS.init(aosConfig);
    
    // إعادة تهيئة AOS عند تغيير حجم الشاشة
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            AOS.refresh();
        }, 250);
    });
}

// تهيئة AOS عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initAOS();
});

// خاص بالمشاريع في الكاتجري + الـPopup اللي بيعرض تفاصيل المشروع عند الضغط عليه
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

function initProjects() {
    // تصفية المشاريع حسب الفئة
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // دالة لعرض مشروعين فقط من كل فئة مع fade سريع
    function showTwoProjectsPerCategory(category) {
        // إخفاء جميع المشاريع أولاً
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.display = 'none';
        });
        
        // استخدام setTimeout بفارق 0 لتجنب تأخير العرض
        setTimeout(() => {
            if (category === 'all') {
                // عرض أول مشروعين من كل فئة
                const categories = ['web', 'mobile', 'security', 'marketing', 'design', 'ai'];
                categories.forEach(cat => {
                    const categoryProjects = document.querySelectorAll(`.project-card[data-category="${cat}"]`);
                    for (let i = 0; i < 2 && i < categoryProjects.length; i++) {
                        categoryProjects[i].style.display = 'block';
                        // fade سريع جداً
                        setTimeout(() => {
                            categoryProjects[i].style.opacity = '1';
                        }, 10);
                    }
                });
            } else {
                // عرض أول مشروعين من الفئة المحددة
                const categoryProjects = document.querySelectorAll(`.project-card[data-category="${category}"]`);
                for (let i = 0; i < 2 && i < categoryProjects.length; i++) {
                    categoryProjects[i].style.display = 'block';
                    // fade سريع جداً
                    setTimeout(() => {
                        categoryProjects[i].style.opacity = '1';
                    }, 10);
                }
            }
        }, 0);
    }
    
    // تهيئة العرض الأولي - عرض مشروعين من كل فئة
    showTwoProjectsPerCategory('web');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // إزالة الفئة النشطة من جميع الأزرار
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة الفئة النشطة للزر المحدد
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            showTwoProjectsPerCategory(category);
        });
    });

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
}