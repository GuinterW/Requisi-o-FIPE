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
		$(".list-group, #counteiner, .BotaoSelecionarModelo, #motos, #caminhoes").hide();
		MarcasCarros();
	}

	function Motos(){
		$("#preenchimento").show();
		$(".list-group, #counteiner, .BotaoSelecionarModelo, #carros, #caminhoes").hide();
		MarcasMotos();
	}

	function Caminhoes(){
		$("#preenchimento").show();
		$(".list-group, .Modelo, .BotaoSelecionarModelo, #counteiner, #motos, #carros").hide();
		MarcasCaminhoes();
	}

	function MarcasCarros(){
		RequesicaoMarcas(urlPadrao + 'carros/marcas.json');
		$(".Modelo").hide();
		$(".BotaoSelecionarMarcas").click(function(){
			var b= $('.Marca').val();
			ModelosCarros(b);
		})
	}

	function ModelosCarros(b){
		$(".Modelo, .BotaoSelecionarModelo").show();
			RequesicaoModelo(urlPadrao + 'carros/veiculos/' + b + '.json');
		var l= $('.Modelo').val();
		$(".BotaoSelecionarModelo").click(function(){
		})
	}

	function MarcasMotos(){
		RequesicaoMarcas(urlPadrao + 'motos/marcas.json');
		$(".Modelo").hide();
		$(".BotaoSelecionarMarcas").click(function(){
			var y= $('.Marca').val();
			ModelosMotos(y);
		})
	}

	function ModelosMotos(y){
		$(".Modelo, .BotaoSelecionarModelo").show();
			RequesicaoModelo(urlPadrao + 'motos/veiculos/' + y + '.json');
		var l= $('.Modelo').val();
		$(".BotaoSelecionarModelo").click(function(){
		})
	}

	function MarcasCaminhoes(){
		RequesicaoMarcas(urlPadrao + 'caminhoes/marcas.json');
		$(".Modelo").hide();
		$(".BotaoSelecionarMarcas").click(function(){
			var k= $('.Marca').val();
			console.log(k);
			ModelosCaminhoes(k);
		})
	}

	function ModelosCaminhoes(k){
		$(".Modelo, .BotaoSelecionarModelo").show();
			RequesicaoModelo(urlPadrao + 'caminhoes/veiculos/' + k + '.json');
		var l= $('.Modelo').val();
		$(".BotaoSelecionarModelo").click(function(){
		})
	}

	function RequesicaoModelo(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectModelos(database);
		})
	}

	function RequesicaoMarcas(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectMarcas(database);
		})
	}

	function AtualizarSelectModelos(database){
		console.log(database);
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + g + '>' + database[g].name + '</option>';
		}
		$(".Modelo").html(alternativas);
	}

	function AtualizarSelectMarcas(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
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