// Counter
document.addEventListener("DOMContentLoaded", () => {
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
                    // Set a fixed height after the counting is done
                    obj.parentElement.style.height = obj.parentElement.scrollHeight + 'px';
                }
            }, step);
    }

    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
});

// Scroll
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i =0; i< reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}

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


