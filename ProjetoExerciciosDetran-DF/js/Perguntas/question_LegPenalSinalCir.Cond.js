


//Array de Objetos - Leg/Penalidade/Sinalização/Cir.Cond
const quiz = [
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
     }
	 

]