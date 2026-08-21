document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const button = document.getElementById('accetta-cookie');

  if (!banner || !button) return;

  if (localStorage.getItem('cookieAccettati') !== 'true') {
    window.setTimeout(() => {
      banner.classList.remove('cookie-banner-hidden');
      banner.classList.add('cookie-banner-visible');
    }, 1000);
  }

  button.addEventListener('click', () => {
    localStorage.setItem('cookieAccettati', 'true');
    banner.classList.remove('cookie-banner-visible');
    banner.classList.add('cookie-banner-hidden');
  });
});
