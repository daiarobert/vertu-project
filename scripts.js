import { createNavbar } from "./components/navbar/navbar.js";
import { createHero } from "./components/hero/hero.js";
import { createCarousel } from "./components/carousel/carousel.js";
import { createBookVideo } from "./components/bookVideo/bookVideo.js";
import { createBookTestDrive } from "./components/bookTestDrive/bookTestDrive.js";
import {
  login,
  checkAccessToken,
  handleLoginFormSubmit,
} from "./components/login/login.js";
import { createTestDriveForm } from "./components/testDriveForm/testDriveForm.js";

// Generate components
document.addEventListener("DOMContentLoaded", () => {
  // Create the navigation bar
  const navbarElement = document.querySelector("#navbar");
  if (navbarElement) {
    createNavbar(navbarElement);
  }

  // Create the hero section if the element exists
  const heroElement = document.querySelector("#hero");
  if (heroElement) {
    createHero(heroElement);
  }

  // Create the carousel section if the element exists
  const carouselElement = document.querySelector("#carousel");
  if (carouselElement) {
    createCarousel(carouselElement);
  }

  // Create the book-video section if the element exists
  const bookVideoElement = document.querySelector("#bookVideoElement");
  if (bookVideoElement) {
    createBookVideo(bookVideoElement);
  }

  // Create the book-test-drive section if the element exists
  const bookTestDriveElement = document.querySelector("#bookTestDrive");
  if (bookTestDriveElement) {
    createBookTestDrive(bookTestDriveElement);
  }

  // Handle login form submission
  const loginForm = document.querySelector("#login");
  if (loginForm) {
    const currentPath = window.location.pathname; // Get the current path
    loginForm.addEventListener("submit", (event) =>
      handleLoginFormSubmit(event, currentPath)
    );
  }

  const testDriveFormElement = document.querySelector("#testDriveForm");
  if (testDriveFormElement) {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && checkAccessToken(accessToken)) {
      // Create the test drive form if the user is logged in
      createTestDriveForm(testDriveFormElement);
    } else {
      // Display a message if the user is not logged in or the access token is invalid
      testDriveFormElement.style.display = "none";
      const loginRequiredElement = document.querySelector("#loginRequired");
      if (loginRequiredElement) {
        loginRequiredElement.style.display = "block";
      }
    }
  }
});
