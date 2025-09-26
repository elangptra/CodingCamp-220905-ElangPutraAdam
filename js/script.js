function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("hidden");
}

const heroTitle = document.getElementById("hero-title");
const nameModal = document.getElementById("name-modal");
const nameInput = document.getElementById("name-input");
const nameSubmit = document.getElementById("name-submit");

// Tampilkan modal saat pertama kali buka
window.addEventListener("load", () => {
  nameModal.classList.remove("hidden");
  nameModal.classList.add("flex");
});

// Saat tombol "Masuk" diklik
nameSubmit.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name) {
    heroTitle.textContent = `Hi ${name}, Welcome To My Persona Fansite`;
    nameModal.classList.add("hidden");
  } else {
    alert("Nama tidak boleh kosong!");
  }
});
