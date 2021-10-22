


//Array de Objetos PENALIDADES
const quiz = [
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
    }


]