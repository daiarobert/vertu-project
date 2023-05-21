export function createModal(container, button) {
  // Open modal when the button is clicked
  button.addEventListener("click", openModal);
  // Create modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");

  // Create modal card
  const modalCard = document.createElement("div");
  modalCard.classList.add("modal-card");

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Create modal form
  const modalForm = document.createElement("form");

  // Create form fields
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name:";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.required = true;

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.required = true;

  // Append form fields to the form
  modalForm.appendChild(nameLabel);
  modalForm.appendChild(nameInput);
  modalForm.appendChild(emailLabel);
  modalForm.appendChild(emailInput);

  // Create modal buttons
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.type = "button";
  cancelButton.addEventListener("click", closeModal);

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.type = "submit";

  // Append buttons to the form
  modalForm.appendChild(cancelButton);
  modalForm.appendChild(submitButton);

  // Append form to the modal content
  modalContent.appendChild(modalForm);

  // Append modal content to the modal card
  modalCard.appendChild(modalContent);

  // Append modal card to the modal overlay
  modalOverlay.appendChild(modalCard);

  // Append modal overlay to the container
  container.appendChild(modalOverlay);

  // Open modal when a button is clicked
  const openModalButton = document.getElementById("open-modal-button");
  openModalButton.addEventListener("click", openModal);

  // Close modal when the overlay or cancel button is clicked
  modalOverlay.addEventListener("click", closeModal);
  cancelButton.addEventListener("click", closeModal);

  // Prevent closing the modal when clicking inside the modal card
  modalCard.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  // Function to open the modal
  function openModal() {
    modalOverlay.classList.add("open");
  }

  // Function to close the modal
  function closeModal() {
    modalOverlay.classList.remove("open");
  }
}
