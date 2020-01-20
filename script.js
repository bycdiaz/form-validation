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

  function validateCreditCard() {
    const creditCard = document.querySelector('#credit-card');
    creditCard.addEventListener('input', (event) => {
      const enteredCardNumber = parseInt(event.target.value, 0);

      if (isNaN(enteredCardNumber)) {
        creditCard.setCustomValidity('Please enter a valid credit card number.');
      } else {
        const digits = [];
        enteredCardNumber.toString().split('').forEach((value) => {
          digits.push(parseInt(value, 0));
        });
        const every2ndDigit = [];
        const non2ndDigits = [];
        for (let i = (digits.length - 1); i >= 0; i -= 1) {
          if (!(i % 2 === 0)) {
            every2ndDigit.push(digits[i]);
          } else {
            non2ndDigits.push(digits[i]);
          }
        }
        const every2ndDigitDoubled = [];
        every2ndDigit.forEach((digit) => {
          every2ndDigitDoubled.push(digit * 2);
        });

        const greaterThan9 = (element) => element > 9;

        if (every2ndDigitDoubled.some(greaterThan9)) {
          const digitSums = [];
          every2ndDigitDoubled.forEach((element) => {
            if (element.toString().split('').length > 1) {
              const sum = [];
              const numbers = element.toString().split('');

              numbers.forEach((number) => {
                sum.push(parseInt(number, 0));
              });
              digitSums.push(sum.reduce((a, b) => a + b, 0));
              // digitSums.push(parseInt(numbers[0] + numbers[1], 0));
            } else {
              digitSums.push(element);
            }
          });
          console.log(digitSums);
          console.log(non2ndDigits);

          const allDigitsSum = digitSums.reduce((a, b) => a + b, 0)
          + non2ndDigits.reduce((a, b) => a + b, 0);

          if (allDigitsSum % 10 === 0) {
            console.log('Valid!');
            creditCard.setCustomValidity('');
          }
        } else {
          // console.log('not a valid CC number');
          creditCard.setCustomValidity('Please enter a valid credit card number.');
        }
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

  // validateEmail();
  // validateZip();
  validateCreditCard();
  // validatePassword();
  // confirmPassword();
}

validation();
