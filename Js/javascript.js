var urlPadrao = "http://fipeapi.appspot.com/api/1/";

$(document).ready(function(){
	Inicio();
});

	function Inicio(){
		$("#Escritas,.PrimeiroQuadro").show();
		$("#FuncoesEspecificas,.TabelaResponsiva,.NovaOpcao").hide();
		Cliques();
	}

	function Cliques(){
		$("#LinkCarros").click(function(){
			Carros();
		});
		$("#LinkMotos").click(function(){
			Motos();
		});
		$("#LinkCaminhoes").click(function(){
			Caminhoes();
		});
	}

	function Carros(){
		$("#FuncoesEspecificas,.DivCarros").show();
		$(".PrimeiroQuadro,.BotaoSelecionarModelo,.SelectModelo,.BotaoSelecionarAno,.SelectAno,.DivMotos,.DivCaminhoes,#Escritas").hide();
		var tipo='carros';
		exibirMarcas(tipo);
	}

	function Motos(){
		$("#FuncoesEspecificas,.DivMotos").show();
		$(".PrimeiroQuadro,.BotaoSelecionarModelo,.SelectModelo,.BotaoSelecionarAno,.SelectAno,.DivCarros,.DivCaminhoes,#Escritas").hide();
		var tipo='motos';
		exibirMarcas(tipo);
	}

	function Caminhoes(){
		$("#FuncoesEspecificas,.DivCaminhoes").show();
		$(".PrimeiroQuadro,.BotaoSelecionarModelo,.SelectModelo,.BotaoSelecionarAno,.SelectAno,.DivMotos,.DivCarros,#Escritas").hide();
		var tipo='caminhoes';
		exibirMarcas(tipo);
	}
	
	function exibirMarcas(tipo){
		RequesicaoMarcas(urlPadrao + tipo + '/marcas.json');
		$(".BotaoSelecionarMarcas").unbind();
		$(".BotaoSelecionarMarcas").click(function(){
			var tipo2= $('.SelectMarca').val();
			exibirModelos(tipo,tipo2);
		});
	}

	function exibirModelos(tipo,tipo2){
		$(".SelectModelo,.BotaoSelecionarModelo").show();
		RequesicaoModelos(urlPadrao + tipo + '/veiculos/' + tipo2 + '.json');
		$('.SelectMarca').on('change', function() {
				$(".SelectModelo,.BotaoSelecionarModelo,.SelectAno,.BotaoSelecionarAno").hide();			
		});
		$(".BotaoSelecionarModelo").unbind();
		$(".BotaoSelecionarModelo").click(function(){
			var tipo3= $('.SelectModelo').val();
			exibirAnos(tipo,tipo2,tipo3);
		});
	}

	function exibirAnos(tipo,tipo2,tipo3){
		$(".SelectAno,.BotaoSelecionarAno").show();
		RequesicaoAnos(urlPadrao + tipo + '/veiculo/' + tipo2 + '/' + tipo3 + '.json');
		$('.SelectModelo').on('change', function() {
			$(".SelectAno,.BotaoSelecionarAno").hide();			
		});
		$(".BotaoSelecionarAno").unbind();
		$(".BotaoSelecionarAno").click(function(){
			var tipo4= $('.SelectAno').val();
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
		$(".SelectMarca").html(alternativas);
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
		$(".SelectModelo").html(alternativas);
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
		$(".SelectAno").html(alternativas);
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
		$(".TabelaResponsiva,.NovaOpcao").show();
		$("#FuncoesEspecificas").hide();
		var itens= '';
		itens+= '<tr>' + '<td>' + database.marca + '</td>';
		itens+= '<td>' + database.name + '</td>';
		itens+= '<td>' + database.ano_modelo + '</td>';
		itens+= '<td>' + database.fipe_codigo + '</td>';
		DataPesquisa();
		itens+= '<td>' + horario + '</td>';
		itens+= '<td>' + database.preco + '</td>' + '</tr>';
		$("#NovaLinha").append(itens);
		$("#LinkCarros,#LinkMotos,#LinkCaminhoes,.DivCarros,.DivMotos,.DivCaminhoes,#NovaLinha").unbind();
		$(".NovaPesquisa").click(function(){
			Inicio();
		});
	}