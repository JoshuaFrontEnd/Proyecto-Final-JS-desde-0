//Obtengo posicion actual del scroll (inicio)
const getInitialScroll = () => document.documentElement.scrollTop;


//Obtengo posicion del destino del scroll redondeandola a numero entero (final)
const getFinalScroll = element => Math.floor(element.getBoundingClientRect().top + getInitialScroll());

//Obtengo la distancia en pixeles desde el inicio hasta el final
const animatedScrollTo = (targetElement, time) => {
	let initialPosition = getInitialScroll(),
		finalPosition = getFinalScroll(targetElement),
		distanceToScroll = finalPosition - initialPosition,
		scrollFragment = Math.ceil(distanceToScroll / time);
	animateScroll(scrollFragment, finalPosition);
	console.log(scrollFragment);
};


//Anima el scroll hasta una posicion y al mismo tiempo lo detiene en el final
const animateScroll = (scrollFragment, finalPosition) => {

	let animatedScroll = setInterval(function(){
		document.documentElement.scrollTop += scrollFragment;
		if (scrollFragment > 0) {
			if (document.documentElement.scrollTop > finalPosition - (scrollFragment / 2)) clearInterval(animatedScroll);
		}else{
			if (document.documentElement.scrollTop < finalPosition - (scrollFragment / 2)) clearInterval(animatedScroll);
		}

	}, 1);

};


//Detecto que cuando se presione un enlace tenga un hash y luego le remuevo la almohadilla para convertirlo en el elemento de destino y asi poder llegar hasta el
const animatedScrollEvent = (originElement, time) => {

	console.log(originElement);

	if (originElement.tagName === 'A' && originElement.hash !== '') {
		let targetElement = document.getElementById(originElement.hash.slice(1));
		originElement.addEventListener('click', e => {
			e.preventDefault();
			animatedScrollTo(targetElement, time);
			console.log('Entra');
			console.log(targetElement);
		});
	}

};


//Detecto todos los links en el documento (si quisese solo un grupo de links quizas debiese utilizar alguna clase CSS) y por cada link invoco la funcion de arriba pasandole el link
const animatedScrollAllLinks = time => {
	let links = document.links;
	for (let link of links){
		animatedScrollEvent(link, time);
		// console.log(link);
	}
};

animatedScrollAllLinks(200);

// animatedScrollEvent(document.getElementById('link2'), 500);