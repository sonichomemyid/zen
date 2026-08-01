const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('btn-toggle');
const closeBtn = document.getElementById('btn-close');
const overlay = document.getElementById('overlay');

// Buka Sidebar
toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
});

// Tutup Sidebar (via tombol X atau klik overlay luar)
const closeSidebar = () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
};

closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

