const year = document.querySelector('.year');
const column2 = document.querySelector('.column-2');
const column3 = document.querySelector('.column-3');
const column4 = document.querySelector('.column-4');
const secretBtn = document.querySelector('.secret-btn');
document.addEventListener('click', () => {
  if (secretBtn) {
    secretBtn.addEventListener('change', () => {
      column2.classList.toggle('hidden', !secretBtn.checked);
      column3.classList.toggle('hidden', !secretBtn.checked);
      // column4.classList.toggle('hidden', !secretBtn.checked);
    });
  }

  if (year) year.textContent = new Date().getFullYear();
});
