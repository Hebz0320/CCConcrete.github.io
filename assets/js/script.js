// Counter
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = Math.abs(end - start),
            increment = start < end ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                // Ensure the counter doesn't exceed the end value
                if ((increment > 0 && current > end) || (increment < 0 && current < end)) {
                    current = end;
                    clearInterval(timer);
                    // Set a fixed height after the counting is done
                    obj.parentElement.style.height = obj.parentElement.scrollHeight + 'px';
                }
                obj.textContent = current;
            }, step);
    }

    counter("count1", 60, 100, 2000); // Adding missing parameters
    counter("count2", 100, 0, 2000);
    counter("count3", 80, 50, 2000);
    counter("count4", 0, 200, 2000);
});

// Scroll
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}




