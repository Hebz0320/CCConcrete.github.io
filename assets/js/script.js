document.addEventListener('DOMContentLoaded', () => {
    // Close the navbar when a link or button is clicked
    document.querySelectorAll('.navbar-nav .nav-link, .contact-button').forEach(element => {
        element.addEventListener('click', () => {
            const navbarCollapse = document.getElementById('collapsibleNavId');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });

    // Handle navbar toggler click
    document.querySelector('.navbar-toggler').addEventListener('click', () => {
        const navbarCollapse = document.getElementById('collapsibleNavId');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            navbarCollapse.style.opacity = '0';
            navbarCollapse.style.visibility = 'hidden';
        } else {
            navbarCollapse.classList.add('show');
            navbarCollapse.style.opacity = '1';
            navbarCollapse.style.visibility = 'visible';
        }
    });
});

// Counter
function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current === end) {
                clearInterval(timer);
                obj.parentElement.style.height = obj.parentElement.scrollHeight + 'px';
            }
        }, step);
}

document.addEventListener("DOMContentLoaded", () => {
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
});

// Scroll Reveal
window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
});




