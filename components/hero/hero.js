export function createHero(container) {
  container.innerHTML = `
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title" style="     letter-spacing: 1px;   line-height: 0px;
        font-size: 35px;">Explore the new</h1>
        <h1 class="hero-title" style="font-size: 35px;
        line-height: 1;">BMW i4 range</h1>
        <p class="hero-text" style="white-space: pre-line;">From the cool Trend and SUV-inspired Active \n to the sporty ST-Line, the eighth generation \n Fiesta impresses across the range.</p>
        <a href="testDrive.html"><button class="btn-book-hero">Book a test drive</button></a>
      </div>
    </div>
  `;
}
