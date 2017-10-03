// Al hacer click en una imagen se deberia de abrir su versión grande
const getImages = container => [...container.querySelectorAll('img')];
const getLargeImages = gallery => gallery
	.map( el => el.src)
	.map(el => el.replace('thumb','large'));

console.log(getLargeImages(getImages(document.querySelector('.gallery-container'))));

let openLightbox = image => {
	// Abrir lightbox al pulsar el parametro image

};
	// Se abre un "overlay"
	// Ese "overlay" debe poder cerrarse

// Al abrirse la version grande debe tener lo siguiente
	// Descripcion de la imagen (que se tomara del atributo alt)
	// Navegacion entre la imagen siguiente y la anterior