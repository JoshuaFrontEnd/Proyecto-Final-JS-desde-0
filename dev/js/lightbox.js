// Al hacer click en una imagen se deberia de abrir su versión grande

// Obtener la galeria de imágenes
const getImages = container => [...container.querySelectorAll('img')];


//Obtener un array de las rutas de las imágenes grandes
const getLargeImages = gallery => gallery
	.map(el => el.src)
	.map(el => el.replace('thumb','large'));


// Obtener las descripciones de las imágenes
const getDescriptions = gallery => gallery.map(el => el.alt);


// Capturar el evento click en la galería para abrir el lightbox
const openLightboxEvent = (container, gallery, larges, descriptions) => {
	container.addEventListener('click', e => {
		let el = e.target,
			i = gallery.indexOf(el);
		if (el.tagName === 'IMG') {
			openLightbox(gallery, i, larges, descriptions);
		}
	});
};


// Imprimir overlay del lightbox en el body
const openLightbox = (gallery, i, larges, descriptions) => {
	let lightboxElement = document.createElement('div');
	lightboxElement.innerHTML = `
		<div class="lightbox-overlay">
			<figure class="lightbox-container">
				<div class="close-modal">✖</div>
				<img src="${larges[i]}" class="lightbox-image">
				<figcaption>
					<p class="lightbox-description">${descriptions[i]}</p>
					<nav class="lightbox-navigation">
						<a href="#" class="lightbox-navigation__button prev">◀</a>
						<span class="lightbox-navigation__counter">Imagen ${i + 1} de ${gallery.length}</span>
						<a href="#" class="lightbox-navigation__button next">▶</a>
					</nav>
				</figcaption>
			 </figure>
		</div>
	`;
	lightboxElement.id ='lightbox';
	document.body.appendChild(lightboxElement);
	closeModal(lightboxElement);
};


// Cerrar modal
const closeModal = modalElement => {
	let closeModal = modalElement.querySelector('.close-modal');
	closeModal.addEventListener('click', e => {
		e.preventDefault();
		document.body.removeChild(modalElement);
	});
};

const lightbox = container => {
	let images = getImages(container),
		larges = getLargeImages(images),
		descriptions = getDescriptions(images);
	openLightboxEvent(container, images, larges, descriptions);
};

lightbox(document.getElementById('gallery-container'));









	// Se abre un "overlay"
	// Ese "overlay" debe poder cerrarse

// Al abrirse la version grande debe tener lo siguiente
	// Descripcion de la imagen (que se tomara del atributo alt)
	// Navegacion entre la imagen siguiente y la anterior
