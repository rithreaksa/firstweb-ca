let carouselIndex = 0;

const runCarousel = () => {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  carouselIndex += 1;
  if (carouselIndex > slides.length) {
    carouselIndex = 1;
  }

  slides[carouselIndex - 1].style.display = "block";

  setTimeout(runCarousel, 10000);
}

runCarousel();
