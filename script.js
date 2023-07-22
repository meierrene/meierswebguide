const year = document.querySelector('.year');
const column3 = document.querySelector('.column-3');
const column4 = document.querySelector('.column-4');
const secretBtn = document.querySelector('.secret-btn');

secretBtn.addEventListener('click', () => {
  if (secretBtn.checked) {
    column3.classList.remove('hidden');
    column4.classList.remove('hidden');
  } else {
    column3.classList.add('hidden');
    column4.classList.add('hidden');
  }
});

const update = () => (year.textContent = new Date().getFullYear());
update();
