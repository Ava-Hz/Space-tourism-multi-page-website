$(document).ready(function () {
  //Destination Page
  $(".mars").click(function () {
    $(".space-dest").text("MARS");
    $(".paragraph-dest").text(
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
    );
    $(".distance-moon").text("225 mil. km");
    $(".time-moon").text("9 months");
    $(".img-dest").attr("src", "./assets/destination/image-mars.png");
  });

  $(".moon").click(function () {
    $(".space-dest").text("MOON");
    $(".paragraph-dest").text(
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
    );
    $(".distance-moon").text("384,400 km");
    $(".time-moon").text("3 days");
    $(".img-dest").attr("src", "./assets/destination/image-moon.png");
  });

  $(".europa").click(function () {
    $(".space-dest").text("EUROPA");
    $(".paragraph-dest").text(
      "    Europa The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    );
    $(".distance-moon").text("628 mil. km");
    $(".time-moon").text("3 years");
    $(".img-dest").attr("src", "./assets/destination/image-europa.png");
  });

  $(".titan").click(function () {
    $(".space-dest").text("TITAN");
    $(".paragraph-dest").text(
      "  The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    );
    $(".distance-moon").text(" 1.6 bil. km");
    $(".time-moon").text("7 years");
    $(".img-dest").attr("src", "./assets/destination/image-titan.png");
  });

  //Crew Page

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let autoSlideInterval;


  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentSlide);
      slide.style.left =
        index < currentSlide ? "-100%" : index > currentSlide ? "100%" : "0";
    });
  }



  function goToSlide(index) {
    currentSlide = index;
    updateSlides();
    resetAutoSlide();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlides();
    resetAutoSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 10000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  updateSlides();
  startAutoSlide();
});
