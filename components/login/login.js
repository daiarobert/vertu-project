export function login(email, password, redirectTo = "/") {
  return new Promise(async (resolve, reject) => {
    try {
      if (email === "user@user.com" && password === "test123") {
        const accessToken = generateAccessToken();
        saveAccessToken(accessToken);

        const user = { email };
        resolve({ user, redirectTo });
      } else {
        reject(new Error("Invalid email or password"));
      }
    } catch (error) {
      console.log(error);
    }
  });
}

// Function to generate an access token (random)
function generateAccessToken() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 32; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
}

// Function to save the access token in localStorage
function saveAccessToken(accessToken) {
  try {
    localStorage.setItem("accessToken", accessToken);
    console.log("Access token saved:", accessToken);
  } catch (error) {
    console.log("Error saving access token:", error.message);
  }
}

// Function to check if the access token matches the one saved in localStorage
export function checkAccessToken(accessToken) {
  const savedAccessToken = localStorage.getItem("accessToken");
  return accessToken === savedAccessToken;
}

export function handleLoginFormSubmit(event, currentPath) {
  event.preventDefault();

  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  const email = emailInput.value;
  const password = passwordInput.value;

  let redirectTo;

  if (currentPath === "/") {
    redirectTo = "/";
  } else if (currentPath === "/testDrive.html") {
    redirectTo = "/testDrive.html";
  }

  login(email, password, redirectTo)
    .then(({ user, redirectTo }) => {
      console.log("Login successful:", user);
      window.location.href = redirectTo;
    })
    .catch((error) => {
      console.log("Login failed:", error.message);
    });
}
