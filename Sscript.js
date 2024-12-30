document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener("load", () => {
        const loader = document.getElementById("loader");
        const mainContent = document.getElementById("main-content");
    
        // إخفاء الـ Loader بعد 10 ثوانٍ (أو عند انتهاء التحميل)
        setTimeout(() => {
            loader.style.opacity = "0"; // تأثير اختفاء تدريجي
            loader.style.visibility = "hidden"; // إخفاء الـ Loader
            mainContent.classList.add("show"); // عرض المحتوى الرئيسي بتأثير
        }, 9000); // 10 ثوانٍ
    });
    
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission with validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === "" || email === "" || message === "") {
            alert('Please fill out all fields.');
            return;
        }

        alert('Message sent!');
        form.reset();
    });

    // Image hover effects
    const images = document.querySelectorAll('.portfolio-item img, .service-item img, .blog-post img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Scroll animations
    const sections = document.querySelectorAll('.content-section');
    const options = {
        threshold: 0.25
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
