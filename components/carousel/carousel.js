export function createCarousel(container) {
  const carousel = document.createElement("section");
  carousel.setAttribute("id", "carousel");

  const cardData = [
    {
      id: 1,
      title: "M 50",
      price: "65,795",
      options: [
        "Velour floor mats",
        "Sun protection mats",
        "Automatic Stability Control (ASC)",
        "Adaptive M suspension",
        "Storage for wireless charging",
        "Cruise control with break assist",
        "Automatic tailgate operation",
      ],
      src: "assets/Trim-01.jpg",
    },
    {
      id: 2,
      title: "M Sport",
      options: [
        "Velour floor mats",
        "Rain sensor including auto headlights activation",
        "Automatic Stability Control (ASC)",
        "Standard suspension",
        "Electric Power Steering (EEPS) with Servotronic",

        "Automatic tailgate operation",
      ],
      src: "assets/Trim-02.jpg",
    },
    {
      id: 3,
      title: "M sport",
      options: [
        "Velour floor mats",
        "Rain sensor including auto headlights activation",
        "Automatic Stability Control (ASC)",
        "Standard suspension",
        "Electric Power Steering (EEPS) with Servotronic",

        "Automatic tailgate operation",
      ],
      src: "assets/Trim-03.jpg",
    },
    {
      id: 4,
      title: "X Drive",
      options: [
        "Velour floor mats",
        "Rain sensor including auto headlights activation",
        "Automatic Stability Control (ASC)",
        "Standard suspension",
        "Electric Power Steering (EEPS) with Servotronic",

        "Automatic tailgate operation",
      ],
      src: "assets/Trim-01.jpg",
    },
    {
      id: 5,
      title: "X drive Sport",
      options: [
        "Velour floor mats",
        "Rain sensor including auto headlights activation",
        "Automatic Stability Control (ASC)",
        "Standard suspension",
        "Electric Power Steering (EEPS) with Servotronic",

        "Automatic tailgate operation",
      ],
      src: "assets/Trim-02.jpg",
    },
  ];

  const cardElements = cardData
    .map((card) => {
      const options = card.options
        .map((option) => `<li>${option}</li>`)
        .join("");

      return `
        <div class="card card-${card.id}">
          <div class='card-img' style="background-image: url(${card.src}); 
          background-size: 100%;
          height: 230px;" alt="Card Image"></div>
          <h3 class="card-title">${card.title}</h3>
          <ul class='options-list'>${options}</ul>
        </div>
      `;
    })
    .join("");

  carousel.innerHTML = `
    <div id="carousel-slide">
      <div class="carousel-container">
        <!-- Add the div with text here -->
        <div class="carousel-text">BMW i4 trims</div>
        ${cardElements}
      </div>
      <div class="nextBtn-wrapper" id="nextBtn">
        <i class="fas fa-light fa-circle-chevron-right"></i>
      </div>
    </div>
  `;
  container.appendChild(carousel);

  const carouselContainer = document.querySelector(".carousel-container");
  const nextBtn = document.querySelector("#nextBtn");
  const cards = Array.from(document.querySelectorAll(".card"));

  let cardWidth;
  let currentPosition = 0;

  if (cards.length > 0) {
    cardWidth = 400; // Updated card width value

    nextBtn.addEventListener("click", () => {
      currentPosition -= cardWidth;

      carouselContainer.style.transform = `translateX(${currentPosition}px)`;

      const lastCardPosition = -(cardWidth * (cards.length - 2));
      if (currentPosition <= lastCardPosition) {
        currentPosition = 0; // Reset to the first card
        carouselContainer.style.transform = `translateX(${currentPosition}px)`;
      }
    });
  } else {
    console.error("No cards found in the carousel.");
  }
}
