document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeBtn = document.getElementById('closeBtn');
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdown = document.querySelector('.has-dropdown');
  const faqBtn = document.querySelectorAll(".faq-q, has-dropdown");
  const animatedElements = document.querySelectorAll('.animated');    
  
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
  
  

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.2
  });
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  faqBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      item.classList.toggle("active");
    });
  });
});


  

  
