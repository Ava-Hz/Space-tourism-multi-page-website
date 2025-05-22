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

  // Technology Page
  $(".active").click(function () {
    $(".active").css({ background: "#fff", color: "black" });
    $(".second").css({ background: "none", color: "#fff" });
    $(".third").css({ background: "none", color: "#fff" });
    $(".h3-tech").text("SPACE CAPCULE");
    $(".p-tech").text(
      " A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    );
    $(".img-tech").attr(
      "src",
      "./assets/technology/image-space-capsule-landscape.jpg"
    );
  });
  $(".second").click(function () {
    $(".active").css({ background: "none", color: "#fff" });
    $(".second").css({ background: "#fff", color: "black" });
    $(".third").css({ background: "none", color: "#fff" });
    $(".h3-tech").text("SPACEPORT");
    $(".p-tech").text(
      "   A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    );
    $(".img-tech").attr(
      "src",
      "./assets/technology/image-spaceport-landscape.jpg"
    );
  });

  $(".third").click(function () {
    $(".active").css({ background: "none", color: "#fff" });
    $(".second").css({ background: "none", color: "#fff" });
    $(".third").css({ background: "#fff", color: "black" });
    $(".h3-tech").text("LAUNCH VEHICLE");
    $(".p-tech").text(
      " A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    );
    $(".img-tech").attr(
      "src",
      "./assets/technology/image-launch-vehicle-landscape.jpg"
    );
  });
});
