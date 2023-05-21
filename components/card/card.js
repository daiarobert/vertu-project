function createCard(
  imageSrc,
  name,
  button1Text,
  button1Link,
  button2Text,
  button2Link
) {
  // card element
  const card = document.createElement("div");
  card.classList.add("card-car");

  // image element
  const imageElement = document.createElement("img");
  imageElement.classList.add("image");
  imageElement.src = imageSrc;
  imageElement.alt = "Card Image";
  card.appendChild(imageElement);

  // name element
  const nameElement = document.createElement("div");
  nameElement.classList.add("car-title");
  nameElement.textContent = name;
  card.appendChild(nameElement);

  // buttons element
  const buttonsElement = document.createElement("div");
  buttonsElement.classList.add("buttons");

  // button 1
  const button1Element = document.createElement("a");
  button1Element.classList.add("button1");
  button1Element.href = button1Link;
  button1Element.textContent = button1Text;
  buttonsElement.appendChild(button1Element);

  //  button 2
  const button2Element = document.createElement("a");
  button2Element.classList.add("button2");
  button2Element.href = button2Link;
  button2Element.textContent = button2Text;
  buttonsElement.appendChild(button2Element);

  card.appendChild(buttonsElement);

  return card;
}
