const cardData = [
  {
    imageSrc: "assets/car-1.jpg",
    name: "BMW 1",
    button1Text: "Book a test drive",
    button1Link: "testDrive.html",
    button2Text: "Buy now",
    button2Link: "/#",
  },
  {
    imageSrc: "assets/car-2.jpg",
    name: "BMW 2",
    button1Text: "Book a test drive",
    button1Link: "testDrive.html",
    button2Text: "Buy now",
    button2Link: "/#",
  },
  {
    imageSrc: "assets/car-3.jpg",
    name: "BMW 3",
    button1Text: "Book a test drive",
    button1Link: "testDrive.html",
    button2Text: "Buy now",
    button1Link: "/#",
  },
];

const container = document.getElementById("cardContainer");

const cards = cardData.map((data) => {
  const { imageSrc, name, button1Text, button1Link, button2Text, button2Link } =
    data;
  const card = createCard(
    imageSrc,
    name,
    button1Text,
    button1Link,
    button2Text,
    button2Link
  );
  return card;
});

cards.forEach((card) => {
  container.appendChild(card);
});
