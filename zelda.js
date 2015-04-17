var tablero, codigo, mapa;

var fondo = {
	imagenOK: false
};

var link = {
	x: 0,
	y: 0,
	frenteOK: false,
	atrasOK: false,
	izqOK: false,
	derOK: false,
	velocidad: 50
};

var darklink = {
	x: 400,
	y: 200,
	darklinkOK: false
};

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};


function inicio(){  //Cargo las imagenes
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = "fondo.png";
	fondo.imagen.onload = confirmarFondo;

	link.frente = new Image();
	link.frente.src = "1.png";
	link.frente.onload = confirmarFrente;

	link.atras = new Image();
	link.atras.src = "3.png";
	link.atras.onload = confirmarAtras;

	link.izq = new Image();
	link.izq.src = "2.png";
	link.izq.onload = confirmarIzq;

	link.der = new Image();
	link.der.src = "4.png";
	link.der.onload = confirmarDer;

	darklink.darklinky = new Image();
	darklink.darklinky.src = "darklink.png";
	darklink.darklinky.onload = confirmardarklink;

	document.addEventListener("keydown",teclado);
}

function confirmarFondo(){
	fondo.imagenOK = true;
	dibujar();
}

function confirmarFrente(){
	link.frenteOK = true;
}

function confirmarAtras(){
	link.atrasOK = true;
}

function confirmarIzq(){
	link.izqOK = true;
}

function confirmarDer(){
	link.derOK = true;
}

function confirmardarklink(){
	darklink.darklinkOK = true;
	dibujar();
}

function teclado(datos){
	codigo = datos.keyCode;

	if(codigo == teclas.UP){
		if(link.y > 0){
			if(link.x < 200 && link.y < 200){
				link.y -= link.velocidad;
			}else if(link.x == 150 && link.y <= 300){
				link.y -= link.velocidad;
			}else if(link.x == 200 && link.y <= 300 && link.y > 250){
				link.y -= link.velocidad;
			}else if(link.x >= 250 && link.y <= 300){
				link.y -= link.velocidad;
			}else if(link.x <= 100 && link.y > 250 && link.y <= 450){
				link.y -= link.velocidad;
			}else if(link.x >= 150 && link.y <= 450 && link.y > 400){
				link.y -= link.velocidad;
			}
		}
	}

	if(codigo == teclas.DOWN){
		if(link.y < 450){
			if(link.y < 150){
				link.y += link.velocidad;
			}else if(link.x == 150 && link.y == 150){
				link.y += link.velocidad;
			}else if(link.y > 150 && link.y < 300){
				link.y += link.velocidad;
			}else if(link.x >= 250 && link.y == 150){
				link.y += link.velocidad;
			}else if(link.x < 150 && link.y >= 300){
				link.y += link.velocidad;
			}else if(link.x >= 150 && link.y == 400){
				link.y += link.velocidad;
			}
		}
	}

	if(codigo == teclas.LEFT){
		if(link.x > 0){
			if(link.x <= 150 && link.y <= 150){
				link.x -= link.velocidad;
			}else if(link.x == 150 && link.y == 150){
				link.x -= link.velocidad;
			}else if(link.y > 200 && link.y < 350){
				link.x -= link.velocidad;
			}else if(link.x > 250 && link.y <= 200){
				link.x -= link.velocidad;
			}else if(link.x <= 100 && link.y == 350){
				link.x -= link.velocidad;
			}else if(link.y >= 400){
				link.x -= link.velocidad;
			}
		}
	}

	if(codigo == teclas.RIGHT){
		if(link.x < 450){
			if(link.x <= 100 && link.y <= 200){
				link.x += link.velocidad;
			}else if(link.x >= 0 && link.y > 200 && link.y < 350){
				link.x += link.velocidad;
			}else if(link.x < 100 && link.y == 350){
				link.x += link.velocidad;
			}else if(link.x >= 250 && link.y <= 200){
				link.x += link.velocidad;
			}else if(link.x >= 0 && link.y >= 400){
				link.x += link.velocidad;
			}
		}
	}

	dibujar();
}

function dibujar(){

	if(fondo.imagenOK == true){
		tablero.drawImage(fondo.imagen,0,0);
	}

	var linkDibujo = link.frente;

	if(link.frenteOK && link.atrasOK && link.izqOK && link.derOK){
		if(codigo == teclas.UP){
			linkDibujo = link.atras;
		}

		if(codigo == teclas.DOWN){
			linkDibujo = link.frente;
		}

		if(codigo == teclas.LEFT){
			linkDibujo = link.izq;
		}

		if(codigo == teclas.RIGHT){
			linkDibujo = link.der;
		}

		tablero.drawImage(linkDibujo,link.x,link.y);
	}

	if(darklink.darklinkOK){
		tablero.drawImage(darklink.darklinky,darklink.x,darklink.y);
	}
}
