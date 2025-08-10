const messages = [
    "I'm sorry...",
    "I really didn’t mean to hurt you.",
    "I hope you can forgive me.",
    `I LOVE YOU <span class="france">FRANCE</span>`,
    "This is my masterpiece for you my love..."
];

let index = 0;
const messageElement = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const mainContent = document.getElementById("mainContent");
const slideshow = document.getElementById("slideshow");
const slides = document.querySelectorAll(".slide");
const blackScreen = document.getElementById("blackScreen");
const finale = document.getElementById("finale");
const bgMusic = document.getElementById("bgMusic");

nextBtn.addEventListener("click", () => {
    index++;
    if (index < messages.length) {
        messageElement.innerHTML = messages[index];
    } else {
        messageElement.innerHTML = `<span class="heart">❤️</span>`;
        nextBtn.style.display = "none";
        document.body.classList.add("bg-romantic");
        // Play music first, then after small delay start slideshow
        bgMusic.volume = 0.5;
        bgMusic.play().catch(e => {
            console.log("Audio play prevented:", e);
        });
        setTimeout(startSlideshow, 2000);
    }
});

function startSlideshow() {
    mainContent.style.display = "none";
    document.body.classList.remove("bg-romantic");
    slideshow.style.display = "flex";

    let slideIndex = 0;
    function showSlide() {
        slides.forEach(slide => {
            slide.style.opacity = "0";
            slide.style.animation = "none";
        });

        if (slideIndex < slides.length) {
            let currentSlide = slides[slideIndex];
            currentSlide.style.animation = "fadeSlide 9s linear forwards";

            let duration = currentSlide.classList.contains("text-only") ? 10000 : 9000;

            slideIndex++;
            setTimeout(showSlide, duration);
        } else {
            startBlackScreen();
        }
    }
    showSlide();
}

function startBlackScreen() {
    slideshow.style.display = "none";
    blackScreen.style.display = "flex";

    setTimeout(() => {
        blackScreen.style.display = "none";
        finale.style.display = "flex";
    }, 4000); // Show black screen for 4 seconds before finale
}
