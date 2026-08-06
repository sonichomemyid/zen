document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeBtn = document.getElementById('closeBtn');
  
  function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.add('no-scroll')
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.classList.remove('no-scroll')
  }

  hamburgerBtn.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', closeSidebar);
  closeBtn.addEventListener('click', closeSidebar);
});


