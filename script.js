// ============================================
// MOBILE MENU FIX - PRIMARY ISSUE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu elements
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Mobile menu toggle - FIXED
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            console.log('Menu toggled!'); // Debug log
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
    
    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Close mobile menu after click
            navLinks.classList.remove('active');
        });
    });
    
    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in, .service-card').forEach(el => {
        observer.observe(el);
    });
    
    // ============================================
    // NAVBAR BACKGROUND ON SCROLL
    // ============================================
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            header.style.backdropFilter = 'none';
        }
    });
    
    // ============================================
    // EMAIL CLICK HANDLER
    // ============================================
    const emailLink = document.querySelector('.email-link');
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.getAttribute('data-email') || 'istiqbal.marketing@gmail.com';
            window.location.href = `mailto:${email}`;
        });
    }
    
    // ============================================
    // TYPING EFFECT (Optional)
    // ============================================
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        let i = 0;
        let typing = false;
        
        function typeWriter() {
            if (i < originalText.length && typing) {
                heroTitle.textContent = originalText.slice(0, i + 1) + '|';
                i++;
                setTimeout(typeWriter, 50);
            } else {
                heroTitle.textContent = originalText;
            }
        }
        
        setTimeout(() => {
            typing = true;
            typeWriter();
        }, 500);
    }
    
    console.log('✅ Istiqbal JS Loaded Successfully!');
});