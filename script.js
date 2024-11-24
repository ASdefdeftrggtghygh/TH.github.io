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


