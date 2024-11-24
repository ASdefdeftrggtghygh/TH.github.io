// استدعاء المربعات
const boxes = document.querySelectorAll('.feature-box');

// إعدادات Intersection Observer
const observerOptions = {
    root: null, // المراقبة ستكون بالنسبة للنافذة
    threshold: 0.1 // يظهر التأثير عندما يدخل 10% من العنصر إلى منطقة العرض
};

// التعامل مع العناصر التي تدخل منطقة العرض
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // عندما يدخل المربع في منطقة العرض، إضافة كلاس visible لتحريكه
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // إيقاف المراقبة بعد أن تم تحريكه
        }
    });
};

// إنشاء المراقب
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// مراقبة المربعات
boxes.forEach(box => {
    observer.observe(box);
});
