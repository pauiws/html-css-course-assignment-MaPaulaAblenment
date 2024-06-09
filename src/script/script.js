let currentIndex = 0;

function moveCarousel(direction) {
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  const amountToMove = -currentIndex * 100;
  track.style.transform = `translateX(${amountToMove}%)`;
}

// Event listeners for buttons
document
  .querySelector(".prev")
  .addEventListener("click", () => moveCarousel(-1));
document
  .querySelector(".next")
  .addEventListener("click", () => moveCarousel(1));
