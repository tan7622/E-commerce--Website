
  const container2 = document.querySelector('#container2');
  const overlay = document.querySelector('.overlay');

  function closing() {
    overlay.style.opacity = 0
    setTimeout(() => {
      overlay.style.display = 'none'
    }, 500);
    document.body.style.overflow = 'auto'
  }

  function opening() {
    overlay.style.display = 'flex';
    setTimeout(() => {
      overlay.style.opacity = 1;
    }, 1);
    document.body.style.overflow = 'hidden'
  }