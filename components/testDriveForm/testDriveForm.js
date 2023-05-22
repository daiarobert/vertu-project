export function createTestDriveForm(containerElement) {
  const formElement = document.createElement("form");
  formElement.id = "testDriveForm";
  formElement.classList.add("test-drive-form");

  // Create form fields
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name:";
  nameLabel.classList.add("form-label");
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.required = true;
  nameInput.classList.add("form-input");

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  emailLabel.classList.add("form-label");
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.required = true;
  emailInput.classList.add("form-input");

  const phoneLabel = document.createElement("label");
  phoneLabel.textContent = "Phone:";
  phoneLabel.classList.add("form-label");
  const phoneInput = document.createElement("input");
  phoneInput.type = "tel";
  phoneInput.required = true;
  phoneInput.pattern = "[0-9]+";
  phoneInput.classList.add("form-input");

  const carLabel = document.createElement("label");
  carLabel.textContent = "Car:";
  carLabel.classList.add("form-label");
  const carSelect = document.createElement("select");
  carSelect.required = true;
  carSelect.classList.add("form-dropdown");

  const carOptions = ["BMW i4", "BMW i8", "BMW x7"];
  for (const option of carOptions) {
    const carOption = document.createElement("option");
    carOption.value = option;
    carOption.textContent = option;
    carSelect.appendChild(carOption);
  }

  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Date:";
  dateLabel.classList.add("form-label");
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.required = true;
  dateInput.classList.add("form-input");

  const hourLabel = document.createElement("label");
  hourLabel.textContent = "Hour:";
  hourLabel.classList.add("form-label");
  const hourInput = document.createElement("input");
  hourInput.type = "time";
  hourInput.required = true;
  hourInput.classList.add("form-input");

  // Append form fields to the form element
  formElement.appendChild(nameLabel);
  formElement.appendChild(nameInput);
  formElement.appendChild(emailLabel);
  formElement.appendChild(emailInput);
  formElement.appendChild(phoneLabel);
  formElement.appendChild(phoneInput);
  formElement.appendChild(carLabel);
  formElement.appendChild(carSelect);
  formElement.appendChild(dateLabel);
  formElement.appendChild(dateInput);
  formElement.appendChild(hourLabel);
  formElement.appendChild(hourInput);

  // Add submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.classList.add("btn-submit pulse-element");
  formElement.appendChild(submitButton);

  // Add submit event listener to the form
  formElement.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const formValues = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      car: carSelect.value,
      date: dateInput.value,
      hour: hourInput.value,
    };
    console.log("Form submitted:", formValues);
    // Reset the form after logging the data
    formElement.reset();
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  });

  // Append the form element to the container
  containerElement.appendChild(formElement);
}
