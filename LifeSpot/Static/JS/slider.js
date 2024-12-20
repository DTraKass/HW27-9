let slideIndex = 0;
showSlides();

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

function handleScroll(event) {
    if (event.deltaY > 0) {
        changeSlide(1);
    } else {
        changeSlide(-1);
    }
}