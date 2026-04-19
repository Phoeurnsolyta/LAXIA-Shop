// Dark Mode
const darkIcon = document.getElementById('darkIcon');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  if (darkIcon) darkIcon.classList.replace('fa-moon', 'fa-sun');
}

function toggleDark() {
  const isDark = document.body.classList.toggle('dark');
  if (darkIcon) {
    isDark
      ? darkIcon.classList.replace('fa-moon', 'fa-sun')
      : darkIcon.classList.replace('fa-sun', 'fa-moon');
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// AOS
AOS.init({ duration: 800, once: true, offset: 80 });