// AGE GATE
document.addEventListener("DOMContentLoaded", () => {
  const gate = document.getElementById("age-gate");
  const btn = document.getElementById("enter-btn");
  btn.addEventListener("click", () => {
    if (document.getElementById("agree").checked) {
      gate.style.display = "none";
    } else {
      alert("Anda harus mencentang persetujuan.");
    }
  });

  // Timer realtime
  const timeEl = document.getElementById("time");
  setInterval(() => {
    const now = new Date();
    timeEl.textContent = now.toLocaleString();
  }, 1000);
});

function joinNow() {
  window.open("https://wa.me/6281901212120", "_blank");
}
