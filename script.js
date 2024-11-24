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
    updateCarousel();
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    // استخدام IntersectionObserver للكشف عند التمرير
    const observerOptions = {
        root: null, // الإشراف على كل الشاشة
        threshold: 0.1 // عندما تكون 10% من البطاقة مرئية
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // إظهار البطاقة عندما تظهر
                observer.unobserve(entry.target); // التوقف عن المراقبة بعد ظهور البطاقة
            }
        });
    }, observerOptions);

    // مراقبة البطاقات
    cards.forEach(card => {
        observer.observe(card);
    });
});

.carousel {
  width: 300px; /* عرض الحاوية */
  overflow: hidden; /* إخفاء البطاقات الخارجة عن الحاوية */
  margin: 50px auto; /* توسيط الحاوية */
  position: relative;
}

.carousel-track {
  display: flex; /* ترتيب البطاقات أفقياً */
  transition: transform 0.5s ease-in-out; /* تأثير انسيابي للتحريك */
}

.card {
  min-width: 300px; /* عرض البطاقة */
  padding: 20px;
  border: 2px solid #ff6200;
  border-radius: 15px;
  background: #1e1e1e;
  text-align: center;
  color: white;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
}


