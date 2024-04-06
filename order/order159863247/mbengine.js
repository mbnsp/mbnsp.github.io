const imgs = document.querySelectorAll('.slider ul img');
const cont_slider_back = document.querySelector('.cont_slider_pre');
const cont_slider_next = document.querySelector('.cont_slider_for');

let n = 0;

function changeSlide() {
	for (let i = 0; i < imgs.lenght; i++) {
		imgs[i].style.display = 'none';
	}
	imgs[n].style.display = 'block';
}

changeSlide();

cont_slider_back.addEventListener('click', (e)=>{

	if (n > 0) {
		n--;
	} else {
		n = imgs.lenght - 1;
	}
	changeSlide();
});

cont_slider_next.addEventListener('click', (e)=>{

	if (n < imgs.lenght - 1) {
		n++;
	} else {
		n = imgs.lenght - 1;
	}
	changeSlide();
});