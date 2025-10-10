// ملف رئيسي لتجميع كل الملفات واستدعائها بالترتيب
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // استدعاء جميع الوظائف بالترتيب
    initTheme();
    initLanguage();
    initNavbar();
    initHero();
    initServices();
    initAbout();
    initProjects();
    initTechStack();
    initStats();
    initScrollAnimations();
});