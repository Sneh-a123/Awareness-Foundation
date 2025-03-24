document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function nextSlide() {
        let currentSlide = slides[currentIndex];
        let nextIndex = (currentIndex + 1) % totalSlides;
        let nextSlide = slides[nextIndex];

        // ✅ पहले current slide को remove करो  
        currentSlide.classList.remove('s--active');
        currentSlide.classList.add('s--prev');

        nextSlide.classList.add('s--active');

        // ✅ अगर Last से First Slide आ रही है, तो तुरंत transition करें
        if (nextIndex === 0) {
            setTimeout(() => {
                slides.forEach(slide => slide.classList.remove('s--prev'));
            }, 50);  // बहुत कम delay ताकि सफेद screen न दिखे
        }

        currentIndex = nextIndex;
    }

    setInterval(nextSlide, 3000);
});
