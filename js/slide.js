document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;
    let isAutoSliding = true;
    let slideTimeout;

    // 슬라이드 변경 함수
    function changeSlide(index) {
        slides.forEach((slide) => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    // 다음 슬라이드
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        changeSlide(currentIndex);
    }

    // 이전 슬라이드
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        changeSlide(currentIndex);
    }

    // `requestAnimationFrame()`을 활용한 자동 슬라이드
    function startAutoSlide() {
        if (!isAutoSliding) return;

        function slideLoop() {
            nextSlide();
            slideTimeout = setTimeout(() => requestAnimationFrame(slideLoop), 4000); // 4초 후 슬라이드 변경
        }

        slideTimeout = setTimeout(() => requestAnimationFrame(slideLoop), 1000); // 첫 실행
    }

    // 자동 슬라이드 멈추기
    function stopAutoSlide() {
        isAutoSliding = false;
        clearTimeout(slideTimeout);
    }

    // 다시 자동 슬라이드 시작
    function resumeAutoSlide() {
        isAutoSliding = true;
        startAutoSlide();
    }

    // 버튼 클릭 시 슬라이드 변경 + 자동 슬라이드 리셋
    nextBtn.addEventListener("click", function () {
        nextSlide();
        stopAutoSlide();
        resumeAutoSlide();
    });

    prevBtn.addEventListener("click", function () {
        prevSlide();
        stopAutoSlide();
        resumeAutoSlide();
    });

    // 마우스 올리면 자동 슬라이드 멈춤, 떠나면 다시 시작
    document.querySelector(".carousel").addEventListener("mouseenter", stopAutoSlide);
    document.querySelector(".carousel").addEventListener("mouseleave", resumeAutoSlide);

    // 초기 실행
    changeSlide(currentIndex);
    startAutoSlide();
});
