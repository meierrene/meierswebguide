import * as config from './config.js';

config.secretBtn.addEventListener('click', () => {
  if (config.secretBtn.checked) {
    config.column3.classList.remove('hidden');
    config.column4.classList.remove('hidden');
  } else {
    config.column3.classList.add('hidden');
    config.column4.classList.add('hidden');
  }
});

const update = () => (config.year.textContent = new Date().getFullYear());
update();
