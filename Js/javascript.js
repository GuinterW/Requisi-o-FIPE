var urlPadrao = "http://fipeapi.appspot.com/api/1/";

$(document).ready(function(){
	$(".cars").show();
	$(".motorcycles").show();
	$(".trucks").show();
	$("#preenchimento").hide();
	cliques();
});

	function cliques(){
		$(".cars").click(function(){
			Carros();
		});
		$(".motorcycles").click(function(){
			Motos();
		});
		$(".trucks").click(function(){
			Caminhoes();
		});
	}

	function Carros(){
//		$(".list-group").hide();
		$("#preenchimento").show();
		$(".list-group,#counteiner,#motos,#caminhoes").hide();
		$("#BotaoSelecionar").click(function(){
			
		})
	}

	function Motos(){
//		$(".list-group").hide();
		$("#preenchimento").show();
		$(".list-group,#counteiner,#carros,#caminhoes").hide();
	}

	function Caminhoes(){
//		$(".list-group").hide();
		$("#preenchimento").show();
		$(".list-group,#counteiner,#motos,#carros").hide();
	}

/*função que testa a variável 'z' para que a primeira opção não seja escolhida.
	function TesteVar(z){
		var z = $('#Select').val();
		if (z>0){
			requesicaoEscritas(url + z);
		}
		else{
			alert(mensagens.invalidez);
		}
	}*/