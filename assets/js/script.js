// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Function to handle counter animation (if needed)
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

    // Example counters (if needed)
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);

    // Initialize Bootstrap Collapse manually
    const collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
    const collapseList = collapseElementList.map(function (collapseEl) {
        return new bootstrap.Collapse(collapseEl, {
            toggle: false
        })
    });

    // Close the navbar when a link or button is clicked
    document.querySelectorAll('.navbar-nav .nav-link, .contact-button').forEach(element => {
        element.addEventListener('click', () => {
            const navbarCollapse = document.getElementById('collapsibleNavId');
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse); // Get the instance
            if (bsCollapse) {
                bsCollapse.hide(); // Hide the menu
            }
        });
    });
});

// Scroll animation
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}






