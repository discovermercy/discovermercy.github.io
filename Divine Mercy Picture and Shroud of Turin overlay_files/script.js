let opacitySlider = document.getElementById('opacity-slider');
let opacityValue = document.getElementById('opacity-value');
let srt = document.querySelector('.srt');

function opacityHandler(){
	let opacity = opacitySlider.value;
	opacityValue.innerText = opacity;
	srt.style.opacity = opacity;
}

opacitySlider.addEventListener('change', opacityHandler);
opacitySlider.addEventListener('mousemove', opacityHandler);