/*  Copy Counts Functionality
    ========================= */

// Copy counter
const copyCount = document.getElementById("copy-count");

// Copy buttons
const copyButtons = document.getElementsByClassName("copy-btn");

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    const serviceCard = this.closest(".calling-card");

    // Service title and Service number
    const serviceTitle = serviceCard.querySelector(".service-title").innerText;
    const serviceNumber =
      serviceCard.querySelector(".service-number").innerText;

    // Copy to clipboard
    navigator.clipboard.writeText(serviceNumber).then(() => {
      alert(
        `✅ ${serviceTitle} (${serviceNumber}) has been copied to clipboard!`
      );

      // Copy count increment
      let currentCount = parseInt(copyCount.innerText);
      copyCount.innerText = currentCount + 1;
    });
  });
}
