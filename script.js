'use strict';
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);
const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModel);
}
closeModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

// key press functionality
document.addEventListener('keydown', function (ev) {
  //this helps to chatch every global event on the keyboard or else where
  console.log(ev); //to see which event happened
  if (ev.key == 'Escape' && !modal.classList.contains('hidden')) closeModel();
});
