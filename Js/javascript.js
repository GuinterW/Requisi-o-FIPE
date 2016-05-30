var urlPadrao = "http://fipeapi.appspot.com/api/1/";

$(document).ready(function(){
	inicio();
	cliques();
});

	function inicio(){
		$(".cars, .motorcycles, .trucks").show();
		$("#preenchimento").hide();
	}

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
		$("#preenchimento").show();
		$(".list-group, #counteiner, #motos, #caminhoes").hide();
		RequesicaoMarcas(urlPadrao + 'carros/marcas.json');
	}

	function Motos(){
		$("#preenchimento").show();
		$(".list-group, #counteiner, #carros, #caminhoes").hide();
		RequesicaoMarcas(urlPadrao + 'motos/marcas.json');
	}

	function Caminhoes(){
		$("#preenchimento").show();
		$(".list-group, .Modelo, .BotaoSelecionarModelo, #counteiner, #motos, #carros").hide();
		MarcasCaminhoes();
	}

	function MarcasCaminhoes(){
		RequesicaoMarcas(urlPadrao + 'caminhoes/marcas.json');
		var k= $('.Marca').val();
		$(".BotaoSelecionarMarcas").click(function(){
			ModelosCaminhoes(k);
		})
	}

	function ModelosCaminhoes(k){
		$(".Modelo").show();
		RequesicaoModelo(urlPadrao + 'caminhoes/veiculos/21.json');
		var l= $('.Modelo').val();
		$(".BotaoSelecionarModeloo").click(function(){

		})
	}

	function RequesicaoModelo(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectModelos();
		})
	}

	function RequesicaoMarcas(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectMarcas(database);
		})
	}

	function AtualizarSelectModelos(){

	}

	function AtualizarSelectMarcas(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + g + '>' + database[g].name + '</option>';
		}
		$(".Marca").html(alternativas);
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