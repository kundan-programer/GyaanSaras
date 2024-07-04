// alert('welcome to GyanSaras');

const signUpButton = document.getElementById('toSignUp');
const signInButton = document.getElementById('toSignIn');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

signUpButton.addEventListener('click', () => {
  signInForm.classList.remove('active-form');
  signInForm.classList.add('inactive-form');
  signUpForm.classList.remove('inactive-form');
  signUpForm.classList.add('active-form');
});

signInButton.addEventListener('click', () => {
  signUpForm.classList.remove('active-form');
  signUpForm.classList.add('inactive-form');
  signInForm.classList.remove('inactive-form');
  signInForm.classList.add('active-form');
});
