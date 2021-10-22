


//Array de Objetos Legislação e Penalidade
const quiz = [
    {
		//01
      q:'A qual órgão compete regulamentar velocidade para as vias?',
        options:['CONTRAN','CETRAN','DENATRAN','O órgão ou entidade com circunscrição sobre a via'],
        answer:3
     },

         {
		//02
      q:'Equipamento registrador e instantâneo de velocidade e tempo (tacógrafo) será exigido nos veículos com mais de:',
        options:['05 lugares','20 lugares','10 lugares','15 lugares'],
        answer:2
     },
	 
	     {
		//03
      q:'Classifica-se camioneta como:',
        options:['Veículo de carga','Veículo misto','Veículo de passageiros','Veículo de competição'],
        answer:1
     },
	 
	     {
		//04
      q:'A qual órgão compete editar normas complementares referentes à implantação de sinalização viária?',
        options:['DENATRAN','CETRAN','CONTRAN','Òrgão com circunscrição sobre a via'],
        answer:2
     },
	 
	     {
		//05
      q:'A suspensão ou proibição de se obter a permissão ou habilitação para dirigir tem a duração de:',
        options:['Dois anos a um ano','Um mês a um ano','Dois meses a dois anos','Dois meses a cinco anos'],
        answer:3
     },
	 
	     {
		//06
      q:'É veículo misto destinado ao transporte de passageiros e carga simultaneamente:',
        options:['Caminhonete','Carroça','Carro de mão','Camioneta'],
        answer:3
     },
	 
	     {
		//07
      q:'São documentos de habilitação:',
        options:['D.U.T. e identidade','CNH e Certificado de Licenciamento Anual','CNH, ACC e Permissão para Dirigir','CNH e Certificado de Registro'],
        answer:2
     },
	 
	     {
		//08
      q:'Não é requisito para se habilitar como condutor de veículo automotor:',
        options:['Saber ler','Saber escrever','Ser penalmente imputável','Possuir ensino fundamental'],
        answer:3
     },
	 
	     {
		//09
      q:'A quem compete expedir autorização para conduzir veículos de propulsão humana?',
        options:['Ao DETRAN','Ao CONTRAN','Ao CETRAN','Aos municípios'],
        answer:3
     },
	 
	     {
		//10
      q:'Das decisões da JARI, cabe recurso no prazo de:',
        options:['60 dias','90 dias','45 dias','30 dias'],
        answer:3
     },
	 
	     {
		//11
      q:'Os veículos apreendidos ou recolhidos a qualquer título e não reclamado pelo seu proprietário poderá ser levado a leilão público dentro do prazo de:',
        options:['90 dias','30 dais','60 dias','120 dias'],
        answer:2
     },
	 
	     {
		//12
      q:'O veículo será identificado obrigatoriamente:',
        options:['Pelas placas dianteira e traseira','Pelo Certificado de Registro','Pelo Certificado de Licenciamento Anual','Por caracteres gravados no chassi'],
        answer:3
     },
	 
	     {
		//13
      q:'A não obtenção da Carteira Nacional de Habilitação obriga o candidato a:',
        options:['Renovar o exame em que tenha sido reprovado','Reiniciar todo o processo de habilitação','Renovar o exame médico','Repetir o exame prático de direção veicular'],
        answer:1
     },
	 
	     {
		//14
      q:'São penalidades aplicadas aos instrutores e examinadores:',
        options:['Multa','Advertência e cancelamento do exercício da atividade','Suspensão','Somente a alternativa A está incorreta'],
        answer:1
     },
	 
	     {
		//15
      q:'Trailer significa: reboque ou semi-reboque tipo casa, com 2,4 ou 6 rodas. Para conduzi-lo o condutor terá que estar habilitado na categoria:',
        options:['“A”','“B”','“E”','“D”'],
        answer:2
     },
	 
	     {
		//16
      q:'Parte da pista de rolamento separada por pintura, destinada à circulação exclusiva de pedestres e excepcionalmente de ciclistas, significa:',
        options:['Passarela','Passeio','Calçada','Via'],
        answer:1
     },
	 
	     {
		//17
      q:'É medida administrativa aplicada a um grupo de amigos que resolveu promover na via uma demonstração de perícia em manobra de veículos, sem permissão da autoridade competente:',
        options:['Advertência','Multa (cinco vezes)',') Suspensão do direito de dirigir','Recolhimento do documento de habilitação'],
        answer:3
     },
	 
	     {
		//18
      q:'Acarreta o recolhimento da Carteira Nacional de Habilitação e retenção do veículo até a apresentação de condutor habilitado:',
        options:['Dirigir com CNH ou Permissão para dirigir cassada','Dirigir sem usar lentes corretoras de visão','Transportar crianças no banco da frente','Dirigir com validade da Carteira Nacional de Habilitação vencida há mais de trinta dias'],
        answer:3
     },
	 
	 {
		//19
      q:'O que não será obrigatório constar no auto de infração:',
        options:['A tipificação da infração, os caracteres da placa de identificação do veiculo, sua marca e espécie','O local, data e hora do cometimento da infração','O prontuário do condutor e assinatura do mesmo','Identificação do agente que autuou'],
        answer:2
     },
	 
	 {
		//20
      q:'A penalidade que consiste no pagamento em favor de vítimas de acidentes de trânsito ou a seus sucessores é:',
        options:['Advertência','Multa reparatória','Retenção do veículo','Recolhimento de animais'],
        answer:1
     },
	 
	 {
		//21
      q:'Quando que o auto de infração será arquivado e seu registro julgado insubsistente?',
        options:['Quando assim entender o agente de trânsito','Quando o infrator for menor de 18 anos','Quando a autuação for inconsistente ou se, no prazo de 30 dias, no for expedida a notificação','Quando considerado regular e no prazo de 60 dias, for expedida a notificação.'],
        answer:2
     },
	 
	 {
		//22
      q:'No caso de Cassação da CNH, após qual período e quais exames deverão submeter o infrator para a reabilitação?',
        options:['Somente os exames de sanidade física e mental','Decorridos 02 anos, deverá submeter-se a todos os exames','Decorridos 06 meses, todos os exames','Decorridos 02 anos, não se faz necessário repetir exames'],
        answer:1
     },
	 
	 {
		//23
      q:'Não sendo identificado o infrator, o proprietário do veículo, terá o prazo de quantos dias para apresenta-lo?',
        options:['30 dias','Um mês','15 dias','45 dias'],
        answer:2
     },
	 
	 {
		//24
      q:'Não acarreta cassação da CNH:',
        options:['Quando suspenso do direito de dirigir, o infrator conduzir qualquer veículo automotor','Quando dirigir veículo sem possuir CNH ou Permissão para dirigir, quando reincidente no período de um ano','Quando a CNH for de categoria diferente da do veículo que esteja conduzindo, quando reincidente no período de um ano','Dirigir sob influência de álcool, no caso de reincidência no período de um ano'],
        answer:1
     },
	 
	     {
		//25
      q:'O pagamento de multa poderá ser feito:',
        options:['Com juros','Com desconto de 20% até o vencimento','Parcelado','Total'],
        answer:1
     },
	 
	     {
		//26
      q:'Em que caso a CNH pode ser cassada:',
        options:['Quando o condutor estiver dirigindo estando seu direito de dirigir suspenso','Quando estiver dirigindo embriagado ou drogado','Quando o veículo estiver com equipamentos obrigatórios defeituosos','Quando o veículo estiver trafegando com excesso de carga'],
        answer:0
     },
	    
		{
		//27
      q:'No ato da apreensão do veículo é medida administrativa a ser aplicada',
        options:['Advertência por escrito','Multa','Recolhimento de Certificado de Registro e Licenciamento Anual. (CRLV)','Recolhimento do Certificado de Registro'],
        answer:2
     },
	  
	  {
		//28
      q:'Plastificar a Carteira Nacional de Habilitação é:',
        options:['Permitido pelo Batalhão de Trânsito','Uma decisão da pessoa a quem pertence','Permitido pelo DETRAN, quando a embalagem não for colante','Permitido pelo CONTRAN, quando o portador possuir uma cópia autenticada em cartório'],
        answer:2
     },
	     
		 {
		//29
      q:'Transitar em velocidade superior à máxima permitida para local, em mais de 20%, nas rodovias, vias de trânsito rápido e arterial, acarreta como penalidade:',
        options:['Multa agravada','Retenção do veículo e multa','Multa agravada e suspensão do direito de dirigir','Multa'],
        answer:2
     },
	  
	  {
		//30
      q:'Em uma via com velocidade máxima permitida de 80Km/h, o radar capta um veículo a 90Km/h. O condutor cometeu infração de natureza:',
        options:['Leve','Grave','Gravissíma','Média'],
        answer:1
     } 
     
]