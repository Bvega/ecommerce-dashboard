// 🌙 Theme toggle script
// Toggles dark mode and stores preference in localStorage

const themeToggle = document.getElementById('theme-toggle');

// Load user preference or match system preference
const userPref = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply initial dark mode if preference or system default is dark
if (userPref === 'dark' || (!userPref && prefersDark)) {
  document.body.classList.add('dark-mode');
}

// Toggle and save preference on click
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
