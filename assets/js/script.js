document.addEventListener("DOMContentLoaded", () => {
    // Counter code
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

    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);

    // Close the navbar when a link or button is clicked
    document.querySelectorAll('.navbar-nav .nav-link, .contact-button').forEach(element => {
        element.addEventListener('click', () => {
            const navbarCollapse = document.getElementById('collapsibleNavId');
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                }).hide();
            }
        });
    });
});

// Fix for Bootstrap's default behavior
document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('collapsibleNavId');

    navbarToggler.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            navbarCollapse.style.transition = 'none'; // Disable transition during hide
            setTimeout(() => {
                navbarCollapse.style.opacity = '0';
                navbarCollapse.style.visibility = 'hidden';
                navbarCollapse.style.transition = ''; // Re-enable transition
            }, 300); // Match with your transition time
        } else {
            navbarCollapse.style.opacity = '0';
            navbarCollapse.style.visibility = 'visible';
            setTimeout(() => {
                navbarCollapse.classList.add('show');
                navbarCollapse.style.opacity = '1';
            }, 10); // Short delay to ensure opacity transition
        }
    });
});




