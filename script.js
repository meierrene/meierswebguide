const year = document.querySelector('.year');
const column2 = document.querySelector('.column-2');
const column3 = document.querySelector('.column-3');
const column4 = document.querySelector('.column-4');
const secretBtn = document.querySelector('.secret-btn');

secretBtn.addEventListener('click', () => {
  if (secretBtn.checked) {
    column2.classList.remove('hidden');
    column3.classList.remove('hidden');
    // column4.classList.remove('hidden');
  } else {
    column2.classList.add('hidden');
    column3.classList.add('hidden');
    // column4.classList.add('hidden');
  }
});

const update = () => (year.textContent = new Date().getFullYear());
update();
