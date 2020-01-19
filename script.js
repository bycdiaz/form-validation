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

function runValidation() {
  validateEmail();
  validateZip();
}

runValidation();
