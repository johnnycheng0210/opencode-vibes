document.addEventListener('DOMContentLoaded', () => {
    const routes = document.querySelectorAll('.route');
    const navLinks = document.querySelectorAll('.nav-links a');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-links');
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    let currentRoute = null;
    let isTransitioning = false;

    function navigateTo(routeId) {
        if (isTransitioning || routeId === currentRoute) return;
        isTransitioning = true;

        const target = document.getElementById(routeId);
        if (!target) {
            isTransitioning = false;
            return;
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-route') === routeId) {
                link.classList.add('active');
            }
        });

        if (currentRoute) {
            const currentEl = document.getElementById(currentRoute);
            currentEl.classList.add('exiting');
            currentEl.classList.remove('active');
        }

        setTimeout(() => {
            if (currentRoute) {
                const currentEl = document.getElementById(currentRoute);
                currentEl.classList.remove('exiting');
                currentEl.style.visibility = 'hidden';
            }

            target.style.visibility = 'visible';
            target.classList.add('active');
            currentRoute = routeId;
            window.scrollTo(0, 0);
            isTransitioning = false;
        }, 300);
    }

    document.querySelectorAll('[data-route]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const routeId = link.getAttribute('data-route');
            history.pushState(null, '', `#${routeId}`);
            navigateTo(routeId);
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    window.addEventListener('popstate', () => {
        const hash = window.location.hash.replace('#', '') || 'home';
        navigateTo(hash);
    });

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formSuccess.classList.add('visible');
            contactForm.reset();
            setTimeout(() => {
                formSuccess.classList.remove('visible');
            }, 4000);
        });
    }

    const initialRoute = window.location.hash.replace('#', '') || 'home';
    const initialEl = document.getElementById(initialRoute);
    if (initialEl) {
        initialEl.classList.add('active');
        initialEl.style.visibility = 'visible';
        currentRoute = initialRoute;
    }
});
