//Script for the carousel
let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".carousel-images img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  slides[slideIndex - 1].style.display = "block";
  let id = setTimeout(showSlides, 4000); // Change image every 4 seconds

  // If the user clicks on the next or previous button, clear the timeout
  document.querySelectorAll(".prev, .next").forEach((button) => {
    button.addEventListener("click", () => {
      clearTimeout(id);
    });
  });
}

function moveSlide(n) {
  slideIndex += n - 1;
  //   clear the interval
  showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});

// on order click
document.addEventListener("DOMContentLoaded", () => {
  const orderLink = document.querySelector("#order");
  orderLink.addEventListener("click", () => {
    alert(
      "Online ordering is not available at the moment. Please visit our store to place an order."
    );
  });
});
