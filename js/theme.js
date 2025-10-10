function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // الوضع الافتراضي دايمًا ليلي
    let savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        savedTheme = 'dark';
        localStorage.setItem('theme', 'dark');
    }

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.textContent = '🌞';
    } else {
        body.classList.remove('light-mode');
        themeIcon.textContent = '🌙';
    }

    // عند الضغط على الزر
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
}
