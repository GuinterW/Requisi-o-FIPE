var urlPadrao = "http://fipeapi.appspot.com/api/1/";

$(document).ready(function(){
	Inicio();
});

	function Inicio(){
		$("#escritas,.PrimeiroQuadro").show();
		$("#FuncoesEspecificas,.table-responsive,.AdicaoEdicao").hide();
		Cliques();
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
		$("#FuncoesEspecificas,.carros").show();
		$(".PrimeiroQuadro,.BotaoSelecionarModelo,.Modelo,.BotaoSelecionarAno,.Ano,.motos,.caminhoes,#escritas").hide();
		var tipo='carros';
		Marcas(tipo);
	}

	function Motos(){
		$("#FuncoesEspecificas,.motos").show();
		$(".PrimeiroQuadro,.BotaoSelecionarModelo,.Modelo,.BotaoSelecionarAno,.Ano,.carros,.caminhoes,#escritas").hide();
		var tipo='motos';
		Marcas(tipo);
	}

	function Caminhoes(){
		$("#FuncoesEspecificas,.caminhoes").show();
		$(".PrimeiroQuadro,.BotaoSelecionarModelo,.Modelo,.BotaoSelecionarAno,.Ano,.motos,.carros,#escritas").hide();
		var tipo='caminhoes';
		Marcas(tipo);
	}
	
	function Marcas(tipo){
		RequesicaoMarcas(urlPadrao + tipo + '/marcas.json');
		$(".BotaoSelecionarMarcas").unbind();
		$(".BotaoSelecionarMarcas").click(function(){
			console.log(tipo2);
			var tipo2= $('.Marca').val();
			console.log(tipo2);
			Modelos(tipo,tipo2);
		});
	}

	function Modelos(tipo,tipo2){
		$(".Modelo,.BotaoSelecionarModelo").show();
		RequesicaoModelos(urlPadrao + tipo + '/veiculos/' + tipo2 + '.json');
		$('.Marca').on('change', function() {
				$(".Modelo,.BotaoSelecionarModelo,.Ano,.BotaoSelecionarAno").hide();			
		});
		$(".BotaoSelecionarModelo").unbind();
		$(".BotaoSelecionarModelo").click(function(){
			var tipo3= $('.Modelo').val();
			Anos(tipo,tipo2,tipo3);
		});
	}

	function Anos(tipo,tipo2,tipo3){
		$(".Ano,.BotaoSelecionarAno").show();
		RequesicaoAnos(urlPadrao + tipo + '/veiculo/' + tipo2 + '/' + tipo3 + '.json');
		$('.Modelo').on('change', function() {
			$(".Ano,.BotaoSelecionarAno").hide();			
		});
		$(".BotaoSelecionarAno").unbind();
		$(".BotaoSelecionarAno").click(function(){
			var tipo4= $('.Ano').val();
			VeiculoSelecionado(tipo,tipo2,tipo3,tipo4);
		});
	}

	function VeiculoSelecionado(tipo,tipo2,tipo3,tipo4){
		RequisicaoVeiculoEscolhido(urlPadrao + tipo + '/veiculo/' + tipo2 + '/' + tipo3 + '/' + tipo4 + '.json');
	}
	
	function RequesicaoMarcas(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectMarcas(database);
		});
	}

	function AtualizarSelectMarcas(database){
		var alternativas='';
			for (var g=0; g<database.length; g++){
				alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
			}
		$(".Marca").html(alternativas);
	}

	function RequesicaoModelos(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectModelos(database);
		});
	}

	function AtualizarSelectModelos(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
		}
		$(".Modelo").html(alternativas);
	}

	function RequesicaoAnos(endereco){
		$.getJSON(endereco, function(database){
			AtualizarSelectAno(database);
		});
	}

	function AtualizarSelectAno(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' + database[g].name + '</option>';
		}
		$(".Ano").html(alternativas);
	}

	function RequisicaoVeiculoEscolhido(endereco){
		$.getJSON(endereco, function(database){
			VeiculoEscolhido(database);
		});
	}

	function VeiculoEscolhido(database){
		var alternativas='';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value=' + database[g].id + '>' +  database[g].name + '</option>';
		}
		TabelaResultados(database);
	}

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
 			horario = vdia + "/" + vmes + "/" + vano + ' - ' + vhora + ":" + vminuto + ":" + vsegundo + '<br>';
 	}

	function TabelaResultados(database){
		$(".table-responsive,.AdicaoEdicao").show();
		$("#FuncoesEspecificas").hide();
		var itens= '';
		itens+= '<tr>' + '<td>' + database.marca + '</td>';
		itens+= '<td>' + database.name + '</td>';
		itens+= '<td>' + database.ano_modelo + '</td>';
		itens+= '<td>' + database.fipe_codigo + '</td>';
		DataPesquisa();
		itens+= '<td>' + horario + '</td>';
		itens+= '<td>' + database.preco + '</td>' + '</tr>';
		$("#newLine").append(itens);
		$(".NovaPesquisa").click(function(){
			Inicio();
		});
	}