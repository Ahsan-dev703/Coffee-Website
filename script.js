// Toggle (open/close) the mobile menu when the hamburger button is clicked
document.getElementById("open-navbr-btn").addEventListener("click", () => {
  document.body.classList.toggle("show-menu");
});

// Close the mobile menu when the close (X) button is clicked
document.getElementById("close-btn").addEventListener("click", () => {
  document.getElementById("open-navbr-btn").click();
});

// Close the menu automatically when any navigation link is clicked
let nav_links = document.getElementsByClassName("nav-links");
for (let i = 0; i < nav_links.length; i++) {
  nav_links[i].addEventListener("click", () => {
    document.getElementById("open-navbr-btn").click();
  });
}

// Close the menu automatically when clicked any where at screen
document.addEventListener("click", (e) => {
  const navMenu = document.querySelector(".nav-menu");
  const openBtn = document.getElementById("open-navbr-btn");

  if (
    document.body.classList.contains("show-menu") &&
    !navMenu.contains(e.target) &&
    !openBtn.contains(e.target)
  ) {
    document.body.classList.remove("show-menu");
  }
});

// ScrollTop
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("show", window.scrollY > 300);
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Lightbox

function includeHTML() {
  let html = `<div id="popup-container" style="display:none;">
      <div class="image">
        <img src="" alt="main-popup-img" id="main-popup-img" />
      </div>

      <div class="popup-controler-btn">
        <span id="popup-close-btn" class="btn"><i class="fas fa-times"></i></span>

        <div class="left-right-btn">
        <span id="popup-prev-btn" class="btn">&#10094;</span>
        <span id="popup-next-btn" class="btn">&#10095;</span>
        </div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML("afterbegin", html);
}

let images;
let current;

function mainFunction(target) {
  images = document.getElementsByClassName(target);
  includeHTML();
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
      document.getElementById("main-popup-img").src = this.src;
      document.getElementById("popup-container").style.display = "flex";
      current = i;
      hideButton_controller();
    });
  }

  // close popoup
  document.getElementById("popup-close-btn").addEventListener("click", () => {
    document.getElementById("main-popup-img").src = "";
    document.getElementById("popup-container").style.display = "none";
  });

  // next img
  document.getElementById("popup-next-btn").addEventListener("click", () => {
    if (current < images.length - 1) {
      current++;
      document.getElementById("main-popup-img").src = images[current].src;
    }
    hideButton_controller();
  });

  // prev img
  document.getElementById("popup-prev-btn").addEventListener("click", () => {
    if (current > 0) {
      current--;
      document.getElementById("main-popup-img").src = images[current].src;
    }
    hideButton_controller();
  });
}

// hide button functon
function hideButton_controller() {
  // preb btn
  if (current <= 0) {
    document.getElementById("popup-prev-btn").style.display = "none";
  } else {
    document.getElementById("popup-prev-btn").style.display = "block";
  }
  // next btn
  if (current >= images.length - 1) {
    document.getElementById("popup-next-btn").style.display = "none";
  } else {
    document.getElementById("popup-next-btn").style.display = "block";
  }
}

// GrabTouch Function

// --- Touch Swipe for Lightbox ---
function enableTouchSwipe() {
  const popup = document.getElementById("popup-container");
  let startX = 0;
  let endX = 0;

  popup.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  popup.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    let diff = endX - startX;

    if (diff > 80 && current > 0) {
      // swipe right → previous
      current--;
      document.getElementById("main-popup-img").src = images[current].src;
    } else if (diff < -80 && current < images.length - 1) {
      // swipe left → next
      current++;
      document.getElementById("main-popup-img").src = images[current].src;
    }
    hideButton_controller();
  }
}

mainFunction("ligthbox-img");
enableTouchSwipe();


let username = document.getElementById("username");
let username_error = document.getElementById("name-error");

let email = document.getElementById("email");
let email_error = document.getElementById("email-error");

// Form SUbmit Error
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Username validation
    if (username.value.trim() === "") {
      username_error.textContent = "Username is required.";
      isValid = false;
    } else if (username.value.trim().length < 3) {
      username_error.textContent = "Username must be at least 3 characters.";
      isValid = false;
    } else {
      username_error.textContent = "";
    }

    // Email validation
    if (email.value.trim() === "") {
      email_error.textContent = "Enter Valid Email!";
      isValid = false;
    } else if(!email.value.contains("@gmail.com")){
      email_error.textContent = "not contain.";
    }
    
    else {
      email_error.textContent = "";
    }

    // Submit if valid
    if (isValid) {
      alert("Message Sent Successfuly!");
      form.reset();
    }
  });

