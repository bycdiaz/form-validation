function validation() {
  const password = document.querySelector('#psw');

  function validateEmail() {
    const email = document.querySelector('#email');

    email.addEventListener('input', () => {
      if (email.validity.typeMismatch) {
        email.setCustomValidity('Email address expected.');
      } else {
        email.setCustomValidity('');
      }
    });
  }

  function validateZip() {
    const zipcode = document.querySelector('#zipcode');

    zipcode.addEventListener('input', (event) => {
      if (/^\d{5}(-\d{4})?(?!-)$/.test(event.target.value)) {
        zipcode.setCustomValidity('');
      } else {
        zipcode.setCustomValidity('Please enter a valid zipcode.');
      }
    });
  }

  function validatePassword() {
    password.addEventListener('input', (event) => {
      if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(event.target.value)) {
        password.setCustomValidity('');
      } else {
        password.setCustomValidity('Please enter a valid password.');
      }
    });
  }

  function confirmPassword() {
    const confirmedPassword = document.querySelector('#pswconfirm');

    confirmedPassword.addEventListener('input', (event) => {
      if (event.target.value === password.value) {
        confirmedPassword.setCustomValidity('');
      } else {
        confirmedPassword.setCustomValidity('Passwords do not match.');
      }
    });
  }

  validateEmail();
  validateZip();
  validatePassword();
  confirmPassword();
}

validation();
