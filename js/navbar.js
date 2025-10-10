// خاص بتعامل المنيو في الموبايل (القائمة الجانبية / hamburger menu) وفتحها وغلقها
function initNavbar() {
    // تأثير الشريط العلوي عند التمرير
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // القائمة المتنقلة للهواتف
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenu && nav) {
        mobileMenu.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }
}