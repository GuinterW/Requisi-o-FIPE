var urlPadrao = "http://fipeapi.appspot.com/api/1/";

$(document).ready(function(){
	Inicio();
	Cliques();
});

	function Inicio(){
		$(".cars,.motorcycles,.trucks").show();
		$("#preenchimento,.table-responsive").hide();
	}

	function Cliques(){
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
		$(".list-group,.BotaoSelecionarModelo,#ModeloCarro,.BotaoSelecionarAno,#AnoCarro,#escritas,#motos,#caminhoes").hide();
		MarcasCarros();
	}

	function Motos(){
		$("#preenchimento").show();
		$(".list-group,.BotaoSelecionarModelo,#ModeloMoto,.BotaoSelecionarAno,#AnoMoto,#escritas,#carros,#caminhoes").hide();
		MarcasMotos();
	}

	function Caminhoes(){
		$("#preenchimento").show();
		$(".list-group,.BotaoSelecionarModelo,#ModeloCaminhao,.BotaoSelecionarAno,#AnoCaminhao,#ModeloCaminhao,#escritas,#motos,#carros").hide();
		MarcasCaminhoes();
	}

//FUNÇÕES REFERENTES AOS CARROS.

	function MarcasCarros(){
		RequesicaoMarcasCarros(urlPadrao + 'carros/marcas.json');
		$(".BotaoSelecionarMarcas").click(function(){
			var car= $('#MarcaCarro').val();
			ModelosCarros(car);
		})
	}
	function ModelosCarros(car){
		$("#ModeloCarro,.BotaoSelecionarModelo").show();
			RequesicaoModelosCarros(urlPadrao + 'carros/veiculos/' + car + '.json');
		$(".BotaoSelecionarModelo").click(function(){
			var car2= $('#ModeloCarro').val();
			AnosCarros(car,car2);
		})
	}
	function AnosCarros(car,car2){
		$("#AnoCarro,.BotaoSelecionarAno").show();
			RequesicaoAnosCarros(urlPadrao + 'carros/veiculo/' + car + '/' + car2 + '.json');
		$(".BotaoSelecionarAno").click(function(){
			var car3= $('#AnoCarro').val();
			//TabelaResultados();
		})
	}
	function RequesicaoMarcasCarros(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectMarcasCarros(database);
		})
	}
	function AtualizarSelectMarcasCarros(database){
		var alternativas='';
			for (var g=0; g<database.length; g++){
				alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
			}
		$("#MarcaCarro").html(alternativas);
	}
	function RequesicaoModelosCarros(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectModelosCarros(database);
		})
	}
	function AtualizarSelectModelosCarros(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
		}
		$("#ModeloCarro").html(alternativas);
	}
	function RequesicaoAnosCarros(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectAnoCarro(database);
		})
	}
	function AtualizarSelectAnoCarro(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
		}
		$("#AnoCarro").html(alternativas);
	}

//FUNÇÕES REFERENTES AS MOTOS.

	function MarcasMotos(){
		RequesicaoMarcasMotos(urlPadrao + 'motos/marcas.json');
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
			AnoMoto(moto,moto2);
		})
	}
	function AnoMoto(moto,moto2){
		$("#AnoMoto,.BotaoSelecionarAno").show();
			RequesicaoAnosMotos(urlPadrao + 'motos/veiculo/' + moto + '/' + moto2 + '.json');
		$(".BotaoSelecionarAno").click(function(){
			'blablabla';
		})
	}
	function RequesicaoMarcasMotos(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectMarcasMotos(database);
		})
	}
	function AtualizarSelectMarcasMotos(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
		}
		$("#MarcaMoto").html(alternativas);
	}
	function RequesicaoModelosMotos(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectModelosMotos(database);
		})
	}
	function AtualizarSelectModelosMotos(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
		}
		$("#ModeloMoto").html(alternativas);
	}
	function RequesicaoAnosMotos(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectAnoMoto(database);
		})
	}
	function AtualizarSelectAnoMoto(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
		}
		$("#AnoMoto").html(alternativas);
	}

//FUNÇÕES REFERENTES AOS CAMINHÕES.

	function MarcasCaminhoes(){
		RequesicaoMarcasCaminhoes(urlPadrao + 'caminhoes/marcas.json');
		$(".BotaoSelecionarMarcas").click(function(){
			var truck= $('#MarcaCaminhao').val();
			ModelosCaminhoes(truck);
		})
	}
	function ModelosCaminhoes(truck){
		$("#ModeloCaminhao,.BotaoSelecionarModelo").show();
			RequesicaoModelosCaminhoes(urlPadrao + 'caminhoes/veiculos/' + truck + '.json');
		$(".BotaoSelecionarModelo").click(function(){
			var truck2= $('#ModeloCaminhao').val();
			AnoCaminhao(truck,truck2);
		})
	}
	function AnoCaminhao(truck,truck2){
		$("#AnoCaminhao,.BotaoSelecionarAno").show();
			RequesicaoAnosCaminhoes(urlPadrao + 'caminhoes/veiculo/' + truck + '/' + truck2 + '.json');
		$(".BotaoSelecionarAno").click(function(){
			'blablabla';
		})
	}
	function RequesicaoMarcasCaminhoes(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectMarcasCaminhoes(database);
		})
	}
	function AtualizarSelectMarcasCaminhoes(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
		}
		$("#MarcaCaminhao").html(alternativas);
	}
	function RequesicaoModelosCaminhoes(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectModelosCaminhoes(database);
		})
	}
	function AtualizarSelectModelosCaminhoes(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
		}
		$("#ModeloCaminhao").html(alternativas);
	}
	function RequesicaoAnosCaminhoes(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectAnoCaminhao(database);
		})
	}
	function AtualizarSelectAnoCaminhao(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
		}
		$("#AnoCaminhao").html(alternativas);
	}

	function TabelaResultados(database){
		$(".table-responsive").show();
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].fipe_marca + '>' + database[g].name + '</option>';
		}
		$("#marca").html(alternativas);
	}