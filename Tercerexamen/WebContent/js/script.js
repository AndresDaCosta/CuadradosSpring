
var xmlhttp = new XMLHttpRequest();
var aciertos = 0;

var color1 = null;
		var color2 = null;
		
		var palete_1 = ["#50514F", "#F25F5C", "#FFE066", "#247BA0", "#70C1B3", "#01D444"]
		var cuadrados = null;
		var hora1 = new Date().getTime();

		function colorear(){
			
			
			/*
			* funcion que recargara los divs cada vez que se recarge la pagina para volver a jugar
			*/


			//variables necesarias en toda la funcion

			// numero aleatorio para seleccionar el color en la lista y seleccion del los elementos de la clase

			var aleatorio = null;
			var mi_objeto = document.getElementsByClassName("linea");//return una lista de elementos
			var completado = false;
			// N veces contadas cada color que solo podra ser 2 veces por cada color

			//contadores//
			var id1 = null;
			var id2 = null;
			var i = 0;
			var ncolor1 = 0;
			var ncolor2 = 0;
			var ncolor3 = 0;
			var ncolor4 = 0;
			var ncolor5 = 0;
			var ncolor6 = 0;
			var aciertos = 0;
			do{

					var coloreado = false;


						do{
							aleatorio = Math.round(Math.random()*(4+1));

							if(aleatorio == 0 && ncolor1 <2){
								mi_objeto[i].style.backgroundColor = palete_1[0];
								ncolor1 ++;
								
								coloreado = true;
							}
							else if(aleatorio == 1 && ncolor2 < 2){
								mi_objeto[i].style.backgroundColor = palete_1[1];
								ncolor2++;
								
								coloreado = true;
							}
							else if(aleatorio == 2 && ncolor3 < 2){
								mi_objeto[i].style.backgroundColor = palete_1[2];
								ncolor3++;
								
								coloreado = true;

							}
							else if(aleatorio == 3 && ncolor4 < 2){
								mi_objeto[i].style.backgroundColor = palete_1[3];
								ncolor4++;
								
								coloreado = true;
							}
							else if(aleatorio == 4 && ncolor5 < 2){
								mi_objeto[i].style.backgroundColor = palete_1[4];
								ncolor5++;
								
								coloreado = true;
							}
							else if (aleatorio == 5 && ncolor6 < 2) {
								mi_objeto[i].style.backgroundColor = palete_1[5];
								ncolor6++;
								
								coloreado = true;
							};


						}while(!coloreado)
						i++;
						
						if (ncolor1 == 2 && ncolor2 == 2 && ncolor3 == 2 && ncolor4 == 2 && ncolor5 == 2 && ncolor6 == 2) {

							completado = true;
						}


			}while(!completado);
			 	
			 	

			 



		}
		
		
		
		
		function comprobar2(e){
	
			if (color1 == null) {
				 id1 = e.id;
				color1 = e.style.backgroundColor;
				
			}
			else if (color1 != null) {
				color2 = e.style.backgroundColor;
				id2 = e.id;
				if (color1 == color2){
					//alert("los colores son iguales");
					color1 = null;
					color2 = null;
					var elemento1 = document.getElementById(id1);
					var elemento2 = document.getElementById(id2);
					var padre = elemento1.parentNode;
					var padre2 = elemento2.parentNode;
					aciertos++;
					
					if(aciertos == 6){
						finalizar();
						color1 = null;
						color2 = null;
					}

					padre.removeChild(elemento1);
					padre2.removeChild(elemento2);

					//alert("muy bien lo has conseguido");
				}

			}
		}
		
		function finalizar(){
			cuadrados = document.getElementsByClassName("linea");

			var node1 = cuadrados[0];
				var hora2 = new Date().getTime();
				alert("muy bien has acabado");
				var tiempotot = (hora2 - hora1) / 1000;
				mandarinfo(tiempotot);
		}
		function mandarinfo(tiempotot){
			
			xmlhttp.onreadystatechange = procesoend;
			xmlhttp.open("GET", "http://localhost:8195/Tercerexamen/settiempo?tiempo="+tiempotot, true);
			xmlhttp.send(null);
			
			
		}
		function procesoend(){
			if(xmlhttp.readyState == 4){
				
				if(xmlhttp.status == 200){
					
					alert("muy bien jugador has tardado" + xmlhttp.responseText + "segundos");
				}
			}
		}