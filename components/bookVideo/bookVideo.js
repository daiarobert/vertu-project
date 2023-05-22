export function createBookVideo(container) {
  container.innerHTML = `
      <div class="book-video-container">
        <div class="text-content bookVideo">
          <h1>Explore the new BMW \n interior</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruLorem ipsum dolor sit amet, consecttur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <!-- Text content goes here -->
          <a href="testDrive.html"><button class="btn-book pulse-element">Request a Personalised Video</button></a>
        </div>
        <div class="image-content-bookVideo">
          <!-- Image content goes here -->
          <img src="assets/Feature-01.jpg" alt="Book Image" class="book-image">
        </div>
      </div>
    `;
}
