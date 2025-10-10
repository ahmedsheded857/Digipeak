// خاص بزر "اقرأ المزيد" في قسم "من نحن"، وإظهار التفاصيل الإضافية
function initAbout() {
    // زر "اقرأ المزيد" في قسم عن الشركة
    const aboutReadMoreBtn = document.getElementById('about-read-more');
    const aboutMoreContent = document.getElementById('about-more');
    
    if (aboutReadMoreBtn && aboutMoreContent) {
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
    }
}