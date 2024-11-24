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


const track = document.querySelector('.carousel-track');
const dots = Array.from(document.querySelectorAll('.dot'));

let currentIndex = 0;

function updateCarousel() {
  const offset = currentIndex * -100; // تحريك التراك
  track.style.transform = `translateX(${offset}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;

      const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
const dots = Array.from(document.querySelectorAll('.dot'));

let currentIndex = 0;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;

// تحديث حالة العرض
function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // تحديث النقاط
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// عند بدء السحب
function startDrag(e) {
    isDragging = true;
    startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    track.style.transition = 'none'; // تعطيل الحركة أثناء السحب
}

// عند السحب
function drag(e) {
    if (!isDragging) return;

    const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const deltaX = currentX - startX;
    currentTranslate = prevTranslate + deltaX;
    track.style.transform = `translateX(${currentTranslate}px)`;
}

// عند إنهاء السحب
function endDrag() {
    isDragging = false;

    // تحديد الحركة بناءً على الاتجاه
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentIndex < cards.length - 1) {
        currentIndex++; // الانتقال للبطاقة التالية
    } else if (movedBy > 50 && currentIndex > 0) {
        currentIndex--; // الرجوع للبطاقة السابقة
    }

    updateCarousel();
    prevTranslate = -currentIndex * track.offsetWidth;
    track.style.transition = 'transform 0.5s ease-in-out';
}

// إضافة مستمعات الأحداث
track.addEventListener('mousedown', startDrag);
track.addEventListener('mousemove', drag);
track.addEventListener('mouseup', endDrag);
track.addEventListener('mouseleave', endDrag);

track.addEventListener('touchstart', startDrag);
track.addEventListener('touchmove', drag);
track.addEventListener('touchend', endDrag);

// النقاط
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// تحديث العرض الافتراضي
updateCarousel();

    updateCarousel();
  });
});


