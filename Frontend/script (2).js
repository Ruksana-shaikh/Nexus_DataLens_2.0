// Run after DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById('csvInput');
  const msg = document.getElementById('uploadMessage');

  if (input && msg) {
    input.addEventListener('change', () => {
      msg.classList.remove('hidden');
    });
  }

  window.uploadCSV = function () {
    const file = document.getElementById("csvInput").files[0];
    const status = document.getElementById("uploadMessage");

    if (!file) {
      status.innerText = "❗ Please select a file.";
      return;
    }

    status.innerText = "⏳ Uploading...";

    const s3UploadURL = "https://nexus-web-frontend1.s3.amazonaws.com/Data/" + encodeURIComponent(file.name);

    fetch(s3UploadURL, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": "text/csv"
      }
    })
      .then((res) => {
        if (res.ok) {
          status.innerText = "✅ File uploaded successfully!";
        } else {
          status.innerText = "❌ Upload failed. Status: " + res.status;
        }
      })
      .catch((err) => {
        console.error(err);
        status.innerText = "❌ Upload error!";
      });
  };

  window.togglePassword = function () {
    const passwordInput = document.getElementById('password');
    const icon = document.getElementById('eyeIcon');
    const isHidden = passwordInput.type === 'password';

    passwordInput.type = isHidden ? 'text' : 'password';
    icon.innerHTML = isHidden
      ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.056 10.056 0 013.187-4.396M15 12a3 3 0 01-3 3m0-6a3 3 0 013 3m-6 0a3 3 0 013-3m-6 3a3 3 0 013-3m9 9l-3-3m0 0l-3-3" />
      </svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
      </svg>`;
  };

  window.toggleLoginPassword = function () {
    const passwordInput = document.getElementById('loginPassword');
    const icon = document.getElementById('loginEyeIcon');
    const isHidden = passwordInput.type === 'password';

    passwordInput.type = isHidden ? 'text' : 'password';
    icon.innerHTML = isHidden
      ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.056 10.056 0 013.187-4.396M15 12a3 3 0 01-3 3m0-6a3 3 0 013 3m-6 0a3 3 0 013-3m-6 3a3 3 0 013-3m9 9l-3-3m0 0l-3-3" />
      </svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
      </svg>`;
  };

  function signUp(email, password, name) {
    fetch("https://7tb8sl7ccb.execute-api.ap-south-1.amazonaws.com/nexusUser/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errorMessage) {
          alert("❌ " + data.errorMessage);
        } else {
          alert("✅ Signup successful!");
          localStorage.setItem("isLoggedIn", "true");
          window.location.href = "/nexus/index.html";
        }
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Signup failed.");
      });
  }

  function logIn(email, password) {
    fetch("https://7tb8sl7ccb.execute-api.ap-south-1.amazonaws.com/nexusUser/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          alert("✅ Login successful!");
          localStorage.setItem("isLoggedIn", "true");
          window.location.href = "/nexus/index.html";
        } else {
          alert("❌ " + (data.errorMessage || "Login failed"));
        }
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Login error");
      });
  }

  // Form handlers (merged into this same DOMContentLoaded)
  const signupForm = document.querySelector("form[action='signup']");
  const loginForm = document.querySelector("form[action='login']");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const [name, email, password] = Array.from(signupForm.querySelectorAll("input")).map(i => i.value);
      signUp(email, password, name);
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const [email, password] = Array.from(loginForm.querySelectorAll("input")).map(i => i.value);
      logIn(email, password);
    });
  }
});

// Hide Sign Up / Log In buttons if user is logged in
window.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    const navLinks = document.querySelectorAll("nav ul li");
    navLinks.forEach((li) => {
      const link = li.querySelector("a");
      if (link && (link.textContent.includes("Sign Up") || link.textContent.includes("Log In"))) {
        li.style.display = "none";
      }
    });
  }
});