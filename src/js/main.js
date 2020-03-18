import $ from 'jquery';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'

let doc = document;

window.$ = $;

$(doc).ready(function () {
	topSlider();
});

function topSlider() {
	let swiper = new Swiper('.top-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}
