var urlPadrao = "http://fipeapi.appspot.com/api/1/";

$(document).ready(function(){
	Inicio();
	Cliques();
});

	function Inicio(){
		$("#escritas,.PrimeiroQuadro").show();
		$("#preenchimento,.table-responsive,.AdicaoEdicao").hide();
	}

	function Cliques(){
		$("#cars").click(function(){
			Carros();
		});
		$("#motorcycles").click(function(){
			Motos();
		});
		$("#trucks").click(function(){
			Caminhoes();
		});
	}

	function Carros(){
		$("#preenchimento").show();
		$(".PrimeiroQuadro,.BotaoSelecionarModelo,#ModeloCarro,.BotaoSelecionarAno,#AnoCarro,#escritas,.motos,.caminhoes").hide();
		MarcasCarros();
	}

	function Motos(){
		$("#preenchimento").show();
		$(".PrimeiroQuadro,.BotaoSelecionarModelo,#ModeloMoto,.BotaoSelecionarAno,#AnoMoto,#escritas,.carros,.caminhoes").hide();
		MarcasMotos();
	}

	function Caminhoes(){
		$("#preenchimento").show();
		$(".PrimeiroQuadro,.BotaoSelecionarModelo,#ModeloCaminhao,.BotaoSelecionarAno,#AnoCaminhao,#ModeloCaminhao,#escritas,.motos,.carros").hide();
		MarcasCaminhoes();
	}

//FUNÇÕES REFERENTES AOS CARROS.

	function MarcasCarros(){
		RequesicaoMarcasCarros(urlPadrao + 'carros/marcas.json');
		$(".BotaoSelecionarMarcas").unbind();
		$(".BotaoSelecionarMarcas").click(function(){
			var car= $('#MarcaCarro').val();
			ModelosCarros(car);
		})
	}
	function ModelosCarros(car){
		$("#ModeloCarro,.BotaoSelecionarModelo").show();
			RequesicaoModelosCarros(urlPadrao + 'carros/veiculos/' + car + '.json');
			$('#MarcaCarro').on('change', function() {
				$("#ModeloCarro,.BotaoSelecionarModelo,#AnoCarro,.BotaoSelecionarAno").hide();			
			})
			$(".BotaoSelecionarModelo").unbind();
		$(".BotaoSelecionarModelo").click(function(){
			var car2= $('#ModeloCarro').val();
			AnosCarros(car,car2);
		})
	}
	function AnosCarros(car,car2){
		$("#AnoCarro,.BotaoSelecionarAno").show();
			RequesicaoAnosCarros(urlPadrao + 'carros/veiculo/' + car + '/' + car2 + '.json');
			$('#ModeloCarro').on('change', function() {
				$("#AnoCarro,.BotaoSelecionarAno").hide();			
			})
		$(".BotaoSelecionarAno").unbind();
		$(".BotaoSelecionarAno").click(function(){
			var car3= $('#AnoCarro').val();
			CarroSelecionado(car,car2,car3);
		})
	}
	function CarroSelecionado(car,car2,car3){
		RequisicaoCarroEscolhido(urlPadrao + 'carros/veiculo/' + car + '/' + car2 + '/' + car3 + '.json');
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
	function RequisicaoCarroEscolhido(endereco){
		$.getJSON(endereco, function(database){
			CarroEscolhido(database);
		})
	}
	function CarroEscolhido(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' +  database[g].name + '</option>';
		}
		TabelaResultados(database);
	}

//FUNÇÕES REFERENTES AS MOTOS.

	function MarcasMotos(){
		RequesicaoMarcasMotos(urlPadrao + 'motos/marcas.json');
		$(".BotaoSelecionarMarcas").unbind();
		$(".BotaoSelecionarMarcas").click(function(){
			var moto= $('#MarcaMoto').val();
			ModelosMotos(moto);
		})
	}
	function ModelosMotos(moto){
		$("#ModeloMoto, .BotaoSelecionarModelo").show();
			RequesicaoModelosMotos(urlPadrao + 'motos/veiculos/' + moto + '.json');
			$('#MarcaMoto').on('change', function() {
				$("#ModeloMoto,.BotaoSelecionarModelo,#AnoMoto,.BotaoSelecionarAno").hide();			
			})
		$(".BotaoSelecionarModelo").unbind();
		$(".BotaoSelecionarModelo").click(function(){
			var moto2= $('#ModeloMoto').val();
			AnoMoto(moto,moto2);
		})
	}
	function AnoMoto(moto,moto2){
		$("#AnoMoto,.BotaoSelecionarAno").show();
			RequesicaoAnosMotos(urlPadrao + 'motos/veiculo/' + moto + '/' + moto2 + '.json');
			$('#ModeloMoto').on('change', function() {
				$("#AnoMoto,.BotaoSelecionarAno").hide();			
			})
		$(".BotaoSelecionarAno").unbind();
		$(".BotaoSelecionarAno").click(function(){
			var moto3= $('#AnoMoto').val();
			MotoSelecionada(moto,moto2,moto3);
		})
	}
	function MotoSelecionada(moto,moto2,moto3){
		RequisicaoMotoEscolhida(urlPadrao + 'motos/veiculo/' + moto + '/' + moto2 + '/' + moto3 + '.json');
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
	function RequisicaoMotoEscolhida(endereco){
		$.getJSON(endereco, function(database){
			MotoEscolhida(database);
		})
	}
	function MotoEscolhida(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' +  database[g].name + '</option>';
		}
		TabelaResultados(database);
	}

//FUNÇÕES REFERENTES AOS CAMINHÕES.

	function MarcasCaminhoes(){
		RequesicaoMarcasCaminhoes(urlPadrao + 'caminhoes/marcas.json');
		$(".BotaoSelecionarMarcas").unbind();
		$(".BotaoSelecionarMarcas").click(function(){
			var truck= $('#MarcaCaminhao').val();
			ModelosCaminhoes(truck);
		})
	}
	function ModelosCaminhoes(truck){
		$("#ModeloCaminhao,.BotaoSelecionarModelo").show();
			RequesicaoModelosCaminhoes(urlPadrao + 'caminhoes/veiculos/' + truck + '.json');
			$('#MarcaCaminhao').on('change', function() {
				$("#ModeloCaminhao,.BotaoSelecionarModelo,#AnoCaminhao,.BotaoSelecionarAno").hide();			
			})
		$(".BotaoSelecionarModelo").unbind();
		$(".BotaoSelecionarModelo").click(function(){
			var truck2= $('#ModeloCaminhao').val();
			AnoCaminhao(truck,truck2);
		})
	}
	function AnoCaminhao(truck,truck2){
		$("#AnoCaminhao,.BotaoSelecionarAno").show();
			RequesicaoAnosCaminhoes(urlPadrao + 'caminhoes/veiculo/' + truck + '/' + truck2 + '.json');
			$('#ModeloCaminhao').on('change', function() {
				$("#AnoCaminhao,.BotaoSelecionarAno").hide();			
			})
		$(".BotaoSelecionarAno").unbind();
		$(".BotaoSelecionarAno").click(function(){
			var truck3= $('#AnoCaminhao').val();
			CaminhaoSelecionado(truck,truck2,truck3);
		})
	}
	function CaminhaoSelecionado(truck,truck2,truck3){
		RequisicaoCaminhaoEscolhido(urlPadrao + 'caminhoes/veiculo/' + truck + '/' + truck2 + '/' + truck3 + '.json');
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
	function RequisicaoCaminhaoEscolhido(endereco){
		$.getJSON(endereco, function(database){
			CaminhaoEscolhido(database);
		})
	}
	function CaminhaoEscolhido(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' +  database[g].name + '</option>';
		}
		TabelaResultados(database);
	}

//TABELA COM OS RESULTADOS.
	function TabelaResultados(database){
		$(".table-responsive,.AdicaoEdicao").show();
		$("#preenchimento").hide();
		var marca= database.marca + '<br>';
		var modelo= database.name + '<br>';
		var ano_modelo= database.ano_modelo + '<br>';
		var codigo_fipe= database.fipe_codigo + '<br>';
		var data_consulta= DataPesquisa() + '<br>';
		var preço_medio= database.preco + '<br>';
		$("#marca").html(marca);
		$("#modelo").html(modelo);
		$("#ano_modelo").html(ano_modelo);
		$("#codigo_fipe").html(codigo_fipe);
		$("#preço_medio").html(preço_medio);
		$(".NovaPesquisa").click(function(){
			Inicio();
		})
	}

//FUNÇÃO  DO HORARIO DA CONSULTA.
	function DataPesquisa(){ 
		var momentoAtual = new Date();
		var vhora = momentoAtual.getHours();
		if (vhora < 10){ vhora = "0" + vhora;}
		var vminuto = momentoAtual.getMinutes();		
		if (vminuto < 10){ vminuto = "0" + vminuto;}
		var vsegundo = momentoAtual.getSeconds();
		if (vsegundo < 10){ vsegundo = "0" + vsegundo;}
		var vdia = momentoAtual.getDate();		
		if (vdia < 10){ vdia = "0" + vdia;}
		var vmes = momentoAtual.getMonth() + 1;		
		if (vmes < 10){ vmes = "0" + vmes;}
		var vano = momentoAtual.getFullYear();
 			horario = vdia + "/" + vmes + "/" + vano + ' - ' + vhora + ":" + vminuto + ":" + vsegundo;
 		$("#data_consulta").html(horario);
 	}