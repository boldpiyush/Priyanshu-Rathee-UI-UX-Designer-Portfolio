const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
menuBtn.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});
function showResumePopup() {
  const popup = document.getElementById("resumePopup");
  
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000); // disappears after 3 seconds
}

function jumpType(el, delay = 60, startDelay = 0) {
  const text = el.dataset.text;
  el.innerHTML = "";

  setTimeout(() => {
    Array.from(text).forEach((char, i) => {
      const span = document.createElement("span");

      // Preserve spaces correctly
      span.innerHTML = char === " " ? "&nbsp;" : char;

      span.style.animationDelay = `${i * delay}ms`;
      el.appendChild(span);
    });
  }, startDelay);
}

window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".jump-type:not(.sub)");
  const subtitle = document.querySelector(".jump-type.sub");

  if (title) jumpType(title, 70, 200);      // Name
  if (subtitle) jumpType(subtitle, 35, 1200); // Subtitle (letter by letter)
});

// IMAGE ERROR HANDLING
const caseImg = document.getElementById("caseImg");
const fallback = document.getElementById("imgFallback");

if (caseImg) {
  caseImg.onerror = () => {
    caseImg.style.display = "none";
    fallback.style.display = "block";
  };
}

// OPEN FULL IMAGE
function openImageSource() {
  document.getElementById("imageOverlay").style.display = "flex";
}

// CLOSE FULL IMAGE
function closeImage() {
  document.getElementById("imageOverlay").style.display = "none";
}

// BACK BUTTON
function goBack() {
  if (document.referrer) {
    history.back();
  } else {
    window.location.href = "index.html";
  }
}
const emailModal = document.getElementById("emailModal");
const openEmailBtn = document.getElementById("openEmailForm");

/* Open email popup */
openEmailBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emailModal.style.display = "flex";
});

/* Close popup */
function closeEmail() {
  emailModal.style.display = "none";
}

/* Close when clicking outside */
emailModal.addEventListener("click", (e) => {
  if (e.target === emailModal) {
    closeEmail();
  }
});

/* Send email */
function sendEmail() {
  const name = document.getElementById("emailName").value.trim();
  const from = document.getElementById("emailFrom").value.trim();
  const message = document.getElementById("emailMessage").value.trim();

  if (!name || !from || !message) {
    alert("Please fill all fields");
    return;
  }

  const mailtoLink =
    `mailto:boldpiyush.design@gmail.com` +
    `?subject=Portfolio Inquiry` +
    `&body=Name: ${encodeURIComponent(name)}%0A` +
    `Email: ${encodeURIComponent(from)}%0A%0A` +
    `${encodeURIComponent(message)}`;

  window.location.href = mailtoLink;
  closeEmail();
}

document.addEventListener("DOMContentLoaded", function () {

  const openAbout = document.getElementById("openAbout");
  const overlay = document.getElementById("aboutOverlay");

  openAbout.addEventListener("click", function (e) {
    e.preventDefault(); // stops link jump (important for desktop)
    overlay.style.display = "flex";
  });

  // Close when clicking ANYWHERE
  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
  });

});
