// خاص بـCounter Animation اللي بيزود الأرقام تدريجيًا (Clients / Projects / Years Experience)
function initStats() {
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
    
    if (document.getElementById('counter-stats')) {
        counterObserver.observe(document.getElementById('counter-stats'));
    }
    
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
}