const switchEl = document.getElementById('dark-mode-switch');

switchEl.addEventListener('change', (event) => {
  if (event.target.checked) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});
