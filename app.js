const form = document.querySelector('#signupForm');
const status = document.querySelector('#formStatus');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');


function showError(input, errorEl, message) {
 input.setAttribute('aria-invalid', 'true');
 input.classList.add('invalid');
 errorEl.textContent = message;
 errorEl.classList.add('error');
}

function clearError(input, errorEl) {
  input.removeAttribute('aria-invalid');
  input.classList.remove('invalid');
  errorEl.textContent = '';
  errorEl.classList.remove('error');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.classList.add('submitted');
  status.textContent = '';

  const data = new FormData(form);
  const values = Object.fromEntries(data.entries());

  const name = (values.name ?? '').trim();
  const email = (values.email ?? '').trim();
  const password = values.password ?? '';

  clearError(nameInput, nameError);
  clearError(emailInput, emailError);
  clearError(passwordInput, passwordError);

  let firstInvalid = null;

  if (name.length < 3) {
    showError(nameInput, nameError, 'Enter your name (MUST be at least 3 characters).');
    firstInvalid ??= nameInput;
  }

  if (!email || !emailInput.validity.valid) {
    showError(emailInput, emailError, 'Enter a valid email (example: name@example.com).');
    firstInvalid ??= emailInput;
  }

  if (password.length < 8) {
    showError(passwordInput, passwordError, 'Password MUST be at least 8 characters.');
    firstInvalid ??= passwordInput;
  }

  if (firstInvalid) {
    firstInvalid.focus();
    status.textContent = 'Read over the feedback and understand why your inputs are incorrect. Revise and try again.';
    return;
  }

  status.textContent = 'Congratulations! Your account has been made.';
  form.reset();
});
  
nameInput.addEventListener('input', () => clearError(nameInput, nameError));
emailInput.addEventListener('input', () => clearError(emailInput, emailError));
passwordInput.addEventListener('input', () => clearError(passwordInput, passwordError));

emailInput.addEventListener('input', () => {
  emailInput.setCustomValidity('');

});
