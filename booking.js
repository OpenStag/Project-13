// Prices
const roomRate = 60000;
const breakfastRate = 850;
const lateCheckoutRate = 500;
const shuttleRate = 1000;

// Elements
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const breakfast = document.getElementById("breakfast");
const latecheckout = document.getElementById("latecheckout");
const shuttle = document.getElementById("shuttle");
const totalDisplay = document.getElementById("total");
const bookBtn = document.getElementById("bookBtn");

// Function to calculate total
function calculateTotal() {
  let total = 0;

  // Calculate nights
  let nights = 0;
  if (checkin.value && checkout.value) {
    let checkinDate = new Date(checkin.value);
    let checkoutDate = new Date(checkout.value);
    nights = (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24);
    if (nights < 0) nights = 0;
  }

  // Room price
  total += nights * roomRate;

  // Breakfast (per day)
  if (breakfast.checked) {
    total += nights * breakfastRate;
  }

  // Late checkout (only once)
  if (latecheckout.checked) {
    total += lateCheckoutRate;
  }

  // Shuttle (only once)
  if (shuttle.checked) {
    total += shuttleRate;
  }

  // Update display
  totalDisplay.textContent = total.toLocaleString();
}

// Confirmation when booking
bookBtn.addEventListener("click", () => {
  alert("✅ Your booking has been placed successfully!\nTotal: Rs. " + totalDisplay.textContent);
});

// Event Listeners
[checkin, checkout, breakfast, latecheckout, shuttle].forEach(el => {
  el.addEventListener("change", calculateTotal);
});
