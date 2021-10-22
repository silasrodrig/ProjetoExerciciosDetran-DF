


//Array de Objetos Direção Defensiva
const quiz = [
    {
		//01
       q:'Atualmente são adotados no Brasil três tipos de cinto de segurança. Qual deles oferece maior proteção?',
       options:['O pélvico','O Toráxico','O de dois pontos','O de três pontos'],
       answer:3
    },

    {
		//02
        q:'Defensivamente, é distância frontal recomendável para veículos com até 06 metros de comprimento:',
        options:['De 06 segundos','De 10 segundos','De 2 segundos','De 09 segundos'],
        answer:2
     },

     {
		 //03
        q:'Não é comportamento do condutor que adota a direção defensiva:',
        options:['Faz valer seu direito','Realiza uma viagem sem infrações de trânsito','Realiza uma viagem sem faltar com a cortesia devida','Encara a tarefa de dirigir com objetivo dereduzir a possibilidade de ser envolvido em acidente de trânsito'],
        answer:0
     },

     {
		 //04
        q:'O condutor que está sempre preparado apara reagir contra os erros dos outros no trânsito, está praticando uma direção:',
        options:['Agressiva','Corretiva','Preventiva','Defensiva'],
        answer:2
     },

     {
		 //05
        q:'Não está relacionado a ato inseguro:',
        options:['Excesso de velocidade','Desobedecer a parada obrigatória','Sinalização da via errada ou insuficiente','Desobedecer ao sinal fechado'],
        answer:2
     },

     {
		 //06
        q:'Segundo estatísticas, é local onde ocorrem um terço de todos os acidentes de trânsito:',
        options:['Nas ultrapassagens','Nos cruzamentos','Nas retas','Nas curvas'],
        answer:1
     },
	 
	 {
		 //07
        q:'Qual acidente de trânsito que envolve apenas um veículo, cuja causa é desconhecida:',
        options:['Colisão frente a frente','Colisão nas retas','Colisão nos cruzamentos','Colisão misteriosa'],
        answer:3
     },
	 
	 {
		 //08
        q:'Está ligada a condição atmosférica:',
        options:['Luz','Tempo','Estrada','Trânsito'],
        answer:1
     },
	      
	 {
		 //09
        q:'Quando o veículo está em aceleração, o peso se concentra na parte traseira levando-o para fora da curva, dizemos que está acontecendo:',
        options:['Um comportamento sub-terçante','Um comportamento sobre-terçante','Uma derrapagem','Uma aquaplanagem'],
        answer:0
     },
	 
	 {
		 //10
        q:'Defensivamente ao ser ultrapassado o condutor deve:',
        options:['Facilitar a ultrapassagem.','Somente diminuir a velocidade','Aumentar a velocidade','Diminuir a velocidade e deslocar-se para a esquerda'],
        answer:0
     },
	 
	 {
		 //11
        q:'Não é atitude imprudente do condutor no trânsito',
        options:['Ultrapassagem forçada','Dirigir após ter ingerido bebida alcoólica','Imprimir velocidade compatível com a segurança','Desrespeitar a sinalização'],
        answer:2
     },
	 
	 {
		 //12
        q:'Ao parar o veículo antes de fazer uma manobra à esquerda as rodas devem ficar:',
        options:['Voltadas para frente','Voltadas para a esquerda','Voltadas para a direita','Em qualquer posição'],
        answer:0
     },
	 
	 {
		 //13
        q:'O condutor deve pisar no freio antes da embreagem para:',
        options:['Fazer uma mudança de marchas','Diminuir a velocidade do veículo','Parar o veículo','Virar à esquerda ou à direita'],
        answer:2
     },
	      
	 {
		 //14
        q:'Qual comportamento defensivo que o condutor deve ter em relação ao veículo que segue a sua frente:',
        options:['Manter acesas as luzes de seu veículo utilizando o farol alto mesmo nas vias com iluminação pública','Manter distância segura entre o veículo que dirige e o que segue à sua frente','Circular com seu veículo em velocidade incompatível com a segurança','Manter o veículo sempre na faixa mais à direita'],
        answer:1
     },
	 
	 {
		 //15
        q:'É a última condição adversa a ser considerada:',
        options:['Tempo','Estrada','Luz','Motorista'],
        answer:3
     },
	 
	 {
		 //16
        q:'Não devemos fazer em frenagem de emergência:',
        options:['Bloquear o corpo firmando o pé esquerdo','Frear fortemente e se travar as rodas, aliviar o pé do freio','Pisar na embreagem ao iniciar uma parada','Tentar manter o veículo em linha reta'],
        answer:2
     },
	 
	 {
		 //17
        q:'Para evitar colisão com o veículo da frente você deve:',
        options:['Trafegar mais à direita e sinalizar suas intenções','Não desviar os olhos do motorista da frente, para saber sempre o que está fazendo e como agir','Olhar sempre para frente, deixar bastante espaço entre o seu veículo e o da frente e estar preparado pra parar','Ficar alerta e dominar a situação, manter distância reagir e parar'],
        answer:3
     },
	 
	 {
		 //18
        q:'Qual o comportamento do veiculo quando em aceleração?',
        options:['Colisão misteriosa','Força centrípeta','Movimento sub-esterçante','Movimento sobre-esterçante'],
        answer:2
     },
	 
	 {
		 //19
        q:'Não constitui fundamento da prevenção de acidente:',
        options:['Previsão','Conhecimento','Atenção','Interação'],
        answer:3
     },
	 
	 {
		 //20
        q:'Qual o estudo que visa aprimorar o relacionamento entre o homem e a máquina?',
        options:['Força centrífuga','Força centrípeta','Ergonomia','Autonomia'],
        answer:2
     },
	      
	 {
		 //21
        q:'Assinale a alternativa incorreta. “Enxergando” o perigo com antecedência, você estará:',
        options:['Trafegando com margem de segurança','Tendo mais tempo para reagir','Prevenindo acidentes','Dirigindo corretivamente'],
        answer:3
     },
	 
	 {
		 //22
        q:'É finalidade do cinto de segurança:',
        options:['Salvar vidas','Evitar acidentes','Evitar multas','Amenizar a gravidade das lesões'],
        answer:3
     },
	 
	 {
		 //23
        q:' Assinale a alternativa errada. A aderência diminui quando:',
        options:['Houver óleo na pista','Os pneus tiverem mais de 2mm de sulco','Aquaplanagem','Excesso de velocidade'],
        answer:1
     },
	      
	 {
		 //24
        q:'Quando ocorre o desgarramento da parte dianteira do veículo, tem início o processo de:',
        options:['Comportamento sobre-esterçante','Hidroplanagem','Derrapagem','Comportamento sub-esterçante'],
        answer:3
     },
	 
	 {
		//25
        q:'Quando o peso do veículo se concentra na dianteira, o veículo está em:',
        options:['Aceleração','Uma curva acentuada','Uma derrapagem','Desaceleração'],
        answer:3
     },
	      
	 {
		 //26
        q:'Qual fenômeno ocorre quando as rodas do veículo perdem contato com o solo, devido à presença de uma camada d’água entre a superfície da pista e os pneus?',
        options:['Um empoçamento d’água na pista','Condição adversa do tempo','Aquaplanagem','Condição adversa da pista'],
        answer:2
     },
	 
	 {
		 //27
        q:'Dentre as afirmações abaixo, uma delas não se relaciona com direção preventiva:',
        options:['Respeitar o direito dos demais usuários da via','De um modo geral, o motorista preventivo não é surpreendido com uma situação de risco','Apesar de calmo e habilidoso, o motorista não consegue antecipar uma situação de risco','É importante na direção preventiva observar e respeitar as normas de circulação'],
        answer:2
     },
	 
	 {
		 //28
        q:'O motorista defensivo, na eminência de ser prejudicado em seu direito de preferência no trânsito, deve:',
        options:['Falar com o motorista de seu erro, para que o mesmo venha corrigir em outras situações','Diminuir até mesmo parar, dando a preferência para o outro','Piscar os faróis','Acelerar a velocidade de seu veículo'],
        answer:1
     },
	 
	 {
		 //29
        q:'Em quantas posições pode ser analisada uma colisão envolvendo dois veículos:',
        options:['Serão analisadas 2 posições','Serão analisadas 4 posições','Serão analisadas 6 posições','Serão analisadas 8 posições'],
        answer:2
     },
	 
	 {
		 //30
        q:'Em via de mão dupla é permitido trafegar pela contramão:',
        options:['Para retornar','Para virar à esquerda','Para ultrapassar','Para fazer uma passagem'],
        answer:2
     },
	      
	 //Array de Objetos Legislação e Penalidade
	 
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
     },


//Array de Objetos - Leg/Penalidade/Sinalização/Cir.Cond

     {
		// 01
        q:'Sempre que as circunstâncias determinem a redução sensível de marcha do veículo, o agente de trânsito usará:',
        options:['Um silvo breve','Três silvos breves','Um silvo longo','Um silvo breve e um longo'],
        answer:2
     },

     {
		// 02
        q:'Diante da placa pista escorregadia (A-28), você entende:',
        options:['A pista está escorregadia devido ao derramamento de óleo','A pista está sendo lavada com produtos químicos','A pista oferece perigo devido a obras no asfaltamento','Em certas circunstâncias, o trecho sinalizado torna-se escorregadio'],
        answer:3
     },

    {
		// 03
        q:'È placa de regulamentação utilizada nas áreas de segurança',
        options:['Proibido estacionar','Proibido parar e estacionar','Proibido ultrapassar','Proibido trânsito de pedestres'],
        answer:1
     },

    {
		// 04
        q:'A placa “PASSAGEM OBRIGATÓRIA” assinala que:',
        options:['À frente, devido a obstáculos no trecho sinalizado, a ultrapassagem é proibida','Existe um obstáculo adiante proibindo o tráfego no trecho indicado','Existe um obstáculo adiante com sentido único inverso ao indicado','Existe um obstáculo adiante no trecho sinalizado e que a passagem pela direita é obrigatória'],
        answer:3
     },

    { 
		// 05
        q:'Octogonal é a forma destinada exclusivamente á placa de:',
        options:['Parada obrigatória','Pare','Parada obrigatória a frente','Dê a preferência'],
        answer:0
     },

    {
		//06
        q:'A operação de carga e descarga é considerada:',
        options:['Parada','Imobilização de veículo','Estacionamento','Embarque e desembarque'],
        answer:2
     },

    {
		//07
        q:'Uma via pertencente a um condomínio, deve ser sinalizada pelo:',
        options:['Contran','Município','Próprio condomínio','Pelo órgão com circunscrição sobre a via'],
        answer:2
     },

    {
		//08
        q:'A suspensão do direito de dirigir ocorrerá pelo prazo de:',
        options:['Seis meses a dois anos','Seis meses a um ano','Um mês a um ano','Um mês a dois anos'],
        answer:2
     },

    {
		//09
        q:'È distância regulamentar que devemos guardar da esquina ao parar ou estacionar o veículo:',
        options:['10 metros para veículos de grande porte e 05 metros para os de pequeno porte','10 metros para qualquer tamanho de veículo','05 metros para qualquer tamanho de veículo','Qualquer distância, pois esta regulamentação é válida somente para estacionamentos'],
        answer:2
     },

    {
		//10
        q:'Os veículos recolhidos ou apreendidos a qualquer título, ficarão sob custódia do órgão apreendedor pelo prazo máximo de:',
        options:['90 dias','40 dias','15 dias','30 dias'],
        answer:3
     },

    {
		//11
        q:'Luzes de posição significa:',
        options:['Facho de luz destinado a iluminar a via até uma grande distância do veículo.','Facho de luz destinado a iluminar a via diante do veículo','Luz do veículo destinada a aumentar a iluminação da via','Luz do veículo destinada a indicar a presença e dimensões do veículo'],
        answer:3
     },

    {
		//12
        q:'Conduzir o veículo com o lacre, a inscrição do chassi, o selo, a placa ou qualquer outro elemento de identificação do veículo violado ou falsificado, acarretará como medida administrativa',
        options:['Multa agravada','Multa e apreensão do veículo','Multa, apreensão do veículo e recolhimento da habilitação','Remoção do veículo'],
        answer:3
     },

    {
		//13
        q:'Assinale a infração cuja reincidência, não acarreta a cassação da CNH:',
        options:['Entregar a direção a pessoa com validade da CNH vencida a mais de 30 dias','Dirigir sob influência de álcool, em dosagem superior ao permitido','Quando, suspenso o direito de dirigir, o infrator conduzir qualquer veículo','Utilizar-se do veículo para em via pública, demonstrar ou exibir manobra perigosa'],
        answer:2
     },

    {
		//14
        q:'Para habilitar-se na categoria “E”, o condutor além de ser maior de 21 anos, deverá estar habilitado no mínimo:',
        options:['Um ano na categoria “B”','Dois anos na categoria “C”','Dois anos na categoria “D”','Um ano na categoria “C”'],
        answer:3
     },

    {
		//15
        q:'A não obtenção da CNH ao término de um ano da PPD, obriga o candidato a:',
        options:['Renovar o exame em que tenha sido reprovado','Reiniciar todo o processo de habilitação','Renovar o exame médico','Repetir o exame prático de direção veicular'],
        answer:1
     },

    {
		//16
        q:'Para conduzir um veículo de carga devidamente licenciado para transporte de passageiros, o condutor deverá estar habilitado em qual categoria?',
        options:['“B”','“C”','“D”','“E”'],
        answer:2
     },

    {
		//17
        q:'É pessoa competente para lavrar auto de infração:',
        options:['Servidor Civil','Estatutário ou Celetista','Policial Militar','Todas as alternativas acima'],
        answer:3
     },

    {
		//18
        q:'Quantos por cento dos valores arrecadados com as multas de trânsito são destinados ao Fundo Nacional de Segurança e Educação para o Trânsito (FUNSET)?',
        options:['100%','80%','20%','05%'],
        answer:3
     },

    {
		//19
        q:'Um condutor de coletivo trafegando em uma rodovia não sinalizada a uma velocidade de 120 Km/h está sujeito a:',
        options:['Infração leve.','Infração grave e suspensão do direito de dirigir','Infração gravíssima e suspensão do direito de dirigir','Infração média'],
        answer:2
     },

    {
		//20
        q:'Qual das alternativas abaixo não corresponde a uma penalidade?',
        options:['Apreensão do veículo','Cassação da habilitação','Transbordo do excesso de carga','Freqüência obrigatória em curso de reciclagem'],
        answer:2
     },

    {
		//21
        q:'O pagamento de multas poderá ser feito:',
        options:['Ao próprio agente de trânsito no ato da autuação','Na delegacia de trânsito','Através de depósito bancário em conta corrente da autoridade de trânsito','No banco com a própria notificação da autuação'],
        answer:3
     },

    {
		//22
        q:'Em caso de veículo de carga, a multa será aplicada a quem?',
        options:['Ao condutor','Ao proprietário do veículo','Ao embarcador','Qualquer das alternativas acima'],
        answer:3
     },

    {
		//23
        q:'Qual órgão é responsável por criar as câmaras temáticas',
        options:['CETRAN','CONTRAN','DENATRAN','DETRAN'],
        answer:1
     },

    {
		//24
        q:'Qual dos documentos abaixo citados não é de porte obrigatório?',
        options:['Habilitação','Certificado de registro do veículo','Licenciamento anual do veículo','Todas as alternativas acima'],
        answer:1
     },
	 
	 {
		//25
        q:'Quando a penalidade de multa pode ser convertida em advertência por escrito?',
        options:['Quando classificada como média ou grave','Quando assim entender a autoridade de trânsito como medida educativa','Quando houver determinação do CONTRAN','Quando classificada como leve ou média, não sendo o infrator reincidente'],
        answer:3
     },
	 
	 {
		//26
        q:'Não é exigido para veículos de transporte escolares:',
        options:['Tacógrafo','Cinto de segurança para todos os ocupantes do veículo','Faixa amarela de 20 centímetros afixada nas laterais do veículo','Registro como veículo de passageiros'],
        answer:2
     },
	 
	 {
		//27
        q:'Marque a alternativa incorreta',
        options:['A licença de aprendizagem é válida por um ano','Para habilitar-se não precisa de grau de escolaridade','A idade máxima para habilitar-se é de 80 anos','A carteira de categoria “C” não exige idade mínima de 21 anos'],
        answer:2
     },
	 
	 {
		//28
        q:'Marque a alternativa correta',
        options:['O candidato menor, poderá habilitar-se desde que autorizado e emancipado pelos pais','O deficiente físico não poderá habilitar-se','Poderá habilitar-se condutor estrangeiro com visto de permanência no Brasil','O candidato poderá habilitar-se em qualquer lugar do Brasil, pois a habilitação é nacional'],
        answer:2
     },
	 
	 {
		//29
        q:'Assinale a alternativa verdadeira',
        options:['Para conduzir veículos com carga perigosa o condutor deverá ser habilitado no mínimo nas categorias “C,D ou E”','Quem é habilitado para conduzir um caminhão pode dirigir veículos de escolares','Ao renovar a habilitação é necessário repetir o exame de legislação','O processo de habilitação consiste em três etapas a saber: Psicotécnico, legislação e direção'],
        answer:3
     },
	 
	 {
		//30
        q:'É considerado ponto cego do veículo:',
        options:['Direção desregulada','Vidros sujos','Coluna','Retrovisores mal regulados'],
        answer:2
     },

//Array de Objetos CIRCULAÇÃO E CONDUTA


    {
		//01
        q:'Nas rodovias, é dever de todo o condutor de veiculo:',
        options:['Dar passagem pela esquerda, ou pela direita quando solicitado','Transitar com o veiculo sempre na faixa à direita','Quando necessitar fazer uma conversão à esquerda, usar o acostamento aguardando a oportunidade segura para cruzar a pista','Acionar a luz de emergência (pisca - alerta) quando desejar fazer conversão à esquerda'],
        answer:2
    },

    {
		//02
        q:'Nas rodovias providas de acostamento, sempre que o condutor tiver a intenção de retornar ou virar à esquerda ele deverá aguardar:',
        options:['A esquerda da pista','A direita da pista','No acostamento, à direita','No centro da pista, sobre a faixa divisória dos fluxos'],
        answer:2
    },
	
	{
		//03
        q:'Quando inexistir uma faixa especial, um veiculo em movimento devera ocupar?',
        options:['Faixa mais a esquerda da pista de rolamento','Faixa central da pista de rolamento','Qualquer faixa, desde que facilite o trânsito','A faixa mais a direita da pista de rolamento'],
        answer:3
    },
	
	{
		//04
        q:'Dirigindo um veiculo, ao se aproximar de um cruzamento com sinal luminoso, você observa que a luz amarela está acesa. Neste caso, você deve:',
        options:['Aumentar a velocidade do veiculo e passar','Diminuir a velocidade e parar o veiculo','Diminuir a velocidade do veiculo e passar','Frear bruscamente'],
        answer:1
    },
	
	{
		//05
        q:'O pedestre em preferência no trânsito:',
        options:['Em qualquer situação','Somente quando a luz vermelha do semáforo para os veículos, estiver acesa','Somente quando for idoso','Somente quando está na faixa de segurança'],
        answer:0
    },
	
	{
		//06
        q:'Quando, por motivo de força maior, um veiculo estiver impedido de ser removido da pista de rolamento ou tenha que permanecer no acostamento, obrigatoriamente o condutor terá que:',
        options:['Ficar junto ao veiculo','Colocar sinalização, na forma estabelecida pelo CONTRAN, prevenindo os demais condutores','Pedir ajuda aos demais condutores','Colocar-se de modo a ser visto para socorro'],
        answer:1
    },
	
	{
		//07
        q:'Os veículos destinados a socorro de incêndio, as ambulâncias e os de policia:',
        options:['Gozam de livre trânsito e estacionamento em qualquer situação porque atendem emergências.','Tem prioridade no trânsito, devendo obedecer às regras de circulação e a Legislação de Trânsito como qualquer outro tipo de veiculo','Só tem prioridade e trânsito livre quando estiverem protegidos por batedores e identificados por dispositivos','Tem prioridade, gozam de livre circulação, estacionamento e parada quando identificados por Dispositivos de alarme sonoro e luz vermelha intermitente, quando em serviço de urgência'],
        answer:3
    },
	
	{
		//08
        q:'Segundo o Código de Trânsito Brasileiro, nas vias urbanas classificam-se em:',
        options:['De trânsito rápido, preferencial, secundaria e de trânsito lento','Preferencial, plana, trânsito lento e secundário','De trânsito rápido, arterial, coletora e local','Nenhuma das alternativas acima'],
        answer:2
    },
	
	{
		//09
        q:'O condutor poderá ultrapassar outro veiculo pela direita quando?',
        options:['Quando a via for de mão única comportando várias faixas de trânsito no mesmo sentido','Sempre que for necessário','Sempre que o veiculo da frente indicar a intenção de convergir a esquerda','Nunca, pois é extremamente proibida a ultrapassagem pela esquerda'],
        answer:2
    },
	
	{
		//10
        q:'O condutor deve sinalizar e deslocar-se com antecedência para a faixa mais a direita da sua mão de direção para:',
        options:['Entrar para a direita','Ultrapassar outro veiculo em movimento','Entrar para esquerda','Mudar de faixa de trânsito'],
        answer:0
    },
	
	{
		//11
        q:'É dever de todo condutor de veiculo:',
        options:['Usar buzina para chamar alguém','Ultrapassar outro veiculo somente pela direita','Fazer uso da luz baixa dos faróis no período noturno nas vias com iluminação publica','Dar passagem, pela direita, quando solicitado'],
        answer:2
    },
	
	{
		//12
        q:'É proibido a todo condutor de veiculo:',
        options:['Dar passagem, pela esquerda, quando solicitado','Parar ante de entrar em via preferencial','Parar para dar passagem a veiculo precedido de batedores','Dirigir sem estar devidamente habilitado ou autorizado na forma da lei'],
        answer:3
    },
	
	{
		//13
        q:'É dever de todo condutor de veiculo:',
        options:['Obedecer somente a sinalização de placas e o sinal luminoso','Circular pela Faixa da direita, admitindo-se exceções devidamente sinalizadas','Ultrapassar outro veiculo em movimento, pela direita','Dar passagem, pela direita, quando solicitar a visão dos outros veículos'],
        answer:1
    },
	
	{
		//14
        q:'À noite, estando um condutor em uma via urbana com iluminação publica, deve:',
        options:['Usar farol alto desde o pôr-do-sol ate amanhecer','Manter as luzes do veiculo apagadas para facilitar a visão dos outros condutores','Manter acesas as luzes dos faroletes para facilitar avisão dos outros veículos','Usar farol baixo desde o pôr-do-sol até o amanhecer'],
        answer:3
    },
	
	{
		//15
        q:'Ultrapassagem de outro veículo em movimento deverá ser feita:',
        options:['Pela esquerda, retornando a sua faixa de trânsito de origem o mais rápido possível, fazendo os sinais convencionais e com segurança','Pela direita, retornando a sua mão de direção o mais rápido possível e com segurança','Pela direita quando o veiculo a frente estiver com baixa velocidade','Pela esquerda para automóveis e pela direita para os caminhões e ônibus'],
        answer:0
    },
	
	{
		//16
        q:'Certificar-se de que a contramão dispõe de espaço e visibilidade suficiente, alem de observar sinalização lhe permite realizar a manobra, deve ser comportamento do condutor para:',
        options:['Ultrapassar outro veiculo','Entrar a esquerda em outra via','Entrar a direita em outra via','Estacionar veiculo'],
        answer:0
    },
	
	{
		//17
        q:'Dar passagem, pela esquerda, quando solicitado',
        options:['É uma opção do condutor','É dever de todo condutor de veiculo automotor','Só deve ser permitido quando se trata de motocicletas','É apenas uma questão de educação de condutor'],
        answer:1
    },
	
	{
		//18
        q:'O condutor para virar à esquerda em interseção de vias de sentido duplo de trânsito, no perímetro urbano, deve:',
        options:['Aproximar-se o máximo da margem da direita da via','Aproximar-se o máximo da margem esquerda da via','Apenas reduzir a velocidade e entrar rapidamente','Aproximar-se o máximo possível da linha divisória da pista'],
        answer:3
    },
	
	{
		//19
        q:'A faixa destinada para fazer ultrapassagem e circular em maior velocidade é:',
        options:['Da direita','Da esquerda','Do centro','A sinalização com linhas amarelas'],
        answer:1
    },
	
	{
		//20
        q:'Assinale a alternativa correta:',
        options:['Todo veiculo poderá retornar em qualquer local, nas vias urbanas, desde que facilite o trânsito para os outros veículos','A circulação pelos acostamentos das rodovias é permitida em situações de congestionamentos','Todo condutor deve dar preferência aos pedestres apenas quando estes se encontram sobre a faixa de segurança','É dever do condutor, parar o seu veiculo antes de transpor linha férrea ou entrar em via com preferência de passagem'],
        answer:3
    },
	
	{
		//21
        q:'É dever de todo condutor de veiculo:',
        options:['Fazer o sinal regulamentar de braços apenas quando for entrar a direita ou a esquerda','Quando se tratar de transporte coletivo, parar o veiculo para atender ao sinal do passageiro em qualquer local','Ultrapassar outro veiculo em movimento pela direita quando a esquerda estiver interrompida','Acionar dispositivo luminoso indicador de direção (luz de seta) ou sinalizar por gestos convencionais antes de mudar de direção'],
        answer:3
    },
	
	{
		//22
        q:'. Ao se aproximar de um cruzamento, uma forma segura de agir é: ',
        options:['Manter a mesma velocidade','Aumentar a velocidade','1Reduzir a velocidade','Parar o veiculo'],
        answer:2
    },
	
	{
		//23
        q:'Para ultrapassar outro veiculo em movimento e, unicamente, pelo espaço necessário para fim, o condutor de veículos poderá transitar:',
        options:['Pela contramão de direção, respeitada a sinalização','Em macha ré','Com uma velocidade superior a permitida para via','Pelo acostamento, nas estradas'],
        answer:0
    },
	
	{
		//24
        q:'Um veiculo em movimento leve ocupar a faixa mais a direita da pista de rolamento quando:',
        options:['A via for de mão dupla de trânsito','Inexistir faixa especial a ele destinada','For entrar para a esquerda','A via for sinalizada impedindo a circulação pelas faixas mais a esquerda'],
        answer:1
    },
	
	{
		//25
        q:'Quando, dirigindo um veiculo numa via de mão única com retorno ou estrada a esquerda, o condutor que estiver a frente indicar, por sinal, que vai entrar para esse lado, você poderá:',
        options:['Ultrapassar pela direita','Ultrapassar pela esquerda','Fazer um retorno','Acelerar o veiculo'],
        answer:0
    },
	
	{
		//26
        q:'A velocidade mínima permitida em uma via arterial sem sinalização é de:',
        options:['20 km/h','30 km/h','40 km/h','60 km/h'],
        answer:1
    },
	
	{
		//27
        q:'O condutor para fazer a ultrapassagem de outro veiculo em movimento, deverá:',
        options:['Acender os faróis altos do seu veiculo para chamar a atenção de seus condutores','Certificar-se de que dispõe de espaço suficiente e que a visibilidade lhe permite fazê-lo com segurança','Ligar a luz de emergência e fazer a ultrapassagem rapidamente','Buzinar e forçar a saída do veiculo que estiver a sua frente para um dos lados da via'],
        answer:1
    },
	
	{
		//28
        q:'A velocidade mínima permitida em uma via de trânsito rápido sem sinalização é de:',
        options:['30 km/h','40 km/h','50 km/h','80 km/h'],
        answer:1
    },
	
	{
		//29
        q:'Numa via sinalizada, estando proibido o estacionamento, o tempo de parada deve ser:',
        options:['O necessário para atender a uma necessidade urgente do condutor','O necessário para o embarque /desembargue de passageiros desde que não prejudique os fluxos de veículos e pedestres','Apenas o necessário para fazer uma pequena manobra','Relativo ao numero de veículos que estiverem circulando na via'],
        answer:1
    },
	
	{
		//30
        q:'De acordo com as regras gerais de circulação, todo veiculo em movimento deve ocupar a faixa mais a direita da pista de rolamento (na inexistência de faixa a ele destinada). Esta afirmativa é:',
        options:['Falsa','Verdadeira, somente, para veículos de passeio','Verdadeira','Verdadeira, somente, para veículos de carga'],
        answer:2
    },

//Array de Objetos MECÂNICA

   {
		//01
        q:'Para melhor entendimento, a mecânica de um veiculo é dividida em sete partes, quais são?',
        options:['Motor sistema elétrico, transmissão, suspensão, direção, freios e descargas','Motor, sistema elétrico, transmissão, suspensão, direção, freios e rodagem','Motor, sistema elétrico, transmissão, suspensão, direção, rodagem e carroçaria','Motor, sistema elétrico, transmissão, suspensão, direção, chassi e monobloco'],
        answer:2
    },

    {
		//02
        q:'Marque qual das alternativas abaixo, não corresponde a uma peça móvel do motor:',
        options:['Biela','Pistão','Eixo virabrequim','Cárter'],
        answer:3
    },
	
	{
		//03
        q:'Marque, qual das alternativas abaixo corresponde às principais peças fixas de um motor:',
        options:['Volante do motor, cárter e bloco de cilindros','Bloco de cilindros, biela e cárter','Bloco de cilindros, cárter e cabeçote','Biela, pistão e eixo virabrequim'],
        answer:2
    },
	
	{
		//04
        q:'Qual a parte mais pesada de um motor?',
        options:['Tampão','àrvore de manivela','Bloco de cilindros','Cárter'],
        answer:2
    },
	
	{
		//05
        q:'Marque qual das alternativas abaixo, não corresponde a um sistema anexo ao motor:',
        options:['Sistema de lubrificação','Sistema de arrefecimento','Sistema de freios','Sistema de alimentação'],
        answer:2
    },
	
	{
		//06
        q:'Marque qual peça não faz parte do sistema de alimentação:',
        options:['Filtro de combustível','Carburador','Radiador','Coletor de admissão'],
        answer:2
    },
	
	{
		//07
        q:'Qual a principal peça do sistema de arrefecimento?',
        options:['Injeção eletrônica','Válvula termostática','Radiador','Bomba d´água'],
        answer:2
    },
	
	{
		//08
        q:'Qual das alternativas, não corresponde a uma peça do sistema de lubrificação?',
        options:['Cárter','Bomba de óleo','Válvula reguladora','Carburador'],
        answer:3
    },
	
	{
		//09
        q:'Os lubrificantes podem ser:',
        options:['Líquidos','Sólidos','Pastosos','Todas as alternativas estão corretas.'],
        answer:3
    },
	
	{
		//10
        q:'Na lubrificação interna de um motor, deve ser usado lubrificante tipo:',
        options:['Sólido','Pastoso','´líquido','Nenhuma das alternativas'],
        answer:2
    },
	
	{
		//11
        q:'O que significa ciclo de OTTO?',
        options:['Motor de dois tempos','Motor de quatro tempos','Motor de seis tempos','Nenhuma das alternativas'],
        answer:1
    },
	
	{
		//12
        q:'Qual a função da vela de ignição?',
        options:['Receber a energia elétrica e proporcionar uma forte faísca dentro da câmara de combustão','Realizar a mistura explosiva vinda do coletor de admissão','Realizar a mistura do ar com o combustíve','Todas as alternativas estão corretas'],
        answer:0
    },
	
	{
		//13
        q:'Marque a alternativa falsa:',
        options:['A bobina tem a função de transformar baixa tensão em alta tensão','A bateria é um gerador de energia elétrica','A energia mecânica necessária para movimentar o veiculo é gerada pelo motor','Condensador é uma peça do sistema elétrico do veiculo'],
        answer:1
    },
	
	{
		//14
        q:'A temperatura normal de funcionamento de um motor é de:',
        options:['10° C','50° C','90° C','120° C'],
        answer:2
    },
	
	{
		//15
        q:'Quais os cuidados necessários para evitar um superaquecimento no motor do veiculo.',
        options:['Verificar sempre o marcador de temperatura no painel de instrumentos','Conferir diariamente o nível de água no sistema de arrefecimento','Fazer limpezas periódicas no radiador','Todas as alternativas estão corretas'],
        answer:2
    },
	
	{
		//16
        q:'Os sistemas de arrefecimento podem ser:',
        options:['Água e óleo','Somente água','Água e ar','Somente ar'],
        answer:2
    },
	
	{
		//17
        q:'Onde fica localizado o comando do afogador de um automóvel?',
        options:['Sobre o painel','Dentro do painel de instrumentos','No painel de instrumentos','Embaixo do painel de instrumentos'],
        answer:2
    },
	
	{
		//18
        q:'Quais as conseqüências de conduzir um veiculo com os pneus descalibrados?',
        options:['Consumo excessivo de combustíve','Desgaste anormal dos pneus e direção pesada','Diminuição da capacidade de aderência','Todas as alternativas'],
        answer:3
    },
	
	{
		//19
        q:'Qual o sistema que tem por finalidade absorver os impactos provocados por irregularidades na pista?',
        options:['Sistema elétrico ','O chassi','Sistema de transmissão','Sistema de suspensão'],
        answer:3
    },
	
	{
		//20
        q:'No motor a gasolina a combustão é provocada:',
        options:['Pelo ar comprimido nos cilindros','Pela combustão espontânea','Por uma faísca elétrica','Pela mistura ótima'],
        answer:2
    },
	
	{
		//21
        q:'É o suporte de todas as peças do veiculo:',
        options:['O chassi','A carroçaria','O bloco do motor','A suspensão '],
        answer:0
    },
	
	{
		//22
        q:'A energia mecânica que impulsiona o veiculo é produzida pelo:',
        options:['Alternador','Bateria','Motor','Velas de ignição'],
        answer:2
    },
	
	{
		//23
        q:'Qual o componente do veiculo responsável por realizar a mistura ar + combustível?',
        options:['Velas','Bomba de gasolina','Carburador ou injeção eletrônica','Filtro de ar'],
        answer:2
    },
	
	{
		//24
        q:'Qual peça serve como reservatório de óleo lubrificante?',
        options:['Piston','Bloco de cilindros','Cárter','Caixa de marchas'],
        answer:2
    },
	
	{
		//25
        q:'Onde é admitida e queimada a mistura ar + combustível?',
        options:['No cárter','No cabeçote ','Na tampa da válvula','Nos cilindros'],
        answer:3
    },
	
	{
		//26
        q:'Qual equipamento absorve os vapores de combustível do tanque?',
        options:['Injeção eletrônica','Cânister','Catalisador','Todas as Alternativas'],
        answer:1
    },
	
	{
		//27
        q:'“Arfagem” é um defeito comum no sistema:',
        options:['Suspensão','Transmissão','Elétrico','Direção'],
        answer:0
    },
	
	{
		//28
        q:'Qual tipo de sistema de freio proporciona maior poder de frenagem e evita o travamento das rodas?',
        options:['A Tambor','Com lonas','A disco','ABS'],
        answer:3
    },
	
	{
		//29
        q:'Desgaste anormal dos pneus pode indicar:',
        options:['Desalinhamento das rodas','Folga nos rolamentos','Falta de balanceamento das rodas','Todas as alternativas'],
        answer:3
    },
	
	{
		//30
        q:'Os motores a diesel dispensam:',
        options:['As velas de ignição ','O platinado','O distribuidor','Todas as alternativas'],
        answer:3
    },


//Array de Objetos MEIO AMBIENTE E CIDADANIA

    {
		//01
        q:'Como são chamados os elementos causadores da poluição?',
        options:['Fuligem','Poluentes','Fumaça','Vapor de água'],
        answer:1
    },

    {
		//02
        q:'Marque qual das alternativas, corresponde ao maior agente poluidor da atmosfera.',
        options:['Industrias','Restaurantes','Usinas','Veículos automotores'],
        answer:3
    },
	
	{
		//03
        q:'Os veículos podem poluir de quantas maneiras?',
        options:['5 Maneiras','6 Maneiras','7 Maneiras','9 Maneiras'],
        answer:1
    },
	
	{
		//04
        q:'Qual das alternativas corresponde a uma forma de poluição provocada por veículos automotores?',
        options:['Poluição do ar','Poluição da água','Poluição sonora','Todas as alternativas acima'],
        answer:3
    },
	
	{
		//05
        q:'Marque qual alternativa não corresponde a um tipo de poluição do solo.',
        options:['Objetos atirados para fora do veículo','Borracha dos pneus na pista','Excesso de ruído, vindo do motor','Objetos abandonados na via pública'],
        answer:2
    },
	
	{
		//06
        q:'Marque qual das alternativas não corresponde a um órgão ambiental',
        options:['FEAM','CONAMA','IBAMA','CIRETRAN'],
        answer:3
    },
	
	{
		//07
        q:'Qual deve ser a conduta do cidadão no trânsito?',
        options:['Fazer valer o seu direito','Dirigir sem se importar com os outros','Ser cortês e educado respeitando o direito dos outros','Falar o que quiser, com quem quiser'],
        answer:2
    },
	
	{
		//08
        q:'O que é cidadania?',
        options:['É o direito a proteção','Ser tratado com dignidade','Ser tratado com respeito','Todas as alternativas acima'],
        answer:3
    },
	
	{
		//09
        q:'Assinale a alternativa correta:',
        options:['A evaporação do combustível ocorre mesmo com o veículo parado','O atrito dos pneus com o solo é um tipo de poluição.','As montadoras vêm equipando os veículos com controle de emissão de poluentes.','Todas as alternativas acima'],
        answer:3
    },
	
	{
		//10
        q:'São substâncias que podem espalhar fragmentos num raio de até 600 metros:',
        options:['Radioativas','Gases comprimidos','Explosivos','Tóxicos'],
        answer:2
    },
	
	{
		//11
        q:'Indica que o veículo está produzindo níveis de poluição acima do normal:',
        options:['Escapamento com fuligem','Cheiro de combustível no motor','Consumo excessivo de combustível','Todas as alternativas acima'],
        answer:3
    },
	
	{
		//12
        q:'Os veículos movidos a álcool expelem:',
        options:['A mesma quantidade de monóxido de carbono que veículos a gasolina','1/3 da quantidade de monóxido','A metade de monóxido dos carros a gasolina','O dobro da quantidade dos carros a gasolina'],
        answer:2
    },
	
	{
		//13
        q:'Qual o equipamento obrigatório nos veículos, que tem a finalidade de reduzir a emissão de monóxido?',
        options:['Velocímetro','Motor','Extintor de incêndio','Catalizador'],
        answer:3
    },
	
	{
		//14
        q:'Indica problemas na queima de combustível',
        options:['Queima incompleta do óleo do motor','Emissão de fumaça pelo escapamento','Gases e partículas na atmosfera','Regulagem eletrônica do veículo'],
        answer:1
    },
	
	{
		//15
        q:'O que é fogo?',
        options:['É a união dos elementos (calor, oxigênio, material combustível).','É a união dos elementos (nitrogênio, oxigênio, água).','União dos elementos (Nitrogênio e oxigênio)','Nenhuma das alternativas acima'],
        answer:0
    },
	
	{
		//16
        q:'Para evitar a poluição sonora devemos evitar:',
        options:['Cantar durante o seu deslocamento pelas vias','Escapamento aberto, buzinas estridentes e aparelho de som muito alto','Ligar o rádio do carro enquanto dirige','Falar em voz alta com os ocupantes do veículo'],
        answer:1
    },
	
	{
		//17
        q:'Os produtos perigosos serão identificados pelos:',
        options:['Adesivo com logomarca da empresa','Pelo rótulo de risco e painel de segurança','Número de risco e logomarca da empresa','Todas as alternativas acima estão erradas'],
        answer:1
    },
	
	{
		//18
        q:'É colocado junto ao tanque, e absorve os vapores de combustível.',
        options:['Injeção eletrônica','Cânister','Catalizador','Todas as alternativas acima'],
        answer:1
    },
	
	{
		//19
        q:'Para promover a integração social no trânsito, é necessário:',
        options:['Ajuda mútua, afim de evitar e/ou solucionar problemas no trânsito','Não abrir mão quando necessário dos seus direitos para respeitar o direito alheio','Acelerar o veículo nos cruzamentos','Deixar de dar passagem aos veículos de urgência'],
        answer:0
    },
	
	{
		//20
        q:'A queima incompleta de fuligem:',
        options:['Deposita-se nas vias respiratórias','Deposita-se nos pulmões','Irrita as mucosas','Todas as alternativas acima'],
        answer:3
    },
	
	{
		//21
        q:'Sons, ruídos e vibrações, são considerados como poluição:',
        options:['Sonora','Do ar','Da água','Nenhuma das alternativas acima'],
        answer:0
    },
	
	{
		//22
        q:'São sujeitos a combustão espontânea:',
        options:['Sólidos inflamáveis','Gases comprimidos','Substâncias orgânicas','Substâncias tóxicas'],
        answer:0
    },
	
	{
		//23
        q:'A poluição do ar pelos veículos não é causada:',
        options:['Pela presença do cânister','Pelo constante atrito dos pneus com o solo','Pela evaporação do combustível no tanque','Por escapamentos com catalizador defeituoso'],
        answer:0
    },
	
	{
		//24
        q:'Nas grandes cidades as principais fontes de poluição do ar são:',
        options:['As queimadas','A queima do carvão','Os automóveis','Os fogões a gás'],
        answer:2
    },
	
	{
		//25
        q:'A má conservação e a regulagem inadequada dos veículos...',
        options:['Contribuem para a poluição da água, apenas','Contribuem para a poluição do solo, apenas','Acarretam, única e exclusivamente, o desgaste do veículo','Contribuem, principalmente, para a poluição do ar e a poluição sonora'],
        answer:3
    },
	
	{
		//26
        q:'Agir com cortesia e urbanidade no trânsito, significa:',
        options:['Fazer novos amigos','Respeitar o direito dos outros','Dar passagem aos outros condutores, mesmo que o sinal esteja aberto para você','Sair do veículo e ajudar os pedestres atravessar a rua'],
        answer:1
    },
	
	{
		//27
        q:'Os veículos que apresentam maior potencial de poluição do ar são aqueles:',
        options:['Que utilizam como combustível a gasolina e o diesel','Que utilizam o sistema elétrico','Movidos a tração animal','Que utilizam gás natural'],
        answer:0
    },
	
	{
		//28
        q:'O motorista que não obedece a sinalização e só pensa em seu benefício é:',
        options:['Um motorista correto','Um motorista imprudente e egoísta','Um motorista defensivo','Um motorista educado'],
        answer:1
    },
	
	{
		//29
        q:'A poluição do ar causa problemas de saúde que resultam, principalmente, em:',
        options:['Doenças do aparelho digestivo','Doenças respiratórias','Alterações visuais','Dores de cabeça'],
        answer:1
    },
	
	{
		//30
        q:'A segurança no trânsito é um direito apenas:',
        options:['Dos ciclistas','Dos motoristas de ônibus','Dos motociclistas','De todos os cidadãos'],
        answer:3
    },


//Array de Objetos PENALIDADES

    {
		//01
        q:'Marque a alternativa verdadeira:',
        options:['Não será aplicada punição ao condutor infrator','Somente o policial militar tem competência para lavrar um auto de infração','As punições são divididas em Penalidades e Medidas Administrativas','Um auto de infração nunca pode ser arquivado, sendo obrigatória a aplicação da Multa'],
        answer:2
    },

    {
		//02
        q:'Marque qual das alternativas abaixo corresponde a uma Medida Administrativa:',
        options:['Retenção do veículo','Multa','Freqüência obrigatória em curso de reciclagem','Advertência por escrito'],
        answer:0
    },
	
	{
		//03
        q:'Qual penalidade será aplicada ao condutor que estacionar em local proibido?',
        options:['Multa.','Remoção do veículo','Retenção do veículo','Recolhimento da CNH'],
        answer:0
    },
	
	{
		//04
        q:'Dirigir sem estar devidamente habilitado, acarreta como Medida Administrativa:',
        options:['Apreensão do veículo','Remoção do veículo','Recolhimento da documentação do veículo','Multa'],
        answer:2
    },
	
	{
		//05
        q:'Marque qual das alternativas abaixo não corresponde a uma penalidade:',
        options:['Advertência por escrito','Apreensão do veículo','Transbordo do excesso de carga','Cassação da CNH'],
        answer:2
    },
	
	{
		//06
        q:'Quando que uma penalidade de multa poderá ser convertida em Advertência por escrito?',
        options:['Quando a infração cometida for de natureza leve, média ou grave','Quando o infrator for primário em infrações leve, médias ou graves','A qualquer tempo a autoridade de trânsito entender que assim se faz necessário','Quando a infração for leve ou média, não sendo o infrator reincidente nos últimos 12 meses'],
        answer:3
    },
	
	{
		//07
        q:'O infrator que for encontrado dirigindo embriagado não sofrerá que tipo de punição?',
        options:['Infração gravíssima, multiplicada por 10 vezes','Retenção do veículo','Recolhimento do documento de habilitação','Suspensão do direito de dirigir'],
        answer:0
    },
	
	{
		//08
        q:'Em que caso a CNH poderá ser cassada?',
        options:['Dirigindo embriagado','Dirigir veículo para o qual não está habilitado','Entregar a direção a pessoa não habilitada','Dirigir estando com o direito de dirigir suspenso'],
        answer:3
    },
	
	{
		//09
        q:'Em caso de cassação da CNH, qual o prazo e quais exames deverá se submeter o condutor para a reabilitação?',
        options:['Poderá dar reinicio a nova habilitação imediatamente, submetendo-se a todos os exames','Poderá dar reinicio após dois anos, submetendo-se apenas ao exame de direção','Poderá dar reinicio após dois anos, submetendo-se a todos os exames','Poderá dar reinicio imediatamente, submetendo-se apenas ao exame de direção'],
        answer:2
    },
	
	{
		//10
        q:'O portador de uma PPD que atingir 20 pontos cometendo infrações no período de um ano, estará sujeito a:',
        options:['A cassação da habilitação','A suspensão por prazo mínimo de um mês e Máximo de um ano','Ao recolhimento da habilitação, sendo a mesma devolvida após pagamento das multas','Terá que freqüentar Curso de Reciclagem para sua reeducação'],
        answer:0
    },
	
	{
		//11
        q:'Quando que um auto de infração poderá ser arquivado e seu registro julgado insubsistente?',
        options:['Quando a autoridade de trânsito receber a multa no ato da notificação','Quando for considerado do inconsistente ou irregular','Quando no prazo de trinta dias não for expedida a notificação','As alternativas “B e C” estão corretas'],
        answer:3
    },
	
	{
		//12
        q:'O que não é obrigatório constar no Auto de Infração?',
        options:['Local, data e hora do cometimento da infração','Tipificação da infração cometida','Prontuário e assinatura do condutor ou proprietário','Características de identificação do veículo, sua marca e espécie'],
        answer:2
    },
	
	{
		//13
        q:'Deixar de usar o cinto de segurança ao conduzir veículos em via pública acarreta como punição:',
        options:['Infração gravíssima com fator multiplicador','Infração gravíssima','Infração grave','Infração média'],
        answer:2
    },
	
	{
		//14
        q:'Falar ao celular enquanto dirige é infração de natureza:',
        options:['Leve','Média','Grave','Gravíssima'],
        answer:1
    },
	
	{
		//15
        q:'Avançar o sinal vermelho do semáforo ou placa de parada obrigatória é infração:',
        options:['Grave','Gravíssima','Gravíssima com fator multiplicador','Nemuma das alternativas'],
        answer:1
    },
	
	{
		//16
        q:'Dirigir veículo de categoria diferente da sua Habilitação acarreta como punição:',
        options:['Infração gravíssima com fator multiplicador (três), apreensão do veículo e recolhimento da habilitação','Infração gravíssima com fator multiplicador (três), retenção do veículo e recolhimento da habilitação','Infração gravíssima, retenção do veículo e recolhimento da habilitação','Infração gravíssima com fator multiplicador (cinco), apreensão do veículo e cassação da CNH'],
        answer:0
    },
	
	{
		//17
        q:'Quantos por cento dos valores arrecadados com as multas de trânsito são repassados para o FUNSET?',
        options:['90%','50%','30%','5%'],
        answer:3
    },
	
	{
		//18
        q:'As multas pagas até a data do vencimento terão um desconto de quantos por cento?',
        options:['20%','80%','50%','5%'],
        answer:0
    },
	
	{
		//19
        q:'Uma multa paga após a data do vencimento sofrerá um acréscimo de quanto?',
        options:['10% ao mês','20% ao mês','30% ao mês','Os valores poderão ser corrigidos anualmente conforme o IPCA do ano anterior'],
        answer:3
    },
	
	{
		//20
        q:'Qual punição será aplicada ao condutor que for encontrado dirigindo com o direito de dirigir suspenso?',
        options:['Terá a CNH suspensa por prazo indeterminado de seis meses a dois anos','Terá a CNH apreendida por prazo indeterminado','Terá CNH retida até que se conclua o curso de reciclagem','Terá a CNH definitivamente cassada'],
        answer:3
    },
	
	{
		//21
        q:'Um veículo, quando removido, ficará sob custodia da autoridade que apreendeu por quantos dias?',
        options:['Cindo dias','Dez dias','Trinta dias','Noventa dias'],
        answer:2
    },
	
	{
		//22
        q:'Qual o prazo máximo para que um veículo seja procurado pelo seu proprietário, a fim de que não seja leiloado?',
        options:['60 dias','120 dias','150 dias','365 dias'],
        answer:0
    },
	
	{
		//23
        q:'Marque qual das alternativas abaixo, não obriga o condutor a freqüentar curso de reciclagem.',
        options:['Considerado infrator contumaz','Envolver-se em acidente grave','Dirigir sem habilitação','Disputar corrida por espírito de emulação'],
        answer:2
    },
	
	{
		//24
        q:'Marque qual das alternativas abaixo, não leva a remoção do veículo:',
        options:['Documentação atrasada','Falsificar ou adulterar documento de habilitação e de identificação do veículo','Dirigir alcoolizado','Entregar a direção a um inabilitado'],
        answer:2
    },
	
	{
		//25
        q:'Qual o índice Máximo tolerável de álcool no sangue?',
        options:['6,0 decigramas por litro de sangue','0,2 decigramas por litro de sangue','6,1 decigramas por litro de sangue','Não existe dosagem permitida'],
        answer:3
    },
	
	{
		//26
        q:'Marque qual das alternativas abaixo corresponde a infração mais grave:',
        options:['Avançar o sinal vermelho do semáforo','Dirigir sem habilitação','Entregar a direção a um inabilitado','Dirigir embriagado em níveis superiores ao permitido pelo código de trânsito brasileiro'],
        answer:3
    },
	
	{
		//27
        q:'Marque qual das alternativas abaixo corresponde a uma infração de natureza leve:',
        options:['Falar ao celular enquanto dirige','Deixar o veículo acabar o combustível em via publica','Estacionar sobre a faixa de pedestres','Dirigir sem a atenção e os cuidados indispensáveis a segurança'],
        answer:3
    },
	
	{
		//28
        q:'Qual a soma das quatro naturezas de infrações existentes?',
        options:['20 pontos','19 pontos','17 pontos','15 pontos'],
        answer:1
    },
	
	{
		//29
        q:'Para que uma CNH possa ser recolhida e o direito de dirigir suspenso, é necessário que o infrator atinja quantos pontos no período de um ano?',
        options:['19 pontos','20 pontos','30 pontos','7 pontos'],
        answer:1
    },
	
	{
		//30
        q:'Quando suspenso do direito de dirigir, o condutor terá que:',
        options:['Tirar outra habilitação','Repetir o exame psicotécnico','Freqüentar curso de reciclagem','Nenhuma das alternativas'],
        answer:2
    },

    //PROVA Nº 01 - SNT E PROCESSO DE HABILITAÇÃO

    {
		//01
        q:'O Sistema Nacional de Trânsito é composto de órgãos:',
        options:['Normativos','Executivos','Fiscalizadores','Todas as alternativas acima'],
        answer:3
    },

    {
		//02
        q:'Assinale qual dos órgãos abaixo relacionados é um órgão recursal',
        options:['CIRETRAN','DENATRAN','CONTRAN','Nenhuma das alternativas acima'],
        answer:2
    },
    {
		//03
        q:'A qual órgão compete registrar as carteiras de habilitação e veículos automotores?',
        options:['Prefeitura','DETRAN','CONTRAN','DENATRAN'],
        answer:2
    },
    {
		//04
        q:'A qual órgão compete expedir e cassar a sua habilitação?',
        options:['CONAMA','IBAMA','DENATRAN','DETRAN'],
        answer:3
    },
    {
		//05
        q:'É competência de qual órgão criar as Câmaras Temáticas?',
        options:['JARI','CETRAN','CONTRAN','CONTRANDIFE'],
        answer:2
    },
    {
		//06
        q:'Para onde devemos remeter os recursos de multas de trânsito?',
        options:['Delegacia regional de Trânsito','Polícia Rodoviária Federal','DNIT','JARI'],
        answer:1
    },
    {
		//07
        q:'Qual das alternativas abaixo refere-se a pessoa incapacitada de habilitar-se?',
        options:['Fumante','Deficiente físico','Doente cardíaco','Todas as alternativas acima'],
        answer:2
    },
    {
		//08
        q:'O que não é requisito para habilitar-se?',
        options:['Ser alfabetizado','Responda pelos seus atos','Possuir ensino fundamental','Possuir documento de identidade e CPF'],
        answer:2
    },
    {
		//09
        q:'Marque a alternativa falsa:',
        options:['Pessoas daltônicas não podem habilitar-se','Pessoa com deficiência auditiva, não pode habilitar-se','Silvícolas, não podem habilitar-se','Alcoólatras inveterados, não podem habilitar-se'],
        answer:1
    },
    {
		//10
        q:'Assinale a alternativa verdadeira:',
        options:['Não será exigido curso prático de direção (15 aulas), ao candidato que já saiba dirigir','Estrangeiros não podem habilita-se no Brasil','Com uma carteira de categoria “E”, não se pode dirigir uma moto','7Renova-se a CNH de 5 em 5 anos, condutores de até 75 anos de idade'],
        answer:2
    },
    {
		//11
        q:'Marque a alternativa falsa:',
        options:['Documento de habilitação só será aceito quando apresentado em original','O licenciamento anual do veículo poderá ser apresentado cópia autenticada pela autoridade','Ao transferir a propriedade de um veículo, o comprador tem um prazo de um mês','Será necessário pagar o “Seguro DPVAT”, veículos importados'],
        answer:1
    },
    {
		//12
        q:'Qual documento não será exigido pelo agente de trânsito na abordagem para fiscalização?',
        options:['Documento de habilitação','Certificado de licenciamento anual do veículo','Certificado de Registro do veículo','As alternativas A e B estão corretas'],
        answer:2
    },
    {
		//13
        q:'A LADV (licença de aprendizagem) será válida:',
        options:['Em todo o território nacional','Em todo o estado da federação onde foi expedida','Na área de circunscrição do órgão que expediu','Apenas no município de domicílio do candidato'],
        answer:2
    },
    {
		//14
        q:'Qual punição será aplicada ao condutor que for encontrado dirigindo sem a companhia do instrutor?',
        options:['A licença (LADV) será recolhida, sendo devolvida após pagamento de multa','A licença (LADV) será recolhida, sendo devolvida somente ao instrutor responsável','A licença (LADV) será suspensa, por um período de seis meses','Nenhuma das alternativas acima, pois o candidato tem o direito de treinar com a LADV'],
        answer:2
    },
    {
		//15
        q:'Marque a alternativa falsa:',
        options:['O candidato só poderá prestar exame teórico após cumprir curso de 45 horas aula','O candidato só poderá prestar exame prático após cumprir curso de 20 horas aula','A licença de aprendizagem (LADV) só será conferida ao candidato aprovado em direção','O candidato reprovado em direção só poderá prestar novo exame após 15 dias'],
        answer:1
    },
    {
		//16
        q:'Com uma habilitação de categoria “C” o condutor poderá conduzir que tipo de veículo?',
        options:['Veículos de duas ou três rodas com ou sem carro lateral','Veículos de passageiros com mais de oito lugares, excluído o motorista','Veículos de carga com mais de 3.500 Kg de PBT','Veículos articulados com qualquer capacidade de carga.'],
        answer:2
    },
    {
		//17
        q:'Em que caso não será obrigatória a expedição de novo certificado de registro de veículo?',
        options:['Quando mudar o proprietário do veículo','Quando o proprietário mudar de domicílio ou município','Quando for alterado o seu combustível para gás','Quando for instalado um aparelho de som no veículo'],
        answer:3
    },
    {
		//18
        q:'Assinale a alternativa falsa:',
        options:['Para prestar exame para categoria “D” o candidato deverá apresentar um veículo que tenha no mínimo 20 lugares, excluído o motorista','Para prestar exame para categoria “C” o candidato deverá apresentar um veículo articulado, acoplado à um semi-reboque de no mínimo 6.000 Kg de PBT','Para prestar exame para categoria “E” o candidato deverá apresentar um veículo articulado que tenha no mínimo 6.000 Kg de PBT','O candidato da categoria “A” poderá prestar exame em uma motocicleta que tenha uma capacidade de cilindradas igual ou superior a 1.000'],
        answer:2
    },
    {
		//19
        q:'Assinale qual das alternativas abaixo não é uma exigência para escolares:',
        options:['Registro como veículo de passageiros','Inspeção semestral para verificação de condições de segurança','Faixa de cor amarela de 20 centímetros de largura afixada nas laterais do veículo','Tacógrafo'],
        answer:2
    },
    {
		//20
        q:'Não será exigido ao condutor de escolares:',
        options:['Idade superior a 21 anos','Habilitação de categoria igual ou superior a “D”','Curso de treinamento para situação de risco','Conclusão de escolaridade a nível primário'],
        answer:3
    },
    {
		//21
        q:'Aparelho registrador e instantâneo de velocidade e tempo (tacógrafo) não será exigido:',
        options:['Para veículos de carga com mais de 19 toneladas','Para taxi','Para veículos de passageiros com mais de 10 lugares','Para escolares'],
        answer:1
    },
    {
		//22
        q:'Sobre dimensões máximas permitidas para veículos podemos afirmar, exceto:',
        options:['Altura máxima permitida 4,4 metros','Largura máxima permitida 2,6 metros','Comprimento máximo permitido para veículos simples 14 metros','Os veículos nunca poderão exceder estes limites préestabelecidos pelo CONTRAN'],
        answer:3
    },
    {
		//23
        q:'O que não é equipamento obrigatório para veículo de pequeno porte?',
        options:['Cinto de segurança para árvore de transmissão','Cinto de segurança para os ocupantes do veículo','Chave de fenda','Pneu sobressalente'],
        answer:0
    },
    {
		//24
        q:'Os veículos serão identificados obrigatoriamente através de:',
        options:['Placas dianteira e traseira','Documentação do veículo','Cor, ano, modelo e espécie','Por caracteres gravados no chassi ou monobloco'],
        answer:3
    },
    {
		//25
        q:'Assinale a alternativa falsa.',
        options:['Um veículo que foi dado perda total, neste caso não poderá ser remontado sobre o mesmo chassi','Os proprietários de veículos com perda total terão 30 dias para dar baixa perante o órgão de trânsito','Os números gravados no chassi, poderão ser reproduzidos nos vidros e na carroçaria do veículo, a fim de dificultar roubos e desmontes dos mesmos','Sempre que for preciso fazer qualquer alteração de características do veículo, será obrigatória uma prévia autorização pelo órgão de trânsito'],
        answer:1
    },
    {
		//26
        q:'Qual o prazo exigido para habilitar-se na categoria “E”?',
        options:['Um ano de carteira “C”','Dois anos de carteira “C”','Um ano de carteira “D”','Três anos de carteira “B”'],
        answer:0
    },
    {
		//27
        q:'O condutor de máquina deverá estar habilitado em quais categorias?',
        options:['B, C, D ou E','C, D ou E','D ou E','Somente categoria “E”'],
        answer:1
    },
    {
		//28
        q:'Marque a falsa:',
        options:['O operador de máquinas em canteiro de obras não precisa ser habilitado','As máquinas não poderão ser conduzidas em vias de trânsito rápido','Para conduzir máquinas não é necessário curso de treinamento autorizado pelo órgão de trânsito','Menores de 21 anos não podem conduzir máquinas em vias públicas'],
        answer:3
    },
    {
		//29
        q:'A carteira nacional de habilitação será conferida ao candidato que, ao término de um ano, não tenha cometido:',
        options:['Qualquer infração de trânsito','2Duas infrações de natureza leve, duas médias e uma grave ou gravíssima0','Seis infrações de natureza leve, duas médias ou uma grave ou gravíssima','Qualquer infração de natureza grave ou gravíssima, ou ser reincidente em médias'],
        answer:3
    },
    {
		//30
        q:'Para conduzir veículos com carga perigosa o condutor deverá:',
        options:['Estar habilitado no mínimo na categoria D','Estar habilitado no mínimo na categoria C','Estar habilitado no mínimo na categoria B','Qualquer categoria desde que tenha curso de MOPE'],
        answer:2
    }


]