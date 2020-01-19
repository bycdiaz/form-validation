const email = document.querySelector('#email');

email.addEventListener('input', () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Email address expected.');
  } else {
    email.setCustomValidity('');
  }
});
