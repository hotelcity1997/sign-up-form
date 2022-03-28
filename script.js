const userPassRetype = document.getElementById('user_password_conf');
userPassRetype.addEventListener('keyup', () => {
  if (userPassRetype.value !== userPass.value) {
    userPass.style.borderColor = 'red';
    userPassRetype.style.borderColor = 'red';
    passNotice.setAttribute('data-content', '* Passwords do not match');
  } else {
    passNotice.setAttribute('data-content', '');
    userPass.style.borderColor = '#EEEEEE';
    userPassRetype.style.borderColor = '#EEEEEE';
  }
})

const userPass = document.getElementById('user_password');
userPass.addEventListener('keyup', () => {
  if (userPassRetype.value !== userPass.value) {
    passNotice.setAttribute('data-content', '* Passwords do not match');
    userPass.style.borderColor = 'red';
    userPassRetype.style.borderColor = 'red';
  } else {
    passNotice.setAttribute('data-content', '');
    userPass.style.borderColor = '#EEEEEE';
    userPassRetype.style.borderColor = '#EEEEEE';
  }
})

let passNotice = document.getElementById('password-container');
