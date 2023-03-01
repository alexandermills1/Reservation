const reserveBtn = document.getElementById("reserve-btn");
const count = document.getElementById("count");
let countValue = 0;

reserveBtn.addEventListener("click", () => {
  countValue++;
  count.textContent = `${countValue} of 40 spots reserved`;
  if (countValue >= 40) {
    reserveBtn.disabled = true;
  }
});
