export function createNavbar(container) {
  const navbar = document.createElement("nav");

  // Create logo element
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.innerHTML =
    '<a href="/vertu-project"><img src="assets/logo.png" alt="Logo"></a>';
  navbar.appendChild(logo);

  // Create options container
  const optionsContainer = document.createElement("ul");
  optionsContainer.classList.add("options");

  // Create options
  const options = [
    {
      text: "New cars",
      dropdown: true,
      route: "#",
    },
    {
      text: "Used cars ",
      dropdown: true,
      route: "#",
    },
    {
      text: "Servicing",
      dropdown: true,
      route: "#",
    },
    {
      text: "Commercials",
      dropdown: true,
      route: "#",
    },
    {
      text: "Motability",
      dropdown: false,
      route: "service.html",
    },
  ];

  options.forEach((option) => {
    const href = option.dropdown ? "#" : option.route;
    console.log(href);
    const optionItem = document.createElement("li");
    optionItem.innerHTML = `<a href="${option.route}">${option.text} ${
      option.dropdown
        ? '<i class="fas fa-light fa-chevron-down nav-chevron"></i>'
        : ""
    }</a>`;

    optionItem.addEventListener("click", (event) => {
      const url = event.target.getAttribute("href");
      if (!option.dropdown && url) {
        window.location.href = url;
      }
    });

    if (option.dropdown) {
      optionItem.classList.add("dropdown");

      const dropdownMenu = document.createElement("ul");
      dropdownMenu.classList.add("dropdown-menu");

      const dropdownItems = [
        { text: "Item 1", route: "service.html" },
        { text: "Item 2", route: "service.html" },
        { text: "Item 3", route: "service.html" },
      ];

      dropdownItems.forEach((item) => {
        const dropdownItem = document.createElement("li");
        dropdownItem.innerHTML = `<a href="${item.route}">${item.text} </a>`;
        dropdownMenu.appendChild(dropdownItem);
      });

      optionItem.appendChild(dropdownMenu);
    } else {
      optionItem.classList.add("non-dropdown");
    }

    optionsContainer.appendChild(optionItem);
  });

  navbar.appendChild(optionsContainer);

  // Create search bar
  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search");

  // Create search wrapper
  const searchWrapper = document.createElement("div");
  searchWrapper.classList.add("search-wrapper");

  // Create search input
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search: 'Make, model, or location'";

  // Create search icons
  const searchIcons = document.createElement("div");
  searchIcons.classList.add("search-icons");

  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fas", "fa-search", "search-icon");

  const micIcon = document.createElement("i");
  micIcon.classList.add("fas", "fa-microphone", "mic-icon");

  searchIcons.appendChild(searchIcon);
  searchIcons.appendChild(micIcon);

  // Append elements to their respective containers
  searchWrapper.appendChild(searchIcon);
  searchWrapper.appendChild(searchInput);
  searchWrapper.appendChild(searchIcons);
  searchContainer.appendChild(searchWrapper);
  navbar.appendChild(searchContainer);

  // Create search dropdown menu
  const searchDropdownMenu = document.createElement("ul");
  searchDropdownMenu.classList.add("search-menu");

  const dropdownItems = [
    { text: "BMW", route: "#" },
    { text: "Mini", route: "#" },
    { text: "Audi", route: "#" },
  ];

  dropdownItems.forEach((item) => {
    const dropdownItem = document.createElement("li");
    dropdownItem.innerHTML = `<a href="${item.route}">${item.text}</a>`;
    searchDropdownMenu.appendChild(dropdownItem);
  });

  searchContainer.appendChild(searchDropdownMenu);

  // Add event listeners to handle the search functionality
  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const dropdownItems = Array.from(
      searchDropdownMenu.getElementsByTagName("li")
    );
    dropdownItems.forEach((item) => {
      const variantText = item.textContent.toLowerCase();
      if (variantText.includes(searchText)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  searchInput.addEventListener("focus", () => {
    searchDropdownMenu.classList.add("show");
  });

  searchInput.addEventListener("blur", () => {
    searchDropdownMenu.classList.remove("show");
  });

  searchDropdownMenu.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedVariant = event.target.textContent;
    searchInput.value = selectedVariant;
    searchDropdownMenu.classList.remove("show");
  });
  // Create icons
  const iconsContainer = document.createElement("div");
  iconsContainer.classList.add("icons");
  iconsContainer.innerHTML = `
    <div class="icons-wrapper"><i class="fas fa-map-marker-alt location-icon"></i><p>Find us</p></div>
    <div class="icons-wrapper"><i class="far fa-heart save-icon"></i><p>Save</p></div>
    
  `;
  navbar.appendChild(iconsContainer);

  // Create hamburger menu
  const hamburgerMenu = document.createElement("div");
  hamburgerMenu.classList.add("hamburger-menu");
  hamburgerMenu.innerHTML = `
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  `;
  navbar.appendChild(hamburgerMenu);

  // Create responsive options container
  const responsiveOptions = document.createElement("div");
  responsiveOptions.classList.add("responsive-options");

  // Create close icon for responsive options
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fas", "fa-times", "close-icon");
  responsiveOptions.appendChild(closeIcon);

  // Move options to responsive options container
  const optionsContainer_mob = navbar.querySelector(".options");
  const topLevelOptions = Array.from(optionsContainer_mob.children);
  topLevelOptions.forEach((option) => {
    if (!option.classList.contains("dropdown")) {
      responsiveOptions.appendChild(option.cloneNode(true));
    } else {
      const dropdownClone = option.cloneNode(true);
      const dropdownMenu = dropdownClone.querySelector(".dropdown-menu");
      dropdownMenu.style.display = "none"; // Hide dropdown menu by default
      dropdownClone.addEventListener("mouseenter", () => {
        dropdownMenu.style.display = "block"; // Show dropdown menu on hover
      });
      dropdownClone.addEventListener("mouseleave", () => {
        dropdownMenu.style.display = "none"; // Hide dropdown menu when not hovered
      });
      responsiveOptions.appendChild(dropdownClone);
    }
  });

  const loginIconWrapper = document.createElement("div");
  loginIconWrapper.classList.add("icons-wrapper");
  const loginIcon = document.createElement("i");
  loginIcon.classList.add("far", "fa-user", "login-icon");
  const loginText = document.createElement("p");
  loginText.textContent = "Login";
  loginIconWrapper.appendChild(loginIcon);
  loginIconWrapper.appendChild(loginText);
  iconsContainer.appendChild(loginIconWrapper);

  // Function to update login/logout icon and text
  const updateLoginIcon = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      loginText.textContent = "Logout";
    } else {
      loginText.textContent = "Login";
    }
  };

  // Handle login/logout icon click
  loginIconWrapper.addEventListener("click", () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      localStorage.removeItem("accessToken");
      updateLoginIcon();
      window.location.href = "/vertu-project";
    } else {
      window.location.href = "login.html";
    }
  });

  updateLoginIcon();

  navbar.appendChild(responsiveOptions);

  // Toggle responsive options on hamburger menu click
  hamburgerMenu.addEventListener("click", () => {
    responsiveOptions.classList.add("show");
  });

  // Close responsive options on close icon click
  closeIcon.addEventListener("click", () => {
    responsiveOptions.classList.remove("show");
  });

  // Close responsive options when clicking outside the container
  window.addEventListener("click", (event) => {
    if (
      !responsiveOptions.contains(event.target) &&
      !hamburgerMenu.contains(event.target)
    ) {
      responsiveOptions.classList.remove("show");
    }
  });

  container.appendChild(navbar);
  // Add sticky behavior when scrolling
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
}
