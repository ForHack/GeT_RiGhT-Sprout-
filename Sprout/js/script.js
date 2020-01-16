const burger = document.querySelector('.burger'),
	listBox = document.querySelector('.list__box');

burger.addEventListener('click', () => {
	listBox.classList.toggle('show');
});

