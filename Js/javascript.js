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
		$(".list-group, #ModeloCaminhao, .BotaoSelecionarModelo, #counteiner, #motos, #carros").hide();
		MarcasCaminhoes();
	}

	function MarcasCarros(){
		RequesicaoMarcasCarros(urlPadrao + 'carros/marcas.json');
		$("#ModeloCarro").hide();
		$(".BotaoSelecionarMarcas").click(function(){
			var car= $('#MarcaCarro').val();
			ModelosCarros(car);
		})
	}

	function ModelosCarros(car){
		$("#ModeloCarro, .BotaoSelecionarModelo").show();
			RequesicaoModelosCarros(urlPadrao + 'carros/veiculos/' + car + '.json');
		$(".BotaoSelecionarModelo").click(function(){
			var car2= $('#ModeloCarro').val();
			(car2);
		})
	}

	function MarcasMotos(){
		RequesicaoMarcasMotos(urlPadrao + 'motos/marcas.json');
		$("#ModeloMoto").hide();
		$(".BotaoSelecionarMarcas").click(function(){
			var moto= $('#MarcaMoto').val();
			console.log(moto);
			ModelosMotos(moto);
		})
	}

	function ModelosMotos(moto){
		$("#ModeloMoto, .BotaoSelecionarModelo").show();
			RequesicaoModelosMotos(urlPadrao + 'motos/veiculos/' + moto + '.json');
		$(".BotaoSelecionarModelo").click(function(){
			var moto2= $('#ModeloMoto').val();
			(moto2);
		})
	}

	function MarcasCaminhoes(){
		RequesicaoMarcasCaminhoes(urlPadrao + 'caminhoes/marcas.json');
		$("#ModeloCaminhao").hide();
		$(".BotaoSelecionarMarcas").click(function(){
			var truck= $('#MarcaCaminhao').val();
			ModelosCaminhoes(truck);
		})
	}

	function ModelosCaminhoes(truck){
		$("#ModeloCaminhao, .BotaoSelecionarModelo").show();
			RequesicaoModelosCaminhoes(urlPadrao + 'caminhoes/veiculos/' + truck + '.json');
		$(".BotaoSelecionarModelo").click(function(){
			var truck2= $('#ModeloCaminhao').val();
			(truck2);
		})
	}

	function RequesicaoMarcasCarros(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectMarcasCarros(database);
		})
	}

	function RequesicaoMarcasMotos(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectMarcasMotos(database);
		})
	}

	function RequesicaoMarcasCaminhoes(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectMarcasCaminhoes(database);
		})
	}

	function RequesicaoModelosCarros(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectModelosCarros(database);
		})
	}

	function RequesicaoModelosMotos(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectModelosMotos(database);
		})
	}

	function RequesicaoModelosCaminhoes(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectModelosCaminhoes(database);
		})
	}

	function AtualizarSelectMarcasCarros(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
		}
		$("#MarcaCarro").html(alternativas);
	}

	function AtualizarSelectMarcasMotos(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
		}
		$("#MarcaMoto").html(alternativas);
	}

	function AtualizarSelectMarcasCaminhoes(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
		}
		$("#MarcaCaminhao").html(alternativas);
	}

	function AtualizarSelectModelosCarros(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + g + '>' + database[g].name + '</option>';
		}
		$("#ModeloCarro").html(alternativas);
	}

	function AtualizarSelectModelosMotos(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + g + '>' + database[g].name + '</option>';
		}
		$("#ModeloMoto").html(alternativas);
	}

	function AtualizarSelectModelosCaminhoes(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + g + '>' + database[g].name + '</option>';
		}
		$("#ModeloCaminhao").html(alternativas);
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