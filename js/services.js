// خاص بالـPopup Modal بتاع "Read More" في الخدمات، وفتح/غلق النوافذ دي
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

function initServices() {
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

    // زر View All للموبايل
    const viewAllBtn = document.getElementById('viewAllServices');
    const servicesGrid = document.querySelector('.services-grid');
    const viewAllContainer = document.querySelector('.view-all-container');
    const hiddenServices = document.querySelectorAll('.mobile-hidden-service');
    
    if (viewAllBtn && servicesGrid && viewAllContainer) {
        viewAllBtn.addEventListener('click', function() {
            // إظهار جميع الخدمات
            servicesGrid.classList.add('show-all');
            
            // إضافة أنيميشن لكل خدمة مخفية
            hiddenServices.forEach((service, index) => {
                setTimeout(() => {
                    service.classList.add('revealed');
                }, index * 150); // تأخير متدرج للأنيميشن
            });
            
            // إخفاء زر View All بعد النقر
            viewAllContainer.classList.add('hidden');
            
            // تحديث النص في حالة تغيير اللغة
            const currentLang = document.documentElement.getAttribute('lang');
            if (currentLang === 'ar') {
                this.querySelector('span').textContent = 'عرض الكل';
            }
        });
    }
}