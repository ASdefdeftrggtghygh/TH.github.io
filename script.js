// استدعاء المربعات (العناصر التي تريد تحريكها)
const boxes = document.querySelectorAll('.feature-box');

// التحقق عند التمرير (scroll)
const handleScroll = () => {
    boxes.forEach((box) => {
        // الحصول على موقع المربع relative إلى الشاشة
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;  // تحديد النقطة التي يبدأ منها التحريك (يمكنك تعديلها)

        // إضافة كلاس visible عند تواجد العنصر في الشاشة
        if (boxPosition < screenPosition) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
};

// ربط حدث التمرير بالوظيفة
window.addEventListener('scroll', handleScroll);

// التمرير الأولي عند تحميل الصفحة
handleScroll();
