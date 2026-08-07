document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeBtn = document.getElementById('closeBtn');
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdown = document.querySelector('.has-dropdown');
  
      
  
  function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.add('no-scroll')
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll')
  }

  hamburgerBtn.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', closeSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  if (dropdownBtn && dropdown) {
    dropdownBtn.addEventListener('click', (e) => {
      e.preventDefault()
      dropdown.classList.toggle('active');
    })
  }
  
  
  const animatedElements = document.querySelectorAll('.animated');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // kalo element 20% masuk ke layar
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // biar cuma jalan 1x doang
      }
    });
  }, { 
    threshold: 0.2 // 20%. Bisa ganti 0.1 = 10%
  });

  // daftarin semua element ke observer
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
});
  
});
