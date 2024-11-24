// إضافة حركة للنص عند التمرير للأسفل
window.addEventListener('scroll', function() {
    const title = document.querySelector('.section-title');
    const featureBoxes = document.querySelectorAll('.feature-box');
    const triggerBottom = window.innerHeight / 1.3; // المسافة التي يجب أن يظهر عندها النص والمربعات
  
    // تظهر الكتابة عند التمرير للنص
    if (title.getBoundingClientRect().top < triggerBottom) {
      title.style.animation = 'fadeIn 1s forwards';
    }
  
    // تظهر المربعات عند التمرير لها
    featureBoxes.forEach(box => {
      if (box.getBoundingClientRect().top < triggerBottom) {
        box.classList.add('show'); // إضافة الكلاس الذي يفعل الحركة
      }
    });
  });
  