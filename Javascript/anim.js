window.addEventListener('scroll', function () {
				let animacion = document.getElementById('evento')
				let posicionObj1 = animacion.getBoundingClientRect().top;
				let tamañoDePantalla = window.innerHeight;
				
				if(posicionObj1 < tamañoDePantalla) {
				document.getElementById('animado').style.visibility = 'hidden';
				
				}else{
				document.getElementById('animado').style.visibility = 'visible';
				}
				
})