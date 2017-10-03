'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Al hacer click en una imagen se deberia de abrir su versión grande
var getImages = function getImages(container) {
	return [].concat(_toConsumableArray(container.querySelectorAll('img')));
};
var getLargeImages = function getLargeImages(gallery) {
	return gallery.map(function (el) {
		return el.src;
	}).map(function (el) {
		return el.replace('thumb', 'large');
	});
};

console.log(getLargeImages(getImages(document.querySelector('.gallery-container'))));

var openLightbox = function openLightbox(image) {
	// Abrir lightbox al pulsar el parametro image

};
// Se abre un "overlay"
// Ese "overlay" debe poder cerrarse

// Al abrirse la version grande debe tener lo siguiente
// Descripcion de la imagen (que se tomara del atributo alt)
// Navegacion entre la imagen siguiente y la anterior