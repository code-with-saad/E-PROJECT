// Counter Js Start
function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, step);
}


document.addEventListener("DOMContentLoaded", () => {
    counter("counter-years", 0, 25, 2000);
    counter("counter-collections", 0, 300, 2000);
    counter("counter-schools", 0, 21, 2000);
    counter("counter-colleges", 0, 17, 2000);
});