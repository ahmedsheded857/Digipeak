// خاص بالحركة أو السلايدر (Logo Slider / Tech Grid Animation) في قسم Tech Stack
function initTechStack() {
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
}