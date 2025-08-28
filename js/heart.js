/* Heart Counter Functionality
   =========================== */

function setupHeartButton(button, counts) {
  button.addEventListener("click", function () {
    let currentHeartCount = parseInt(counts.innerText);
    const icon = this.firstElementChild;

    if (icon.classList.contains("fa-regular")) {
      alert("✅ You made this service your favorite!");
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid", "text-red-500");
      currentHeartCount += 1;
    } else {
      alert("❌ You removed this service from your favorite!");
      icon.classList.remove("fa-solid", "text-red-500");
      icon.classList.add("fa-regular");
      currentHeartCount -= 1;
    }

    counts.innerText = currentHeartCount;
  });
}

// Get all heart buttons and count
const heartButtons = document.querySelectorAll(".heart-btn");
const heartCountElement = document.getElementById("heart-count");

// Attach event to each button
for (let i = 0; i < heartButtons.length; i++) {
  setupHeartButton(heartButtons[i], heartCountElement);
}
