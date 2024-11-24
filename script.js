document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.feature-box');

    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    boxes.forEach(box => {
        observer.observe(box);
    });
});
