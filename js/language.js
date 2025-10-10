// خاص بتبديل اللغة (العربية ↔ الإنجليزية) وكل النصوص اللي بتتغير في الصفحات
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
        "contact.addressValue": "Cairo, Egypt",
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
         
        // في كائن translations - قسم services
        "services.viewAll": "View All",

        // وفي النسخة العربية
        "services.viewAll": "عرض الكل",
        
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
         
        // في كائن translations - قسم projects
        "projects.viewAll": "View All",
        "projects.viewLess": "View Less",

         // وفي النسخة العربية
        "projects.viewAll": "عرض الكل",
        "projects.viewLess": "عرض أقل",  

        // قسم التقنيات
        "tech.title": "تقنياتنا",
        "tech.subtitle": "نستخدم أحدث التقنيات والأدوات لضمان تقديم حلول عالية الجودة",
        
        // قسم التواصل
        "contact.title": "تواصل معنا",
        "contact.subtitle": "نحن هنا للإجابة على استفساراتك ومساعدتك في بدء مشروعك التالي",
        "contact.info": "معلومات التواصل",
        "contact.address": "العنوان",
        "contact.addressValue": " القاهره , مصر",
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

function initLanguage() {
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
        
        if (aboutMoreContent && aboutMoreContent.classList.contains('expanded')) {
            aboutReadMoreSpan.textContent = translations[lang]['about.readLess'];
            aboutReadMoreIcon.classList.remove('fa-chevron-down');
            aboutReadMoreIcon.classList.add('fa-chevron-up');
        } else if (aboutReadMoreSpan) {
            aboutReadMoreSpan.textContent = translations[lang]['about.readMore'];
            aboutReadMoreIcon.classList.remove('fa-chevron-up');
            aboutReadMoreIcon.classList.add('fa-chevron-down');
        }
    }
}