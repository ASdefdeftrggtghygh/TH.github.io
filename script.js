// اختيار المربعات
const featureBoxes = document.querySelectorAll('.feature-box');

// إعداد Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // إيقاف المراقبة بعد ظهور المربع
        }
    });
}, {
    threshold: 0.5 // عندما يظهر المربع بنسبة 50% في الشاشة
});

// مراقبة كل مربع
featureBoxes.forEach(box => {
    observer.observe(box);
});
