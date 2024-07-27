const formEl = document.querySelector('.form__fields');
const nameFieldContainerEl = formEl.querySelector('.form-field--name');
const nameFieldInp = nameFieldContainerEl.querySelector('#client-name');
const nameErrorEl = nameFieldContainerEl.querySelector('p');

const phoneFieldContainerEl = formEl.querySelector('.form-field--phone');
const phoneFieldInp = phoneFieldContainerEl.querySelector('#client-phone');
const phoneErrorEl = phoneFieldContainerEl.querySelector('p');

const resetError = () => {
  nameErrorEl.style.display = 'none';
  nameFieldInp.style.borderColor = 'inherit';
  phoneErrorEl.style.display = 'none';
  phoneFieldInp.style.borderColor = 'inherit';
};

formEl.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const namePattern = /^[a-zа-яёA-ZА-ЯЁ\s]*$/i;
  const phonePattern = /^[0-9]*$/i;

  if (!namePattern.test(nameFieldInp.value)) {
    nameErrorEl.textContent = 'Допускается ввод только букв и пробелов';
    nameErrorEl.style.display = 'block';
    nameFieldInp.style.borderColor = '#ff121f';
    return;
  }

  if (!phonePattern.test(phoneFieldInp.value)) {
    phoneErrorEl.textContent = 'Допускается ввод только цифр от 0 до 9';
    phoneErrorEl.style.display = 'block';
    phoneFieldInp.style.borderColor = '#ff121f';
    return;
  }

  formEl.submit();
});

formEl.addEventListener('input', resetError);
nameFieldInp.addEventListener('focus', resetError);
phoneFieldInp.addEventListener('focus', resetError);
