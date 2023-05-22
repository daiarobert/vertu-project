export function createBookTestDrive(container) {
  container.innerHTML = `
      <div class="book-testDrive-container">
      <div class="image-content-testDrive">
          <!-- Image content goes here -->
          <img src="assets/Feature-02.jpg" alt="Book Image" class="book-image">
          
        </div>
        <div class="text-content testDrive">
          <!-- Text content goes here -->
          <h1>Electrifying performance with the BMW i4</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          <div class="info-container">
            <div class="range-container">
              <h1>02:05 hr</h1>
              <p>Charging at home for a \n Range of 62 miles</p>
            </div>
            <div class="milage-container">
              <h1>365</h1>
              <p>Electric range in miles</p>
            </div>
          </div>
          <a href="testDrive.html"><button class="btn-book pulse-element">Book a test drive</button></a>
        </div>
        
      </div>
    `;
}
