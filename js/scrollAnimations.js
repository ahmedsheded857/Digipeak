// خاص بكل الأنيميشن اللي بتظهر أثناء الـScroll (Fade-in / Slide / Zoom-in)
function initScrollAnimations() {
    // تأثير المؤشر
    const cursor = document.querySelector('.cursor-light');
    
    if (cursor) {
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
    }

    // إرسال نموذج التواصل
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting us! We will get back to you as soon as possible.');
            contactForm.reset();
        });
    }
}