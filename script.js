// Logic Form Pendaftaran
document.getElementById('ekstraForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const pass = document.getElementById('password').value;
  const confirmPass = document.getElementById('konfirmasi').value;

  if (pass !== confirmPass) {
    alert('Password dan konfirmasi password tidak cocok!');
    return;
  }

  alert('Pendaftaran berhasil dikirim!');
  this.reset();
});

// Element Chatbot
const chatToggleBtn = document.getElementById('chatToggleBtn');
const chatCloseBtn = document.getElementById('chatCloseBtn');
const chatWindow = document.getElementById('chatWindow');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChatBtn');

// Toggle buka/tutup window chatbot
chatToggleBtn.addEventListener('click', () => {
  chatWindow.classList.toggle('active');
});

chatCloseBtn.addEventListener('click', () => {
  chatWindow.classList.remove('active');
});

// Event listener untuk tombol dan tombol Enter
sendChatBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const text = chatInput.value.trim();
  if (text === '') return;

  // Render pesan user
  addMessage(text, 'user');
  chatInput.value = '';

  // Tampilkan balasan bot
  setTimeout(() => {
    const botReply = getBotResponse(text);
    addMessage(botReply, 'bot');
  }, 500);
}

function addMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.innerText = text;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(input) {
  const lower = input.toLowerCase();

  if (lower.includes('halo') || lower.includes('hai') || lower.includes('pagi') || lower.includes('siang')) {
    return 'Halo! Silakan tanyakan hal seputar pilihan ekskul, cara daftar, atau password.';
  } else if (lower.includes('ekskul') || lower.includes('pilihan') || lower.includes('kegiatan')) {
    return 'Ekskul yang tersedia di formulir: Pramuka, Paskibra, PMR, Jurnalistik, Futsal, Volly, Bahasa Jepang, dan Seni Tari.';
  } else if (lower.includes('password') || lower.includes('sandi')) {
    return 'Password hanya boleh diisi angka dan pastikan nilainya sama dengan konfirmasi password ya.';
  } else if (lower.includes('cara') || lower.includes('daftar')) {
    return 'Isi nama, email, password angka, pilih ekstrakurikuler yang kamu inginkan, lalu tekan tombol "Kirim Pendaftaran".';
  } else if (lower.includes('batal') || lower.includes('ubah')) {
    return 'Jika ingin mengubah formulir, kamu bisa langsung mengisi ulang sebelum menekan tombol Kirim.';
  } else {
    return 'Maaf, saya belum memahami pertanyaan itu. Cobalah bertanya tentang: "pilihan ekskul", "syarat password", atau "cara daftar".';
  }
}