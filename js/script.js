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

// Form & Output
const form = document.getElementById("message-form");
const outputTime = document.getElementById("output-time");
const outputNama = document.getElementById("output-nama");
const outputTanggal = document.getElementById("output-tanggal");
const outputGender = document.getElementById("output-gender");
const outputPesan = document.getElementById("output-pesan");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // biar form tidak reload halaman

  const nama = document.getElementById("input-nama").value;
  const tanggal = document.getElementById("input-tanggal").value;
  const gender = document.querySelector("input[name='gender']:checked")?.value;
  const pesan = document.getElementById("input-pesan").value;

  // Set output
  outputTime.textContent = new Date().toString();
  outputNama.textContent = nama;
  outputTanggal.textContent = tanggal;
  outputGender.textContent = gender || "-";
  outputPesan.textContent = pesan;

  // Reset form setelah submit (opsional)
  form.reset();
});
