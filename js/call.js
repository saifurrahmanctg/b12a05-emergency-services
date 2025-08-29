/* Calls Functionality
   =================== */

// Coin counter
let coinCounts = parseInt(document.getElementById("coin-count").innerText);

// Call button and call history container
const callButtons = document.querySelectorAll(".call-btn");
const callHistoryContainer = document.getElementById("call-history-container");

// Looping
for (let button of callButtons) {
  button.addEventListener("click", function () {
    if (coinCounts < 20) {
      alert("❌ You don't have enough coins to make a call.");
    } else {
      // Coin deduction
      coinCounts -= 20;
      document.getElementById("coin-count").innerText = coinCounts;

      // Get card details
      const serviceCard = button.closest(".calling-card");
      const serviceTitle =
        serviceCard.querySelector(".service-title").innerText;
      const serviceNumber =
        serviceCard.querySelector(".service-number").innerText;
      const timestamp = new Date().toLocaleTimeString();

      // Create call history entry
      const callEntry = document.createElement("div");
      callEntry.innerHTML = `
        <div class="call-history-card bg-[#f2f2f2] p-4 rounded-lg mt-5 flex gap-2 justify-between items-center">
          <div>
            <h3 class="inter text-base md:text-lg font-semibold text-[#111111] mt-4">${serviceTitle}</h3>
            <p class="madurai text-base md:text-lg font-normal text-[#5C5C5C]">${serviceNumber}</p>
          </div>
          <div class="call-time text-right">
            <p class="madurai text-base md:text-lg font-normal text-[#111111]">${timestamp}</p>
          </div>
        </div>
      `;
      callHistoryContainer.append(callEntry);

      // Show calling alert
      alert(`📞 Calling... \n${serviceTitle} : ${serviceNumber}`);
    }
  });
}

/* Clear call history functionality */
const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", function () {
  alert("✅ Call history has been cleared!");
  callHistoryContainer.innerHTML = "";
});
